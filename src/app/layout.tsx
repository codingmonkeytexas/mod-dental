// These styles apply to every route in the application
import "./globals.css";
import FlyonuiScript from "./components/common/FlyonuiScript";
import NavBar from "./components/common/NavBar";
import type { Metadata } from "next";
import { DENTAL_NAME } from "@/lib/constants";
import Footer from "./components/common/footer";
import Contact from "./components/common/Contact";

// This metadata is used for the entire application
// It can be overridden by individual pages
// For example, the page at /home can have its own metadata
// which will override the default metadata defined here
export const metadata: Metadata = {
  title: {
    template: `%s | ${DENTAL_NAME}`,
    default: `${DENTAL_NAME}`, // a default is required when creating a template
  },
  description:
    "Explore our  dentistry services to enhance your smile and boost your confidence.",
  keywords: [" dentistry", "smile enhancement", "dental aesthetics"],
  robots: {
    index: true,
    follow: true,
    noarchive: true,
    nosnippet: false,
    noimageindex: false,
  },
  icons: {
    icon: "/public/favicon/favicon.ico",
    shortcut: "/public/favicon/favicon-16x16.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className="min-h-screen bg-base-200">
        <NavBar />
        <div className="px-4 lg:px-8">{children}</div>
        <Contact />
        <Footer />
      </body>
      <FlyonuiScript />
    </html>
  );
}
