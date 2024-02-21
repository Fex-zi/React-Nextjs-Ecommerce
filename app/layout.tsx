import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import CartProvider from "./components/Providers";
import ShoppingCartModal from "./components/ShoppingCartModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fexzi Commerce",
  description: "A world of virtual shopping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
        <Navbar />
        <ShoppingCartModal />
        {children}
        </CartProvider>
        </body>
    </html>
  );
}
