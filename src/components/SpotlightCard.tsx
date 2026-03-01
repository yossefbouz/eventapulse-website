import { CSSProperties, PropsWithChildren, useRef, useState } from "react";

type SpotlightCardProps = PropsWithChildren<{
  className?: string;
}>;

export default function SpotlightCard({ children, className }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <article
      ref={ref}
      className={`spotlight-card ${className ?? ""}`}
      onMouseMove={(event) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        setPos({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }}
      style={
        {
          "--spot-x": `${pos.x}px`,
          "--spot-y": `${pos.y}px`,
        } as CSSProperties
      }
    >
      <div className="spotlight-card__glow" />
      <div className="spotlight-card__content">{children}</div>
    </article>
  );
}
