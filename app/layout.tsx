import { SmoothScroll } from "@/components/smooth-scroll";

import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kuzmenko Estate — Архітектурне проєктування та будівництво під ключ у Дніпрі",
  description: "Повний цикл архітектурних рішень від Kuzmenko Estate. Проєктування, дизайн інтер'єру та будівництво приватних і комерційних об'єктів із фіксованим бюджетом у Дніпрі. 15 років досвіду.",
  keywords: ["архітектурне проєктування", "будівництво під ключ", "дизайн інтер'єру Дніпро", "комерційне будівництво", "Kuzmenko Estate", "архітектор Дніпро"],
  icons: {
    icon: '/icon.svg'
  },
  openGraph: {
    title: "Kuzmenko Estate — Архітектурне проєктування та будівництво під ключ",
    description: "Проєктування та зведення резиденцій і комерційних об'єктів у Дніпрі з фіксованим кошторисом до початку робіт.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Lora:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased min-h-screen selection:bg-[hsl(24_75%_50%)] selection:text-white bg-bg-light text-text-main">
        <LocaleProvider>{children}</LocaleProvider>
      <SmoothScroll /></body>
    </html>
  );
}
