import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#fdcb6e] border-t border-yellow-300">
      <div className="flex flex-col items-center text-center px-6 md:px-16 pt-16 md:pt-24 pb-10 md:pb-12 space-y-6 md:space-y-8 w-full">

        {/* Logo Image */}
        <div className="flex justify-center">
          <Image
            src="/logo1.webp"
            alt="Dorsete Maidstone Logo"
            width={160}
            height={60}
            className="object-contain"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12">
          <a
            href="mailto:sales@dorsetemaidstone.co.uk"
            className="font-sans tracking-widest uppercase text-xs md:text-sm leading-loose text-neutral-800 hover:text-[#952915] transition-all break-all"
          >
            sales@dorsetemaidstone.co.uk
          </a>
        </div>

        {/* Divider */}
        <div className="w-12 h-[1px] bg-yellow-900"></div>
      </div>

      {/* Bottom bar: copyright left, designed-by right */}
      <div className="border-t border-yellow-900/20 px-6 md:px-16 py-6 md:py-8 max-w-screen-2xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-6 text-center md:text-left">
          <p className="font-sans tracking-widest uppercase text-[10px] sm:text-xs leading-loose text-neutral-800">
            © 2026 DORSETE MAIDSTONE LTD. 284 HIGH STREET, STOKE-ON-TRENT, ST6 5TY.
          </p>
          <p className="font-sans tracking-widest uppercase text-[10px] sm:text-xs leading-loose text-neutral-800">
            Designed by{" "}
            <a
              href="https://linkedo.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-[#952915] transition-colors underline-offset-4 hover:underline"
            >
              Linkedo
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
