type StackItem = {
  title: string;
  body: string;
  tag: string;
};

type ScrollStackLiteProps = {
  items: StackItem[];
};

export default function ScrollStackLite({ items }: ScrollStackLiteProps) {
  return (
    <div className="scroll-stack-lite">
      {items.map((item, index) => (
        <article
          key={item.title}
          className="scroll-stack-lite__card"
          style={{
            top: `${84 + index * 18}px`,
            zIndex: `${items.length - index}`,
          }}
        >
          <span>{item.tag}</span>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </article>
      ))}
    </div>
  );
}
