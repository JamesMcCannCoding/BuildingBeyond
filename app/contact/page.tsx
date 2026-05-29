import Link from "next/link";
import DisableScrollSnap from "@/components/disable-scroll-snap";
import styles from "./contact.module.css";

export default function ContactPage() {
  return (
    <>
      <DisableScrollSnap />

      <section className={styles.contactPage}>
        <div className={styles.contactContent}>
          <h1 className={styles.contactTitle}>Contact</h1>

          <div className={styles.contactText}>
            <p>
              Get in touch with Building Beyond 2032 to learn more about job
              opportunities, apprenticeships, industry pathways, or how your
              organisation can be involved.
            </p>

            <p>
              Whether you are an existing construction worker, a future
              apprentice, a contractor, employer, school, or community partner,
              we would love to hear from you.
            </p>

            <p>
              Building Beyond 2032 is focused on connecting Queenslanders with
              real opportunities in the construction industry and helping build
              a workforce that lasts well beyond the 2032 Games.
            </p>

            <p>
              If you are looking for work, you can register your interest below.
              If you are new to the industry, you can also learn more about
              pathways into construction.
            </p>
          </div>

          <div className={styles.contactActions}>
            <Link href="/find-work" className={styles.contactButton}>
              I&apos;m looking for work
            </Link>

            <Link href="/learn-more" className={styles.contactButton}>
              I want to enter the industry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}