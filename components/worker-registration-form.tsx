"use client";

import { FormEvent, useState } from "react";
import styles from "./worker-registration-form.module.css";

export default function WorkerRegistrationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    currentOccupation: "",
    company: "",
    postCode: "",
    cfmeuMember: "",
    seekingConstructionWork: "",
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseText = await response.text();

      let data: { message?: string } = {};

      try {
        data = JSON.parse(responseText);
      } catch {
        console.error(
          "Worker registration API returned non-JSON response:",
          responseText
        );

        alert(
          "The registration API returned an unexpected response. Check the terminal for details."
        );

        return;
      }

      if (!response.ok) {
        console.error("Worker registration API error:", data);
        alert(data.message || "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);

      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        currentOccupation: "",
        company: "",
        postCode: "",
        cfmeuMember: "",
        seekingConstructionWork: "",
      });
    } catch (error) {
      console.error("Worker registration form submit error:", error);
      alert("Something went wrong. Please check the browser console and terminal.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className={styles.formPanel}>
        <div className={styles.successMessage}>
          <h2>Thank you</h2>
          <p>
            Your details have been submitted successfully.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.formPanel}>
      <div className={styles.formHeader}>
        <h2>Register Interest</h2>
        <p>
          Enter your details below to register your interest in construction
          opportunities connected to Building Beyond 2032.
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
            <span>Phone</span>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  phone: event.target.value,
                })
              }
              required
            />
          </label>

          <label className={styles.formField}>
            <span>Email Address</span>
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

          <label className={styles.formField}>
            <span>Current Occupation</span>
            <input
              type="text"
              name="currentOccupation"
              value={formData.currentOccupation}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  currentOccupation: event.target.value,
                })
              }
              required
            />
          </label>

          <label className={styles.formField}>
            <span>Company</span>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  company: event.target.value,
                })
              }
            />
          </label>

          <label className={styles.formField}>
            <span>Post Code</span>
            <input
              type="text"
              name="postCode"
              value={formData.postCode}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  postCode: event.target.value,
                })
              }
              required
            />
          </label>

          <fieldset className={styles.radioField}>
            <legend>Are you a current CFMEU Member?</legend>

            <div className={styles.radioOptions}>
              <label className={styles.radioOption}>
                <input
                  type="radio"
                  name="cfmeuMember"
                  value="Yes"
                  checked={formData.cfmeuMember === "Yes"}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      cfmeuMember: event.target.value,
                    })
                  }
                  required
                />
                <span>Yes</span>
              </label>

              <label className={styles.radioOption}>
                <input
                  type="radio"
                  name="cfmeuMember"
                  value="No"
                  checked={formData.cfmeuMember === "No"}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      cfmeuMember: event.target.value,
                    })
                  }
                  required
                />
                <span>No</span>
              </label>
            </div>
          </fieldset>

          <fieldset className={styles.radioField}>
            <legend>Are you seeking work in the construction industry?</legend>

            <div className={styles.radioOptions}>
              <label className={styles.radioOption}>
                <input
                  type="radio"
                  name="seekingConstructionWork"
                  value="Yes"
                  checked={formData.seekingConstructionWork === "Yes"}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      seekingConstructionWork: event.target.value,
                    })
                  }
                  required
                />
                <span>Yes</span>
              </label>

              <label className={styles.radioOption}>
                <input
                  type="radio"
                  name="seekingConstructionWork"
                  value="No"
                  checked={formData.seekingConstructionWork === "No"}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      seekingConstructionWork: event.target.value,
                    })
                  }
                  required
                />
                <span>No</span>
              </label>
            </div>
          </fieldset>
        </div>

        <button
          type="submit"
          className={styles.submitButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Registration"}
        </button>
      </form>
    </div>
  );
}