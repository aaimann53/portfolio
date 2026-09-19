import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aiman Jadoon — Full-Stack & Flutter Developer",
  description:
    "I design and develop web and mobile applications with polished interfaces, reliable backends, and real-world functionality.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Ambient background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute -top-44 left-1/2 h-[520px] w-[860px] -translate-x-1/2 rounded-full bg-accent/[0.07] blur-[130px]" />
          <div className="absolute top-1/3 -left-48 h-[420px] w-[420px] rounded-full bg-sky-400/[0.05] blur-[130px]" />
          <div className="absolute top-2/3 -right-48 h-[420px] w-[420px] rounded-full bg-violet-400/[0.05] blur-[130px]" />
        </div>
        {children}
      </body>
    </html>
  );
}
