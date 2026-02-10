import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const sora = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://forgecyberdefense.com"),
  title: {
    default: "Forge Cyber Defense | Security Compliance & Application Development",
    template: "%s | Forge Cyber Defense",
  },
  description:
    "Forge Cyber Defense delivers comprehensive security compliance consulting and secure application development for federal agencies, healthcare organizations, financial institutions, and commercial enterprises. Veteran-owned.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Forge Cyber Defense",
    images: [{ url: "/og/og-image-1200x630.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: [
      { url: "/favicons/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicons/favicon-16x16.png", sizes: "16x16" },
    ],
    apple: "/favicons/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
