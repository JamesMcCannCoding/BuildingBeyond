import type { Metadata } from "next";
import DisableScrollSnap from "@/components/disable-scroll-snap";
import styles from "./concept.module.css";

export const metadata: Metadata = {
  title: "The Building Beyond 2032 Concept",
  description:
    "Learn about the Building Beyond 2032 concept to train local, hire local, and build Queensland's construction workforce for the 2032 Games and beyond.",
  alternates: {
    canonical: "/concept",
  },
  openGraph: {
    title: "The Building Beyond 2032 Concept",
    description:
      "Building Beyond 2032 is focused on helping Queensland train local, hire local, and build a skilled construction workforce for the 2032 Games and future infrastructure needs.",
    url: "https://www.buildingbeyond2032.com.au/concept",
    siteName: "Building Beyond 2032",
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Building Beyond 2032 Concept",
    description:
      "Learn how Building Beyond 2032 aims to create construction jobs, apprenticeships, pathways, and a lasting workforce legacy for Queensland.",
  },
};

export default function ConceptPage() {
  return (
    <>
      <DisableScrollSnap />

      {/* =====================================================
          SECTION 1
          Desktop: background + overlay
          Mobile: single full-width mobile image
          ===================================================== */}
      <section className={styles.conceptSectionOne}>
        <div className={styles.conceptSectionOneContent}>
          <img
            src="/BB_Web_Concept_S1_Overlay.webp"
            alt="Building Beyond 2032 concept"
            className={styles.conceptSectionOneTextImage}
          />
        </div>

        <img
          src="/BB_Mobile_Concept_S1.webp"
          alt="Building Beyond 2032 concept"
          className={styles.conceptSectionOneMobileImage}
        />
      </section>

      {/* SECTION 1.5 */}
      <section className={styles.conceptSectionOneFive}>
        <div className={styles.conceptSectionOneFiveContent}>
          <img
            src="/BB_Web_Concept_S1.5_Overlay.webp"
            alt="Building Beyond 2032"
            className={styles.conceptSectionOneFiveTextImage}
          />
        </div>

        <img
          src="/BB_Mobile_Concept_S1.5.webp"
          alt="Building Beyond 2032"
          className={styles.conceptSectionOneFiveMobileImage}
        />
      </section>

      {/* SECTION 2 */}
      <section className={styles.conceptSectionTwo}>
        <div className={styles.conceptSectionTwoContent}>
          <img
            src="/BB_Web_Concept_S2_Overlay.webp"
            alt="Building Beyond 2032"
            className={styles.conceptSectionTwoTextImage}
          />
        </div>

        <img
          src="/BB_Mobile_Concept_S2.webp"
          alt="Building Beyond 2032"
          className={styles.conceptSectionTwoMobileImage}
        />
      </section>

      {/* SECTION 2.5 */}
      <section className={styles.conceptSectionTwoFive}>
        <div className={styles.conceptSectionTwoFiveContent}>
          <img
            src="/BB_Web_Contact_Banner_Overlay.webp"
            alt="Building Beyond 2032"
            className={styles.conceptSectionTwoFiveTextImage}
          />
        </div>

        <img
          src="/BB_Web_Contact_Banner_Overlay.webp"
          alt="Building Beyond 2032"
          className={styles.conceptSectionTwoFiveMobileImage}
        />
      </section>

      {/* SECTION 3 */}
      <section className={styles.conceptSectionThree}>
        <div className={styles.conceptSectionThreeContent}>
          <img
            src="/BB_Web_Concept_S3_Overlay.webp"
            alt="Building Beyond 2032"
            className={styles.conceptSectionThreeOverlayImage}
          />
        </div>

        <img
          src="/BB_Mobile_Concept_S3.webp"
          alt="Building Beyond 2032"
          className={styles.conceptSectionThreeMobileImage}
        />
      </section>

      {/* SECTION 4 */}
      <section className={styles.conceptSectionFour}>
        <div className={styles.conceptSectionFourContent}>
          <img
            src="/BB_Web_Concept_S4_Overlay.webp"
            alt="Building Beyond 2032 circular flow chart"
            className={styles.conceptSectionFourOverlayImage}
          />
        </div>

        <img
          src="/BB_Mobile_Concept_S4.webp"
          alt="Building Beyond 2032 circular flow chart"
          className={styles.conceptSectionFourMobileImage}
        />
      </section>

      {/* SECTION 5 */}
      <section className={styles.conceptSectionFive}>
        <img
          src="/BB_Web_Concept_S5_Overlay.webp"
          alt="Building Beyond 2032"
          className={styles.conceptSectionFiveDesktopImage}
        />

        <img
          src="/BB_Mobile_Concept_S5.webp"
          alt="Building Beyond 2032"
          className={styles.conceptSectionFiveMobileImage}
        />
      </section>
    </>
  );
}