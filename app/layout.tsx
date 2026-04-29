import type { Metadata } from "next";
import Script from "next/script";
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
      <body>
        {children}

        <Script id="mcjs" strategy="afterInteractive">
          {`
            !function(c,h,i,m,p){
              m=c.createElement(h),
              p=c.getElementsByTagName(h)[0],
              m.async=1,
              m.src=i,
              p.parentNode.insertBefore(m,p)
            }(document,"script","https://chimpstatic.com/mcjs-connected/js/users/YOUR-CODE-HERE.js");
          `}
        </Script>
      </body>
    </html>
  );
}
