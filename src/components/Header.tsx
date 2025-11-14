import { FiHeart } from "react-icons/fi";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-pink-100 bg-pink-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-md items-center justify-between px-3 py-2">
        {/* Logo / Brand */}
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900">
            <FiHeart className="text-[14px] text-pink-200" />
          </div>
          <div className="leading-tight">
            <p className="text-[13px] font-semibold text-slate-900">
              PerkHub
            </p>
            <p className="text-[10px] text-slate-500">
              Rewards, coupons & gift cards
            </p>
          </div>
        </div>

        {/* Right side small text */}
        <div className="text-right">
          <p className="text-[10px] font-medium text-slate-600">
            Safe & simple
          </p>
          <p className="text-[9px] text-slate-400">
            Mobile friendly
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
