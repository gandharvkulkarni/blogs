import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider"
import AdSense from "@/components/adsense/AdSense";
import Footer from "@/components/footer/Footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Data Analytics Blogs",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-p-20 scroll-smooth">
      <head>
      <AdSense pId="ca-pub-4700602838719113"/>
      </head>
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster />
        <Navbar/>

        <div className="min-h-screen">
        {children}
        </div>
        <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
