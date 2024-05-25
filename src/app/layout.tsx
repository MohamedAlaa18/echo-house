"use client";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { useEffect, useState } from "react";
import "./globals.css";
import Header from "./_component/header/Header";
import Footer from "./_component/Footer";
import { ClerkProvider } from "@clerk/nextjs";
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
          <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Echo House is an e-commerce platform for courses, built using Next.js and Tailwind CSS. Browse available courses, view detailed product pages, and manage course purchases with our shopping cart functionality." />
            <meta name="keywords" content="e-commerce, courses, online learning, Next.js, Tailwind CSS" />
            <meta name="author" content="Echo House" />
            <meta property="og:title" content="Echo House" />
            <meta property="og:description" content="An e-commerce platform for courses built using Next.js and Tailwind CSS. Discover, learn, and manage your course purchases." />
            <meta property="og:image" content="/path/to/your/image.jpg" />
            <meta property="og:url" content="https://yourwebsite.com" />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Echo House" />
            <meta name="twitter:description" content="An e-commerce platform for courses built using Next.js and Tailwind CSS. Discover, learn, and manage your course purchases." />
            <meta name="twitter:image" content="/path/to/your/image.jpg" />
            <link rel="icon" href="/logo.ico" />
            <title>Echo House</title>
          </head>
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
