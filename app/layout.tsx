"use client";
import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans, JetBrains_Mono } from "next/font/google";

import "./globals.css";
import { Provider } from "react-redux";
import { store } from "./stores/store";
import { UserProvider } from "./providers/userProvider";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
  variable: "--font-barlow-condensed",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-dm-sans",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});


export default function RootLayout({ children }: LayoutProps<"/">) {

  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${dmSans.variable} ${jetBrainsMono.variable}`}
    >
      <body className=""><Provider store={store}><UserProvider>{children}</UserProvider></Provider></body>
    </html>
  );
}
