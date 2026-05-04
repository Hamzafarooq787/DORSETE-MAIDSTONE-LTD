import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#fdcb6e] border-t border-yellow-300">
      <div className="flex flex-col items-center text-center px-6 md:px-16 py-16 md:py-32 space-y-6 md:space-y-8 w-full">
        
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
            className="font-sans tracking-widest uppercase text-xs md:text-sm leading-loose text-neutral-800 hover:text-[#952915] transition-all"
          >
            sales@dorsetemaidstone.co.uk
          </a>
        </div>

        {/* Divider */}
        <div className="w-12 h-[1px] bg-yellow-900"></div>

        {/* Copyright */}
        <p className="font-sans tracking-widest uppercase text-xs md:text-sm leading-loose text-neutral-800">
          © 2025 DORSETE MAIDSTONE LTD. 284 HIGH STREET, STOKE-ON-TRENT, ST6 5TY
        </p>
      </div>
    </footer>
  );
}