import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://sadaqat.ai'),
  title: "Sadaqat Ali | AI-First Developer & Problem Solver",
  description: "Personal portfolio showcasing AI projects and professional background",
  keywords: ["AI Developer", "Machine Learning", "Full Stack", "Portfolio", "Gauntlet AI"],
  authors: [{ name: "Sadaqat Ali" }],
  creator: "Sadaqat Ali",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sadaqat.ai",
    siteName: "Sadaqat Ali Portfolio",
    title: "Sadaqat Ali | AI-First Developer & Problem Solver",
    description: "Personal portfolio showcasing AI projects and professional background",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Sadaqat Ali - AI-First Developer"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Sadaqat Ali | AI-First Developer & Problem Solver",
    description: "Personal portfolio showcasing AI projects and professional background",
    creator: "@sadaqatali",
    images: ["/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <main>{children}</main>
      </body>
    </html>
  );
}
