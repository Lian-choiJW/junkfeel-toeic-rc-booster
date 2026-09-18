import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PwaRegister } from "@/components/PwaRegister";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: "TOEIC RC Booster",
  description: "LC보다 RC가 약한 학습자를 위한 무료 TOEIC RC 집중 학습 웹앱",
  appleWebApp: {
    capable: true,
    title: "RC Booster",
    statusBarStyle: "default"
  },
  icons: {
    icon: `${basePath}/icon.svg`,
    apple: `${basePath}/icon.svg`
  }
};

export const viewport: Viewport = {
  themeColor: "#2563eb"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body className="min-h-screen">
        <PwaRegister />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
