import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Building Beyond 2032",
  description: "Building Beyond 2032 website",

  icons: {
    icon: "/LogoDarkBackground.svg",
    shortcut: "/LogoDarkBackground.svg",
    apple: "/LogoDarkBackground.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}