---
title: "記事で使える装飾一覧"
date: 2024-03-01
description: "このブログで使える Markdown、Shiki コードハイライト、コンポーネントスタイルの装飾一覧です。タイトルは frontmatter の title フィールドで指定し、Markdown 本文では h1 を書かず h2 から始めること。"
tags: ["Markdown", "Shiki", "Astro", "LaTeX"]
---

## イントロダクション

ここでは、このブログで利用できる Markdown 記法、Shiki によるコードハイライト、および各種スタイルの見え方を紹介します。

---

## 見出し

見出しは `#` の数でレベルを表します。目次にも自動で反映されます。

### 小見出し (h3)

さらに細かいセクション分けができます。

---

## テキスト装飾

通常の文章に対して、**太字**、_斜体_、~~打ち消し線~~、`インラインコード` が使えます。

また、**太字と *斜体* を組み合わせる**ことも可能です。

---

## リスト

### 順不同リスト

- 箇条書き項目
- 入れ子も可能
  - 子項目 A
  - 子項目 B
- 親項目に戻る

### 番号付きリスト

1. 最初の手順
2. 次の手順
3. 最後の手順
   1. サブ手順
   2. サブ手順

---

## 引用

> これは引用ブロックです。
> 複数行にわたる場合はこのように表示されます。
>
> **引用の中でも太字** や `コード` が使えます。

---

## コードハイライト

### インラインコード

変数 `count` を `+= 1` するとインクリメントできます。

### シンプルなコードブロック

```ts
const greeting = "Hello, world!";
console.log(greeting);
```

### 差分表示

```diff
+ export const newFeature = () => true;
- const oldFeature = () => false;
  const unchanged = () => null;
```

### タイトル付きコードブロック

```ts title="src/lib/example.ts"
export function add(a: number, b: number): number {
  return a + b;
}
```

### 様々な言語

```python
def fibonacci(n: int) -> int:
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)
```

```rust
fn main() {
    println!("Hello, Rust!");
}
```

```css
.card {
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 8px;
}
```

---

### 横に長いコード (スクロール確認用)

```ts
// prettier-ignore
const veryLongLine = "これは非常に長いコード行で、画面幅を超えた場合に横スクロールが有効になることを確認するためのサンプルです。本当に長い行だと pre 要素に overflow-x: auto が設定されているので、この行がはみ出してスクロールできるようになります。";
```

---

## テーブル

| 名前            | 役割                   | 備考                 |
| --------------- | ---------------------- | -------------------- |
| Astro           | フレームワーク         | SSG / SSR に対応     |
| vanilla-extract | CSS                    | 型安全なスタイリング |
| Shiki           | シンタックスハイライト | 高速で美しい         |

---

## リンク

外部リンクは [Zenn](https://zenn.dev) のように表示されます。

内部リンクは [About ページ](/about) や [Blog 一覧](/blog) も問題なく動作します。

---

## 注釈ブロック

HTML を使うことで、簡易的な注釈ブロックを表現できます。

<div class="admonition info">
  <p><strong>💡 Tip:</strong> これはヒント用の注釈ブロックです。テーマカラーに自動で追随します。</p>
</div>

<div class="admonition warning">
  <p><strong>⚠️ Warning:</strong> これは警告用の注釈ブロックです。テーマカラーに自動で追随します。</p>
</div>

---

## 水平線

トピックの区切りには `---` で水平線を引きます。

---

## LaTeX (数式)

LaTeX 記法で数式が書けます。インライン数式は `$...$`、ブロック数式は `$$...$$` です。

インライン: $E = mc^2$

ブロック数式:

$$
\int_{-\infty}^{\infty} e^{-x^2} \, dx = \sqrt{\pi}
$$

---

## まとめ

以上が、このブログで利用できる主な装飾一覧です。新しい記法が追加されたら随時この記事を更新していきます。
