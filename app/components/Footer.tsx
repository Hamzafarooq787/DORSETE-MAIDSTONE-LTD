export default function Footer() {
  return (
    <footer className="w-full bg-neutral-900 border-t border-neutral-800">
      <div className="flex flex-col items-center text-center px-6 md:px-16 py-16 md:py-32 space-y-6 md:space-y-8 w-full">
        <div className="text-base md:text-lg font-medium text-neutral-100 tracking-[0.4em] uppercase">
          DORSETE MAIDSTONE LTD
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12">
          <a
            href="mailto:sales@dorsetemaidstone.co.uk"
            className="font-sans tracking-widest uppercase text-xs md:text-sm leading-loose text-neutral-400 hover:text-[#952915] transition-all"
          >
            sales@dorsetemaidstone.co.uk
          </a>
        </div>
        <div className="w-12 h-[1px] bg-neutral-700"></div>
        <p className="font-sans tracking-widest uppercase text-xs md:text-sm leading-loose text-neutral-500">
          © 2025 DORSETE MAIDSTONE LTD. 284 HIGH STREET, STOKE-ON-TRENT, ST6 5TY
        </p>
      </div>
    </footer>
  );
}