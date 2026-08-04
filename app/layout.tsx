import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.buildingbeyond2032.com.au"),

  title: {
    default: "Building Beyond 2032 | Construction Jobs and Careers in Queensland",
    template: "%s | Building Beyond 2032",
  },

  description:
    "Building Beyond 2032 connects Queenslanders with real construction jobs, apprenticeships, career pathways, and opportunities linked to the 2032 Games and beyond.",

  keywords: [
    "Building Beyond 2032",
    "Queensland construction jobs",
    "construction jobs Queensland",
    "construction careers Queensland",
    "construction apprenticeships Queensland",
    "Brisbane construction jobs",
    "2032 Games construction jobs",
    "construction pathways Queensland",
    "construction industry Queensland",
  ],

  applicationName: "Building Beyond 2032",
  creator: "Building Beyond 2032",
  publisher: "Building Beyond 2032",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/LogoDarkBackground.svg",
    shortcut: "/LogoDarkBackground.svg",
    apple: "/LogoDarkBackground.svg",
  },

  openGraph: {
    title: "Building Beyond 2032 | Construction Jobs and Careers in Queensland",
    description:
      "Real jobs. Real careers. Build your future in construction with Building Beyond 2032.",
    url: "https://www.buildingbeyond2032.com.au",
    siteName: "Building Beyond 2032",
    type: "website",
    locale: "en_AU",
  },

  twitter: {
    card: "summary_large_image",
    title: "Building Beyond 2032 | Construction Jobs and Careers in Queensland",
    description:
      "Building Beyond 2032 connects Queenslanders with construction jobs, apprenticeships, pathways, and career opportunities.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="siteMain flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}