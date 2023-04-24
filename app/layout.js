import Footer from "@/components/Footer";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";

const poppins = localFont({ src: "../public/poppins/Poppins-Regular.ttf" });

export const metadata = {
  title: "Silent Palms Villa",
  description: "Best Hotel in Kenya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.className}`}>
      <body className="">
        <Navbar />
        <div className=" absolute top-[117px] md:top-[175px] w-full">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
