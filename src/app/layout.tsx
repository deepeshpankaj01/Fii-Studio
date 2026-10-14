import type { Metadata, Viewport } from "next";
import { Syne, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#040406",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://fiistudio.com"),
  title: "FII STUDIO — Deepesh Pankaj | Systems & AI Developer · Founder",
  description:
    "Official portfolio and creative laboratory of Deepesh Pankaj. Author of ICAIEST-2026 Clinical AI research, AI Innovates 2K26 National Finalist, builder of HAi Pilot, ANUVAA, and Panchayat.",
  keywords: [
    "Deepesh Pankaj",
    "Deepesh Kumar Pankaj",
    "FII Studio",
    "Systems Developer",
    "AI Product Architect",
    "HAi Pilot",
    "ANUVAA",
    "Panchayat",
    "LNCT Bhopal",
    "ICAIEST-2026",
    "Creative Technologist",
    "Three.js Portfolio",
    "AI Innovates 2K26",
  ],
  authors: [{ name: "Deepesh Pankaj", url: "https://github.com/deepeshpankaj01" }],
  creator: "Deepesh Pankaj (FII Studio)",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fiistudio.com",
    title: "FII STUDIO — Deepesh Pankaj | Building What Comes Next",
    description:
      "Extraordinary cinematic 3D digital realm of Deepesh Pankaj. AI Systems, Clinical Intelligence, Mother-Tongue Learning Copilot, and Real Production Engineering.",
    siteName: "FII STUDIO",
    images: [
      {
        url: "/images/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Deepesh Pankaj — FII Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FII STUDIO — Deepesh Pankaj",
    description:
      "Building What Comes Next. Systems Developer, AI Product Architect & Founder.",
    images: ["/images/profile.jpg"],
    creator: "@deepeshpankaj01",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-fii-void text-fii-ivory antialiased selection:bg-fii-lime selection:text-black">
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
