import { useState } from "react";
import {
  mobileNav,
  mobileNavButton,
  mobileNavButtonLine,
  mobileNavOverlay,
  mobileNavPanel,
  mobileNavLink,
  mobileNavLinkActive,
} from "../../styles/components/mobileNav.css";

interface Link {
  href: string;
  label: string;
}

interface Props {
  links: Link[];
  currentPath: string;
}

export default function MobileNav({ links, currentPath }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className={mobileNav}>
      <button
        type="button"
        className={mobileNavButton}
        onClick={() => setOpen(!open)}
        aria-label={open ? "メニューを閉じる" : "メニューを開く"}
        aria-expanded={open}
      >
        <span className={mobileNavButtonLine} data-open={open} />
        <span className={mobileNavButtonLine} data-open={open} />
        <span className={mobileNavButtonLine} data-open={open} />
      </button>

      {open && (
        <>
          <div
            className={mobileNavOverlay}
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <nav className={mobileNavPanel}>
            {links.map((link) => {
              const isActive =
                currentPath === link.href ||
                currentPath.startsWith(`${link.href}/`);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`${mobileNavLink} ${isActive ? mobileNavLinkActive : ""}`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
        </>
      )}
    </div>
  );
}
