import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://howardignatius.com"),
  title: {
    default: "Howard Ignatius Photography",
    template: "%s · Howard Ignatius Photography",
  },
  description:
    "A place to view my images, check out workshops that I teach and follow my journey into the light.",
  openGraph: {
    title: "Howard Ignatius Photography",
    description:
      "Landscape and night photography by Howard Ignatius, based in Morro Bay, California.",
    url: "https://howardignatius.com",
    siteName: "Howard Ignatius Photography",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
