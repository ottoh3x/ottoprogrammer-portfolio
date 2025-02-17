import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OttoProgrammer",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"bg-neutral-950"} >
        <div className="overflow-hidden">
          {/* <div className="relative h-full w-full bg-slate-950">
            <div className="absolute bottom-0 left-[-10%] right-0 top-[-10%] h-screen w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(0,20,255,.15),rgba(240,240,240,0))]"></div>
            <div className="absolute bottom-0 right-[-10%] top-[-10%] h-screen w-[500px] rounded-full md:bg-[radial-gradient(circle_farthest-side,rgba(0,20,255,.15),rgba(240,240,240,0))]"></div>
          </div> */}

          {/* <div className="relative h-full w-full bg-black">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 h-screen w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]">

          
        </div> */}
          {/* </div> */}
          <Header />
          <div className="min-h-screen relative">{children}</div>

          <Footer />
        </div>
      </body>
    </html>
  );
}
