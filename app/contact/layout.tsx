import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Sadaqat Ali - Get in Touch",
  description: "Connect with Sadaqat Ali for AI projects, collaborations, or opportunities. Send a message through the contact form.",
  openGraph: {
    title: "Contact Sadaqat Ali - AI Developer",
    description: "Connect with Sadaqat Ali for AI projects, collaborations, or opportunities. Send a message through the contact form.",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}