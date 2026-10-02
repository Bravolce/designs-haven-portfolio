import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Website Design Services | Designs Haven",
  description:
    "Custom website design services for brands and service businesses. Designs Haven creates modern, responsive websites built for clarity, credibility, and action.",

  alternates: {
    canonical:
      "https://designs-haven-portfolio.vercel.app/services/website-design",
  },

  openGraph: {
    title: "Custom Website Design Services | Designs Haven",
    description:
      "Modern, responsive website design for brands and service businesses that want a stronger and more intentional online presence.",
    url: "https://designs-haven-portfolio.vercel.app/services/website-design",
    siteName: "Designs Haven",
    type: "website",
  },
};
export default function WebsiteDesignPage() {
  return (
    <main className="min-h-screen bg-[#F4F1EB] text-[#0A0A0A]">
      <section className="px-6 pb-24 pt-32 md:px-10 md:pb-32 md:pt-40 lg:px-14">
        <div className="mx-auto max-w-[1500px]">
          <p className="mb-8 text-xs font-medium uppercase tracking-[0.28em] text-[#B08D57]">
            Custom Website Design
          </p>

          <h1 className="max-w-6xl text-[clamp(3.5rem,8vw,8.5rem)] font-medium leading-[0.92] tracking-[-0.055em]">
            Websites designed around your{" "}
            <span className="italic text-[#6B1F2B]">brand.</span>
          </h1>

          <div className="mt-12 grid gap-10 border-t border-black/15 pt-8 md:grid-cols-2 md:items-end">
            <p className="max-w-xl text-lg leading-8 text-black/65">
              We create modern, responsive websites shaped around your
              audience, your goals, and the way you want your business to be
              perceived online.
            </p>

            <div className="md:text-right">
              <a
                href="https://contra.com/vincentobafemi26_9f330vn6/work?r=vincentobafemi26_9f330vn6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border-b border-black pb-2 text-sm font-medium uppercase tracking-[0.18em] transition-opacity hover:opacity-60"
              >
                Start Your Project
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>
<section className="bg-[#0A0A0A] px-6 py-24 text-white md:px-10 md:py-32 lg:px-14">
  <div className="mx-auto max-w-[1500px]">
    <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#D4B77D]">
          What We Design
        </p>
      </div>

      <div>
        <h2 className="max-w-4xl text-4xl font-medium leading-[1.05] tracking-[-0.04em] md:text-6xl lg:text-7xl">
          A website that feels like your business{" "}
          <span className="italic text-[#D4B77D]">belongs there.</span>
        </h2>

        <p className="mt-8 max-w-2xl text-base leading-7 text-white/65 md:text-lg md:leading-8">
          Our website design service combines clear structure, strong visual
          identity, responsive design, and thoughtful user experience to create
          websites that look credible and make it easier for visitors to take
          action.
        </p>
      </div>
    </div>

    <div className="mt-20 border-t border-white/15">
      {[
        {
          number: "01",
          title: "Business Websites",
          text: "Professional websites that give your business a stronger and more credible online presence.",
        },
        {
          number: "02",
          title: "Service-Based Websites",
          text: "Clear, conversion-focused websites that help potential clients understand your services and take the next step.",
        },
        {
          number: "03",
          title: "Responsive Experiences",
          text: "Layouts designed to feel polished and easy to use across desktop, tablet, and mobile.",
        },
      ].map((item) => (
        <div
          key={item.number}
          className="grid gap-5 border-b border-white/15 py-8 md:grid-cols-[100px_1fr_1fr] md:items-center"
        >
          <span className="text-sm text-[#D4B77D]">{item.number}</span>

          <h3 className="text-2xl font-medium tracking-[-0.02em] md:text-3xl">
            {item.title}
          </h3>

          <p className="max-w-lg text-sm leading-7 text-white/60 md:text-base">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="bg-[#F4F1EB] px-6 py-24 md:px-10 md:py-32 lg:px-14">
  <div className="mx-auto max-w-[1500px]">
    <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#B08D57]">
          Why It Matters
        </p>

        <h2 className="mt-6 max-w-3xl text-4xl font-medium leading-[1.05] tracking-[-0.04em] md:text-6xl">
          Good design gets attention.
          <br />
          <span className="italic text-[#6B1F2B]">
            Clear design gets action.
          </span>
        </h2>
      </div>

      <div className="lg:pt-16">
        <p className="max-w-2xl text-lg leading-8 text-black/65">
          A strong website should help people understand your business quickly,
          trust what they see, and know what to do next. We design around those
          moments.
        </p>

        <div className="mt-12 space-y-0 border-t border-black/15">
          {[
            {
              title: "Clearer positioning",
              text: "Your visitors should immediately understand what you do, who you help, and why your business is worth paying attention to.",
            },
            {
              title: "Stronger first impressions",
              text: "A polished visual experience can make your business feel more established, credible, and intentional.",
            },
            {
              title: "Better user flow",
              text: "We structure pages so visitors can move naturally from interest to enquiry, booking, contact, or purchase.",
            },
            {
              title: "Built for every screen",
              text: "Your website should feel just as considered on mobile as it does on desktop.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="grid gap-4 border-b border-black/15 py-7 md:grid-cols-[0.8fr_1.2fr]"
            >
              <h3 className="text-xl font-medium tracking-[-0.02em]">
                {item.title}
              </h3>

              <p className="text-sm leading-7 text-black/60 md:text-base">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
<section className="bg-white px-6 py-24 md:px-10 md:py-32 lg:px-14">
  <div className="mx-auto max-w-[1500px]">
    <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#B08D57]">
          Our Process
        </p>

        <h2 className="mt-6 max-w-xl text-4xl font-medium leading-[1.05] tracking-[-0.04em] md:text-6xl">
          From idea to a website that feels{" "}
          <span className="italic text-[#6B1F2B]">finished.</span>
        </h2>
      </div>

      <div className="border-t border-black/15">
        {[
          {
            number: "01",
            title: "Discover",
            text: "We understand your business, audience, goals, brand direction, and what the website needs to achieve.",
          },
          {
            number: "02",
            title: "Structure",
            text: "We plan the page hierarchy, content flow, calls to action, and user journey before focusing on the visual layer.",
          },
          {
            number: "03",
            title: "Design",
            text: "We shape the visual direction around your brand using typography, spacing, imagery, layout, and responsive design.",
          },
          {
            number: "04",
            title: "Build",
            text: "The approved design becomes a responsive, polished, and performance-focused website across desktop, tablet, and mobile.",
          },
          {
            number: "05",
            title: "Launch",
            text: "We test, refine, and prepare the final experience so the website is ready to go live confidently.",
          },
        ].map((item) => (
          <div
            key={item.number}
            className="grid gap-5 border-b border-black/15 py-8 md:grid-cols-[80px_180px_1fr]"
          >
            <span className="text-sm text-[#B08D57]">{item.number}</span>

            <h3 className="text-xl font-medium tracking-[-0.02em] md:text-2xl">
              {item.title}
            </h3>

            <p className="max-w-xl text-sm leading-7 text-black/60 md:text-base">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
<section className="bg-[#0A0A0A] px-6 py-24 text-white md:px-10 md:py-32 lg:px-14">
  <div className="mx-auto max-w-[1500px]">
    <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#D4B77D]">
          Selected Work
        </p>

        <h2 className="mt-6 max-w-4xl text-4xl font-medium leading-[1.05] tracking-[-0.04em] md:text-6xl">
          Designed to look good.
          <br />
          <span className="italic text-[#D4B77D]">
            Built to communicate clearly.
          </span>
        </h2>
      </div>

      <p className="max-w-md text-sm leading-7 text-white/60 md:text-base">
        A look at website experiences created around stronger presentation,
        clearer structure, and better usability.
      </p>
    </div>

    <div className="grid gap-14 lg:grid-cols-2">
      <div>
        <div className="overflow-hidden bg-[#F4F1EB]">
          <img
            src="/dexito-project.webp"
            alt="D'Exito interior design and construction website"
            className="w-full transition-transform duration-700 hover:scale-[1.02]"
          />
        </div>

        <div className="mt-6 flex items-start justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#D4B77D]">
              Interior Design / Construction
            </p>

            <h3 className="mt-2 text-3xl font-medium tracking-[-0.03em]">
              D&apos;Exito
            </h3>
          </div>

          <a
            href="https://dexito.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-white/40 pb-1 text-sm transition-opacity hover:opacity-60"
          >
            View Site ↗
          </a>
        </div>
      </div>

      <div className="lg:mt-24">
        <div className="overflow-hidden bg-[#6B1F2B]">
          <img
            src="/carbon-footwear.webp"
            alt="Carbon Footwear ecommerce website design"
            className="w-full transition-transform duration-700 hover:scale-[1.02]"
          />
        </div>

        <div className="mt-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#D4B77D]">
            E-commerce / Web Design
          </p>

          <h3 className="mt-2 text-3xl font-medium tracking-[-0.03em]">
            Carbon Footwear
          </h3>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="bg-[#F4F1EB] px-6 py-24 md:px-10 md:py-32 lg:px-14">
  <div className="mx-auto max-w-[1500px]">
    <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#B08D57]">
          Frequently Asked Questions
        </p>

        <h2 className="mt-6 max-w-xl text-4xl font-medium leading-[1.05] tracking-[-0.04em] md:text-6xl">
          A few things clients usually want to{" "}
          <span className="italic text-[#6B1F2B]">know.</span>
        </h2>
      </div>

      <div className="border-t border-black/15">
        {[
          {
            question: "How long does a website design project take?",
            answer:
              "Timeline depends on the size and complexity of the project, but most website design projects are completed within a few weeks once content, feedback, and approvals are moving smoothly.",
          },
          {
            question: "Will the website work properly on mobile?",
            answer:
              "Yes. Every website is designed with desktop, tablet, and mobile responsiveness in mind so the experience feels polished across different screen sizes.",
          },
          {
            question: "Can you redesign an existing website?",
            answer:
              "Yes. If your current website feels outdated, unclear, or no longer represents your business properly, we can redesign the experience while keeping what still works.",
          },
          {
            question: "Do you also help with website copy and structure?",
            answer:
              "Yes. We can help shape the page structure, calls to action, content hierarchy, and messaging so the website communicates your offer more clearly.",
          },
          {
            question: "What types of businesses do you design websites for?",
            answer:
              "We work with service businesses, brands, professionals, and growing companies that need a stronger, more intentional online presence.",
          },
        ].map((item) => (
          <div
            key={item.question}
            className="border-b border-black/15 py-8"
          >
            <h3 className="text-xl font-medium tracking-[-0.02em] md:text-2xl">
              {item.question}
            </h3>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-black/60 md:text-base">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
<section className="bg-[#6B1F2B] px-6 py-24 text-white md:px-10 md:py-32 lg:px-14">
  <div className="mx-auto max-w-[1500px]">
    <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-24">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#D4B77D]">
          Start A Project
        </p>

        <h2 className="mt-6 max-w-5xl text-5xl font-medium leading-[0.98] tracking-[-0.05em] md:text-7xl lg:text-8xl">
          Ready for a website that feels more{" "}
          <span className="italic text-[#D4B77D]">intentional?</span>
        </h2>
      </div>

      <div className="lg:pb-3">
        <p className="max-w-lg text-base leading-8 text-white/70 md:text-lg">
          Tell us what you are building, what needs to change, and where you
          want the website to take your business next.
        </p>

        <a
          href="https://contra.com/vincentobafemi26_9f330vn6/work?r=vincentobafemi26_9f330vn6"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-3 border-b border-white pb-2 text-sm font-medium uppercase tracking-[0.18em] transition-opacity hover:opacity-60"
        >
          Start Your Project
          <span>↗</span>
        </a>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}