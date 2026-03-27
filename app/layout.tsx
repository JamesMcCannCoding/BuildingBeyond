import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Building Beyond",
  description: "A modern scroll-led front-end experience for Building Beyond.",
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