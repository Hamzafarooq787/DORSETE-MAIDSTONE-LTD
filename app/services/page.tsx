import Link from "next/link";

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section – responsive height */}
      <section className="relative min-h-[500px] md:h-[819px] w-full bg-surface-dim overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-80 grayscale-[30%]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqU61Up4LccD1BhIVccMIFAd0joWm2mHKL2uxvwC8HBrYZy_cGem8HEjNcSZzHBnGakl2ITmjCv7c-xufoeTbXphvk-lRV8KVbBjvDrPiKnHJcN_bHem-pBUhJ59jFaCA2k6SQw4Ama-wTgWzZK-3KNJRTup9WFEpjZKVhOfgENlmV6lyAXYvfx30wI8DIvGQ5hN-0cDxiq3l7O9ADmnUvaCHAdel-UC9Rb5h3hUuxW45_Q1SKD9Fvhqn-I7Pw9y6U-BQ-VFJL1oM"
            alt="Architectural detail"
          />
        </div>
        <div className="relative z-10 px-4 sm:px-6 md:px-16 max-w-4xl">
          <span className="text-xs font-semibold uppercase text-primary block mb-6 tracking-[0.3em]">
            Our Expertise
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-on-surface leading-tight font-light">
            Precision in Every <br />
            <span className="text-primary italic">Structural Detail</span>
          </h1>
          <p className="text-lg md:text-xl text-secondary mt-6 md:mt-8 max-w-2xl">
            From the initial architectural vision to the final stone, we deliver
            a seamless journey of luxury and structural integrity for discerning
            developers and private homeowners.
          </p>
        </div>
      </section>

      {/* Services Grid – responsive layout */}
      <section className="px-4 sm:px-6 md:px-16 pb-16 sm:pb-20 md:pb-36 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-y-32 gap-x-12">
          {/* Residential Development */}
          <div className="group cursor-default">
            <div className="aspect-[16/10] overflow-hidden bg-neutral-100 mb-6 md:mb-8">
              <img
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6_-gmY6dynps6cUNgO6U2bKZgYvp3ACNYmeeNDa-vD1bq4lQN_7B8stS428TWwJ-1WjPybAzq2Z9tMLglXcbemE6_kVPinhNWpyV-rUCVQtP8lVPAq9oUy4fAxTVJh7GtFEQpDtQGYMjc-CbZhti8w22vOaxZtG-fpbKgUQhvbx9b_4Zht9RVu44EmM_UtCeCDioLn6lkt4fU4uBU-cOZ_YOFWwkaLhyGw1iKnYAz6NjGrLB-Zv-sAL5hdasrfDzneS0noOLkB_s"
                alt="Residential Development"
              />
            </div>
            <div className="space-y-3 md:space-y-4">
              <p className="text-xs font-semibold uppercase text-secondary tracking-wider">
                ESTATES & LUXURY HOMES
              </p>
              <h3 className="text-2xl sm:text-3xl md:text-4xl text-on-surface group-hover:text-primary transition-colors duration-300 font-medium">
                Residential Development
              </h3>
              <p className="text-base text-secondary max-w-lg leading-relaxed">
                Crafting bespoke living environments that merge contemporary
                luxury with timeless structural permanence. We specialize in
                high-end private residences and exclusive multi-unit
                developments.
              </p>
              <Link
                href="/contact"
                className="pt-3 md:pt-4 inline-flex items-center gap-2 text-primary text-[10px] font-semibold uppercase tracking-widest group-hover:gap-4 transition-all duration-300 hover:text-primary-container"
              >
                Enquire Now
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>

          {/* Commercial Construction */}
          <div className="group cursor-default md:mt-24 lg:mt-40">
            <div className="aspect-[16/10] overflow-hidden bg-neutral-100 mb-6 md:mb-8">
              <img
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFzULA1Ks5Racz3S4LI33jOjFlpvlnNk6N9SznPREvuRtKgo_dSDWqHWCCEpokmRqtnwGfCxSmvD8-EXDiUqwI5f3rhnCkbLF8evg6G-RB72i7yTfG9AzNIc9KZMQ4gpqchXqT0gaB3ZIibL_zHB47Odxzq3HZhOw1vFUYFt5Y1E8u1s45_1EuTFBrp94DPDnbLR0buQGZ_3JhXOjUByb--75ZKLWU2QGFP5KotdiGSSdeqHSUf5oTWpFqVPUl9_qIMKNkp74Z0gY"
                alt="Commercial Construction"
              />
            </div>
            <div className="space-y-3 md:space-y-4">
              <p className="text-xs font-semibold uppercase text-secondary tracking-wider">
                CORPORATE & RETAIL
              </p>
              <h3 className="text-2xl sm:text-3xl md:text-4xl text-on-surface group-hover:text-primary transition-colors duration-300 font-medium">
                Commercial Construction
              </h3>
              <p className="text-base text-secondary max-w-lg leading-relaxed">
                Delivering high-performance workspaces and retail landmarks. Our
                commercial projects focus on operational efficiency,
                architectural branding, and uncompromising durability.
              </p>
              <Link
                href="/contact"
                className="pt-3 md:pt-4 inline-flex items-center gap-2 text-primary text-[10px] font-semibold uppercase tracking-widest group-hover:gap-4 transition-all duration-300 hover:text-primary-container"
              >
                Enquire Now
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>

          {/* Architectural Design */}
          <div className="group cursor-default">
            <div className="aspect-[16/10] overflow-hidden bg-neutral-100 mb-6 md:mb-8">
              <img
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0VPjT576EDm4znvbspmihtudjS6EUb0YoOK1wyWRYKHbs0amTizLtxdBbFvz9Sy9mXroi3p_GlWW_ctWMefPRU-fYs96gxMcQTj0K5sGWmwjRQ6IOTycHm1ryoe4v9FuARPJn-wEgJnvnKFrVaCv-LFzYgw9nSztjyY62z5EUfaEdzeRio3ZVFyhF2BPNs9Jk0nZAwL2oNL0DCk-JLkAIFP4RrmfGG00L4jS_WJrCyEW0_gHIqvq-DpuAUuh5ozaMr053ceHJCzQ"
                alt="Architectural Design"
              />
            </div>
            <div className="space-y-3 md:space-y-4">
              <p className="text-xs font-semibold uppercase text-secondary tracking-wider">
                BLUEPRINT & CONCEPT
              </p>
              <h3 className="text-2xl sm:text-3xl md:text-4xl text-on-surface group-hover:text-primary transition-colors duration-300 font-medium">
                Architectural Design
              </h3>
              <p className="text-base text-secondary max-w-lg leading-relaxed">
                Transforming ambitious concepts into buildable realities. Our
                design phase integrates aesthetic elegance with technical
                feasibility, ensuring every line serves a purpose.
              </p>
              <Link
                href="/contact"
                className="pt-3 md:pt-4 inline-flex items-center gap-2 text-primary text-[10px] font-semibold uppercase tracking-widest group-hover:gap-4 transition-all duration-300 hover:text-primary-container"
              >
                Enquire Now
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>

          {/* Project Management */}
          <div className="group cursor-default md:mt-24 lg:mt-40">
            <div className="aspect-[16/10] overflow-hidden bg-neutral-100 mb-6 md:mb-8">
              <img
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVvInUqcbpI5P-3oE9HdQQNGOthRSHexCLvBSb5_bTX_S49GSmOQx4Pz5qAJfVX5Zr52V3NO1vFpIhnsigJLLXgoIj5BP0QwN38uPOpIykPApnxlE19EYV57UHhRVG01vnOXIdkU8n65rIympmzoz9Uzy9vy-ElqUIM8KRrkk3Z-M6Ry77x-LGdLz0yQjiYNTT9v6twEgfCaF8U05XVslsXWOmmm82QhwSKuoGL2xq4MquDktx-k661Pjrtl8pQMcyM-zfq2sVQxE"
                alt="Project Management"
              />
            </div>
            <div className="space-y-3 md:space-y-4">
              <p className="text-xs font-semibold uppercase text-secondary tracking-wider">
                OVERSIGHT & DELIVERY
              </p>
              <h3 className="text-2xl sm:text-3xl md:text-4xl text-on-surface group-hover:text-primary transition-colors duration-300 font-medium">
                Project Management
              </h3>
              <p className="text-base text-secondary max-w-lg leading-relaxed">
                Discreet and efficient management of all construction phases. We
                act as the single point of accountability, protecting your
                investment and ensuring deadlines are met with precision.
              </p>
              <Link
                href="/contact"
                className="pt-3 md:pt-4 inline-flex items-center gap-2 text-primary text-[10px] font-semibold uppercase tracking-widest group-hover:gap-4 transition-all duration-300 hover:text-primary-container"
              >
                Enquire Now
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Callout Section */}
      <section className="bg-surface-container-low py-16 sm:py-20 md:py-36 px-4 sm:px-6 md:px-16 text-center">
        <div className="max-w-2xl mx-auto space-y-6 md:space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-on-surface font-medium">
            Committed to Legacy
          </h2>
          <div className="w-12 h-px bg-primary mx-auto"></div>
          <p className="text-lg md:text-xl text-secondary">
            Every project we undertake is a testament to our belief that
            construction is an art of permanence. We build for the next
            generation.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-block px-8 md:px-12 py-4 md:py-5 bg-primary-container text-white text-xs font-semibold uppercase tracking-[0.2em] hover:bg-primary transition-colors"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}