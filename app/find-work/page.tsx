import type { Metadata } from "next";
import DisableScrollSnap from "@/components/disable-scroll-snap";
import RegisterModal from "@/components/register-modal";
import styles from "./find-work.module.css";

export const metadata: Metadata = {
  title: "Find Construction Work in Queensland",
  description:
    "Register your interest in construction job opportunities connected to Building Beyond 2032 and Queensland's growing construction industry.",
};

export default function FindWorkPage() {
  return (
    <>
      <DisableScrollSnap />

      <section className={styles.findWorkPage}>
        <div className={styles.findWorkContent}>
          <h1 className={styles.visuallyHidden}>
            Find Construction Work in Queensland
          </h1>

          <div className={styles.findWorkHero}>
            <img
              src="/BB_FindWork_Heading.webp"
              alt="Find Work"
              className={styles.findWorkHeadingImage}
            />
          </div>

          <div className={styles.findWorkFormWrap}>
            <RegisterModal variant="inline" />
          </div>
        </div>
      </section>

      <section className={styles.findWorkPromoSection}>
        <div className={styles.findWorkPromoOverlay}>
          <img
            src="/BB_FindWork_Section1Text.webp"
            alt="Ready to get to work?"
            className={styles.findWorkPromoTextImage}
          />
        </div>
      </section>

      <section className={styles.findWorkLargeOverlaySection}>
        <div className={styles.findWorkLargeOverlayWrap}>
          <img
            src="/BB_FindWork_Overlay1.webp"
            alt="Building Beyond 2032 construction information"
            className={styles.findWorkLargeOverlayImage}
          />
        </div>
      </section>

      <section className={styles.findWorkFullImageSection}>
        <img
          src="/BB_FindWork_Section2.webp"
          alt="Building Beyond 2032 construction opportunities"
          className={styles.findWorkFullImage}
        />
      </section>
    </>
  );
}