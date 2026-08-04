import type { Metadata } from "next";
import Link from "next/link";
import DisableScrollSnap from "@/components/disable-scroll-snap";
import styles from "./about-us.module.css";

export const metadata: Metadata = {
  title: "About Building Beyond 2032",
  description:
    "Learn about Building Beyond 2032, a union-led initiative focused on creating long-term construction jobs, apprenticeships, training pathways, and opportunities for Queensland workers beyond the 2032 Games.",
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "About Building Beyond 2032",
    description:
      "Building Beyond 2032 is focused on building a lasting construction workforce legacy for Queensland workers, families, and communities.",
    url: "https://www.buildingbeyond2032.com.au/about-us",
    siteName: "Building Beyond 2032",
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Building Beyond 2032",
    description:
      "Learn about Building Beyond 2032 and its focus on construction jobs, apprenticeships, safety, fairness, and long-term opportunities for Queensland workers.",
  },
};

export default function AboutUsPage() {
  return (
    <>
      <DisableScrollSnap />

      <section className={styles.aboutPage}>
        <div className={styles.aboutContent}>
          <h1 className={styles.aboutTitle}>About Us</h1>

          <div className={styles.aboutText}>
            <p>
              Building Beyond 2032 is a union-led initiative focused on making
              sure the opportunities created by the 2032 Games leave a lasting
              legacy for Queensland workers, families, and communities.
            </p>

            <p>
              We know that delivering the 2032 Games will require tens of
              thousands of additional construction workers across the state. For
              us, that challenge is also an opportunity — a chance to train
              local, hire local, and build a strong local workforce that will
              continue serving Queensland long after the Olympic Games are over.
            </p>

            <p>
              Our work brings together local builders, sub-contractors, existing
              workers, apprentices, and new entrants to the industry. We want
              Queenslanders to benefit directly from Queensland jobs, while also
              strengthening the skilled workforce needed to deliver the homes,
              hospitals, schools, and public infrastructure our communities rely
              on.
            </p>

            <p>
              Building Beyond 2032 is about more than one event or one project.
              It is about creating long-term pathways into secure, meaningful
              work and making sure the next generation of construction workers
              has the support, training, and opportunities needed to succeed.
            </p>

            <p>
              We believe there has never been a better time for young
              Queenslanders to consider a future in construction. Demand for
              apprentices and skilled workers will continue to grow, and the
              choices made now will help shape the future of the industry for
              years to come.
            </p>

            <p>
              At the heart of Building Beyond 2032 is a commitment to fairness,
              safety, dignity, and pride in the trades. Our goal is to connect
              both current and future workers with opportunities that provide
              secure employment, fair pay, safe worksites, and a strong future
              for Queensland.
            </p>
          </div>

          <div className={styles.aboutActions}>
            <Link href="/find-work" className={styles.aboutButton}>
              I&apos;m looking for work
            </Link>

            <Link href="/learn-more" className={styles.aboutButton}>
              I want to enter the industry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}