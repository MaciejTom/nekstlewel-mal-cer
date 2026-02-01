"use client";

import Image from "next/image";
import { heroContent, siteConfig } from "@/lib/content";

const s = {
  section: "min-h-screen flex items-center relative bg-background pt-20",
  overlay: "absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/50",
  imageBg: "absolute inset-0",
  container: "container mx-auto px-6 py-20 lg:py-32 relative z-10",
  content: "max-w-3xl",

  headline: "font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground leading-[0.95] mb-6 animate-fade-in-up",
  headlineAccent: "text-primary",

  subtitle: "text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed animate-fade-in-up delay-100",

  ctaWrapper: "flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up delay-200",
  ctaPrimary: "inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-base md:text-lg font-heading tracking-wider btn-hover btn-primary-glow",
  ctaSecondary: "inline-flex items-center justify-center gap-2 border-2 border-foreground/30 text-foreground px-8 py-4 text-base md:text-lg font-heading tracking-wider hover:border-primary hover:text-primary transition-all duration-300",

  socialProofBar: "flex flex-wrap gap-4 md:gap-6 pt-8 border-t border-border/30 animate-fade-in-up delay-300",
  socialProofItem: "flex items-center gap-2 text-sm text-foreground/80 bg-card/50 px-4 py-2 border border-border/30",
  socialProofIcon: "text-primary text-lg",

  scroll: "absolute bottom-8 left-1/2 flex flex-col items-center gap-2 animate-bounce-slow",
  scrollText: "text-xs tracking-widest text-muted-foreground/60 uppercase",
  scrollLine: "w-px h-10 bg-gradient-to-b from-primary/80 to-transparent",
};

export function HeroSection() {
  return (
    <section className={s.section}>
      {/* Background Image */}
      <div className={s.imageBg}>
        <Image
          src="/1.jpg"
          alt="TOM-ART realizacje"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className={s.overlay} />

      <div className={s.container}>
        <div className={s.content}>
          {/* Headline */}
          <h1 className={s.headline}>
            Wykończenia z wyczuciem.{" "}
            <span className={s.headlineAccent}>Krosno Odrzańskie.</span>
          </h1>

          {/* Subtitle */}
          <p className={s.subtitle}>{heroContent.subheadline}</p>

          {/* CTA Buttons */}
          <div className={s.ctaWrapper}>
            <a href={siteConfig.phoneHref} className={s.ctaPrimary}>
              <span className="material-symbols-outlined text-2xl">call</span>
              <span>{heroContent.ctaPrimary.label}: {heroContent.ctaPrimary.phone}</span>
            </a>
            <a href={heroContent.ctaSecondary.href} className={s.ctaSecondary}>
              {heroContent.ctaSecondary.label}
              <span className="material-symbols-outlined text-xl">arrow_downward</span>
            </a>
          </div>

          {/* Social Proof Bar */}
          <div className={s.socialProofBar}>
            {heroContent.socialProof.map((item, i) => (
              <div key={i} className={s.socialProofItem}>
                <span className={`material-symbols-outlined ${s.socialProofIcon}`}>
                  {item.icon === "EmojiEvents" ? "emoji_events" :
                   item.icon === "Star" ? "star" :
                   item.icon === "Reviews" ? "reviews" : "location_on"}
                </span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={s.scroll}>
        <span className={s.scrollText}>Przewiń</span>
        <div className={s.scrollLine} />
      </div>
    </section>
  );
}
