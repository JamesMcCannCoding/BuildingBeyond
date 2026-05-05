"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { href: "/find-work", label: "Find Work" },
  { href: "/learn-more", label: "Learn More" },
  { href: "/concept", label: "Concept" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Heromobilemenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <div className="heroMobileMenu">
      <button
        type="button"
        className={`heroHamburger ${isOpen ? "isOpen" : ""}`}
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="heroHamburgerLine" />
        <span className="heroHamburgerLine" />
        <span className="heroHamburgerLine" />
      </button>

      <button
        type="button"
        className={`heroMobileOverlay ${isOpen ? "isOpen" : ""}`}
        aria-label="Close navigation menu"
        onClick={() => setIsOpen(false)}
      />

      <div className={`heroMobilePanel ${isOpen ? "isOpen" : ""}`}>
        <nav className="heroMobileNav" aria-label="Mobile navigation">
          {links.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className="heroMobileNavLink"
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: `${index * 45}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}