import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { cookies } from "next/headers";
import Header from "./components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Vibeverse",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-white text-white font-sans">
          {/* <header className="bg-blue-600 py-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center px-4">
              <h1 className="text-xl font-bold">VibeVerse</h1>
              <nav>
                <Link href="/" className="mr-4 hover:text-blueGray-300">Home</Link>
                {<Link href="/login" className="mr-4 hover:text-blueGray-300">Login</Link>}
                <Link href="/register" className="hover:text-blueGray-300">Register</Link>
              </nav>
            </div>
          </header> */}
          <Header />
          <main className="container mx-auto px-4 py-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
