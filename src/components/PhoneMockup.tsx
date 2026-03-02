type PhoneMockupProps = {
  src: string;
  alt: string;
  className?: string;
  glow?: "pink" | "blue" | "amber";
};

export default function PhoneMockup({ src, alt, className, glow = "blue" }: PhoneMockupProps) {
  return (
    <div className={`phone-mockup phone-mockup--${glow} ${className ?? ""}`.trim()}>
      <div className="phone-mockup__shell">
        <div className="phone-mockup__bezel">
          <span className="phone-mockup__notch" aria-hidden="true" />
          <img src={src} alt={alt} loading="lazy" />
        </div>
      </div>
    </div>
  );
}
