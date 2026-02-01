"use client";

import { servicesContent, siteConfig } from "@/lib/content";

const s = {
  section: "bg-background section-spacing",
  container: "container mx-auto px-6",

  header: "text-center max-w-3xl mx-auto mb-16",
  headline: "font-heading text-3xl md:text-4xl lg:text-5xl text-foreground h2-industrial-center",
  description: "mt-6 text-lg text-muted-foreground leading-relaxed",

  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
  gridBottom: "flex flex-wrap justify-center gap-6 mt-6",
  cardBottomWrapper: "w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]",

  card: "bg-card border border-border/30 p-8 card-hover hover:border-primary/40 group h-full",
  cardIcon: "w-14 h-14 bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors",
  cardIconInner: "text-primary",
  cardTitle: "font-heading text-xl text-foreground mb-2",
  cardSubtitle: "text-sm text-primary mb-3",
  cardDesc: "text-muted-foreground text-sm leading-relaxed mb-5",

  featureList: "space-y-2.5",
  featureItem: "flex items-start gap-3 text-sm text-muted-foreground",
  featureDot: "w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0",

  ctaWrapper: "flex justify-center mt-10",
  ctaCard: "bg-primary p-8 md:p-10 flex flex-col items-center justify-center text-center max-w-lg w-full",
  ctaTitle: "font-heading text-2xl md:text-3xl text-primary-foreground mb-4",
  ctaButton: "inline-flex items-center gap-3 bg-background text-foreground px-8 py-4 font-heading text-lg tracking-wider btn-hover hover:bg-foreground hover:text-background",
};

const iconMap: Record<string, string> = {
  FormatPaint: "format_paint",
  Brush: "brush",
  GridOn: "grid_on",
  Home: "home",
  ElectricalServices: "electrical_services",
};

export function ServicesSection() {
  const { services } = servicesContent;
  const topServices = services.slice(0, 3);
  const bottomServices = services.slice(3, 5);

  const renderCard = (service: typeof services[0]) => (
    <div key={service.id} className={s.card}>
      <div className={s.cardIcon}>
        <span className={`material-symbols-outlined text-2xl ${s.cardIconInner}`}>
          {iconMap[service.icon] || "build"}
        </span>
      </div>
      <h3 className={s.cardTitle}>{service.title}</h3>
      {service.subtitle && <p className={s.cardSubtitle}>{service.subtitle}</p>}
      <p className={s.cardDesc}>{service.description}</p>
      <ul className={s.featureList}>
        {service.features.map((feature, i) => (
          <li key={i} className={s.featureItem}>
            <span className={s.featureDot} />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section id="uslugi" className={s.section}>
      <div className={s.container}>
        {/* Header */}
        <div className={s.header}>
          <h2 className={s.headline}>{servicesContent.headline}</h2>
          <p className={s.description}>{servicesContent.description}</p>
        </div>

        {/* Top Row - 3 cards */}
        <div className={s.grid}>
          {topServices.map(renderCard)}
        </div>

        {/* Bottom Row - 2 cards centered */}
        <div className={s.gridBottom}>
          {bottomServices.map((service) => (
            <div key={service.id} className={s.cardBottomWrapper}>
              {renderCard(service)}
            </div>
          ))}
        </div>

        {/* CTA Card */}
        <div className={s.ctaWrapper}>
          <div className={s.ctaCard}>
            <h3 className={s.ctaTitle}>Potrzebujesz wyceny?</h3>
            <a href={siteConfig.phoneHref} className={s.ctaButton}>
              <span className="material-symbols-outlined text-xl">call</span>
              Zadzwoń: {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
