import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "namdev-patrika",
  description: "Namdev Patrika is a platform that connects people from the Namdev Samaj community to help them find a life partner. We focus on matching individuals based on shared values, traditions, and cultural backgrounds. We understand how important it is to find someone who not only suits your personality but also connects with your community's values. Our easy-to-use matchmaking process is designed to help you find a meaningful connection and a partner who shares your culture and traditions, making the search for a life partner simpler and more rewarding.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-p-20 scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
