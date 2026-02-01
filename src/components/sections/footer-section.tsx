"use client";

import { siteConfig, navItems } from "@/lib/content";

const s = {
  footer: "bg-background py-12 md:py-16 border-t border-border/30",
  container: "container mx-auto px-6",

  top: "flex flex-col md:flex-row items-center justify-between gap-8 mb-10 pb-10 border-b border-border/20",

  logo: "flex items-center gap-3 group",
  logoIcon: "icon-lg bg-primary logo-box flex items-center justify-center transition-transform group-hover:scale-105",
  logoText: "font-heading text-2xl text-foreground",

  nav: "flex flex-wrap justify-center gap-x-8 gap-y-3",
  navLink: "text-sm text-muted-foreground hover:text-primary transition-colors",

  middle: "flex flex-col md:flex-row items-center justify-center gap-6 mb-10",
  contactItem: "flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors",
  contactIcon: "text-primary",

  bottom: "flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left",
  copyright: "text-sm text-muted-foreground/70",
  credits: "text-xs text-muted-foreground/50",
};

export function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className={s.footer}>
      <div className={s.container}>
        {/* Top */}
        <div className={s.top}>
          <a href="#" className={s.logo}>
            <div className={s.logoIcon}>
              <span className="font-heading text-2xl text-primary-foreground">T</span>
            </div>
            <span className={s.logoText}>TOM-ART</span>
          </a>

          <nav className={s.nav}>
            {navItems.map((item, i) => (
              <a key={i} href={item.href} className={s.navLink}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Middle - Contact Info */}
        <div className={s.middle}>
          <a href={siteConfig.phoneHref} className={s.contactItem}>
            <span className={`material-symbols-outlined ${s.contactIcon}`}>call</span>
            <span>{siteConfig.phone}</span>
          </a>
          <span className="hidden md:block text-border">|</span>
          <span className={s.contactItem}>
            <span className={`material-symbols-outlined ${s.contactIcon}`}>location_on</span>
            <span>{siteConfig.address}</span>
          </span>
        </div>

        {/* Bottom */}
        <div className={s.bottom}>
          <p className={s.copyright}>
            &copy; {year} {siteConfig.name} {siteConfig.owner}. Wszystkie prawa zastrzeżone.
          </p>
          <p className={s.credits}>
            NIP: {siteConfig.nip}
          </p>
        </div>
      </div>
    </footer>
  );
}
