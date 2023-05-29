import Navbar from "@/components/Navbar";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import Providers from "@/components/Providers";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Daffa Damar",
  description: "Daffa's personal website",
};

const jakarta = Plus_Jakarta_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`dark:bg-slate-800 ${jakarta.className}`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
