import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  mobileNav,
  mobileNavButton,
  mobileNavButtonInner,
  mobileNavButtonLine,
  mobileNavOverlay,
  mobileNavPanel,
  mobileNavLink,
  mobileNavLinkActive,
  mobileNavLinks,
  mobileNavFooter,
  mobileNavSocialLink,
} from "../../styles/components/mobileNav.css";

interface Link {
  href: string;
  label: string;
}

interface Props {
  links: Link[];
  currentPath: string;
}

const socialLinks = [
  {
    href: "https://github.com/yukikamome316",
    label: "GitHub",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
  },
  {
    href: "https://x.com/_yuki316",
    label: "X",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  },
  {
    href: "https://instagram.com/yuki._.x1",
    label: "Instagram",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
  },
];

export default function MobileNav({ links, currentPath }: Props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggle = () => setOpen((v) => !v);

  const menuPortal =
    open && mounted
      ? createPortal(
          <>
            <div
              className={mobileNavOverlay}
              onClick={toggle}
              aria-hidden="true"
            />
            <nav className={mobileNavPanel}>
              <div className={mobileNavLinks}>
                {links.map((link, i) => {
                  const isActive =
                    currentPath === link.href ||
                    currentPath.startsWith(`${link.href}/`);
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      className={`${mobileNavLink} ${isActive ? mobileNavLinkActive : ""}`}
                      onClick={toggle}
                      style={{ animationDelay: `${i * 0.08}s` }}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>
              <div className={mobileNavFooter}>
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={mobileNavSocialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    <span
                      aria-hidden="true"
                      dangerouslySetInnerHTML={{ __html: link.svg }}
                    />
                  </a>
                ))}
              </div>
            </nav>
          </>,
          document.body
        )
      : null;

  return (
    <div className={mobileNav}>
      <button
        type="button"
        className={mobileNavButton}
        onClick={toggle}
        aria-label={open ? "メニューを閉じる" : "メニューを開く"}
        aria-expanded={open}
      >
        <span className={mobileNavButtonInner}>
          <span className={mobileNavButtonLine} data-open={open} />
          <span className={mobileNavButtonLine} data-open={open} />
          <span className={mobileNavButtonLine} data-open={open} />
        </span>
      </button>
      {menuPortal}
    </div>
  );
}
