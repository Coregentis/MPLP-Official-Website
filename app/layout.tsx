import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { SvgDefs } from "@/components/ui/icons";
import { SiteJsonLd } from "@/components/seo/site-json-ld";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "./",
  },
  icons: {
    icon: [
      { url: "/brand/mplp-favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/brand/mplp-favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/mplp-favicon-48.png", sizes: "48x48", type: "image/png" },
    ],
    shortcut: "/brand/mplp-favicon-32.png",
    apple: [
      { url: "/brand/mplp-apple-touch-180.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`} suppressHydrationWarning>
        <SvgDefs />
        <SiteJsonLd />
        {children}
      </body>
    </html>
  );
}
