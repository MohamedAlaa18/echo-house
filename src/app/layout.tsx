"use client";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { useEffect, useState } from "react";
import "./globals.css";
import Header from "./_component/header/Header";
import Footer from "./_component/Footer";
import { ClerkProvider} from "@clerk/nextjs";
import { CartContext } from "./_context/cartContext";

const inter = Roboto({ subsets: ["latin"], weight: "700" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme as 'light' | 'dark');
      document.documentElement.classList.add(storedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = prefersDark ? 'dark' : 'light';
      setTheme(initialTheme);
      document.documentElement.classList.add(initialTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ClerkProvider>
      <CartContext.Provider value={{ cart, setCart }}>
        <html lang='en'>
          <body className={`${inter.className} ${theme}`}>
            <Header toggleTheme={toggleTheme} theme={theme} />
            {children}
            <Footer />
          </body>
        </html>
      </CartContext.Provider>
    </ClerkProvider>
  );
}
