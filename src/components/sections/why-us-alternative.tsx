"use client";

import Image from "next/image";

const reasons = [
  {
    title: "DZWONISZ DO MNIE",
    description: "Nie mam sekretarki, nie mam 'działu obsługi klienta'. Dzwonisz pod mój numer, ja odbieram. Ja wyceniam, ja wykonuję, ja odpowiadam za efekt.",
    image: "/icon-phone.png",
    hasImage: true,
  },
  {
    title: "JEDEN WYKONAWCA",
    description: "Elewacje, wnętrza, konstrukcje, całe domy. Nie musisz koordynować trzech firm. Jeden telefon, jedna odpowiedzialność, jedno rozliczenie.",
    icon: "layers",
    hasImage: false,
  },
  {
    title: "WIESZ GDZIE SZUKAĆ",
    description: "Szyby 26, Ostrowiec Świętokrzyski. NIP: PL 6612071885. Nie znikam po robocie — masz adres, masz NIP, masz twarz.",
    image: "/icon-location.png",
    hasImage: true,
  },
];

export function WhyUsAlternative() {
  return (
    <section className="bg-secondary py-20 md:py-24 relative overflow-hidden">
      {/* Background Grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-primary font-heading text-sm tracking-widest uppercase mb-4 block">
            Co mnie wyróżnia
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-foreground mb-6 tracking-tight">
            JEDEN WYKONAWCA.{" "}
            <span className="text-primary">ZERO WYMÓWEK.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Nie szukasz pięciu ekip. Nie tłumaczysz tego samego trzy razy.
            Dzwonisz do mnie, ja koordynuję, ja odpowiadam za efekt.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="group relative p-6 transition-all duration-300 flex flex-col items-center text-center"
            >
              {/* Icon Container with Glow */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 mb-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {item.hasImage ? (
                  <div className="relative w-40 h-40 md:w-48 md:h-48 transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={item.image!}
                      alt={item.title}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                ) : (
                  <div className="w-40 h-40 md:w-48 md:h-48 bg-card border border-border flex items-center justify-center transition-all duration-300 group-hover:border-primary group-hover:scale-105">
                    <span className="material-symbols-outlined text-7xl md:text-8xl text-primary">
                      {item.icon}
                    </span>
                  </div>
                )}
              </div>

              <h3 className="font-heading text-xl md:text-2xl text-foreground mb-4 group-hover:text-primary transition-colors">
                {item.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 border-2 border-border text-foreground px-8 py-4 font-heading text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
          >
            <span className="material-symbols-outlined text-lg">call</span>
            Zadzwoń teraz
          </a>
        </div>
      </div>
    </section>
  );
}
