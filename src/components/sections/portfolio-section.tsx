"use client";

import Image from "next/image";
import { portfolioContent, siteConfig } from "@/lib/content";

const s = {
  section: "bg-secondary section-spacing",
  container: "container mx-auto px-6",

  header: "flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6",
  headline: "font-heading text-4xl md:text-5xl text-foreground h2-industrial",
  description: "text-muted-foreground max-w-md mt-4",

  grid: "grid grid-cols-1 md:grid-cols-2 gap-6",

  card: "relative group overflow-hidden aspect-[4/3] bg-card border border-border/30 hover:border-primary/50 transition-colors",
  cardImage: "object-cover transition-transform duration-500 group-hover:scale-105",
  cardOverlay: "absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90",
  cardContent: "absolute bottom-0 left-0 right-0 p-6",
  cardTitle: "font-heading text-2xl text-foreground mb-2 group-hover:text-primary transition-colors",
  cardDesc: "text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2",
  cardTags: "flex flex-wrap gap-2",
  cardTag: "px-3 py-1 bg-primary/20 text-primary text-xs font-medium uppercase tracking-wide",

  cta: "mt-12 text-center",
  ctaButton: "inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-heading text-lg tracking-wider hover:bg-primary/90 transition-colors",
};

export function PortfolioSection() {
  return (
    <section id="realizacje" className={s.section}>
      <div className={s.container}>
        {/* Header */}
        <div className={s.header}>
          <div>
            <h2 className={s.headline}>{portfolioContent.headline}</h2>
            <p className={s.description}>{portfolioContent.description}</p>
          </div>
        </div>

        {/* Grid */}
        <div className={s.grid}>
          {portfolioContent.items.map((item) => (
            <div key={item.id} className={s.card}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                className={s.cardImage}
              />
              <div className={s.cardOverlay} />
              <div className={s.cardContent}>
                <h3 className={s.cardTitle}>{item.title}</h3>
                <p className={s.cardDesc}>{item.description}</p>
                <div className={s.cardTags}>
                  {item.tags.map((tag, i) => (
                    <span key={i} className={s.cardTag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={s.cta}>
          <a href={siteConfig.phoneHref} className={s.ctaButton}>
            <span className="material-symbols-outlined">call</span>
            {portfolioContent.cta.label}: {portfolioContent.cta.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
