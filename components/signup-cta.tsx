"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import SubscriptionForm from "./subscriptionForm";

export default function SignupCta() {
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
          <h2 id="signup-title" className="signupTitle">
            Sign up to receive the latest news and updates.
          </h2>

          <SubscriptionForm interestTag={interestTag} />
        </div>
      </section>
    </>
  );

  return (
    <>
      <div className="heroButtons">
        <button
          type="button"
          className="actionButton"
          onClick={() => openForm("look-for-work")}
        >
          LOOK FOR WORK
        </button>

        <button
          type="button"
          className="actionButton"
          onClick={() => openForm("enter-the-industry")}
        >
          ENTER THE INDUSTRY
        </button>
      </div>

      {mounted ? createPortal(modal, document.body) : null}
    </>
  );
}
