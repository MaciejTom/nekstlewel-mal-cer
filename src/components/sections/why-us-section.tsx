"use client";

import Image from "next/image";
import { whyUsContent } from "@/lib/content";

const s = {
  section: "bg-secondary section-spacing",
  container: "container mx-auto px-6",
  grid: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center",

  content: "flex flex-col gap-8",
  headline: "font-heading text-4xl md:text-5xl text-foreground h2-industrial",
  description: "space-y-4",
  paragraph: "text-muted-foreground leading-relaxed",

  featuresGrid: "grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8",
  featureCard: "bg-background/50 p-6 border border-border/50",
  featureIcon: "w-12 h-12 bg-primary/10 flex items-center justify-center mb-4",
  featureIconInner: "text-primary",
  featureTitle: "font-heading text-lg text-foreground mb-2",
  featureDesc: "text-sm text-muted-foreground leading-relaxed",

  imageWrapper: "relative aspect-[4/3] lg:aspect-square",
  image: "object-cover rounded-sm",
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
              {whyUsContent.features.map((feature, i) => (
                <div key={i} className={s.featureCard}>
                  <div className={s.featureIcon}>
                    <span className={`material-symbols-outlined text-2xl ${s.featureIconInner}`}>
                      {iconMap[feature.icon] || "check_circle"}
                    </span>
                  </div>
                  <h3 className={s.featureTitle}>{feature.title}</h3>
                  <p className={s.featureDesc}>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className={s.imageWrapper}>
            <Image
              src="/2.jpg"
              alt="Elegancki dom z kolumnami - TOM-ART realizacja"
              fill
              className={s.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
