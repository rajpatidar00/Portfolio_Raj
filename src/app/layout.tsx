import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raj Patidar | Frontend Developer | React.js, Next.js & TypeScript",
  description:
    "Raj Patidar is a Frontend Developer specializing in React.js, Next.js, TypeScript, REST APIs, JWT authentication, role-based access control, and modern responsive UI development.",
  keywords: [
    "Raj Patidar",
    "Frontend Developer",
    "React.js Developer",
    "Next.js Developer",
    "TypeScript",
    "Tailwind CSS",
    "Web Developer Portfolio",
    "Kalinga Vriti",
    "School Connect",
  ],
  authors: [{ name: "Raj Patidar" }],
  creator: "Raj Patidar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rajpatidar.dev",
    title: "Raj Patidar | Frontend Developer | React.js, Next.js & TypeScript",
    description:
      "Frontend Developer building modern, responsive, production-ready web applications with React.js, Next.js, and TypeScript.",
    siteName: "Raj Patidar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raj Patidar | Frontend Developer",
    description:
      "Frontend Developer building modern web experiences with React.js, Next.js & TypeScript.",
    creator: "@rajpatidar00",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen flex flex-col bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
