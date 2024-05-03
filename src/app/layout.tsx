import { Poppins } from "next/font/google";
import type { Metadata } from "next";

import { Header, Sidebar } from "@/components";

import "./globals.css";

const inter = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "FoodHealth",
  description: "Healty food for everyone. What do you want to eat today?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-[#FFFAF1] md:p-8 min-h-screen">
          <div className="flex">
            <Sidebar />

            <div className="flex-1 pb-6 md:p-8">
              <Header />

              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
