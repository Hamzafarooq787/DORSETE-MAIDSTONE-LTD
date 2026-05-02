export default function ContactPage() {
  return (
    <>
      {/* Hero Section – identical styling to home page */}
      <section className="relative h-[819px] w-full bg-surface-container overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-80 grayscale-[30%]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqU61Up4LccD1BhIVccMIFAd0joWm2mHKL2uxvwC8HBrYZy_cGem8HEjNcSZzHBnGakl2ITmjCv7c-xufoeTbXphvk-lRV8KVbBjvDrPiKnHJcN_bHem-pBUhJ59jFaCA2k6SQw4Ama-wTgWzZK-3KNJRTup9WFEpjZKVhOfgENlmV6lyAXYvfx30wI8DIvGQ5hN-0cDxiq3l7O9ADmnUvaCHAdel-UC9Rb5h3hUuxW45_Q1SKD9Fvhqn-I7Pw9y6U-BQ-VFJL1oM"
            alt="Architectural detail"
          />
        </div>
        <div className="relative z-10 px-margin-edge max-w-4xl">
          <span className="font-label-caps text-label-caps text-primary block mb-gutter uppercase tracking-[0.3em]">
            Establishment
          </span>
          <h1 className="font-display-xl text-display-xl text-on-surface leading-tight">
            Dorsete <br />
            Maidstone LTD
          </h1>
          <p className="font-body-lg text-body-lg text-secondary mt-8 max-w-2xl">
            Reach out to our team for project inquiries, partnership discussions,
            or to schedule a studio visit. We respond within 48 hours.
          </p>
        </div>
      </section>

      {/* Contact Information Section (from your HTML) */}
      <section className="max-w-screen-2xl mx-auto px-margin-edge py-section-gap">
        <div className="grid grid-cols-12 gap-gutter">
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-start">
            <span className="font-label-caps text-label-caps text-primary uppercase mb-8">
              Contact
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-12">
              Studio &<br />
              Inquiries
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 flex flex-col justify-center space-y-16">
            <div>
              <span className="font-label-caps text-label-caps text-neutral-400 uppercase block mb-4">
                Location
              </span>
              <p className="font-headline-md text-headline-md text-on-surface leading-tight">
                284 HIGH STREET,<br />
                STOKE-ON-TRENT,<br />
                ST6 5TY
              </p>
            </div>
            <div>
              <span className="font-label-caps text-label-caps text-neutral-400 uppercase block mb-4">
                Inquiries
              </span>
              <a
                className="group inline-flex items-center space-x-4"
                href="mailto:sales@dorsetemaidstone.co.uk"
              >
                <span className="font-headline-md text-headline-md text-primary group-hover:text-primary-container transition-colors duration-300">
                  sales@dorsetemaidstone.co.uk
                </span>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform duration-300">
                  north_east
                </span>
              </a>
            </div>
            <div className="pt-8 border-t border-neutral-100 max-w-sm">
              <p className="font-body-md text-body-md text-neutral-500 italic">
                For project inquiries and commercial partnership discussions,
                please reach out via our dedicated sales channel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map / Location Detail Section (from your HTML) */}
      <section className="w-full bg-neutral-50 py-section-gap">
        <div className="max-w-screen-2xl mx-auto px-margin-edge">
          <div className="relative w-full aspect-[21/9] overflow-hidden rounded-lg bg-white shadow-sm border border-neutral-200">
            <img
              className="w-full h-full object-cover grayscale opacity-40 mix-blend-multiply"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP8_cXyMtvgcDmqGgYBU8aAxQEcQNOOkR2o76XeGkFCURmF3L4uh1wUmoU1odob4FdTeUrKud2E-4KMlYbDrYLxW-LOL-Bf1Dbw3zDeBmifmXyH9EqbPHWiocfRM8nWHt-Qnznq5Mg5OkrbNt_H9ohNx2IdQiUp4GiBR1rmwdnZnefnTl_848u1UzNvpLHoEwJM5MPrssam0O23kE7sXy_9dLUSgSuo0nTkoJIaUY426HBxTuOfQqjwuOl9gh6vWirXL5snj8q-ig"
              alt="Location reference"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-md px-12 py-8 border border-neutral-100 shadow-xl flex flex-col items-center">
                <span
                  className="material-symbols-outlined text-primary text-4xl mb-2"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  location_on
                </span>
                <span className="font-label-caps text-label-caps text-on-surface">
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