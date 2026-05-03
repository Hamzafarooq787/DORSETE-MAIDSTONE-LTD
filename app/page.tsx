export default function HomePage() {
  return (
    <>
      {/* Hero Section (unchanged) */}
      <section className="relative h-screen w-full mt-8 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover brightness-[0.85] saturate-[1.05]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4BcKkKRkGGvG2gj6WrT2unUxgTJmye5hOddcPz3B1O30RPRDM7iSz2AFo5Y3xY2alnfoizPPf4RGXwyfaW-31KN46MFWuzUhR09JgbkBIvb6cLxNca99HfzC6ckJg4QZRvVtVZgKiGPTYa35MX3mD7gAFsVronP7gwZ4sEomaLSSr9PxSRIAO78hsFuGeaJR31M6ZHG5u8OmMK2gmTs_eRWZP1ikuSI3q8p3i6_OK4sBxGuj8NyQQ7iL0PNFuQ16dZh1l77T2JRU"
            alt="Modern Architecture"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-primary-container/5 to-black/30"></div>
        </div>
        <div className="relative z-10 px-6 md:px-16 w-full max-w-screen-xl mx-auto text-center">
          <div className="inline-block mb-6">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-container bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full">
              Premier Development
            </span>
          </div>
          <h1 className="text-7xl md:text-7xl text-white leading-tight drop-shadow-lg [text-shadow:0_4px_20px_rgba(0,0,0,0.3)] font-light">
            REDEFINING <br />
            <span className="italic font-light text-primary-container drop-shadow-md">
              ARCHITECTURAL
            </span> <br />
            EXCELLENCE
          </h1>
          <div className="mt-10">
            <button className="bg-primary-container text-white px-12 py-5 text-xs font-semibold uppercase tracking-[0.2em] hover:bg-primary hover:scale-105 transition-all duration-300 shadow-xl border border-white/20">
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Intro Section – no white */}
      <section className="py-20 md:py-40 bg-[#EAEAEA]">
        <div className="px-6 md:px-16 max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5 space-y-12">
              <h2 className="text-5xl md:text-5xl text-on-surface font-medium">The Art of Precision</h2>
              <div className="w-24 h-1 bg-primary-container"></div>
            </div>
            <div className="col-span-12 md:col-span-7">
              <p className="text-lg text-secondary leading-relaxed max-w-2xl">
                DORSETE MAIDSTONE LTD operates at the intersection of heritage craftsmanship and avant‑garde design...
              </p>
              <p className="text-lg text-secondary leading-relaxed max-w-2xl mt-8">
                From high‑net‑worth private residences to complex commercial developments...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Preview – no white */}
      <section className="pb-20 md:pb-40 bg-[#EAEAEA]">
        <div className="px-6 md:px-16 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden bg-surface-dim mb-8">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLY7Mg1Ywk8GwDyrqDNHez49FnlruZJxit7GG-iUQ3iBDwPwItvDXwPyOVwTopEkVDUVHNB4gCr4Qcwdh-5kW5bw6RyXQ_jHb7YOWxJrSj9WztU1ovz2ZXYi0xpWVfA5S8nwfleP9fVlBz5rcLIEsJhC8JxLR6otKiLcyGnns-Q7j1zjHHs9ljBr7Faoz8vh6ceuwO8q-FhFwnXg9eXGkWotyKkIeQQQgDsaNeJFkmObkuwPvOZYIZsaUsO_Y-bKdGpCpeArYbcMs" alt="Minimalist Interior" />
              </div>
              <span className="text-xs font-semibold uppercase text-primary tracking-wider">Residential / 2024</span>
              <h3 className="text-3xl md:text-3xl text-on-surface mt-2 group-hover:text-primary transition-colors font-medium">The Obsidian Pavilion</h3>
            </div>
            <div className="group cursor-pointer md:mt-32">
              <div className="aspect-[4/5] overflow-hidden bg-surface-dim mb-8">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnpIINgOdq2SA0CWuk9AE7AmK2BedxSJouR9p4PnxwoBQ2VUfU534qD7zv5RBDTqMiPn9TQfoOWmfz1hKJ1qvYKOHru3b_tjX7d1h3oG7vPJ6I0ASQDFnxK4s3UQT0nWJhAS2OUzu8gO0mkLRxgGttJ2uif2U0VKZZnrk1Apoe3q8adtunBcG4RZbOMK9Z7FbmY4xr7UD9NOjh4YjJA4V1iMiMr3hIDdhuJY4g14AKnwnQ8F_4TTDDmhwXf8cl9F1Are4wY26G5UE" alt="Commercial Space" />
              </div>
              <span className="text-xs font-semibold uppercase text-primary tracking-wider">Commercial / 2023</span>
              <h3 className="text-3xl md:text-3xl text-on-surface mt-2 group-hover:text-primary transition-colors font-medium">Maidstone Plaza</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 md:py-40 bg-neutral-50">
        <div className="px-6 md:px-16 max-w-4xl mx-auto text-center space-y-12">
          <span className="material-symbols-outlined text-4xl text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
          <blockquote className="text-5xl md:text-7xl text-on-surface italic font-light leading-tight">
            “We do not build houses; we curate experiences that stand the test of time.”
          </blockquote>
          <p className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">— Managing Director</p>
        </div>
      </section>

      {/* Philosophy – no white */}
      <section className="py-20 md:py-40 bg-[#EAEAEA]">
        <div className="px-6 md:px-16 max-w-screen-2xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs font-semibold uppercase text-primary tracking-wider">Foundations</span>
            <h2 className="text-5xl md:text-5xl text-on-surface mt-4 font-medium">Three Pillars of Excellence</h2>
            <div className="w-20 h-0.5 bg-primary-container mx-auto mt-6"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Material Integrity", desc: "We source only the finest, most durable materials...", icon: "handshake" },
              { title: "Design Precision", desc: "Every angle, joint, and finish is modelled in 3D...", icon: "draw" },
              { title: "Legacy Focus", desc: "Our buildings are designed to appreciate in value...", icon: "history_edu" },
            ].map((p, i) => (
              <div key={i} className="text-center group">
                <span className="material-symbols-outlined text-5xl text-primary-container group-hover:text-primary transition-colors">{p.icon}</span>
                <h3 className="text-2xl mt-6 mb-3 font-medium">{p.title}</h3>
                <p className="text-secondary">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards – no white */}
      <section className="py-20 md:py-40 bg-neutral-50">
        <div className="px-6 md:px-16 max-w-screen-2xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase text-primary tracking-wider">Recognition</span>
          <h2 className="text-5xl md:text-5xl text-on-surface mt-4 font-medium">Accolades & Publications</h2>
          <div className="flex flex-wrap justify-center gap-12 mt-16">
            {["RIBA Award 2023", "BD Architect of Year", "FT ‘Top 50 Builders’", "Dezeen Featured"].map((award, idx) => (
              <div key={idx} className="border border-primary-container/30 px-8 py-4 text-primary-container font-semibold tracking-wide">{award}</div>
            ))}
          </div>
          <p className="text-secondary max-w-2xl mx-auto mt-12">Our work has been featured in Architectural Digest, Wallpaper*, and The Times.</p>
        </div>
      </section>

      {/* Sustainable – no white */}
      <section className="py-20 md:py-40 bg-[#EAEAEA]">
        <div className="px-6 md:px-16 max-w-screen-2xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-semibold uppercase text-primary tracking-wider">Future‑ready</span>
            <h2 className="text-5xl md:text-5xl text-on-surface mt-4 font-medium">Building with Conscience</h2>
            <div className="w-16 h-0.5 bg-primary-container mt-6 mb-8"></div>
            <p className="text-secondary text-lg mb-6">We integrate passive solar design, green roofs, and high‑performance glazing into every project...</p>
            <ul className="space-y-3 text-secondary">
              <li className="flex gap-2"><span className="text-primary">✓</span> Carbon‑neutral concrete options</li>
              <li className="flex gap-2"><span className="text-primary">✓</span> Smart building automation ready</li>
              <li className="flex gap-2"><span className="text-primary">✓</span> Local sourcing & waste reduction</li>
            </ul>
          </div>
          <div className="bg-surface-dim aspect-[4/3] overflow-hidden shadow-xl">
            <img className="w-full h-full object-cover" src="https://picsum.photos/id/106/800/600" alt="Sustainable building" />
          </div>
        </div>
      </section>

      {/* FAQ – no white */}
      <section className="py-20 md:py-40 bg-neutral-50">
        <div className="px-6 md:px-16 max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase text-primary tracking-wider">Answers</span>
            <h2 className="text-5xl md:text-5xl text-on-surface mt-2 font-medium">Frequently Asked Questions</h2>
            <div className="w-16 h-0.5 bg-primary-container mx-auto mt-4"></div>
          </div>
          <div className="space-y-6">
            {[
              { q: "What types of projects do you specialise in?", a: "Private luxury residences, mixed‑use commercial developments, and bespoke cultural spaces." },
              { q: "How do you ensure design originality?", a: "We never repeat designs. Each project is uniquely crafted to its site, client, and context." },
              { q: "What is your typical project timeline?", a: "Residential: 12–18 months; commercial: 18–30 months." },
              { q: "Do you work with external architects?", a: "Yes, we frequently act as construction partner for leading architectural practices." },
              { q: "How can I request a consultation?", a: "Email sales@dorsetemaidstone.co.uk or use the contact form on our website." },
            ].map((faq, idx) => (
              <details key={idx} className="group border-b border-neutral-200 pb-4">
                <summary className="flex justify-between items-center cursor-pointer list-none py-4 font-semibold text-on-surface">
                  <span>{faq.q}</span>
                  <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <p className="text-secondary pb-2 pl-2">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}