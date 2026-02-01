"use client";

import { useState, useEffect } from "react";
import { navItems, siteConfig } from "@/lib/content";

const s = {
  nav: "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
  navScrolled: "bg-background/98 backdrop-blur-md border-b border-border/50 shadow-lg",
  navTop: "bg-transparent",
  container: "container mx-auto px-6 flex items-center justify-between h-16 md:h-20",

  logo: "flex items-center gap-3 group",
  logoIcon: "icon-md bg-primary logo-box flex items-center justify-center transition-transform group-hover:scale-105",
  logoText: "font-heading text-xl md:text-2xl text-foreground",

  links: "hidden lg:flex items-center gap-1",
  link: "px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full",

  cta: "hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 font-heading text-sm tracking-wider btn-hover btn-primary-glow",

  mobileBtn: "lg:hidden w-11 h-11 flex items-center justify-center text-foreground hover:text-primary transition-colors",

  mobileMenu: "lg:hidden fixed inset-0 top-16 md:top-20 bg-background/98 backdrop-blur-md z-40",
  mobileMenuInner: "container mx-auto px-6 py-8 flex flex-col gap-2",
  mobileLink: "text-lg text-foreground py-4 border-b border-border/30 hover:text-primary hover:pl-2 transition-all",
  mobileCta: "mt-6 inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-6 py-4 font-heading text-lg tracking-wider",
};

export function NavSection() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`${s.nav} ${scrolled ? s.navScrolled : s.navTop}`}>
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
              <span className="material-symbols-outlined text-xl">call</span>
              Zadzwoń: {siteConfig.phone}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
