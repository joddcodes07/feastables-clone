const Threadmill = () => {
  // Added non-breaking spaces (\u00A0) to increase the gap between the words and the '○' separators
  const textItems = Array(20).fill("FIND US AT WALMART \u00A0\u00A0 ○ \u00A0\u00A0 TARGET \u00A0\u00A0 ○ \u00A0\u00A0 7-ELEVEN \u00A0\u00A0 ○ \u00A0\u00A0");

  return (
    <section className="w-full py-6 md:py-10 overflow-hidden">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
        {textItems.map((text, i) => (
          <span
            key={i}
            className="text-white text-6xl md:text-7xl lg:text-[100px] leading-none font-black italic uppercase whitespace-pre px-4 tracking-tighter"
            style={{
              WebkitTextStroke: '3px #000',
              textShadow: '4px 4px 0px #ff85d5, 5px 5px 0px #000, 6px 6px 0px #000'
            }}
          >
            {text}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Threadmill;
