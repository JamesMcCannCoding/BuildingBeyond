"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import SubscriptionForm from "./subscriptionForm";

type SignupCtaProps = {
  primaryLabel?: string;
  secondaryLabel?: string;
  primaryTag?: string;
  secondaryTag?: string;
  containerClassName?: string;
};

export default function SignupCta({
  primaryLabel = "LOOK FOR WORK",
  secondaryLabel = "ENTER THE INDUSTRY",
  primaryTag = "look-for-work",
  secondaryTag = "enter-the-industry",
  containerClassName = "heroButtons",
}: SignupCtaProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [interestTag, setInterestTag] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const openForm = (tag: string) => {
    setInterestTag(tag);
    setIsOpen(true);
  };

  const closeForm = () => {
    setIsOpen(false);
  };

  const modal = (
    <>
      <div
        className={`signupOverlay ${isOpen ? "isOpen" : ""}`}
        onClick={closeForm}
        aria-hidden={!isOpen}
      />

      <section
        className={`signupPanel ${isOpen ? "isOpen" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="signup-title"
      >
        <button
          type="button"
          className="signupClose"
          onClick={closeForm}
          aria-label="Close form"
        >
          ×
        </button>

        <div className="signupShell">
          <div className="signupBrand">
            <div className="signupBrandBadge">
              <Image
                src="/LogoWhiteBackground.svg"
                alt="Building Beyond logo"
                width={180}
                height={72}
                className="signupBrandLogo"
                priority
              />
            </div>
          </div>

          <h2 id="signup-title" className="signupTitle">
            Sign up to receive the latest news and updates.
          </h2>

          <p className="signupIntro">
            Join our mailing list to stay informed about new opportunities,
            announcements, and industry updates.
          </p>

          <SubscriptionForm interestTag={interestTag} />
        </div>
      </section>
    </>
  );

  return (
    <>
      <div className={containerClassName}>
        <button
          type="button"
          className="actionButton"
          onClick={() => openForm(primaryTag)}
        >
          {primaryLabel}
        </button>

        <button
          type="button"
          className="actionButton"
          onClick={() => openForm(secondaryTag)}
        >
          {secondaryLabel}
        </button>
      </div>

      {mounted ? createPortal(modal, document.body) : null}
    </>
  );
}