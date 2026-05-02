export default function Footer() {
  return (
    <footer className="w-full bg-neutral-50 border-t border-neutral-200">
      <div className="flex flex-col items-center text-center px-16 py-32 space-y-8 w-full">
        <div className="text-sm font-medium text-neutral-900 tracking-[0.4em] uppercase font-headline-md">
          DORSETE MAIDSTONE LTD
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12">
          <a
            href="mailto:sales@dorsetemaidstone.co.uk"
            className="font-manrope tracking-widest uppercase text-[10px] leading-loose text-neutral-400 hover:text-[#bfa05a] transition-all"
          >
            sales@dorsetemaidstone.co.uk
          </a>
        </div>
        <div className="w-12 h-[1px] bg-neutral-300"></div>
        <p className="font-manrope tracking-widest uppercase text-[10px] leading-loose text-neutral-400">
          © 2025 DORSETE MAIDSTONE LTD. 284 HIGH STREET, STOKE-ON-TRENT, ST6 5TY
        </p>
      </div>
    </footer>
  );
}