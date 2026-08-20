import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DTF Central | DTF and UVDTF Transfers",
  description: "DTF and UV DTF transfers for custom apparel and products.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
