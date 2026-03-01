import { useRef, useState } from "react";

type TiltedCardLiteProps = {
  title: string;
  subtitle: string;
  image: string;
};

export default function TiltedCardLite({ title, subtitle, image }: TiltedCardLiteProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({ rotateX: 0, rotateY: 0 });

  return (
    <article
      ref={ref}
      className="tilted-card"
      onMouseMove={(event) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const rx = -((y / rect.height) * 18 - 9);
        const ry = (x / rect.width) * 18 - 9;
        setStyle({ rotateX: rx, rotateY: ry });
      }}
      onMouseLeave={() => setStyle({ rotateX: 0, rotateY: 0 })}
      style={{
        transform: `perspective(900px) rotateX(${style.rotateX}deg) rotateY(${style.rotateY}deg)`,
      }}
    >
      <img src={image} alt={title} />
      <div className="tilted-card__meta">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </article>
  );
}
