import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "REITA Visual Tribute",
  description: "Visual-driven tribute experience for REITA with ambient motion and storytelling.",
  openGraph: {
    title: "REITA Visual Tribute",
    description: "Visual-driven tribute experience for REITA with ambient motion and storytelling.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body className="bg-ink text-white">
        {children}
      </body>
    </html>
  );
}
