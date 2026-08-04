import type { Metadata } from "next";
import DisableScrollSnap from "@/components/disable-scroll-snap";
import RegisterModal from "@/components/register-modal";
import styles from "./find-work.module.css";

export const metadata: Metadata = {
  title: "Find Construction Work in Queensland",
  description:
    "Register your interest in construction job opportunities connected to Building Beyond 2032 and Queensland's growing construction industry.",
};

export default function FindWorkPage() {
  return (
    <>
      <DisableScrollSnap />

      <section className={styles.findWorkPage}>
        <div className={styles.findWorkContent}>
          <h1 className={styles.findWorkTitle}>Find Work</h1>

          <div className={styles.findWorkText}>
            <p>
              Register your interest in construction job opportunities connected
              to Building Beyond 2032.
            </p>

            <p>
              Whether you are already working in the industry or looking for
              your next opportunity, Building Beyond 2032 is designed to help
              connect Queensland workers with real construction jobs.
            </p>

            <p>
              The demand for skilled workers will continue to grow as Queensland
              prepares for the 2032 Games and the major pipeline of work beyond
              it.
            </p>

            <p>
              If you are ready to be part of this opportunity, register your
              interest below and take the next step toward secure, meaningful
              work in construction.
            </p>
          </div>

          <RegisterModal variant="inline" />
        </div>
      </section>
    </>
  );
}