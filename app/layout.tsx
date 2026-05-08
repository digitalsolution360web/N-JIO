import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileStickyContact from "./components/MobileStickyContact";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Annapurna Mahabahu Sewa Sangh | Service to Humanity",
  description: "Annapurna Mahabahu Sewa Sangh is a charitable organization dedicated to helping poor and underprivileged people through food, healthcare, and education.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white font-sans">
        <Navbar />
        <main className="flex-grow pt-0 pb-16 md:pb-0">
          {children}
        </main>
        <Footer />
        <MobileStickyContact />
      </body>
    </html>
  );
}
