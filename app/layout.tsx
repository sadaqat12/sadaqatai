import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sadaqat Ali | AI-First Developer & Problem Solver",
  description: "Personal portfolio showcasing AI projects and professional background",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
