"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";

const desktopLeftLinks = [
  { label: "FIND WORK", href: "/find-work" },
  { label: "LEARN MORE", href: "/learn-more" },
];

const desktopRightLinks = [
  { label: "CONCEPT", href: "/concept" },
  { label: "ABOUT US", href: "/about-us" },
  { label: "CONTACT", href: "/contact" },
];

const mobileLinks = [
  { label: "HOME", href: "/" },
  { label: "FIND WORK", href: "/find-work" },
  { label: "LEARN MORE", href: "/learn-more" },
  { label: "CONCEPT", href: "/concept" },
  { label: "ABOUT US", href: "/about-us" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={styles.navbar}>
      <nav className={styles.navInner} aria-label="Main navigation">
        {/* Desktop left links */}
        <div className={`${styles.linkGroup} ${styles.leftLinks}`}>
          {desktopLeftLinks.map((link) => (
            <Link key={link.label} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Logo */}
        <Link
          href="/"
          className={styles.logoLink}
          aria-label="Building Beyond 2032 Home"
        >
          <Image
            src="/LogoDarkBackground.svg"
            alt="Building Beyond 2032"
            width={260}
            height={100}
            priority
            className={styles.logo}
          />
        </Link>

        {/* Desktop right links */}
        <div className={`${styles.linkGroup} ${styles.rightLinks}`}>
          {desktopRightLinks.map((link) => (
            <Link key={link.label} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Hamburger button — mobile only */}
        <button
          type="button"
          className={`${styles.menuButton} ${menuOpen ? styles.menuButtonOpen : ""}`}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className={styles.menuLine} aria-hidden="true" />
          <span className={styles.menuLine} aria-hidden="true" />
          <span className={styles.menuLine} aria-hidden="true" />
        </button>
      </nav>

      {/* Mobile slide-down menu */}
      <div
        id="mobile-navigation"
        role="navigation"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
      >
        {mobileLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={styles.mobileLink}
            tabIndex={menuOpen ? 0 : -1}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
