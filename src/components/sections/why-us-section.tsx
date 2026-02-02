"use client";

import Image from "next/image";
import { whyUsContent } from "@/lib/content";

const s = {
  section: "bg-secondary section-spacing relative overflow-hidden",
  container: "container mx-auto px-6 relative z-10",
  grid: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center",

  content: "flex flex-col gap-8",
  headline: "font-heading text-4xl sm:text-5xl md:text-6xl text-foreground h2-industrial",
  description: "space-y-4",
  paragraph: "text-body text-muted-foreground",

  featuresGrid: "grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8",
  featureCard: "bg-background/50 p-6 border border-border/30 card-hover hover:border-primary/40 group transition-all duration-300",
  featureCardHighlight: "bg-primary/5 border-primary/50 hover:bg-primary/10 hover:border-primary relative",
  featureIcon: "icon-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors rounded-lg",
  featureIconInner: "text-primary",
  featureTitle: "font-heading text-lg text-foreground mb-2 group-hover:text-primary transition-colors",
  featureDesc: "text-sm text-muted-foreground leading-relaxed",
  
  // Highlight badge for the award
  awardBadge: "absolute -top-3 -right-3 z-10 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-1 uppercase tracking-wider rounded-sm shadow-lg",

  imageWrapper: "relative aspect-[4/3] lg:aspect-[3/4] group",
  image: "object-cover transition-all duration-700 ease-in-out",
  imageOverlay: "absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent z-10",
  imageBorder: "absolute top-4 left-4 right-4 bottom-4 border border-primary/30 z-20 transition-all duration-500 group-hover:scale-95",
  imageFrame: "absolute -bottom-6 -right-6 w-2/3 h-2/3 border-r-2 border-b-2 border-primary/20 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500",
};

const iconMap: Record<string, string> = {
  EmojiEvents: "emoji_events",
  Star: "star",
  Build: "build",
  Palette: "palette",
};

export function WhyUsSection() {
  return (
    <section id="o-nas" className={s.section}>
      <div className={s.container}>
        <div className={s.grid}>
          {/* Left Content */}
          <div className={s.content}>
            <h2 className={s.headline}>{whyUsContent.headline}</h2>

            <div className={s.description}>
              {whyUsContent.description.map((para, i) => (
                <p key={i} className={s.paragraph}>{para}</p>
              ))}
            </div>

            {/* Features Grid */}
            <div className={s.featuresGrid}>
              {whyUsContent.features.map((feature, i) => {
                const isAward = feature.title.includes("Laureat");
                return (
                  <div key={i} className={`${s.featureCard} ${isAward ? s.featureCardHighlight : ''}`}>
                    {isAward && <div className={s.awardBadge}>Top Choice</div>}
                    <div className={s.featureIcon}>
                      <span className={`material-symbols-outlined text-2xl ${s.featureIconInner}`}>
                        {iconMap[feature.icon] || "check_circle"}
                      </span>
                    </div>
                    <h3 className={s.featureTitle}>{feature.title}</h3>
                    <p className={s.featureDesc}>{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Image */}
          <div className={s.imageWrapper}>
            <Image
              src="/second.jpg"
              alt="Elegancki dom z kolumnami - TOM-ART realizacja"
              fill
              className={s.image}
            />
            <div className={s.imageOverlay} />
            <div className={s.imageBorder} />
            <div className={s.imageFrame} />
          </div>
        </div>
      </div>
    </section>
  );
}
