import { Navbar, Footer } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Cars Explorer",
  description: "Discover Amazing and Affordable Cars",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
