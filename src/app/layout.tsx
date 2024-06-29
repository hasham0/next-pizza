import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/shared/header";
import ReduxProvider from "@/redux/wrapper/redux-provider";
import { Toaster } from "@/components/ui/toaster";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "Create Next App",
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
        className={cn(
          "min-h-screen bg-background font-manrope antialiased",
          manrope.variable,
        )}
      >
        <ReduxProvider>
          <Header />
          <main>{children}</main>
          <Toaster />
        </ReduxProvider>
      </body>
    </html>
  );
}
