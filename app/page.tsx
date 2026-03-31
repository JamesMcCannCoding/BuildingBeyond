import Image from "next/image";
import Reveal from "../components/reveal";
import Carousel from "../components/carousel";
import SignupCta from "../components/signup-cta";

const missionItems = [
  {
    number: "1",
    text: "Encourage and facilitate young Queenslanders and other new entrants to join the construction industry.",
  },
  {
    number: "2",
    text: "Make it easier for existing Queensland construction workers to get jobs that are on worksites that are safe.",
  },
  {
    number: "3",
    text: "Work with industry to create the plan for a sustainable industry that benefits all Queenslanders.",
  },
];

const solutionItems = [
  {
    number: "1",
    text: "Existing workers and potential new entrants sign up to our registrar.",
  },
  {
    number: "2",
    text: "We support workers to promote their skills, gain new skills and certification, and get work with reputable local companies.",
  },
  {
    number: "3",
    text: "We work with builders, sub-contractors and industry stakeholders to achieve full utilisation of the local workforce.",
  },
];

const carouselSlides = [
  {
    src: "/image.jpg",
    alt: "Building Beyond carousel image 1",
  },
  {
    src: "/image.jpg",
    alt: "Building Beyond carousel image 2",
  },
  {
    src: "/image.jpg",
    alt: "Building Beyond carousel image 3",
  },
  {
    src: "/image.jpg",
    alt: "Building Beyond carousel image 4",
  },
  {
    src: "/image.jpg",
    alt: "Building Beyond carousel image 5",
  },
];

export default function Home() {
  return (
    <main id="top" className="bbHome">
      <section className="hero">
        <div className="heroInner shell">
          <Reveal>
            <div className="topLogoWrap">
              <a href="#top" className="topLogo" aria-label="Building Beyond home">
                <Image
                  src="/LogoDarkBackground.svg"
                  alt="Building Beyond logo"
                  width={320}
                  height={140}
                  priority
                  className="topLogoImage"
                />
              </a>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="heroGraphicWrap">
              <Image
                src="/HeroStatementDark.svg"
                alt="Train, Hire, Build Local"
                width={900}
                height={500}
                priority
                className="heroGraphic"
              />
            </div>
          </Reveal>

          <Reveal delay={200}>
            <p className="heroText">
              Let&apos;s build Queensland from the ground up, supporting local
              workers and training the next generation of apprentices.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <SignupCta />
          </Reveal>

          <div className="accentDivider" />
        </div>
      </section>

      <section id="work" className="carouselSection">
        <div className="carouselFullscreen">
          <Reveal>
            <Carousel slides={carouselSlides} autoPlayInterval={5000} />
          </Reveal>
        </div>
      </section>

      <section id="mission" className="listSection shell">
        <div className="missionHeaderContainer" style={{ position: 'relative' }}>
          <Reveal>
            <div className="sectionGraphicWrap">
              <Image
                src="/OurMissionLightBack.svg"
                alt="Our Mission"
                width={520}
                height={150}
                priority
                className="sectionGraphic"
              />
            </div>
          </Reveal>

          <Reveal delay={400} className="revealRight">
            <div className="characterWrap">
              <Image 
                src="/Asset17.svg" 
                alt="Painter character"
                width={400}
                height={400}
                className="missionCharacter"
              />
            </div>
          </Reveal>
        </div>

        <div className="missionContent">
          <div className="steppedList">
            {missionItems.map((item, index) => (
              <Reveal key={item.number} delay={index * 120}>
                <div className={`steppedItem steppedItem${index + 1}`}>
                  <div className="steppedNumber">{item.number}</div>
                  <p className="steppedText">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="solution" className="listSection shell solutionSection">
      <div className="solutionTopGraphic">
        <Reveal>
          <Image
            src="/Asset18.svg"
            alt="Solution decoration"
            width={400}
            height={200}
            className="solutionExtraImage"
          />
        </Reveal>
      </div>

      <Reveal>
        <div className="sectionGraphicWrap">
          <Image
            src="/OurSolutionLightBack.svg"
            alt="Our Solution"
            width={520}
            height={150}
            className="sectionGraphic"
          />
        </div>
      </Reveal>

      <div className="steppedList">
        {solutionItems.map((item, index) => (
          <Reveal key={item.number} delay={index * 120}>
            <div className={`steppedItem steppedItem${index + 1}`}>
              <div className={`steppedNumber`}>{item.number}</div>
              <p className="steppedText">{item.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

      <div className="bottomAccentBar" />
    </main>
  );
}
