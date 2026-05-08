import Image from "next/image";
import Link from "next/link";
import Heromobilemenu from "../../components/heromobilemenu";
import SignupCta from "../../components/signup-cta";

export default function AboutUsPage() {
  return (
    <main className="conceptPage">
      <section className="conceptSection shell">
        <header className="conceptHeader">
            <nav
                className="conceptNav conceptNavLeft"
                aria-label="About Us left navigation"
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
                aria-label="About Us right navigation"
                >
                <Link href="/" className="conceptNavLink">
                    Home
                </Link>
                <Link href="/concept" className="conceptNavLink">
                    Concept
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
                        { href: "/concept", label: "Concept" },
                        { href: "/contact", label: "Contact" },
                    ]}
                    />
            </div>
            </header>

        <div className="conceptHeadingWrap">
          <h1 className="conceptHeading">ABOUT US</h1>
        </div>
            <div className="conceptContent">
            <p>
                Building Beyond 2032 is a union-led initiative focused on making sure the
                opportunities created by the 2032 Games leave a lasting legacy for
                Queensland workers, families, and communities.
            </p>
            <p>
                We know that delivering the 2032 Games will require tens of thousands of
                additional construction workers across the state. For us, that challenge is
                also an opportunity — a chance to train local, hire local, and build a
                strong local workforce that will continue serving Queensland long after the
                Olympic Games are over.
            </p>
            <p>
                Our work brings together local builders, sub-contractors, existing workers,
                apprentices, and new entrants to the industry. We want Queenslanders to
                benefit directly from Queensland jobs, while also strengthening the skilled
                workforce needed to deliver the homes, hospitals, schools, and public
                infrastructure our communities rely on.
            </p>
            <p>
                Building Beyond 2032 is about more than one event or one project. It is
                about creating long-term pathways into secure, meaningful work and making
                sure the next generation of construction workers has the support, training,
                and opportunities needed to succeed.
            </p>
            <p>
                We believe there has never been a better time for young Queenslanders to
                consider a future in construction. Demand for apprentices and skilled
                workers will continue to grow, and the choices made now will help shape the
                future of the industry for years to come.
            </p>
            <p>
                At the heart of Building Beyond 2032 is a commitment to fairness, safety,
                dignity, and pride in the trades. Our goal is to connect both current and
                future workers with opportunities that provide secure employment, fair pay,
                safe worksites, and a strong future for Queensland.
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