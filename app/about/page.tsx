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
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-on-surface leading-tight font-light">
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-6">
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

      {/* Why Choose Us – modern, premium professional section */}
      <section className="py-20 md:py-36 px-6 md:px-16 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <span className="text-xs font-semibold uppercase text-primary tracking-[0.3em]">
              The Dorsete Standard
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mt-4">
              Why Discerning Clients Choose Us
            </h2>
            <div className="w-16 h-0.5 bg-primary-container mx-auto mt-6"></div>
            <p className="text-base md:text-lg text-secondary max-w-2xl mx-auto mt-6 md:mt-8">
              A construction practice built on uncompromising standards, delivering
              measurable excellence on every commission.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: "verified",
                stat: "25+",
                title: "Years of Mastery",
                desc: "Over two decades refining the craft of luxury construction across the United Kingdom.",
              },
              {
                icon: "domain",
                stat: "180+",
                title: "Projects Delivered",
                desc: "From private estates to landmark commercial developments, completed on time and on budget.",
              },
              {
                icon: "workspace_premium",
                stat: "12",
                title: "Industry Awards",
                desc: "Recognised by RIBA, BD and Dezeen for design integrity and structural excellence.",
              },
              {
                icon: "eco",
                stat: "100%",
                title: "Sustainable Sites",
                desc: "Every project is delivered with low‑carbon materials and waste‑reduction protocols.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-surface p-8 md:p-10 border border-neutral-200/70 hover:border-primary-container transition-all duration-500 hover:shadow-xl"
              >
                <span
                  className="material-symbols-outlined text-4xl md:text-5xl text-primary-container group-hover:text-primary transition-colors"
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  {item.icon}
                </span>
                <div className="mt-6 mb-2 text-4xl md:text-5xl font-light text-on-surface">
                  {item.stat}
                </div>
                <h3 className="text-lg md:text-xl font-medium text-on-surface">
                  {item.title}
                </h3>
                <p className="text-secondary text-sm md:text-base mt-3 leading-relaxed">
                  {item.desc}
                </p>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary-container group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>

          <div className="mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="aspect-[4/3] overflow-hidden bg-surface-dim shadow-xl order-2 lg:order-1">
              <img
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                src="https://picsum.photos/id/1048/900/700"
                alt="Construction excellence"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-semibold uppercase text-primary tracking-[0.3em]">
                Our Commitment
              </span>
              <h3 className="text-3xl md:text-4xl font-medium mt-4 mb-6">
                Built to a Higher Standard
              </h3>
              <div className="w-12 h-0.5 bg-primary-container mb-6"></div>
              <p className="text-base md:text-lg text-secondary mb-6 leading-relaxed">
                Every Dorsete Maidstone project is overseen by a senior partner from
                first sketch to final handover. Our commitment to transparent
                reporting, fixed‑price guarantees, and meticulous quality control is
                what allows us to stand behind every structure we complete.
              </p>
              <ul className="space-y-3 md:space-y-4 text-secondary">
                {[
                  "Single point of senior accountability on every commission",
                  "Fixed‑price contracts with transparent reporting",
                  "ISO‑certified quality and safety management",
                  "10‑year structural warranty on all completed works",
                ].map((point, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="material-symbols-outlined text-primary text-base mt-0.5">
                      check_circle
                    </span>
                    <span className="text-base md:text-lg">{point}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className="inline-block mt-8 md:mt-10 px-8 py-4 bg-primary-container text-white text-xs font-semibold uppercase tracking-[0.2em] hover:bg-primary transition-colors"
              >
                Discuss Your Project
              </a>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}