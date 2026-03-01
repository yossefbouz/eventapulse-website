import { useMemo, useRef, useState } from "react";

type TextPressureFxProps = {
  text: string;
  className?: string;
};

export default function TextPressureFx({ text, className }: TextPressureFxProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [pointer, setPointer] = useState(0.5);
  const chars = useMemo(() => Array.from(text), [text]);
  const denom = Math.max(1, chars.length - 1);

  return (
    <div
      ref={wrapRef}
      className={`text-pressure-fx ${className ?? ""}`}
      onMouseMove={(event) => {
        if (!wrapRef.current) return;
        const rect = wrapRef.current.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        setPointer(Math.max(0, Math.min(1, x)));
      }}
      onMouseLeave={() => setPointer(0.5)}
      aria-label={text}
    >
      {chars.map((char, index) => {
        const center = index / denom;
        const d = Math.abs(pointer - center);
        const influence = Math.max(0, 1 - d * 4.5);
        const weight = Math.round(420 + influence * 420);
        const scaleY = 1 + influence * 0.32;
        const tracking = influence * -0.02;
        return (
          <span
            key={`${char}-${index}`}
            className="text-pressure-fx__char"
            style={{
              fontWeight: weight,
              transform: `scaleY(${scaleY})`,
              letterSpacing: `${tracking}em`,
              opacity: 0.72 + influence * 0.28,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        );
      })}
    </div>
  );
}
