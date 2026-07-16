import Link from "next/link";
import Carousel from "@/components/carousel";
import RevealOnScroll from "@/components/reveal-on-scroll";
import styles from "./page.module.css";

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
              src="/BB32_Web_LP_2_HeadingSection_Text2.png"
              alt="Building Beyond 2032"
              className={styles.headingImage}
            />

            <Link href="/find-work" className={styles.getStartedButton}>
              <img
                src="/BB32_Web_LP_2_HeadingSection_Text_Button.png"
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
                srcSet="/BB_Mobile_LP_4_Why_Text.png"
              />

              <img
                src="/BB_Web_LP_4_Why_Text.png"
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
                srcSet="/BB_Mobile_LP_5_How_Text.png"
              />

              <img
                src="/BB_Web_LP_5_How_Text.png"
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
              srcSet="/BB_Mobile_LP_6_MoreJob_Text.png"
            />

            <img
              src="/BB_Web_LP_6_MoreJob_Text.png"
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
              srcSet="/BB_Mobile_LP_7_RealCareer_Text.png"
            />

            <img
              src="/BB_Web_LP_7_RealCareer_Text.png"
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
              srcSet="/BB_Mobile_LP_7_FutureReady.png"
            />

            <img
              src="/BB_Web_LP_8_FutureText_Text.png"
              alt="Building Beyond 2032 section heading"
              className={styles.responsiveHeroImage}
            />
          </picture>
        </RevealOnScroll>
      </section>
    </>
  );
}