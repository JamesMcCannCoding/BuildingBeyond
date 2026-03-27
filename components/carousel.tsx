"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Slide = {
  src: string;
  alt: string;
};

type CarouselProps = {
  slides: Slide[];
  autoPlayInterval?: number;
};

function getRelativePosition(index: number, currentIndex: number, total: number) {
  const raw = index - currentIndex;
  const wrapped =
    ((raw + total + Math.floor(total / 2)) % total) - Math.floor(total / 2);

  return wrapped;
}

export default function Carousel({
  slides,
  autoPlayInterval = 5000,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalSlides = slides.length;

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    if (totalSlides <= 1 || isPaused) return;

    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, autoPlayInterval);

    return () => window.clearInterval(interval);
  }, [totalSlides, autoPlayInterval, isPaused]);

  if (!slides.length) return null;

  return (
    <div
      className="carouselWidget"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ================= SLIDES ================= */}
      <div className="carouselContent">
        <div className="carouselStage">
          {slides.map((slide, index) => {
            const position = getRelativePosition(
              index,
              currentIndex,
              totalSlides
            );

            let className = "carouselSlide";

            if (position === 0) className += " isCenter";
            else if (position === -1) className += " isLeft";
            else if (position === 1) className += " isRight";
            else if (position === -2) className += " isFarLeft";
            else if (position === 2) className += " isFarRight";
            else className += " isHidden";

            return (
              <div
                key={slide.src}
                className={className}
                aria-hidden={position !== 0}
              >
<Image
  src={slide.src}
  alt={slide.alt}
  fill
  priority
  sizes="100vw"
  className="carouselImage"
/>
              </div>
            );
          })}
        </div>

        {/* ================= CONTROLS (NEW) ================= */}
        <div className="carouselControls">
          {/* LEFT ARROW */}
          <button
            type="button"
            className="carouselArrow carouselArrowLeft"
            onClick={goToPrevious}
            aria-label="Previous slide"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="carouselArrowIcon"
            >
              <path
                d="M14.5 5.5L8 12l6.5 6.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* DOTS */}
          <div className="dots">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                className={`dot ${
                  index === currentIndex ? "active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button
            type="button"
            className="carouselArrow carouselArrowRight"
            onClick={goToNext}
            aria-label="Next slide"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="carouselArrowIcon"
            >
              <path
                d="M9.5 5.5L16 12l-6.5 6.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}