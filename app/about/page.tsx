export default function AboutPage() {
  return (
    <>
      {/* Hero Section – responsive height */}
      <section className="relative min-h-[500px] md:h-[819px] w-full bg-surface-dim overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-80 grayscale-[30%]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuADHiAodKVTLQxvPyg5X-sLsMGI_N_81SLr4kSShaZracFoTdM5WwTR-WJ-U1ymijHYO6UW-sbs26LjQMMtNIMHv1oaHmQpRxgL4vFKvYX_T3_VIXU0sNq_FGvPlV9BkriWbfZKJZCK_bHyhCvjJ_27ytrjVesQBf5GiAgmhpAbNhVJcNQMUQXJmbekkYxQFjz1Us0TU034PYdkxSru6yIQxB2ggwBIxgctznu3_IC-mKe32EuwbWEHS9DHwvAhIPlL2c6k4BmiMUs"
            alt="Architectural detail"
          />
        </div>
        <div className="relative z-10 px-6 md:px-16 max-w-4xl">
          <span className="text-xs font-semibold uppercase text-primary block mb-6 tracking-[0.3em]">
            About the Studio
          </span>
          <h1 className="text-5xl md:text-7xl text-on-surface leading-tight font-light">
            Crafting Legacy
          </h1>
          <p className="text-lg md:text-xl text-secondary mt-6 md:mt-8 max-w-2xl">
            For over two decades, Dorsete Maidstone has defined the intersection
            of architectural silence and structural mastery. We don't just build —
            we curate environments that whisper excellence.
          </p>
        </div>
      </section>

      {/* Our Story – responsive two columns */}
      <section className="py-20 md:py-36 px-6 md:px-16 bg-surface">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <span className="text-xs font-semibold uppercase text-primary mb-6 block tracking-wider">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-medium mb-6">
              From Humble Beginnings
            </h2>
            <p className="text-lg text-secondary mb-6">
              Founded in 1998 in Stoke-on-Trent, Dorsete Maidstone began as a
              small consultancy focused on structural integrity. Over the years,
              we evolved into a full-service construction and design firm,
              collaborating with world-renowned architects.
            </p>
            <p className="text-lg text-secondary mb-8">
              Today, our portfolio spans luxury residential, commercial
              high-rises, and cultural spaces across the UK. Yet our philosophy
              remains unchanged: subtract the unnecessary, perfect the essential.
            </p>
            <div className="border-l-2 border-primary-container pl-6 py-2">
              <p className="italic text-on-surface-variant text-lg">
                “We measure success not in square footage, but in the silence
                between the walls.”
              </p>
              <p className="text-xs font-semibold uppercase text-primary mt-2 tracking-wider">
                — Jonathan Dorsete, Founding Partner
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] bg-surface-container-low overflow-hidden">
              <img
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDBdpm7q1O7UHoLuF-ML8t87TiQC5Ak_wBiJ29p8_3201C0NUAQlwqO-WDQUMRpsCW2LX-bTCnhSowYQxNKjjLweQZ3y5MnHg4Px1V7qr2pjxXu-dDLoBfzLadxDL2lxeX53kaQKNwDyizjSTuHIc0i3S4Mf6f4qUzioZDeuIuEMgg6lAbZ4-TO_UstjGXPritpJ-OUiRy--mOYJpu3Ccr_S_Hiobwcj6nOmtk3YhRZXXHZ5vj5FkkeBWF0D8phEPcl_Zi8Af-1po"
                alt="Architectural model"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-16 h-16 md:w-24 md:h-24 bg-primary-container/20 -z-10"></div>
          </div>
        </div>
      </section>

      {/* Leadership Team – responsive grid */}
      <section className="py-20 md:py-36 px-6 md:px-16 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-xs font-semibold uppercase text-primary tracking-wider">
              The Minds Behind
            </span>
            <h2 className="text-4xl md:text-5xl font-medium mt-4">
              Leadership Team
            </h2>
            <div className="w-16 h-0.5 bg-primary-container mx-auto mt-6"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                name: "Jonathan Dorsete",
                role: "Founding Partner",
                desc: "Structural engineer with 30+ years in high-end residential.",
                img: "https://picsum.photos/id/64/600/600",
              },
              {
                name: "Eleanor Maidstone",
                role: "Creative Director",
                desc: "RIBA award-winning architect focused on minimalist expression.",
                img: "https://picsum.photos/id/65/600/600",
              },
              {
                name: "Samuel K. Harris",
                role: "Head of Construction",
                desc: "Expert in sustainable materials and project delivery.",
                img: "https://picsum.photos/id/66/600/600",
              },
            ].map((member, idx) => (
              <div key={idx} className="text-center group">
                <div className="aspect-square rounded-full overflow-hidden mx-auto w-36 sm:w-44 md:w-48 mb-4 md:mb-6 shadow-md">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-medium">
                  {member.name}
                </h3>
                <p className="text-primary text-xs font-semibold uppercase mt-1 tracking-wider">
                  {member.role}
                </p>
                <p className="text-secondary text-base md:text-lg mt-2 md:mt-3 max-w-xs mx-auto px-2">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Timeline – responsive */}
      <section className="py-20 md:py-36 px-6 md:px-16 bg-surface">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-xs font-semibold uppercase text-primary tracking-wider">
              Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-medium mt-4">
              Key Milestones
            </h2>
            <div className="w-16 h-0.5 bg-primary-container mx-auto mt-6"></div>
          </div>
          <div className="space-y-8 md:space-y-12">
            {[
              { year: "1998", title: "Foundation", desc: "Dorsete Ltd established in Stoke-on-Trent." },
              { year: "2005", title: "First Major Commission", desc: "Completed the Grade-II listed conversion project." },
              { year: "2012", title: "London Expansion", desc: "Opened London office; delivered first luxury tower." },
              { year: "2020", title: "Sustainability Pledge", desc: "Committed to carbon-neutral construction by 2030." },
            ].map((milestone, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-4 md:gap-6 items-start border-l-2 border-primary-container pl-6 md:pl-8 pb-6 md:pb-8">
                <div className="md:w-32 flex-shrink-0">
                  <span className="text-3xl md:text-5xl text-primary-container font-light">
                    {milestone.year}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-medium mb-1 md:mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-secondary text-base md:text-lg">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 md:mt-16 p-6 md:p-8 bg-surface-container-low text-center">
            <p className="text-lg md:text-xl italic">
              “Our story is still being written. Join us for the next chapter.”
            </p>
            <a
              href="#contact"
              className="inline-block mt-6 px-6 md:px-8 py-3 bg-primary-container text-white text-xs font-semibold uppercase tracking-wider hover:bg-primary transition-colors"
            >
              Contact the studio
            </a>
          </div>
        </div>
      </section>
    </>
  );
}