"use client";

import { useEffect, useRef, useState } from "react";
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
  const panelRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (!target) return;

      const clickedInsidePanel = panelRef.current?.contains(target);
      const clickedHamburger = buttonRef.current?.contains(target);

      if (!clickedInsidePanel && !clickedHamburger) {
        closeMenu();
      }
    };

    const handleWheel = (event: WheelEvent) => {
      const target = event.target as Node | null;
      if (!target) return;

      const scrolledInsidePanel = panelRef.current?.contains(target);

      if (!scrolledInsidePanel) {
        closeMenu();
      }
    };

    const handleTouchMove = (event: TouchEvent) => {
      const target = event.target as Node | null;
      if (!target) return;

      const movedInsidePanel = panelRef.current?.contains(target);

      if (!movedInsidePanel) {
        closeMenu();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown, { passive: true });
    document.addEventListener("wheel", handleWheel, { passive: true });
    document.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("wheel", handleWheel);
      document.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <div className="heroMobileMenu">
      <button
        ref={buttonRef}
        type="button"
        className={`heroHamburger ${isOpen ? "isOpen" : ""}`}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
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
        onClick={closeMenu}
        onTouchMove={closeMenu}
      />

      <div
        ref={panelRef}
        className={`heroMobilePanel ${isOpen ? "isOpen" : ""}`}
      >
        <nav className="heroMobileNav" aria-label="Mobile navigation">
          {links.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className="heroMobileNavLink"
              onClick={closeMenu}
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
