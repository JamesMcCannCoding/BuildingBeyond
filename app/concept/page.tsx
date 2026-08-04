import type { Metadata } from "next";
import Link from "next/link";
import DisableScrollSnap from "@/components/disable-scroll-snap";
import styles from "./concept.module.css";

export const metadata: Metadata = {
  title: "The Building Beyond 2032 Concept",
  description:
    "Learn about the Building Beyond 2032 concept to train local, hire local, and build Queensland's construction workforce for the 2032 Games and beyond.",
  alternates: {
    canonical: "/concept",
  },
  openGraph: {
    title: "The Building Beyond 2032 Concept",
    description:
      "Building Beyond 2032 is focused on helping Queensland train local, hire local, and build a skilled construction workforce for the 2032 Games and future infrastructure needs.",
    url: "https://www.buildingbeyond2032.com.au/concept",
    siteName: "Building Beyond 2032",
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Building Beyond 2032 Concept",
    description:
      "Learn how Building Beyond 2032 aims to create construction jobs, apprenticeships, pathways, and a lasting workforce legacy for Queensland.",
  },
};

export default function ConceptPage() {
  return (
    <>
      <DisableScrollSnap />

      <section className={styles.conceptPage}>
        <div className={styles.conceptContent}>
          <h1 className={styles.conceptTitle}>Concept</h1>

          <div className={styles.conceptText}>
            <p>
              To deliver the 2032 Games, our state will need an additional
              50,000 construction workers. The upcoming pipeline of work is a
              once-in-a-generation opportunity to shape the future of our state
              and secure a legacy that lasts long after the final medal is
              awarded.
            </p>

            <p>
              Building Beyond 2032 is a plan to ensure we use this opportunity
              to train local, hire local, and build a local workforce that
              serves Queensland&apos;s needs for years beyond the Olympic Games.
            </p>

            <p>
              We&apos;re working with local builders, sub-contractors, existing
              workers in the industry, apprentices and new entrants to ensure
              Queenslanders benefit from Queensland jobs. Not just those who
              perform the work, but generations of Queenslanders who rely on a
              locally skilled workforce to build the infrastructure needed to
              provide homes, hospitals, and schools.
            </p>

            <p>
              If you&apos;re an existing worker in the construction industry{" "}
              <Link href="/find-work">register here for job opportunities</Link>.
            </p>

            <p>
              If you&apos;re considering a future in the construction industry{" "}
              <Link href="/learn-more">
                register here for apprenticeships and other opportunities for
                new entrants
              </Link>.
            </p>

            <p>
              For the young people of Queensland considering their next step,
              there has never been a better time to pick up a tool. The demand
              for apprentices will be unprecedented. A trade apprenticeship
              started today is a passport to a decade of secure work, leading
              directly to the heart of the Olympic project.
            </p>

            <p>
              Our vision as a union stretches beyond the next project deadline.
              It is a vision not just for tomorrow, but for the next day and
              every day after. We are connecting existing and future workers in
              the industry with a future where a fair day&apos;s work earns a
              fair day&apos;s pay, where safety is sacred, and where a career in
              the trades is a source of dignity and pride for generations to
              come.
            </p>
          </div>

          <div className={styles.conceptActions}>
            <Link href="/find-work" className={styles.conceptButton}>
              I&apos;m looking for work
            </Link>

            <Link href="/learn-more" className={styles.conceptButton}>
              I want to enter the industry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}