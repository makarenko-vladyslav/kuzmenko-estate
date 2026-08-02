import { SmoothScroll } from "@/components/smooth-scroll";

import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kuzmenko Estate — Архітектурне Проєктування та Будівництво під Ключ у Дніпрі",
  description: "Повний цикл проєктування та капітального будівництва преміальних вілл та офісів у Дніпрі. 15 років досвіду, нульове відхилення від кошторису.",
  keywords: ["архітектурне проєктування дніпро", "будівництво під ключ", "преміальні вілли", "дизайн інтер'єру дніпро"],
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: "Kuzmenko Estate — Архітектурне Проєктування та Будівництво",
    description: "Повний цикл робіт від ескізу до монтажу меблів. Контроль кошторису та відеотрансляція 24/7.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <LocaleProvider>
          {children}
        </LocaleProvider>
      <SmoothScroll /></body>
    </html>
  );
}