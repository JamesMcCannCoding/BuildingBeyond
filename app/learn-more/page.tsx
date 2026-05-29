import Link from "next/link";
import DisableScrollSnap from "@/components/disable-scroll-snap";
import styles from "./learn-more.module.css";

export default function LearnMorePage() {
  return (
    <>
      <DisableScrollSnap />

      <section className={styles.learnMorePage}>
        <div className={styles.learnMoreContent}>
          <h1 className={styles.learnMoreTitle}>Learn More</h1>

          <div className={styles.learnMoreText}>
            <p>
              Learn more about pathways into the construction industry through
              Building Beyond 2032.
            </p>

            <p>
              Whether you are finishing school, considering an apprenticeship,
              changing careers, or exploring future opportunities, construction
              offers real pathways into secure and meaningful work.
            </p>

            <p>
              Queensland will need thousands of skilled workers to deliver the
              2032 Games and the major pipeline of infrastructure work that
              follows.
            </p>

            <p>
              Building Beyond 2032 is here to help connect future workers with
              information, training pathways, apprenticeships, and opportunities
              to begin a long-term career in construction.
            </p>
          </div>

          <div className={styles.learnMoreActions}>
            <Link href="/contact" className={styles.learnMoreButton}>
              Register Interest
            </Link>

            <Link href="/find-work" className={styles.learnMoreButton}>
              Find Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}