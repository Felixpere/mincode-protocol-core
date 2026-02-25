const Marquee = () => {
  const text = "MINIMALISMO · OSCURIDAD · REPETICIÓN · FRICCIÓN · ";
  const repeated = text.repeat(8);

  return (
    <div className="w-full overflow-hidden border-t border-b border-border py-4">
      <div className="animate-marquee whitespace-nowrap">
        <span className="text-sm tracking-[0.3em] text-muted-foreground font-mono uppercase">
          {repeated}
        </span>
      </div>
    </div>
  );
};

export default Marquee;
