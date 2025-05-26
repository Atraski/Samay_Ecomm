import { useEffect, useRef } from "react";
import { FaCertificate } from "react-icons/fa";
import { GiDiamondTrophy } from "react-icons/gi";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const MarqueeScroll = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    let offset = 0;

    const scroll = () => {
      offset -= 1;
      if (marquee) {
        marquee.style.transform = `translateX(${offset}px)`;
        if (Math.abs(offset) >= marquee.scrollWidth / 2) {
          offset = 0;
        }
      }
      requestAnimationFrame(scroll);
    };

    scroll();
  }, []);

  const items = [
    { icon: <GiDiamondTrophy size={20} />, text: "CURATED LUXURY SELECTION" },
    { icon: <FaCertificate size={20} />, text: "LIMITED EDITIONS" },
    { icon: <RiVerifiedBadgeFill size={20} />, text: "AUTHENTICITY GUARANTEED" },
  ];

  return (
    <div className="bg-black overflow-hidden whitespace-nowrap">
      <div
        className="flex w-max animate-none text-white gap-10 px-4 py-3"
        ref={marqueeRef}
      >
        {[...Array(10)].flatMap(() =>
          items.map((item, index) => (
            <div key={index} className="flex items-center gap-2 min-w-max">
              {item.icon}
              <span className="font-semibold text-sm">{item.text}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MarqueeScroll;
