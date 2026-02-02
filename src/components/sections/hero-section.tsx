"use client";

import Image from "next/image";
import { heroContent, siteConfig } from "@/lib/content";

const s = {
  section: "min-h-screen flex items-center relative bg-background pt-20 overflow-hidden",
  overlay: "absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40 z-10",
  imageBg: "absolute inset-0 animate-subtle-zoom",
  container: "container mx-auto px-6 py-16 lg:py-24 relative z-20",
  content: "max-w-4xl",

  headline: "font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground leading-[0.9] mb-8 animate-fade-in-up text-shadow-sm",
  headlineAccent: "text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-200 to-primary animate-gradient-x",

  subtitle: "text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed animate-fade-in-up delay-100 font-medium",

  ctaWrapper: "flex flex-col sm:flex-row gap-5 mb-14 animate-fade-in-up delay-200",
  ctaPrimary: "inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-10 py-5 text-lg md:text-xl font-heading tracking-wider btn-hover animate-glow-pulse",
  ctaSecondary: "inline-flex items-center justify-center gap-2 border-2 border-foreground/20 text-foreground px-10 py-5 text-lg md:text-xl font-heading tracking-wider hover:border-primary hover:text-primary transition-all duration-300 backdrop-blur-sm",

  socialProofBar: "flex flex-wrap gap-4 md:gap-8 pt-8 border-t border-border/30 animate-fade-in-up delay-300",
  socialProofItem: "flex items-center gap-3 text-sm md:text-base text-foreground/80 bg-background/50 backdrop-blur-md px-5 py-3 border border-border/30 rounded-full",
  socialProofItemHighlight: "border-primary/50 bg-primary/10 text-primary",
  socialProofIcon: "text-primary text-xl",

  scroll: "absolute bottom-10 left-1/2 flex flex-col items-center gap-3 animate-bounce-slow z-20 cursor-pointer opacity-70 hover:opacity-100 transition-opacity",
  scrollText: "text-[10px] tracking-[0.3em] text-foreground/60 uppercase font-heading",
  scrollLine: "w-px h-12 bg-gradient-to-b from-primary to-transparent",
};

export function HeroSection() {
  const scrollToContent = () => {
    const nextSection = document.getElementById("o-nas");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={s.section}>
      {/* Background Image */}
      <div className={s.imageBg}>
        <Image
          src="/real-4.jpg"
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
            Wykończenia z wyczuciem. <br className="hidden md:block" />
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
            {heroContent.socialProof.map((item, i) => {
              const isHighlight = item.label.includes("Orły");
              return (
                <div key={i} className={`${s.socialProofItem} ${isHighlight ? s.socialProofItemHighlight : ''}`}>
                  <span className={`material-symbols-outlined ${s.socialProofIcon}`}>
                    {item.icon === "EmojiEvents" ? "emoji_events" :
                     item.icon === "Star" ? "star" :
                     item.icon === "Reviews" ? "reviews" : "location_on"}
                  </span>
                  <span className={isHighlight ? "font-bold" : ""}>{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={s.scroll} onClick={scrollToContent}>
        <span className={s.scrollText}>Przewiń</span>
        <div className={s.scrollLine} />
      </div>
    </section>
  );
}
