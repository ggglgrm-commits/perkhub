import { useEffect, useState } from "react";
import { FiGift } from "react-icons/fi";

const messages = [
  "Someone just checked Amazon Gift Card 🎁",
  "Shein reward link opened 2 min ago 👀",
  "Limited Shein slots – tap to see",
];

const LiveNotification = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const changeMsg = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 6000);

    return () => clearInterval(changeMsg);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => (window.location.hash = "#rewards")}
      className="fixed bottom-3 left-1/2 z-40 w-[90%] max-w-xs -translate-x-1/2 rounded-full bg-slate-900 px-3 py-2 text-left shadow-lg active:scale-[0.98] transition"
    >
      <div className="flex items-center gap-2">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-pink-500/90">
          <FiGift className="text-xs text-white" />
        </div>
        <p className="flex-1 text-[11px] text-white truncate">
          {messages[index]}
        </p>
        <span className="text-[10px] text-pink-100">View</span>
      </div>
    </button>
  );
};

export default LiveNotification;
