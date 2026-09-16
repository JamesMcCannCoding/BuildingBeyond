import type { Metadata } from "next";
import DisableScrollSnap from "@/components/disable-scroll-snap";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact Building Beyond 2032",
  description:
    "Contact Building Beyond 2032 to learn more about construction jobs, apprenticeships, industry pathways, partnerships, and opportunities connected to Queensland's construction future.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Building Beyond 2032",
    description:
      "Get in touch with Building Beyond 2032 about construction jobs, apprenticeships, industry pathways, employers, and community partnerships.",
    url: "https://www.buildingbeyond2032.com.au/contact",
    siteName: "Building Beyond 2032",
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Building Beyond 2032",
    description:
      "Contact Building Beyond 2032 about construction opportunities, apprenticeships, pathways, and partnerships in Queensland.",
  },
};

const emailHref = `mailto:qntqueries@cfmeu.org?subject=${encodeURIComponent(
  "Building Beyond 2032 enquiry"
)}&body=${encodeURIComponent(
  "Hi Building Beyond 2032 team,\n\nI would like to make an enquiry about:\n\n"
)}`;

export default function ContactPage() {
  return (
    <>
      <DisableScrollSnap />

      <section className={styles.contactHeroSection}>
        <div className={styles.contactHeroContent}>
          <h1 className={styles.visuallyHidden}>Contact Building Beyond 2032</h1>

          <img
            src="/BB_Web_Contact_Heading_Overlay.webp"
            alt="Contact Us Now"
            className={styles.contactHeadingImage}
          />

          <a
            href={emailHref}
            className={styles.emailButton}
            aria-label="Email Building Beyond 2032"
          >
            <img
              src="/BB_Web_Contact_Email_Button.webp"
              alt="Email Us"
              className={styles.emailButtonImage}
            />
          </a>
        </div>
      </section>

      <section className={styles.contactSectionOne}>
        <div className={styles.contactSectionOneContent}>
          <img
            src="/BB_Web_Contact_Banner_Overlay.webp"
            alt="Building Beyond 2032 contact information"
            className={styles.contactSectionOneTextImage}
          />
        </div>
      </section>

      <section className={styles.contactSectionTwo}>
        <div className={styles.contactSectionTwoContent}>
          <img
            src="/BB_Web_Contact_S2_Overlay.webp"
            alt="Building Beyond 2032 contact information"
            className={styles.contactSectionTwoTextImage}
          />
        </div>

        <img
          src="/BB_Web_Contact_S2_Overlay.webp"
          alt="Building Beyond 2032 contact information"
          className={styles.contactSectionTwoMobileImage}
        />
      </section>
    </>
  );
}