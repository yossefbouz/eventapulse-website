type CircularTextFxProps = {
  text: string;
  radius?: number;
  className?: string;
};

export default function CircularTextFx({ text, radius = 86, className }: CircularTextFxProps) {
  const chars = Array.from(text);
  const angle = 360 / chars.length;
  const size = radius * 2;

  return (
    <div
      className={`circular-text-fx ${className ?? ""}`}
      style={{ width: `${size}px`, height: `${size}px` }}
      aria-label={text}
    >
      {chars.map((char, index) => (
        <span
          key={`${char}-${index}`}
          className="circular-text-fx__char"
          style={{
            transform: `translate(-50%, -50%) rotate(${angle * index}deg) translateY(-${radius}px)`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
}
