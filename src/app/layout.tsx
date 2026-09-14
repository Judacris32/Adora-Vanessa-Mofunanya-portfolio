import type { Metadata } from "next";
import { Fraunces, Jost } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const body = Jost({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.adoravanessamofunanya.com"),
  title: {
    default: "Adora Vanessa Mofunanya, Fashion Designer",
    template: "%s Adora Vanessa Mofunanya",
  },
  description:
    "Adora Vanessa Mofunanya is a UK-based fashion designer and founder & creative director of Dela-Fin, a handmade luxury fashion house. AFAA 2025 Emerging Innovative Fashion Designer of the Year.",
  keywords: [
    "Adora Vanessa Mofunanya",
    "Dela-Fin",
    "fashion designer",
    "luxury fashion",
    "handmade fashion",
    "AFAA 2025",
    "African fashion",
    "couture",
  ],
  openGraph: {
    title: "Adora Vanessa Mofunanya, Fashion Designer",
    description:
      "Handmade luxury fashion from Creative Director Adora Vanessa Mofunanya, couture, ready-to-wear, and custom pieces built stitch by stitch.",
    siteName: "Adora Vanessa Mofunanya",
    type: "website",
    images: ["/images/portraits/portrait-01.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adora Vanessa Mofunanya, Fashion Designer",
    description: "Style Lives Deeper.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        {/* Applies a saved theme before paint so there's no light/dark flash.
            Light is the default — dark only applies if the visitor chose it before. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('avm-theme')==='dark'){document.documentElement.classList.add('dark')}}catch(e){}`,
          }}
        />
      </head>
      <body className="font-body antialiased bg-cream text-ink selection:bg-rose-500 selection:text-cream">
        <Nav />
        <PageTransition>
          <main className="min-h-screen">{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
