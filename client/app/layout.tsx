import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PrivateRoute from "../utilis/privateRoute";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aperture — The unified interface for every model",
  description:
    "Route requests across 500+ models and 80+ providers. OpenAI-compatible API, automatic failover, no subscriptions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full w-full flex flex-col bg-bg text-fg font-sans">
        <PrivateRoute>{children}</PrivateRoute>
      </body>
    </html>
  );
}
