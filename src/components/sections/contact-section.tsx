"use client";

import { contactContent, siteConfig } from "@/lib/content";

const s = {
  section: "bg-secondary section-spacing",
  container: "container mx-auto px-6",
  grid: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20",

  left: "flex flex-col",
  headline: "font-heading text-3xl md:text-4xl lg:text-5xl text-foreground h2-industrial mb-6",
  description: "text-lg text-muted-foreground mb-10 leading-relaxed",

  contactItems: "space-y-5",
  contactItem: "flex items-center gap-5 group",
  contactIcon: "icon-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors",
  contactIconInner: "text-primary",
  contactLabel: "text-sm text-muted-foreground mb-0.5",
  contactValue: "text-lg text-foreground font-medium group-hover:text-primary transition-colors",

  area: "mt-10 pt-8 border-t border-border/30",
  areaLabel: "text-sm text-muted-foreground mb-2 uppercase tracking-wider",
  areaValue: "text-foreground leading-relaxed",

  right: "bg-card border border-border/30 p-8 lg:p-12 relative overflow-hidden",
  rightGlow: "absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl",
  ctaHeadline: "font-heading text-2xl md:text-3xl text-foreground mb-4 relative",
  ctaDescription: "text-muted-foreground mb-8 leading-relaxed relative",
  ctaButton: "w-full inline-flex items-center justify-center gap-4 bg-primary text-primary-foreground px-8 py-6 font-heading text-xl tracking-wider btn-hover btn-primary-glow relative",
};

export function ContactSection() {
  return (
    <section id="kontakt" className={s.section}>
      <div className={s.container}>
        <div className={s.grid}>
          {/* Left - Contact Info */}
          <div className={s.left}>
            <h2 className={s.headline}>{contactContent.headline}</h2>
            <p className={s.description}>{contactContent.description}</p>

            <div className={s.contactItems}>
              <a href={siteConfig.phoneHref} className={s.contactItem}>
                <div className={s.contactIcon}>
                  <span className={`material-symbols-outlined text-2xl ${s.contactIconInner}`}>call</span>
                </div>
                <div>
                  <div className={s.contactLabel}>Telefon</div>
                  <div className={s.contactValue}>
                    {contactContent.details.phone}
                  </div>
                </div>
              </a>

              <div className={s.contactItem}>
                <div className={s.contactIcon}>
                  <span className={`material-symbols-outlined text-2xl ${s.contactIconInner}`}>location_on</span>
                </div>
                <div>
                  <div className={s.contactLabel}>Adres</div>
                  <div className={s.contactValue}>{contactContent.details.address}</div>
                </div>
              </div>

              <div className={s.contactItem}>
                <div className={s.contactIcon}>
                  <span className={`material-symbols-outlined text-2xl ${s.contactIconInner}`}>badge</span>
                </div>
                <div>
                  <div className={s.contactLabel}>NIP</div>
                  <div className={s.contactValue}>{contactContent.details.nip}</div>
                </div>
              </div>
            </div>

            <div className={s.area}>
              <div className={s.areaLabel}>Obszar działania</div>
              <div className={s.areaValue}>{contactContent.area}</div>
            </div>
          </div>

          {/* Right - CTA Card */}
          <div className={s.right}>
            <div className={s.rightGlow} />
            <h3 className={s.ctaHeadline}>{contactContent.cta.headline}</h3>
            <p className={s.ctaDescription}>{contactContent.cta.description}</p>
            <a href={siteConfig.phoneHref} className={s.ctaButton}>
              <span className="material-symbols-outlined text-3xl">call</span>
              {contactContent.cta.buttonLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
