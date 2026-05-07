"use client";

import { useState } from "react";

type SubscriptionFormProps = {
  interestTag: string;
};

export default function SubscriptionForm({
  interestTag,
}: SubscriptionFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          interestTag,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setMessage(data.message || "Something went wrong.");
        return;
      }

      setStatus("success");
      setMessage(
        data.message || "Thanks. Please check your email to confirm your signup."
      );

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
      });
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <form className="signupForm" onSubmit={handleSubmit} noValidate>
      <div className="signupGrid">
        <div className="signupField">
          <label htmlFor="firstName">FIRST NAME</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="signupField">
          <label htmlFor="lastName">LAST NAME</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="signupField signupFieldFull">
          <label htmlFor="email">EMAIL</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="signupField">
          <label htmlFor="mobile">MOBILE NUMBER</label>
          <input
            id="mobile"
            name="mobile"
            type="tel"
            value={formData.mobile}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="signupActions">
        <button
          type="submit"
          className="signupSubmit"
          disabled={status === "loading"}
        >
          {status === "loading" ? "SENDING..." : "SUBMIT"}
        </button>
      </div>

      {message ? (
        <p className={`signupMessage ${status}`}>{message}</p>
      ) : null}
    </form>
  );
}
