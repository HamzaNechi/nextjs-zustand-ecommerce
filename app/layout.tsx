import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`bg-white text-black ${inter.variable} ${playfair.variable}`}>
      <body className="bg-white text-gray-900 font-sans antialiased selection:bg-gray-900 selection:text-white flex flex-col min-h-screen m-0 p-0">
        <Navbar />

        <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        
        <footer className="border-t border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest text-gray-500">
            <p>&copy; {new Date().getFullYear()} ARMANI STYLE. ALL RIGHTS RESERVED.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Contact</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}