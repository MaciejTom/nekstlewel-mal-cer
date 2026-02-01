"use client";

import Image from "next/image";
import { whyUsContent } from "@/lib/content";

const s = {
  section: "bg-secondary section-spacing",
  container: "container mx-auto px-6",
  grid: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center",

  content: "flex flex-col gap-8",
  headline: "font-heading text-3xl md:text-4xl lg:text-5xl text-foreground h2-industrial",
  description: "space-y-4",
  paragraph: "text-body text-muted-foreground",

  featuresGrid: "grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8",
  featureCard: "bg-background/50 p-6 border border-border/30 card-hover hover:border-primary/40 group",
  featureIcon: "icon-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors",
  featureIconInner: "text-primary",
  featureTitle: "font-heading text-base text-foreground mb-2",
  featureDesc: "text-sm text-muted-foreground leading-relaxed",

  imageWrapper: "relative aspect-[4/3] lg:aspect-[3/4] overflow-hidden",
  image: "object-cover",
  imageOverlay: "absolute inset-0 bg-gradient-to-t from-background/20 to-transparent",
  imageBorder: "absolute inset-0 border border-primary/20",
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
            <div className={s.imageOverlay} />
            <div className={s.imageBorder} />
          </div>
        </div>
      </div>
    </section>
  );
}
