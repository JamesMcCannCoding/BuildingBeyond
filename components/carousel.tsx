"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./carousel.module.css";

const carouselImages = [
  {
    src: "/BB_Web_LP_3_Test1.png",
    alt: "Building Beyond carousel image 1",
  },
  {
    src: "/BB_Web_LP_3_Test2.png",
    alt: "Building Beyond carousel image 2",
  },
  {
    src: "/BB_Web_LP_3_Test3.png",
    alt: "Building Beyond carousel image 3",
  },
  {
    src: "/BB_Web_LP_3_Test4.png",
    alt: "Building Beyond carousel image 4",
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((current) =>
      current === 0 ? carouselImages.length - 1 : current - 1
    );
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((current) =>
      current === carouselImages.length - 1 ? 0 : current + 1
    );
  }, []);

  useEffect(() => {
    const interval = window.setInterval(goToNext, 5000);
    return () => window.clearInterval(interval);
  }, [goToNext]);

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carouselViewport}>
        <div
          className={styles.carouselTrack}
          style={{
            transform: `translate3d(-${currentIndex * 100}%, 0, 0)`,
          }}
        >
          {carouselImages.map((image) => (
            <div className={styles.carouselSlide} key={image.src}>
              <Image
                src={image.src}
                alt={image.alt}
                width={1920}
                height={694}
                quality={100}
                unoptimized
                sizes="100vw"
                className={styles.carouselImage}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.carouselControls}>
        <button
          type="button"
          className={styles.carouselArrow}
          onClick={goToPrevious}
          aria-label="Previous carousel image"
        >
          ‹
        </button>

        <div className={styles.carouselDots}>
          {carouselImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              className={`${styles.carouselDot} ${
                index === currentIndex ? styles.carouselDotActive : ""
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to carousel image ${index + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          className={styles.carouselArrow}
          onClick={goToNext}
          aria-label="Next carousel image"
        >
          ›
        </button>
      </div>
    </div>
  );
}