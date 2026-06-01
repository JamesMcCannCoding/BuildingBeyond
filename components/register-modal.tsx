"use client";

import { FormEvent, useEffect, useState } from "react";
import styles from "./register-modal.module.css";

type RegisterInterestModalProps = {
  buttonClassName?: string;
};

export default function RegisterInterestModal({
  buttonClassName,
}: RegisterInterestModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
  });

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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  try {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.message || "Something went wrong. Please try again.");
      return;
    }

    setSubmitted(true);
  } catch (error) {
    console.error("Form submit error:", error);
    alert("Something went wrong. Please try again.");
  }
};

  const closeModal = () => {
    setIsOpen(false);
    setSubmitted(false);
  };

  return (
    <>
      <button
        type="button"
        className={buttonClassName}
        onClick={() => setIsOpen(true)}
      >
        Register Interest
      </button>

      {isOpen && (
        <div className={styles.modalOverlay} role="dialog" aria-modal="true">
          <div className={styles.modalBackdrop} onClick={closeModal} />

          <div className={styles.modalPanel}>
            <button
              type="button"
              className={styles.closeButton}
              onClick={closeModal}
              aria-label="Close register interest form"
            >
              ×
            </button>

            {!submitted ? (
              <>
                <div className={styles.modalHeader}>
                  <h2>Register Interest</h2>
                  <p>
                    Enter your details below and we will keep you updated about
                    construction opportunities.
                  </p>
                </div>

                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.formGrid}>
                    <label className={styles.formField}>
                      <span>First Name</span>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={(event) =>
                          setFormData({
                            ...formData,
                            firstName: event.target.value,
                          })
                        }
                        required
                      />
                    </label>

                    <label className={styles.formField}>
                      <span>Last Name</span>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={(event) =>
                          setFormData({
                            ...formData,
                            lastName: event.target.value,
                          })
                        }
                        required
                      />
                    </label>

                    <label className={styles.formField}>
                      <span>Mobile Number</span>
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={(event) =>
                          setFormData({
                            ...formData,
                            mobile: event.target.value,
                          })
                        }
                        required
                      />
                    </label>

                    <label className={styles.formField}>
                      <span>Email</span>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(event) =>
                          setFormData({
                            ...formData,
                            email: event.target.value,
                          })
                        }
                        required
                      />
                    </label>
                  </div>

                  <button type="submit" className={styles.submitButton}>
                    Submit Interest
                  </button>
                </form>
              </>
            ) : (
              <div className={styles.successMessage}>
                <h2>Thank you</h2>
                <p>
                  Your interest has been recorded. We will be in touch with more
                  information soon.
                </p>

                <button
                  type="button"
                  className={styles.submitButton}
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}