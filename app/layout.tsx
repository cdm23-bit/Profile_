import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CDM // A Profile Story",
  description:
    "An interactive visual-novel-style introduction to Christian Dave Mainit.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
