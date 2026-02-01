"use client";

import { siteConfig, navItems } from "@/lib/content";

const s = {
  footer: "bg-background py-12 border-t border-border/50",
  container: "container mx-auto px-6",

  top: "flex flex-col md:flex-row items-center justify-between gap-6 mb-8 pb-8 border-b border-border/30",

  logo: "flex items-center gap-3",
  logoIcon: "w-10 h-10 bg-primary flex items-center justify-center",
  logoText: "font-heading text-2xl text-foreground",

  nav: "flex flex-wrap justify-center gap-6",
  navLink: "text-sm text-muted-foreground hover:text-primary transition-colors",

  bottom: "flex flex-col md:flex-row items-center justify-between gap-4",

  copyright: "text-sm text-muted-foreground",

  contact: "flex items-center gap-6",
  contactItem: "flex items-center gap-2 text-sm text-muted-foreground",
  contactIcon: "text-primary text-lg",
};

export function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className={s.footer}>
      <div className={s.container}>
        {/* Top */}
        <div className={s.top}>
          <div className={s.logo}>
            <div className={s.logoIcon}>
              <span className="font-heading text-xl text-primary-foreground">T</span>
            </div>
            <span className={s.logoText}>TOM-ART</span>
          </div>

          <nav className={s.nav}>
            {navItems.map((item, i) => (
              <a key={i} href={item.href} className={s.navLink}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom */}
        <div className={s.bottom}>
          <p className={s.copyright}>
            &copy; {year} {siteConfig.name} {siteConfig.owner}. Wszystkie prawa zastrzeżone.
          </p>

          <div className={s.contact}>
            <a href={siteConfig.phoneHref} className={s.contactItem}>
              <span className={`material-symbols-outlined ${s.contactIcon}`}>call</span>
              {siteConfig.phone}
            </a>
            <span className={s.contactItem}>
              <span className={`material-symbols-outlined ${s.contactIcon}`}>location_on</span>
              {siteConfig.address}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
