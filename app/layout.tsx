import type { Metadata } from "next";
import { Inter,Poppins } from "next/font/google";
import "./globals.css";
import Top from "@/component/navigation/Top";
import Image from "next/image";


const inter = Poppins({ 
                        subsets: ["latin"] ,
                        weight:['100', '200', '300', '400', '500', '600', '700', '800', '900'],
                        variable:'--font-poppins'
                      });

export const metadata: Metadata = {
  title: "RateHammer",
  description: "Rate Hammer Landing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans  relative bg-slate-400` }>
         {/* <Top/> */}
    
        {children}
        </body>
    </html>
  );
}
