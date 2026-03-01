type SplitTextFxProps = {
  text: string;
  className?: string;
};

export default function SplitTextFx({ text, className }: SplitTextFxProps) {
  const words = text.split(" ");
  return (
    <span className={`split-text-fx ${className ?? ""}`} aria-label={text}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="split-text-fx__word"
          style={{ animationDelay: `${index * 90}ms` }}
        >
          {word}
          {index < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </span>
  );
}
