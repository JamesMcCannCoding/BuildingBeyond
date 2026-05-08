import Image from "next/image";
import Link from "next/link";
import Heromobilemenu from "../../components/heromobilemenu";
import SignupCta from "../../components/signup-cta";

export default function ConceptPage() {
  return (
    <main className="conceptPage">
      <section className="conceptSection shell">
        <header className="conceptHeader">
          <nav
            className="conceptNav conceptNavLeft"
            aria-label="Concept left navigation"
          >
            <Link href="/find-work" className="conceptNavLink">
              Find Work
            </Link>
            <Link href="/learn-more" className="conceptNavLink">
              Learn More
            </Link>
          </nav>

          <div className="conceptLogoWrap">
            <Link href="/" aria-label="Building Beyond home">
              <Image
                src="/LogoWhiteBackground.svg"
                alt="Building Beyond logo"
                width={260}
                height={120}
                priority
                className="conceptLogo"
              />
            </Link>
          </div>

            <div className="conceptHeaderRight">
            <nav
                className="conceptNav conceptNavRight"
                aria-label="Concept right navigation"
            >
                <Link href="/" className="conceptNavLink">
                Home
                </Link>
                <Link href="/about-us" className="conceptNavLink">
                About Us
                </Link>
                <Link href="/contact" className="conceptNavLink">
                Contact
                </Link>
            </nav>

            <Heromobilemenu
                links={[
                    { href: "/find-work", label: "Find Work" },
                    { href: "/learn-more", label: "Learn More" },
                    { href: "/", label: "Home" },
                    { href: "/about-us", label: "About Us" },
                    { href: "/contact", label: "Contact" },
                ]}
                />
          </div>
        </header>

        <div className="conceptHeadingWrap">
          <h1 className="conceptHeading">CONCEPT</h1>
        </div>

        <div className="conceptContent">
          <p>
            To deliver the 2032 Games, our state will need an additional 50,000
            construction workers. The upcoming pipeline of work is a
            once-in-a-generation opportunity to shape the future of our state
            and secure a legacy that lasts long after the final medal is
            awarded.
          </p>

          <p>
            Building Beyond 2032 is a plan to ensure we use this opportunity to
            train local, hire local, and build a local workforce that serve
            Queensland&apos;s needs for years beyond the Olympic Games.
          </p>

          <p>
            We&apos;re working with local builders, sub-contractors, existing
            workers in the industry, apprentices and new entrants to ensure
            Queenslanders&apos; benefit from Queensland jobs. Not just those who
            perform the work, but generations of Queenslanders who rely on a
            locally skilled workforce to build the infrastructure needed to
            provide homes, hospitals, and schools.
          </p>

          <p>
            If you&apos;re an existing worker in the construction industry{" "}
            <Link href="#" className="conceptInlineLink">
              register here for job opportunities.
            </Link>
          </p>

          <p>
            If you&apos;re considering a future in the construction industry{" "}
            <Link href="#" className="conceptInlineLink">
              register here for apprenticeships and other opportunities for new
              entrants.
            </Link>
          </p>

          <p>
            For the young people of Queensland considering their next step,
            there has never been a better time to pick up a tool. The demand for
            apprentices will be unprecedented. A trade apprenticeship started
            today is a passport to a decade of secure work, leading directly to
            the heart of the Olympic project.
          </p>

          <p>
            Our vision as a union stretches beyond the next project deadline. It
            is a vision not just for tomorrow, but for the next day and every
            day after. We are connecting existing and future workers in the
            industry with a future where a fair day&apos;s work earns a fair
            day&apos;s pay, where safety is sacred, and where a career in the
            trades is a source of dignity and pride for generations to come.
          </p>
        </div>

        <SignupCta
          containerClassName="conceptButtons"
          primaryLabel="I'M LOOKING FOR WORK"
          secondaryLabel="I WANT TO ENTER THE INDUSTRY"
          primaryTag="look-for-work"
          secondaryTag="enter-the-industry"
        />
      </section>
    </main>
  );
}