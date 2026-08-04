import DisableScrollSnap from "@/components/disable-scroll-snap";
import styles from "./contact.module.css";

const emailHref = `mailto:qntqueries@cfmeu.org?subject=${encodeURIComponent(
  "Building Beyond 2032 enquiry"
)}&body=${encodeURIComponent(
  "Hi Building Beyond 2032 team,\n\nI would like to make an enquiry about:\n\n"
)}`;

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
          </div>

          <a href={emailHref} className={styles.emailButton}>
            Email Us
          </a>
        </div>
      </section>
    </>
  );
}