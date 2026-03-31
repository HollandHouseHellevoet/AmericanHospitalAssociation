interface PullQuoteProps {
  text: string;
}

export default function PullQuote({ text }: PullQuoteProps) {
  return (
    <blockquote
      className="border-l-4 border-orange pl-6 py-4 my-8"
      style={{ backgroundColor: "#1e3040" }}
    >
      <p className="font-cormorant text-[22px] italic text-cream leading-relaxed">{text}</p>
    </blockquote>
  );
}
