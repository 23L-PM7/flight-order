"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { usePathname } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   console.log({ pathname });
  //   setLoading(true);

  //   setLoading(false);
  // }, [pathname]);

  return (
    <html lang="en" className="bg-[#fafafa]">
      <UserProvider>
        <body className={inter.className}>
          <Header />
          <Suspense>{children}</Suspense>
          <Footer />
        </body>
        {/* {loading && <>Loader</>} */}
      </UserProvider>
    </html>
  );
}
