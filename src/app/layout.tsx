import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-learning-guide.vercel.app"),
  title: {
    default: "AI Learning Guide",
    template: "%s | AI Learning Guide",
  },
  description:
    "Practical AI roadmaps, tools, and tutorials for developers and non-technical learners navigating the AI era.",
  applicationName: "AI Learning Guide",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AI Learning Guide",
    description:
      "Practical AI roadmaps, tools, and tutorials for developers and non-technical learners navigating the AI era.",
    url: "/",
    siteName: "AI Learning Guide",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Learning Guide",
    description:
      "Practical AI roadmaps, tools, and tutorials for developers and non-technical learners navigating the AI era.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0d14",
  colorScheme: "dark",
};

/**
 * 根布局负责注入全局字体、元信息与页面基础结构。
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetBrainsMono.variable}`}>
      <body>{children}<Analytics mode="production" /></body>
    </html>
  );
}
