import type { Metadata } from "next";
import Link from "next/link";
import Carousel from "@/components/carousel";
import RevealOnScroll from "@/components/reveal-on-scroll";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: {
    absolute: "Building Beyond 2032 | Construction Jobs and Careers in Queensland",
  },
  description:
    "Building Beyond 2032 connects Queenslanders with real construction jobs, apprenticeships, career pathways, and opportunities linked to the 2032 Games and beyond.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Building Beyond 2032 | Construction Jobs and Careers in Queensland",
    description:
      "Real jobs. Real careers. Build your future in construction with Building Beyond 2032.",
    url: "https://www.buildingbeyond2032.com.au/",
    siteName: "Building Beyond 2032",
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Building Beyond 2032 | Construction Jobs and Careers in Queensland",
    description:
      "Building Beyond 2032 connects Queenslanders with construction jobs, apprenticeships, pathways, and career opportunities.",
  },
};

export default function Home() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.heroStack}>
          <RevealOnScroll
            className={styles.heroArtwork}
            visibleClassName={styles.headingRevealVisible}
          >
            <img
              src="/BB_Web_Heading.webp"
              alt="Building Beyond 2032"
              className={styles.headingImage}
            />

            <Link href="/find-work" className={styles.getStartedButton}>
              <img
                src="/Get_Started_Button.webp"
                alt="Get started"
                className={styles.buttonImage}
              />
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      <section className={styles.carouselSection}>
        <RevealOnScroll
          className={styles.carouselSectionInner}
          visibleClassName={styles.carouselRevealVisible}
        >
          <Carousel />
        </RevealOnScroll>
      </section>

      <section className={styles.thirdHeroSection}>
        <div className={styles.thirdHeroStack}>
          <RevealOnScroll
            className={styles.thirdHeroArtwork}
            visibleClassName={styles.headingRevealVisible}
          >
            <picture className={styles.responsivePicture}>
              <source
                media="(max-width: 768px)"
                srcSet="/BB_Mobile_Why.webp"
              />

              <img
                src="/BB_Web_Why.webp"
                alt="Building Beyond 2032 section heading"
                className={styles.responsiveHeroImage}
              />
            </picture>
          </RevealOnScroll>
        </div>
      </section>

      <section className={styles.fourthHeroSection}>
        <div className={styles.fourthHeroStack}>
          <RevealOnScroll
            className={styles.fourthHeroArtwork}
            visibleClassName={styles.headingRevealVisible}
          >
            <picture className={styles.responsivePicture}>
              <source
                media="(max-width: 768px)"
                srcSet="/BB_Mobile_How.webp"
              />

              <img
                src="/BB_Web_How.webp"
                alt="Building Beyond 2032 section heading"
                className={styles.responsiveHeroImage}
              />
            </picture>
          </RevealOnScroll>
        </div>
      </section>

      <section className={styles.fifthHeroSection}>
        <RevealOnScroll
          className={styles.fifthHeroOverlay}
          visibleClassName={styles.overlayRevealVisible}
        >
          <picture className={styles.responsivePicture}>
            <source
              media="(max-width: 768px)"
              srcSet="/BB_Mobile_MoreJobs.webp"
            />

            <img
              src="/BB_Web_MoreJob.webp"
              alt="Building Beyond 2032 section heading"
              className={styles.responsiveHeroImage}
            />
          </picture>
        </RevealOnScroll>
      </section>

      <section className={styles.sixthHeroSection}>
        <RevealOnScroll
          className={styles.sixthHeroOverlay}
          visibleClassName={styles.overlayRevealVisible}
        >
          <picture className={styles.responsivePicture}>
            <source
              media="(max-width: 768px)"
              srcSet="/BB_Mobile_RealCareer.webp"
            />

            <img
              src="/BB_Web_RealCareer.webp"
              alt="Building Beyond 2032 section heading"
              className={styles.responsiveHeroImage}
            />
          </picture>
        </RevealOnScroll>
      </section>

      <section className={styles.seventhHeroSection}>
        <RevealOnScroll
          className={styles.seventhHeroOverlay}
          visibleClassName={styles.overlayRevealVisible}
        >
          <picture className={styles.responsivePicture}>
            <source
              media="(max-width: 768px)"
              srcSet="/BB_Mobile_FooterImage.webp"
            />

            <img
              src="/BB_Web_Future.webp"
              alt="Building Beyond 2032 section heading"
              className={styles.responsiveHeroImage}
            />
          </picture>
        </RevealOnScroll>
      </section>
    </>
  );
}