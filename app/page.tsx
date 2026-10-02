const CONTRA_URL =
  "https://contra.com/vincentobafemi26_9f330vn6/work?r=vincentobafemi26_9f330vn6";
  
const projects = [
  {
    number: "01",
    name: "D'Exito",
   category: "Interior Design / Construction",
  description:
  "A modern website design for an interior design and construction brand, built to showcase its expertise, projects, and services while creating a clear path for potential clients to explore and enquire.",
    style: "light",
    image: "/dexito-project.webp",
     link: "https://dexito.in/"
  },
  {
    number: "02",
    name: "Carbon Footwear",
    category: "E-commerce / Web Design",
  description:
  "A modern e-commerce website design for Carbon Footwear, created to showcase its collections, product quality, and wholesale offering through a bold, responsive, and premium shopping experience.",
    style: "burgundy",
    image: "/carbon-footwear.webp",
  },
];
const heroConcepts = [
  {
    number: "01",
    name: "NYRÉ",
    category: "Hair & Beauty",
    image: "/nyre-hero-concept.webp",
  },
  {
    number: "02",
    name: "Vale & Form",
    category: "Fashion / Lifestyle",
    image: "/vale-form-hero-concept.webp",
  },
  {
    number: "03",
    name: "Bunvolt",
    category: "Food & Hospitality",
    image: "/bunvolt-hero-concept.webp",
  },
  {
    number: "04",
    name: "Elara Journeys",
    category: "Travel & Hospitality",
    image: "/elara-hero-concept.webp",
  },
  {
    number: "05",
    name: "Ardo Timepieces",
    category: "Luxury / Watches",
    image: "/ardo-hero-concept.webp",
  },
];
const services = [
  {
    number: "01",
    title: "Website Design",
    description:
  "Modern, responsive websites designed around your brand, audience, and business goals to create a stronger online presence.",
  href: "/services/website-design",
  },
  {
    number: "02",
    title: "Landing Pages",
    description:
  "High-converting landing pages designed for campaigns, offers, products, lead generation, and turning more visitors into enquiries.",
  },
  {
    number: "03",
    title: "Website Redesign",
    description:
  "Strategic website redesigns that transform outdated websites into faster, clearer, more responsive, and more effective digital experiences.",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    text: "We understand your business, audience, goals, competitors, and what the website needs to achieve.",
  },
  {
    number: "02",
    title: "Design",
    text: "We shape the visual direction, layout, messaging, and overall digital experience.",
  },
  {
    number: "03",
    title: "Build",
    text: "The approved design becomes a responsive, polished, and performance-focused website.",
  },
  {
    number: "04",
    title: "Launch",
    text: "We test, refine, prepare the final experience, and get your new website ready for the world.",
  },
];

export default function Home() {
  const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Designs Haven",
  url: "https://designs-haven-portfolio.vercel.app",
  description:
    "Designs Haven is a web design studio creating modern websites, landing pages, and strategic website redesigns for brands and service businesses.",
  serviceType: [
    "Website Design",
    "Landing Page Design",
    "Website Redesign",
  ],
  areaServed: [
  {
    "@type": "Country",
    name: "United States",
  },
  {
    "@type": "Country",
    name: "United Kingdom",
  },
  {
    "@type": "Country",
    name: "Canada",
  },
  {
    "@type": "Country",
    name: "Australia",
  },
  {
    "@type": "Country",
    name: "Kuwait",
  },
  {
    "@type": "Country",
    name: "United Arab Emirates",
  },
],
};
  return (
<>
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(structuredData),
  }}
/>
    <main className="overflow-hidden bg-white text-[#0A0A0A]">

      {/* NAVIGATION */}
<header className="absolute left-0 top-0 z-50 w-full px-6 py-6 md:px-10 lg:px-14">
  <div className="mx-auto flex max-w-[1500px] items-center justify-between">

    {/* LOGO */}
    <a
      href="#"
      className="text-lg font-semibold tracking-[-0.05em] text-[#0A0A0A] md:text-xl"
    >
      DESIGNS HAVEN
      <span className="text-[#B08D57]">.</span>
    </a>

    {/* DESKTOP NAVIGATION */}
    <nav className="hidden items-center gap-8 text-sm lg:flex">
      <a
        href="#work"
        className="nav-link transition-colors duration-300 hover:text-[#6B1F2B]"
      >
        Work
      </a>

      <a
        href="#services"
        className="nav-link transition-colors duration-300 hover:text-[#6B1F2B]"
      >
        Services
      </a>

      <a
        href="#about"
        className="nav-link transition-colors duration-300 hover:text-[#6B1F2B]"
      >
        About
      </a>

      <a
        href="#process"
        className="nav-link transition-colors duration-300 hover:text-[#6B1F2B]"
      >
        Process
      </a>
    </nav>

    {/* DESKTOP CTA */}
    <a
      href={CONTRA_URL}
        target="_blank"
  rel="noopener noreferrer"
      className="hidden rounded-full bg-[#0A0A0A] px-5 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#6B1F2B] lg:inline-flex"
    >
      Start a Project
    </a>

    {/* MOBILE MENU */}
    <details className="group relative lg:hidden">
      <summary className="flex cursor-pointer list-none items-center gap-3 text-xs font-medium uppercase tracking-[0.15em]">
        Menu

        <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-black/20">
          <span className="absolute h-px w-3.5 bg-black transition-transform duration-300 group-open:rotate-45" />
          <span className="absolute h-px w-3.5 rotate-90 bg-black transition-transform duration-300 group-open:-rotate-45" />
        </span>
      </summary>

      {/* MOBILE DROPDOWN */}
      <div className="absolute right-0 top-14 w-[280px] overflow-hidden rounded-[1.5rem] bg-[#0A0A0A] p-6 text-white shadow-2xl">
        <p className="mb-5 text-xs uppercase tracking-[0.2em] text-[#D4B77D]">
          Explore
        </p>

        <nav className="flex flex-col">
          <a
            href="#work"
            className="border-b border-white/15 py-4 text-xl transition-colors hover:text-[#D4B77D]"
          >
            Work
          </a>

          <a
            href="#services"
            className="border-b border-white/15 py-4 text-xl transition-colors hover:text-[#D4B77D]"
          >
            Services
          </a>

          <a
            href="#about"
            className="border-b border-white/15 py-4 text-xl transition-colors hover:text-[#D4B77D]"
          >
            About
          </a>

          <a
            href="#process"
            className="border-b border-white/15 py-4 text-xl transition-colors hover:text-[#D4B77D]"
          >
            Process
          </a>

          <a
            href={CONTRA_URL}
              target="_blank"
  rel="noopener noreferrer"
            className="mt-6 flex items-center justify-between rounded-full bg-[#B08D57] px-5 py-4 font-medium text-[#0A0A0A] transition-colors hover:bg-[#D4B77D]"
          >
            Start a Project
            <span>↗</span>
          </a>
        </nav>
      </div>
    </details>

  </div>
</header>

      {/* HERO */}
     <section className="relative mx-auto max-w-[1500px] px-6 pb-12 pt-16 md:px-10 md:pt-24 lg:px-14 lg:pb-16 lg:pt-28">
  <div className="grid min-h-[78vh] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-4">

    {/* LEFT CONTENT */}
    <div className="relative z-10">
   <div className="mt-30 mb-8 flex items-center gap-4">
        <span className="h-[1px] w-10 bg-[#B08D57]" />
       <p className="reveal-up reveal-delay-1 text-xs font-medium uppercase tracking-[0.24em] text-black/50">
          Independent Web Design Studio
        </p>
      </div>

      <h1 className="reveal-up max-w-3xl text-[15vw] font-semibold leading-[0.8] tracking-[-0.075em] sm:text-[12vw] md:text-[9vw] lg:text-[6.5rem] xl:text-[7.3rem]">
        Websites
        <br />
        built to be
        <br />
        <span className="italic text-[#6B1F2B]">
          remembered.
        </span>
      </h1>

    <p className="reveal-up reveal-delay-2 mt-10 max-w-xl text-base leading-7 text-black/55 md:text-lg md:leading-8">
        Designs Haven creates modern digital experiences for ambitious
        brands that want to look sharper, communicate clearly, and make a
        stronger impression online.
      </p>

      <a
        href={CONTRA_URL}
        className="reveal-up reveal-delay-3 group mt-9 inline-flex items-center gap-5 rounded-full bg-[#0A0A0A] px-6 py-4 text-sm font-medium text-white transition hover:bg-[#6B1F2B]"
      >
        Explore our work
        <span className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
          ↗
        </span>
      </a>
    </div>

    {/* HERO VISUAL */}
    <div className="relative flex items-center justify-center lg:-ml-8 lg:-mr-8 xl:-ml-10 xl:-mr-10">
      <div className="absolute right-[10%] top-[5%] h-40 w-40 rounded-full bg-[#6B1F2B]/10 blur-2xl md:h-64 md:w-64" />

      <div className="absolute bottom-[10%] left-[10%] h-40 w-40 rounded-full bg-[#B08D57]/15 blur-3xl md:h-60 md:w-60" />

      <img
        src="/designs-haven-hero.webp"
        alt="Designs Haven web design studio portfolio showcase"
        className="hero-visual relative z-10 w-full max-w-[850px] object-contain"
      />

      <div className="absolute bottom-[3%] right-[5%] z-20 hidden rounded-full border border-black/10 bg-white/80 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] backdrop-blur-md md:block">
        Design • Strategy • Development
      </div>
    </div>
  </div>

  {/* HERO BOTTOM */}
  <div className="mt-8 grid gap-7 border-t border-black/15 pt-7 sm:grid-cols-3 lg:max-w-xl">
    <div>
      <p className="text-2xl font-medium text-[#B08D57]">03</p>
      <p className="mt-1 text-xs text-black/45">Core Services</p>
    </div>

    <div>
      <p className="text-2xl font-medium text-[#B08D57]">100%</p>
      <p className="mt-1 text-xs text-black/45">Responsive Design</p>
    </div>

    <div>
      <p className="text-2xl font-medium text-[#B08D57]">01</p>
      <p className="mt-1 text-xs text-black/45">
        Goal: Better Digital Experiences
      </p>
    </div>
  </div>
</section>

      {/* MARQUEE */}
      <section className="overflow-hidden border-y border-[#B08D57]/30 bg-[#B08D57] py-5 text-[#0A0A0A]">
        <div className="marquee-track flex min-w-max items-center gap-10 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.19em]">
          <span>Web Design</span>
          <span>✦</span>
          <span>Website Redesign</span>
          <span>✦</span>
          <span>Landing Pages</span>
          <span>✦</span>
          <span>E-commerce</span>
          <span>✦</span>
          <span>Creative Development</span>
          <span>✦</span>

          <span>Web Design</span>
          <span>✦</span>
          <span>Website Redesign</span>
          <span>✦</span>
          <span>Landing Pages</span>
          <span>✦</span>
          <span>E-commerce</span>
          <span>✦</span>
          <span>Creative Development</span>
          <span>✦</span>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="work" className="bg-[#0A0A0A] py-24 text-white md:py-32">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-14">
          <div className="mb-16 grid gap-8 border-b border-white/15 pb-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.22em] text-[#B08D57]">
                01 / Selected Work
              </p>
              <h2 className="text-5xl font-medium tracking-[-0.055em] md:text-7xl">
                Work worth
                <br />
                looking at.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-white/45">
              A selection of websites, redesigns, and digital experiences built
              around clarity, strong presentation, and memorable visual
              direction.
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <article
                key={project.name}
                className={`project-card group overflow-hidden rounded-[2rem] ${
                  project.style === "burgundy"
                    ? "bg-[#6B1F2B]"
                    : project.style === "gold"
                    ? "bg-[#B08D57] text-[#0A0A0A]"
                    : "bg-[#F3F1EC] text-[#0A0A0A]"
                }`}
              >
                <div
                  className={`grid ${
                    index % 2 === 1
                      ? "lg:grid-cols-[0.85fr_1.15fr]"
                      : "lg:grid-cols-[1.25fr_0.75fr]"
                  }`}
                >
                  <div
                    className={`flex min-h-[420px] items-center justify-center p-8 md:min-h-[560px] ${
                      index === 1 ? "lg:order-2" : ""
                    }`}
                  >
                   {project.image ? (
  <div className="group/image relative h-full w-full overflow-hidden rounded-[1.4rem]">
    <img
      src={project.image}
      alt={`${project.name} website design project by Designs Haven`}
      className="h-full w-full object-cover transition-transform duration-700 group-hover/image:scale-[1.025]"
    />

    <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover/image:bg-black/5" />
  </div>
) : (
  <div className="browser-mockup w-full max-w-3xl">
    <div className="browser-top">
      <span />
      <span />
      <span />
    </div>

    <div className="flex min-h-[330px] items-center justify-center bg-white px-6 text-center text-[#0A0A0A] md:min-h-[430px]">
      <div>
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-black/35">
          Project visual coming next
        </p>

        <h3 className="text-4xl font-semibold tracking-[-0.055em] md:text-6xl">
          {project.name}
        </h3>
      </div>
    </div>
  </div>
)}
                  </div>

                  <div
                    className={`flex min-h-[400px] flex-col justify-between p-8 md:p-12 ${
                      index === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <div>
                      <div
                        className={`mb-16 flex justify-between border-b pb-5 text-xs uppercase tracking-[0.18em] ${
                          project.style === "burgundy"
                            ? "border-white/20 text-white/55"
                            : "border-black/15 text-black/45"
                        }`}
                      >
                        <span>{project.number}</span>
                        <span>{project.category}</span>
                      </div>

                      <h3 className="mb-6 text-4xl font-medium tracking-[-0.05em] md:text-5xl">
                        {project.name}
                      </h3>

                      <p
                        className={`max-w-md leading-7 ${
                          project.style === "burgundy"
                            ? "text-white/65"
                            : "text-black/60"
                        }`}
                      >
                        {project.description}
                      </p>
                    </div>

   {project.link ? (
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-12 inline-flex w-fit items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em]"
  >
    View Live Website
    <span className="transition-transform group-hover:translate-x-2">
      ↗
    </span>
  </a>
) : (
  <a
    href={CONTRA_URL}
      target="_blank"
  rel="noopener noreferrer"
    className="mt-12 inline-flex w-fit items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em]"
  >
    Start a Project
    <span className="transition-transform group-hover:translate-x-2">
      ↗
    </span>
  </a>
)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
{/* HERO CONCEPTS */}
<section className="bg-[#0A0A0A] px-6 py-24 text-white md:px-10 md:py-32 lg:px-14">
  <div className="mx-auto max-w-[1500px]">

    {/* INTRO */}
    <div className="mb-16 grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
      <div>
        <p className="mb-5 text-xs uppercase tracking-[0.22em] text-[#D4B77D]">
          02 / Hero Concepts
        </p>

        <p className="max-w-sm text-sm leading-7 text-white/60">
          A collection of hero concepts exploring how different brands can
          create a stronger first impression from the very first screen.
        </p>
      </div>

      <h2 className="max-w-5xl text-5xl font-medium leading-[0.92] tracking-[-0.055em] md:text-7xl lg:text-8xl">
        One screen.
        <br />
        <span className="text-[#D4B77D]">
          Five different worlds.
        </span>
      </h2>
    </div>

{/* FEATURED — NYRÉ */}
<div className="group mx-auto mt-16 max-w-[1180px]">
  <div className="mb-5 flex items-end justify-between gap-5">
    <div>
      <span className="text-xs text-[#D4B77D]">01</span>

      <h3 className="mt-2 text-2xl font-medium">
        NYRÉ
      </h3>
    </div>

    <p className="text-right text-[10px] uppercase tracking-[0.18em] text-white/45">
      Hair & Beauty
    </p>
  </div>

  <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-2 md:p-3">
    <img
      src="/nyre-hero-concept.webp"
      alt="NYRÉ hair and beauty website design concept by Designs Haven"
      className="h-auto w-full rounded-[1.1rem] transition-transform duration-700 group-hover:scale-[1.015]"
    />
  </div>
</div>


{/* SECONDARY HERO CONCEPTS */}
<div className="mx-auto mt-16 grid max-w-[1180px] gap-x-7 gap-y-14 md:grid-cols-2">

  {/* VALE & FORM */}
  <div className="group">
    <div className="mb-4 flex items-end justify-between gap-4">
      <div>
        <span className="text-xs text-[#D4B77D]">02</span>

        <h3 className="mt-2 text-xl font-medium">
          Vale & Form
        </h3>
      </div>

      <p className="text-right text-[9px] uppercase tracking-[0.18em] text-white/45">
        Fashion / Lifestyle
      </p>
    </div>

    <div className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-2">
      <img
        src="/vale-form-hero-concept.webp"
        alt="Vale and Form fashion website hero concept"
        loading="lazy"
        className="h-auto w-full rounded-[1rem] transition-transform duration-700 group-hover:scale-[1.02]"
      />
    </div>
  </div>


  {/* BUNVOLT */}
  <div className="group">
    <div className="mb-4 flex items-end justify-between gap-4">
      <div>
        <span className="text-xs text-[#D4B77D]">03</span>

        <h3 className="mt-2 text-xl font-medium">
          Bunvolt
        </h3>
      </div>

      <p className="text-right text-[9px] uppercase tracking-[0.18em] text-white/45">
        Food / Hospitality
      </p>
    </div>

    <div className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-2">
      <img
        src="/bunvolt-hero-concept.webp"
        alt="Bunvolt food and hospitality website design concept by Designs Haven"
        loading="lazy"
        className="h-auto w-full rounded-[1rem] transition-transform duration-700 group-hover:scale-[1.02]"
      />
    </div>
  </div>


  {/* ELARA JOURNEYS */}
  <div className="group">
    <div className="mb-4 flex items-end justify-between gap-4">
      <div>
        <span className="text-xs text-[#D4B77D]">04</span>

        <h3 className="mt-2 text-xl font-medium">
          Elara Journeys
        </h3>
      </div>

      <p className="text-right text-[9px] uppercase tracking-[0.18em] text-white/45">
        Travel / Hospitality
      </p>
    </div>

    <div className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-2">
      <img
        src="/elara-hero-concept.webp"
        alt="Elara Journeys travel website design concept by Designs Haven"
        loading="lazy"
        className="h-auto w-full rounded-[1rem] transition-transform duration-700 group-hover:scale-[1.02]"
      />
    </div>
  </div>


  {/* ARDO */}
  <div className="group">
    <div className="mb-4 flex items-end justify-between gap-4">
      <div>
        <span className="text-xs text-[#D4B77D]">05</span>

        <h3 className="mt-2 text-xl font-medium">
          Ardo Timepieces
        </h3>
      </div>

      <p className="text-right text-[9px] uppercase tracking-[0.18em] text-white/45">
        Luxury / Watches
      </p>
    </div>

    <div className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-2">
      <img
        src="/ardo-hero-concept.webp"
        alt="Ardo Timepieces luxury watch website design concept by Designs Haven"
        loading="lazy"
        className="h-auto w-full rounded-[1rem] transition-transform duration-700 group-hover:scale-[1.02]"
      />
    </div>
  </div>

</div>
<div className="mt-14 flex justify-center md:mt-20">
  <a
    href={CONTRA_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-4 rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition duration-300 hover:bg-[#B08D57] hover:text-white"
  >
    Build Your Website
    <span>↗</span>
  </a>
</div>
  </div>
</section>
     {/* PHILOSOPHY */}
<section className="bg-[#6B1F2B] px-6 py-24 text-white md:px-10 md:py-32 lg:px-14">
  <div className="mx-auto max-w-[1500px]">
    <div className="mb-16 grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
      <div>
        <p className="mb-5 text-xs uppercase tracking-[0.22em] text-[#D4B77D]">
          More than decoration
        </p>

        <p className="max-w-sm text-sm leading-7 text-white/85">
          Every website we create is shaped around clarity, identity,
          usability, and the action we want visitors to take.
        </p>
      </div>

      <h2 className="max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.055em] md:text-7xl lg:text-8xl">
        We don&apos;t decorate websites.
        <br />
        <span className="text-[#D4B77D]">
          We rethink how brands show up online.
        </span>
      </h2>
    </div>

    <div className="border-t border-white/20">
      {[
        {
          number: "01",
          title: "Strategy",
          text: "We understand what the website needs to communicate, who it needs to reach, and what action visitors should take.",
        },
        {
          number: "02",
          title: "Design",
          text: "We turn that direction into a visual experience that feels intentional, distinctive, and aligned with the brand.",
        },
        {
          number: "03",
          title: "Development",
          text: "We build responsive, polished experiences that work smoothly across desktop, tablet, and mobile.",
        },
        {
          number: "04",
          title: "Conversion",
          text: "We structure the experience around clarity, trust, and stronger paths toward enquiries, bookings, or sales.",
        },
      ].map((item) => (
        <div
          key={item.number}
          className="philosophy-row group grid gap-5 border-b border-white/20 py-8 md:grid-cols-[80px_1fr_1fr_auto] md:items-center"
        >
          <span className="text-sm text-[#D4B77D]">
            {item.number}
          </span>

          <h3 className="text-3xl font-medium tracking-[-0.04em] transition-transform duration-300 group-hover:translate-x-2 md:text-4xl">
            {item.title}
          </h3>

         <p className="max-w-lg leading-7 text-white/85">
  {item.text}
</p>

          <span className="hidden text-2xl text-[#D4B77D] transition-transform duration-300 group-hover:translate-x-2 md:block">
            ↗
          </span>
        </div>
      ))}
    </div>
  </div>
</section>

     {/* SERVICES */}
<section id="services" className="bg-white py-24 md:py-32">
  <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-14">
    <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <p className="mb-5 text-xs uppercase tracking-[0.22em] text-[#B08D57]">
          02 / Services
        </p>

        <h2 className="max-w-lg text-5xl font-medium leading-[0.95] tracking-[-0.055em] md:text-7xl">
          Design that works
          <br />
          <span className="text-[#6B1F2B]">beyond looking good.</span>
        </h2>

        <p className="mt-8 max-w-md text-base leading-7 text-black/55">
          Every service is built around one goal: helping your brand look
          stronger, communicate better, and create a smoother experience for
          the people visiting your website.
        </p>
      </div>

      <div className="border-t border-black/15">
        {services.map((service) => (
          <div
            key={service.title}
            className="service-row group grid gap-5 border-b border-black/15 py-10 md:grid-cols-[70px_1fr_1fr_auto] md:items-start"
          >
            <span className="text-sm font-medium text-[#B08D57]">
              {service.number}
            </span>

            <h3 className="text-3xl font-medium tracking-[-0.04em] transition-transform duration-300 group-hover:translate-x-2 md:text-4xl">
              {service.href ? (
  <a
    href={service.href}
    className="transition-opacity hover:opacity-60"
  >
    {service.title}
  </a>
) : (
  service.title
)}
            </h3>

            <p className="max-w-md leading-7 text-black/60">
              {service.description}
            </p>

            <span className="hidden text-2xl text-[#6B1F2B] transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-1 md:block">
              ↗
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

 {/* ABOUT */}
<section id="about" className="bg-[#F4F1EB] px-6 py-24 md:px-10 md:py-32 lg:px-14">
  <div className="mx-auto max-w-[1500px]">
    <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">

      <div>
        <p className="mb-5 text-xs uppercase tracking-[0.22em] text-[#B08D57]">
          03 / About Designs Haven
        </p>

        <p className="max-w-md text-base leading-8 text-black">
          Designs Haven is a creative web design studio focused on building
          modern digital experiences for brands and businesses that want to
          present themselves better online.
        </p>
      </div>

      <div>
        <h2 className="max-w-5xl text-5xl font-medium leading-[0.92] tracking-[-0.06em] md:text-7xl lg:text-8xl">
          Good design gets attention.
          <br />
          <span className="text-[#6B1F2B]">
            Great design moves people.
          </span>
        </h2>
      </div>
    </div>

    <div className="mt-20 grid overflow-hidden rounded-[2.5rem] bg-[#0A0A0A] text-white lg:grid-cols-[1.1fr_0.9fr]">
      
      <div className="flex min-h-[420px] flex-col justify-between p-8 md:p-12 lg:p-14">
        <div>
          <p className="mb-10 text-xs uppercase tracking-[0.22em] text-[#B08D57]">
            What we believe
          </p>

          <h3 className="max-w-xl text-4xl font-medium leading-[1] tracking-[-0.05em] md:text-5xl">
            Your website should feel like an extension of your brand,
            <span className="text-[#B08D57]">
              {" "}not just somewhere your business exists online.
            </span>
          </h3>
        </div>

        <p className="mt-14 max-w-lg leading-8 text-white/60">
          We combine strong visual direction, thoughtful user experience,
          clear communication, and responsive design to create websites that
          feel intentional from the first scroll to the final action.
        </p>
      </div>

      <div className="relative min-h-[420px] overflow-hidden bg-[#6B1F2B] p-8 md:p-12 lg:p-14">
        
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#D4B77D]/40" />
        <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full border border-[#D4B77D]/30" />

        <div className="relative z-10 flex h-full flex-col justify-between">
          <p className="text-xs uppercase tracking-[0.22em] text-[#D4B77D]">
            Built around
          </p>

          <div className="space-y-6">
            {[
              "Clear Direction",
              "Strong Visual Identity",
              "Thoughtful Experience",
              "Responsive Design",
            ].map((item, index) => (
              <div
                key={item}
                className="flex items-center justify-between border-b border-white/20 pb-5"
              >
                <span className="text-sm text-[#D4B77D]">
                  0{index + 1}
                </span>

                <span className="text-xl font-medium md:text-2xl">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  {/* PROCESS */}
<section id="process" className="bg-white px-6 py-24 md:px-10 md:py-32 lg:px-14">
  <div className="mx-auto max-w-[1500px]">

    {/* PROCESS INTRO */}
    <div className="mb-20 grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
      <div>
        <p className="mb-5 text-xs uppercase tracking-[0.22em] text-[#B08D57]">
          04 / Our Process
        </p>

        <p className="max-w-sm text-base leading-8 text-black">
          A clear process keeps every project focused, collaborative, and
          moving in the right direction from the first idea to launch.
        </p>
      </div>

      <h2 className="max-w-5xl text-5xl font-medium leading-[0.92] tracking-[-0.06em] md:text-7xl lg:text-8xl">
        From first idea
        <br />
        to <span className="text-[#6B1F2B]">final experience.</span>
      </h2>
    </div>

    {/* PROCESS STEPS */}
    <div className="border-t border-black/20">

      {[
        {
          number: "01",
          title: "Discover",
          label: "Understanding the project",
          text: "We start by understanding your business, audience, goals, existing brand, and what the website needs to achieve.",
        },
        {
          number: "02",
          title: "Define",
          label: "Building the direction",
          text: "We establish the structure, content direction, visual approach, and user journey before moving into the full design.",
        },
        {
          number: "03",
          title: "Design & Build",
          label: "Bringing it to life",
          text: "The direction becomes a polished, responsive digital experience designed around your brand and business goals.",
        },
        {
          number: "04",
          title: "Refine & Launch",
          label: "Getting everything ready",
          text: "We refine the details, test the experience across devices, make final adjustments, and prepare the website for launch.",
        },
      ].map((step) => (
        <div
          key={step.number}
          className="process-row group grid gap-6 border-b border-black/20 py-10 transition-all duration-300 md:grid-cols-[80px_0.8fr_1.2fr_auto] md:items-center lg:py-12"
        >
          <span className="text-sm font-medium text-[#B08D57]">
            {step.number}
          </span>

          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.16em] text-black/45">
              {step.label}
            </p>

            <h3 className="text-3xl font-medium tracking-[-0.045em] transition-transform duration-300 group-hover:translate-x-2 md:text-4xl">
              {step.title}
            </h3>
          </div>

          <p className="max-w-xl leading-7 text-black/65">
            {step.text}
          </p>

          <div className="hidden h-12 w-12 items-center justify-center rounded-full border border-black/20 text-lg transition-all duration-300 group-hover:border-[#6B1F2B] group-hover:bg-[#6B1F2B] group-hover:text-white md:flex">
            ↘
          </div>
        </div>
      ))}
    </div>

    {/* PROCESS END */}
    <div className="mt-12 flex justify-end">
      <p className="max-w-md text-right text-sm leading-6 text-black/45">
        Every project is different. The process adapts where needed while
        keeping communication and direction clear throughout.
      </p>
    </div>

  </div>
</section>

     {/* EXPERIMENTAL STATEMENT */}
<section className="relative overflow-hidden bg-[#B08D57] px-6 py-24 md:px-10 md:py-32 lg:px-14">
  <div className="mx-auto max-w-[1500px]">

    <div className="mb-16 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
      <p className="text-xs uppercase tracking-[0.22em] text-black/60">
        05 / Our Point of View
      </p>

      <p className="max-w-md text-sm leading-7 text-black md:text-right">
        Great websites should not disappear into the background. They should
        communicate clearly, feel distinct, and leave something behind.
      </p>
    </div>

    <div className="border-t border-black/20 pt-12">

      <div className="overflow-hidden">
        <div className="statement-line text-[15vw] font-semibold leading-[0.78] tracking-[-0.075em] text-[#0A0A0A] md:text-[11vw] lg:text-[8.5rem]">
          DESIGN
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="statement-line ml-[7vw] text-[15vw] font-semibold leading-[0.78] tracking-[-0.075em] text-white md:text-[11vw] lg:text-[8.5rem]">
          SHOULD
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="statement-line text-[15vw] font-semibold leading-[0.78] tracking-[-0.075em] text-[#0A0A0A] md:text-[11vw] lg:text-[8.5rem]">
          NEVER FEEL
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="statement-line ml-[12vw] text-[15vw] font-semibold leading-[0.78] tracking-[-0.075em] text-[#6B1F2B] md:text-[11vw] lg:text-[8.5rem]">
          INVISIBLE.
        </div>
      </div>

    </div>

    <div className="mt-16 flex items-center justify-between border-t border-black/20 pt-7">
      <p className="text-xs uppercase tracking-[0.2em] text-black">
        Designs Haven
      </p>

      <p className="text-xs uppercase tracking-[0.2em] text-black">
        Design • Experience • Impact
      </p>
    </div>

  </div>
</section>

{/* CTA */}
<section
  id="contact"
  className="relative overflow-hidden bg-[#0A0A0A] px-6 py-24 text-white md:px-10 md:py-32 lg:px-14 lg:py-40"
>
  {/* DECORATIVE ELEMENTS */}
  <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-[#B08D57]/20" />
  <div className="pointer-events-none absolute -right-20 -top-20 h-[350px] w-[350px] rounded-full border border-[#B08D57]/15" />

  <div className="relative z-10 mx-auto max-w-[1500px]">

    {/* TOP LABEL */}
    <div className="mb-16 flex items-center justify-between border-b border-white/20 pb-6">
      <p className="text-xs uppercase tracking-[0.22em] text-[#D4B77D]">
        Have a project in mind?
      </p>

      <span className="hidden text-xs uppercase tracking-[0.2em] text-white md:block">
        Let&apos;s make it happen
      </span>
    </div>

    {/* MAIN CTA */}
    <div className="grid gap-14 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">

      <div>
        <h2 className="max-w-5xl text-[14vw] font-medium leading-[0.82] tracking-[-0.07em] md:text-[10vw] lg:text-[8rem]">
          Let&apos;s build
          <br />
          something
          <br />
          <span className="text-[#B08D57]">worth seeing.</span>
        </h2>
      </div>

<div className="lg:pb-3">
  <p className="mb-8 max-w-md text-base leading-8 text-white">
    Tell us a little about your project and what you&apos;re looking to
    create. We&apos;ll get back to you as soon as possible.
  </p>

  <form
  action="https://formspree.io/f/mzebzpdz"
  method="POST"
  className="space-y-5"
>
    <div className="grid gap-5 md:grid-cols-2">
      <input
        type="text"
        name="name"
        placeholder="Your name"
         required
        className="w-full border-b border-white/25 bg-transparent py-4 text-white outline-none placeholder:text-white/45 focus:border-[#B08D57]"
      />

      <input
        type="email"
        name="email"
        placeholder="Email address"
          required
        className="w-full border-b border-white/25 bg-transparent py-4 text-white outline-none placeholder:text-white/45 focus:border-[#B08D57]"
      />
    </div>

    <input
      type="text"
      name="business"
      placeholder="Business / Brand name"
      className="w-full border-b border-white/25 bg-transparent py-4 text-white outline-none placeholder:text-white/45 focus:border-[#B08D57]"
    />

    <select
      name="service"
      defaultValue=""
      className="w-full border-b border-white/25 bg-[#0A0A0A] py-4 text-white outline-none focus:border-[#B08D57]"
    >
      <option value="" disabled>
        What do you need?
      </option>
      <option value="Website Design">Website Design</option>
      <option value="Landing Page">Landing Page</option>
      <option value="Website Redesign">Website Redesign</option>
      <option value="Other">Other</option>
    </select>

    <textarea
      name="message"
      rows={4}
      placeholder="Tell us about your project"
        required
      className="w-full resize-none border-b border-white/25 bg-transparent py-4 text-white outline-none placeholder:text-white/45 focus:border-[#B08D57]"
    />

    <button
      type="submit"
      className="group mt-3 inline-flex items-center gap-4 rounded-full bg-[#B08D57] px-7 py-4 font-medium text-[#0A0A0A] transition-colors duration-300 hover:bg-[#D4B77D]"
    >
      Send Enquiry
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        ↗
      </span>
    </button>
  </form>
</div>

    </div>

    {/* BOTTOM */}
    <div className="mt-24 flex flex-col gap-5 border-t border-white/20 pt-7 text-xs uppercase tracking-[0.18em] md:flex-row md:items-center md:justify-between">
      <span className="text-white">
        Websites • Landing Pages • Redesigns
      </span>

      <span className="text-[#D4B77D]">
        Designs Haven
      </span>
    </div>

  </div>
</section>
{/* FOOTER */}
<footer className="bg-[#F4F1EB] px-6 pb-8 pt-16 text-[#0A0A0A] md:px-10 md:pt-20 lg:px-14">
  <div className="mx-auto max-w-[1500px]">

    <div className="grid gap-14 border-b border-black/20 pb-16 md:grid-cols-2 lg:grid-cols-[1.4fr_0.6fr_0.6fr]">

      {/* BRAND */}
      <div>
          <h2 className="max-w-xl text-4xl font-medium leading-[0.95] tracking-[-0.05em] md:text-5xl">
          Designing better ways
          <br />
          for brands to
          <span className="text-[#6B1F2B]"> show up online.</span>
        </h2>
      </div>

      {/* NAVIGATION */}
      <div>
        <p className="mb-6 text-xs uppercase tracking-[0.2em] text-[#B08D57]">
          Explore
        </p>

        <div className="flex flex-col items-start gap-4 text-sm">
          <a href="#work" className="transition hover:text-[#6B1F2B]">
            Work
          </a>

          <a href="#services" className="transition hover:text-[#6B1F2B]">
            Services
          </a>

          <a href="#about" className="transition hover:text-[#6B1F2B]">
            About
          </a>

          <a href="#process" className="transition hover:text-[#6B1F2B]">
            Process
          </a>
        </div>
      </div>

      {/* SOCIAL */}
      <div>
        <p className="mb-6 text-xs uppercase tracking-[0.2em] text-[#B08D57]">
          Connect
        </p>

        <div className="flex flex-col items-start gap-4 text-sm">

<span>
  Contra ↗
</span>
        </div>
      </div>

    </div>

    {/* LARGE BRAND NAME */}
    <div className="overflow-hidden border-b border-black/20 py-10 md:py-14">
     <p className="whitespace-nowrap text-[11.5vw] font-semibold leading-[0.8] tracking-[-0.075em] text-[#0A0A0A]">
        DESIGNS HAVEN
      </p>
    </div>

    {/* COPYRIGHT */}
    <div className="flex flex-col gap-4 pt-7 text-xs uppercase tracking-[0.16em] md:flex-row md:items-center md:justify-between">
      <p>© 2026 Designs Haven</p>

      <p className="text-black">
        Design • Strategy • Development
      </p>

      <a
        href="#"
        className="transition hover:text-[#6B1F2B]"
      >
        Back to top ↑
      </a>
    </div>

  </div>
</footer>
    </main>
</>
);
}