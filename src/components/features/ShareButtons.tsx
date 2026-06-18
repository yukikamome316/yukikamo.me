import { useState } from "react";
import {
  shareContainer,
  shareTitle,
  shareButtonList,
  shareButton,
  shareButtonIcon,
} from "../../styles/components/shareButtons.css";

interface Props {
  url: string;
  title: string;
}

export default function ShareButtons({ url, title }: Props) {
  const [copied, setCopied] = useState(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareToX = () => {
    window.open(
      `https://x.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      "_blank",
      "width=550,height=420"
    );
  };

  const shareToBluesky = () => {
    window.open(
      `https://bsky.app/intent/compose?text=${encodedTitle}%20${encodedUrl}`,
      "_blank",
      "width=550,height=420"
    );
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // noop
    }
  };

  return (
    <div className={shareContainer}>
      <h2 className={shareTitle}>Share</h2>
      <div className={shareButtonList}>
        <button
          type="button"
          className={shareButton}
          onClick={shareToX}
          aria-label="Xでシェア"
        >
          <span className={shareButtonIcon}>𝕏</span>
          <span>X</span>
        </button>
        <button
          type="button"
          className={shareButton}
          onClick={shareToBluesky}
          aria-label="Blueskyでシェア"
        >
          <span className={shareButtonIcon}>🦋</span>
          <span>Bluesky</span>
        </button>
        <button
          type="button"
          className={shareButton}
          onClick={copyLink}
          aria-label="リンクをコピー"
        >
          <span className={shareButtonIcon}>{copied ? "✓" : "🔗"}</span>
          <span>{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>
    </div>
  );
}
