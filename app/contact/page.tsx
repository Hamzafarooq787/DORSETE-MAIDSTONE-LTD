export default function ContactPage() {
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
        <div className="relative z-10 px-6 md:px-16 max-w-4xl">
          <span className="text-xs font-semibold uppercase text-primary block mb-6 tracking-[0.3em]">
            Establishment
          </span>
          <h1 className="text-5xl md:text-7xl text-on-surface leading-tight font-light">
            Dorsete <br />
            Maidstone LTD
          </h1>
          <p className="text-lg md:text-xl text-secondary mt-6 md:mt-8 max-w-2xl">
            Reach out to our team for project inquiries, partnership discussions,
            or to schedule a studio visit. We respond within 48 hours.
          </p>
        </div>
      </section>

      {/* Contact Information Section – responsive grid */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-16 py-20 md:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
          <div className="lg:col-span-5 flex flex-col justify-start">
            <span className="text-xs font-semibold uppercase text-primary mb-6 md:mb-8 tracking-wider">
              Contact
            </span>
            <h2 className="text-4xl md:text-5xl text-on-surface mb-8 md:mb-12 font-medium">
              Studio &<br />
              Inquiries
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center space-y-10 md:space-y-16">
            <div>
              <span className="text-xs font-semibold uppercase text-neutral-400 block mb-3 md:mb-4 tracking-wider">
                Location
              </span>
              <p className="text-2xl md:text-3xl text-on-surface leading-tight font-medium">
                284 HIGH STREET,<br />
                STOKE-ON-TRENT,<br />
                ST6 5TY
              </p>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase text-neutral-400 block mb-3 md:mb-4 tracking-wider">
                Inquiries
              </span>
              <a
                className="group inline-flex items-center gap-2 md:gap-4 flex-wrap"
                href="mailto:sales@dorsetemaidstone.co.uk"
              >
                <span className="text-2xl md:text-3xl text-primary group-hover:text-primary-container transition-colors duration-300 font-medium break-all">
                  sales@dorsetemaidstone.co.uk
                </span>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform duration-300">
                  north_east
                </span>
              </a>
            </div>
            <div className="pt-6 md:pt-8 border-t border-neutral-200 max-w-sm">
              <p className="text-base text-neutral-500 italic">
                For project inquiries and commercial partnership discussions,
                please reach out via our dedicated sales channel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map / Location Detail Section */}
      <section className="w-full bg-neutral-50 py-20 md:py-36">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-16">
          <div className="relative w-full aspect-[21/9] overflow-hidden rounded-lg bg-white shadow-sm border border-neutral-200">
            <img
              className="w-full h-full object-cover grayscale opacity-40 mix-blend-multiply"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP8_cXyMtvgcDmqGgYBU8aAxQEcQNOOkR2o76XeGkFCURmF3L4uh1wUmoU1odob4FdTeUrKud2E-4KMlYbDrYLxW-LOL-Bf1Dbw3zDeBmifmXyH9EqbPHWiocfRM8nWHt-Qnznq5Mg5OkrbNt_H9ohNx2IdQiUp4GiBR1rmwdnZnefnTl_848u1UzNvpLHoEwJM5MPrssam0O23kE7sXy_9dLUSgSuo0nTkoJIaUY426HBxTuOfQqjwuOl9gh6vWirXL5snj8q-ig"
              alt="Location reference"
            />
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <div className="bg-white/90 backdrop-blur-md px-8 md:px-12 py-6 md:py-8 border border-neutral-100 shadow-xl flex flex-col items-center">
                <span
                  className="material-symbols-outlined text-primary text-3xl md:text-4xl mb-1 md:mb-2"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  location_on
                </span>
                <span className="text-xs font-semibold uppercase text-on-surface tracking-wider">
                  STOKE-ON-TRENT HQ
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}