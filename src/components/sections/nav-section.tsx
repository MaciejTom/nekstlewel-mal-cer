"use client";

import { useState } from "react";
import { navItems, siteConfig } from "@/lib/content";

const s = {
  nav: "fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50",
  container: "container mx-auto px-6 flex items-center justify-between h-16",

  logo: "flex items-center gap-2",
  logoIcon: "w-10 h-10 bg-primary flex items-center justify-center",
  logoText: "font-heading text-2xl text-foreground",

  links: "hidden lg:flex items-center gap-1",
  link: "px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors",

  cta: "hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2 font-heading text-sm tracking-wider hover:bg-primary/90 transition-colors",

  mobileBtn: "lg:hidden w-10 h-10 flex items-center justify-center text-foreground",

  mobileMenu: "lg:hidden fixed inset-0 top-16 bg-background/98 backdrop-blur-sm z-40",
  mobileMenuInner: "container mx-auto px-6 py-8 flex flex-col gap-4",
  mobileLink: "text-lg text-foreground py-3 border-b border-border/50 hover:text-primary transition-colors",
  mobileCta: "mt-4 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-4 font-heading text-lg tracking-wider",
};

export function NavSection() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className={s.nav}>
        <div className={s.container}>
          {/* Logo */}
          <a href="#" className={s.logo}>
            <div className={s.logoIcon}>
              <span className="font-heading text-xl text-primary-foreground">T</span>
            </div>
            <span className={s.logoText}>TOM-ART</span>
          </a>

          {/* Desktop Links */}
          <div className={s.links}>
            {navItems.map((item, i) => (
              <a key={i} href={item.href} className={s.link}>
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a href={siteConfig.phoneHref} className={s.cta}>
            <span className="material-symbols-outlined text-lg">call</span>
            {siteConfig.phone}
          </a>

          {/* Mobile Menu Button */}
          <button
            className={s.mobileBtn}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className={s.mobileMenu}>
          <div className={s.mobileMenuInner}>
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className={s.mobileLink}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href={siteConfig.phoneHref} className={s.mobileCta}>
              <span className="material-symbols-outlined">call</span>
              Zadzwoń: {siteConfig.phone}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
