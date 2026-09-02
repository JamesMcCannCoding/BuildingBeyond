import type { Metadata } from "next";
import DisableScrollSnap from "@/components/disable-scroll-snap";
import WorkerRegistrationForm from "@/components/worker-registration-form";
import styles from "./worker-registration.module.css";

export const metadata: Metadata = {
  title: "Worker Registration",
  description: "Private worker registration form for Building Beyond 2032.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function WorkerRegistrationPage() {
  return (
    <>
      <DisableScrollSnap />

      <section className={styles.workerRegistrationPage}>
        <WorkerRegistrationForm />
      </section>
    </>
  );
}