import Image from "next/image";
import Link from "next/link";
import Carousel from "@/components/carousel";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.heroStack}>
          <div className={styles.heroArtwork}>
            <Image
              src="/BB32_Web_LP_2_HeadingSection_Text2.png"
              alt="Your future in construction starts here"
              width={1920}
              height={934}
              priority
              quality={100}
              unoptimized
              className={styles.headingImage}
            />

            <Link href="/find-work" className={styles.getStartedButton}>
              <Image
                src="/BB32_Web_LP_2_HeadingSection_Text_Button.png"
                alt="Get Started"
                width={500}
                height={126}
                quality={100}
                unoptimized
                className={styles.buttonImage}
              />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.carouselSection}>
        <div className={styles.carouselSectionInner}>
          <Carousel />
        </div>
      </section>

      <section className={styles.thirdHeroSection}>
        <div className={styles.thirdHeroStack}>
          <div className={styles.thirdHeroArtwork}>
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
          </div>
        </div>
      </section>

      <section className={styles.fourthHeroSection}>
        <div className={styles.fourthHeroStack}>
          <div className={styles.fourthHeroArtwork}>
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
          </div>
        </div>
      </section>

      <section className={styles.fifthHeroSection}>
        <div className={styles.fifthHeroOverlay}>
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
        </div>
      </section>

      <section className={styles.sixthHeroSection}>
        <div className={styles.sixthHeroOverlay}>
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
        </div>
      </section>

      <section className={styles.seventhHeroSection}>
        <div className={styles.seventhHeroOverlay}>
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
        </div>
      </section>
    </>
  );
}