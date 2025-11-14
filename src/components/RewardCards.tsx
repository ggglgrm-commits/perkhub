import { FiGift, FiShoppingBag } from "react-icons/fi";

const rewards = [
  {
    title: "Amazon Gift Card",
    tag: "Popular",
    description: "Instant Amazon reward – tap to claim.",
    link: "https://uplevelrewarded.com/aff_c?offer_id=144&aff_id=158779",
    icon: FiGift,
  },
  {
    title: "Shein Gift Card",
    tag: "Limited",
    description: "Grab your Shein reward before it's gone.",
    link: "https://getrewarrds.com/aff_c?offer_id=1229&aff_id=158779",
    icon: FiShoppingBag,
  },
];

const RewardCards = () => {
  return (
    <section id="rewards" className="py-6">
      <div className="mx-auto max-w-md px-3">
        {/* Heading */}
        <div className="mb-4 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-pink-500">
            Rewards
          </p>
          <h2 className="text-xl font-bold text-slate-900">
            Claim Gift Cards
          </h2>
          <p className="mt-1 text-xs text-slate-500">
            Tap a card below to open your reward link.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-3">
          {rewards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block rounded-xl bg-gradient-to-r from-pink-500/60 to-fuchsia-500/60 p-[1px] shadow-sm hover:shadow-md transition"
              >
                <div className="rounded-xl bg-white p-3">
                  {/* Top row */}
                  <div className="flex items-start gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-50 group-hover:bg-pink-100 transition">
                      <Icon className="text-base" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-semibold text-slate-900 leading-tight">
                          {item.title}
                        </h3>

                          {item.tag && (
                          <span className="rounded-full bg-pink-50 px-2 py-[1px] text-[9px] font-medium text-pink-600">
                            {item.tag}
                          </span>
                        )}
                      </div>

                      <p className="mt-[2px] text-[11px] text-slate-500 leading-snug">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom row */}
                  <div className="mt-2 flex items-center justify-between text-[10px] text-pink-600">
                    <span className="font-medium group-hover:text-pink-700">
                      Tap to open
                    </span>
                    <span className="text-slate-400 group-hover:text-slate-500">
                      ↗
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RewardCards;
