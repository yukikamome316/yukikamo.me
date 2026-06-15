import { z } from "astro/zod";
import yaml from "js-yaml";
import fs from "node:fs";
import path from "node:path";

/** 言語運用能力の日本語ラベルマップ */
const PROFICIENCY_LABEL: Record<string, string> = {
  native: "母国語",
  business: "ビジネス中級",
  conversational: "日常会話",
  elementary: "挨拶レベル",
};

// --- Zod スキーマ定義 ---

const CredentialSchema = z.object({
  title: z.string(),
  issuer: z.string(),
  issuedDate: z.string().nullable(),
});

const LanguageSchema = z.object({
  name: z.string(),
  proficiency: z.enum(["native", "business", "conversational", "elementary"]),
});

const ProfileSchema = z.object({
  profile: z.object({
    name: z.string(),
    handle: z.string(),
    bio: z.string(),
  }),
  credentials: z.array(CredentialSchema),
  skills: z.array(z.string()),
  languages: z.array(LanguageSchema),
});

// --- 表示用に変換した型 ---

export interface CredentialEntry {
  title: string;
  issuer: string;
  /** 表示用発行日 (例: "2025年12月") / null */
  issuedLabel: string | null;
}

export interface LanguageEntry {
  name: string;
  proficiencyLabel: string;
}

export interface Profile {
  name: string;
  handle: string;
  bio: string;
  credentials: CredentialEntry[];
  skills: string[];
  languages: LanguageEntry[];
}

// --- ヘルパー ---

/** "YYYY-MM" → "YYYY年M月" に変換する */
function formatDate(raw: string | null): string {
  if (!raw) return "現在";
  const [year, month] = raw.split("-");
  return month ? `${year}年${parseInt(month, 10)}月` : `${year}年`;
}

// --- メイン関数 ---

/** モジュールレベルのキャッシュ（ビルド中に複数回呼ばれてもファイル読み込みは1回のみ） */
let cached: Profile | null = null;

/**
 * `src/data/profile.yaml` を読み込み、バリデーション済みのプロフィールデータを返す。
 * Astro のビルド時 (SSG) に呼び出すことを想定している。
 */
export function getProfile(): Profile {
  if (cached) return cached;

  const filePath = path.resolve("src/data/profile.yaml");
  const raw = yaml.load(fs.readFileSync(filePath, "utf-8"));
  const parsed = ProfileSchema.parse(raw);

  cached = {
    name: parsed.profile.name,
    handle: parsed.profile.handle,
    bio: parsed.profile.bio,

    credentials: parsed.credentials.map(
      (c: z.infer<typeof CredentialSchema>) => ({
        title: c.title,
        issuer: c.issuer,
        issuedLabel: c.issuedDate ? formatDate(c.issuedDate) : null,
      })
    ),

    skills: parsed.skills,

    languages: parsed.languages.map((l: z.infer<typeof LanguageSchema>) => ({
      name: l.name,
      proficiencyLabel: PROFICIENCY_LABEL[l.proficiency] ?? l.proficiency,
    })),
  };

  return cached;
}
