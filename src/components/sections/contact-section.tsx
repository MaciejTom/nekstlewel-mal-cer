"use client";

import { contactContent, siteConfig } from "@/lib/content";

const s = {
  section: "bg-secondary section-spacing",
  container: "container mx-auto px-6",
  grid: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16",

  left: "flex flex-col",
  headline: "font-heading text-4xl md:text-5xl text-foreground h2-industrial mb-6",
  description: "text-lg text-muted-foreground mb-10",

  contactItems: "space-y-6",
  contactItem: "flex items-center gap-4",
  contactIcon: "w-12 h-12 bg-primary/10 flex items-center justify-center",
  contactIconInner: "text-primary text-xl",
  contactLabel: "text-sm text-muted-foreground",
  contactValue: "text-lg text-foreground font-medium",

  area: "mt-10 pt-8 border-t border-border/50",
  areaLabel: "text-sm text-muted-foreground mb-2",
  areaValue: "text-foreground",

  right: "bg-card border border-border/50 p-8 lg:p-10",
  ctaHeadline: "font-heading text-3xl text-foreground mb-4",
  ctaDescription: "text-muted-foreground mb-8",
  ctaButton: "w-full inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-5 font-heading text-xl tracking-wider hover:bg-primary/90 transition-colors",
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
              <div className={s.contactItem}>
                <div className={s.contactIcon}>
                  <span className={`material-symbols-outlined ${s.contactIconInner}`}>call</span>
                </div>
                <div>
                  <div className={s.contactLabel}>Telefon</div>
                  <a href={siteConfig.phoneHref} className={s.contactValue}>
                    {contactContent.details.phone}
                  </a>
                </div>
              </div>

              <div className={s.contactItem}>
                <div className={s.contactIcon}>
                  <span className={`material-symbols-outlined ${s.contactIconInner}`}>location_on</span>
                </div>
                <div>
                  <div className={s.contactLabel}>Adres</div>
                  <div className={s.contactValue}>{contactContent.details.address}</div>
                </div>
              </div>

              <div className={s.contactItem}>
                <div className={s.contactIcon}>
                  <span className={`material-symbols-outlined ${s.contactIconInner}`}>badge</span>
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
            <h3 className={s.ctaHeadline}>{contactContent.cta.headline}</h3>
            <p className={s.ctaDescription}>{contactContent.cta.description}</p>
            <a href={siteConfig.phoneHref} className={s.ctaButton}>
              <span className="material-symbols-outlined text-2xl">call</span>
              {contactContent.cta.buttonLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
