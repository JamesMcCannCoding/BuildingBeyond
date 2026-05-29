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
            <Image
              src="/BB_Web_LP_4_Why_Text.png"
              alt="Building Beyond 2032 section heading"
              width={1920}
              height={934}
              quality={100}
              unoptimized
              className={styles.thirdHeadingImage}
            />
          </div>
        </div>
      </section>

      <section className={styles.fourthHeroSection}>
        <div className={styles.fourthHeroStack}>
          <div className={styles.fourthHeroArtwork}>
            <Image
              src="/BB_Web_LP_5_How_Text.png"
              alt="Building Beyond 2032 section heading"
              width={1920}
              height={934}
              quality={100}
              unoptimized
              className={styles.fourthHeadingImage}
            />
          </div>
        </div>
      </section>

      <section className={styles.fifthHeroSection}>
        <div className={styles.fifthHeroOverlay}>
          <Image
            src="/BB_Web_LP_6_MoreJob_Text.png"
            alt="More than just a job"
            width={1920}
            height={629}
            quality={100}
            unoptimized
            className={styles.fifthHeadingImage}
          />
        </div>
      </section>

      <section className={styles.sixthHeroSection}>
        <div className={styles.sixthHeroOverlay}>
          <Image
            src="/BB_Web_LP_7_RealCareer_Text.png"
            alt="Real career"
            width={1920}
            height={629}
            quality={100}
            unoptimized
            className={styles.sixthHeadingImage}
          />
        </div>
      </section>

      <section className={styles.seventhHeroSection}>
        <div className={styles.seventhHeroOverlay}>
          <Image
            src="/BB_Web_LP_8_FooterImage_Text.png"
            alt="Ready for a better future"
            fill
            quality={100}
            unoptimized
            className={styles.seventhHeadingImage}
          />
        </div>
      </section>
    </>
  );
}