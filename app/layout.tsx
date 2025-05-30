import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/providers/theme-providers";
import "./globals.css";
import { cn } from "@/lib/utils";

const font = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Crevion Discord Clone",
  description: "Made by Crevion with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={(cn(font.variable), "bg-white dark:bg-[#313338]")}>
          <ThemeProvider
            attribute={"class"}
            defaultTheme="dark"
            enableSystem={false}
            storageKey="discord-theme"
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
