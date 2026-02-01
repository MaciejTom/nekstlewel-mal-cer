import type { Metadata } from "next";
import { Bebas_Neue, Source_Sans_3, Fira_Code } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin", "latin-ext"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin", "latin-ext"],
});

const firaCode = Fira_Code({
  variable: "--font-fira",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "TOM-ART | Usługi remontowo-budowlane Krosno Odrzańskie",
  description: "Od ścian po podłogi — pełen zakres prac remontowych. Tynki, posadzki, malowanie, murarstwo, izolacje. Krosno Odrzańskie i okolice.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${bebasNeue.variable} ${sourceSans.variable} ${firaCode.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
