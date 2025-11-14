import { FiGift, FiChevronDown } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section className="pt-4 pb-6">
      <div className="mx-auto max-w-md px-3">
        {/* Top pill */}
        <div className="inline-flex items-center gap-1 rounded-full bg-pink-50 px-2 py-[3px]">
          <FiGift className="text-xs" />
          <span className="text-[10px] font-medium text-pink-600">
            Claim Amazon & Shein gift cards
          </span>
        </div>

        {/* Heading */}
        <h1 className="mt-2 text-[22px] leading-snug font-bold text-slate-900">
          PerkHub —  
          <span className="block">
            tap & claim your perks 💝
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-2 text-[11px] leading-relaxed text-slate-600">
          No confusion, no long forms. Just pick your reward and open the link.
          Fast, simple and made for mobile.
        </p>

        {/* CTA buttons */}
        <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center">
          <a
            href="#rewards"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-[12px] font-semibold text-white shadow-sm active:scale-[0.98] transition"
          >
            View gift cards
            <FiChevronDown className="ml-1 text-xs" />
          </a>

          <p className="text-[10px] text-slate-500 sm:ml-2">
            Amazon & Shein offers · updated regularly
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
