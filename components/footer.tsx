import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Find Work", href: "/find-work" },
  { label: "Learn More", href: "/learn-more" },
  { label: "Concept", href: "/concept" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerBrand}>
          <h2>Building Beyond 2032</h2>

          <p>Real jobs. Real careers. Build your future in construction.</p>

          <Link href="/" className={styles.footerLogoLink} aria-label="Building Beyond 2032 Home">
            <Image
              src="/LogoBlack.webp"
              alt="Building Beyond 2032"
              width={260}
              height={100}
              className={styles.footerLogo}
            />
          </Link>
        </div>

        <nav className={styles.footerNav} aria-label="Footer navigation">
          <h3>Navigation</h3>

          <div className={styles.footerLinks}>
            {footerLinks.map((link) => (
              <Link key={link.label} href={link.href} className={styles.footerLink}>
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        <div className={styles.footerCta}>
          <h3>Ready to start?</h3>

          <Link href="/find-work" className={styles.footerButton}>
            Find Work
          </Link>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© {new Date().getFullYear()} Building Beyond 2032. All rights reserved.</p>
      </div>
    </footer>
  );
}