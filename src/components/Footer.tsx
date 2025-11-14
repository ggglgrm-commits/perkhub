const Footer = () => {
  return (
    <footer className="mt-6 border-t border-pink-100 bg-pink-50">
      <div className="mx-auto max-w-md px-3 py-3 text-center">
        <p className="text-[10px] text-slate-500">
          © {new Date().getFullYear()} PerkHub — All rights reserved.
        </p>
        <p className="mt-1 text-[9px] text-slate-400">
          PerkHub connects users with third-party rewards, coupons and gift card
          offers.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
