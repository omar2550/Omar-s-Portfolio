import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Omar's Portfolio",
  description:
    "A modern front-end developer portfolio showcasing projects, skills, and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
