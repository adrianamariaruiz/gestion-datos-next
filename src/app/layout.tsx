import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({subsets: ["latin"], weight:['500', '700']});

export const metadata: Metadata = {
  title: "Gestion de saldos",
  description: "Generated by Adriana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
