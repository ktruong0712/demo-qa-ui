import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"]
});

export const metadata: Metadata = {
  title: "QA Master - One place to manage all your QA needs",
  description: "Streamline your QA process with our comprehensive testing platform. Automated testing, bug reporting, regression testing, and more.",
  keywords: "QA testing, automated testing, bug reporting, regression testing, cross-browser testing, performance testing, security testing",
  authors: [{ name: "QA Master Team" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "QA Master - One place to manage all your QA needs",
    description: "Streamline your QA process with our comprehensive testing platform.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "QA Master - One place to manage all your QA needs",
    description: "Streamline your QA process with our comprehensive testing platform.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${playfair.variable} antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}