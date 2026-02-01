"use client";

import { useState } from "react";
import { faqContent } from "@/lib/content";

const s = {
  section: "bg-background section-spacing",
  container: "container mx-auto px-6",

  header: "text-center mb-12",
  headline: "font-heading text-4xl md:text-5xl text-foreground h2-industrial-center",

  items: "max-w-3xl mx-auto space-y-4",
  item: "border border-border/50 bg-card overflow-hidden",
  itemOpen: "border-primary/50",

  question: "w-full flex justify-between items-center p-6 text-left cursor-pointer hover:bg-secondary/50 transition-colors",
  questionText: "font-heading text-lg text-foreground pr-4",
  questionIcon: "w-8 h-8 bg-primary/10 flex items-center justify-center shrink-0 transition-colors",
  questionIconOpen: "bg-primary",
  questionIconInner: "text-primary text-lg",
  questionIconInnerOpen: "text-primary-foreground",

  answer: "px-6 pb-6 text-muted-foreground leading-relaxed",
};

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className={s.section}>
      <div className={s.container}>
        {/* Header */}
        <div className={s.header}>
          <h2 className={s.headline}>{faqContent.headline}</h2>
        </div>

        {/* FAQ Items */}
        <div className={s.items}>
          {faqContent.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className={`${s.item} ${isOpen ? s.itemOpen : ""}`}>
                <button
                  className={s.question}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className={s.questionText}>{item.question}</span>
                  <div className={`${s.questionIcon} ${isOpen ? s.questionIconOpen : ""}`}>
                    <span className={`material-symbols-outlined ${isOpen ? s.questionIconInnerOpen : s.questionIconInner}`}>
                      {isOpen ? "remove" : "add"}
                    </span>
                  </div>
                </button>
                {isOpen && (
                  <div className={s.answer}>
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
