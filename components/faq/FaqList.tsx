import { useState } from "react";
import FaqItem from "./FaqItem";
import { faqItems } from "@/data/faqItems";

export default function FaqList() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-12 text-[18px]">
      {faqItems.map((item, index) => (
        <FaqItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onClick={() => toggleIndex(index)}
          iconId={index + 1}
        />
      ))}
    </section>
  );
}
