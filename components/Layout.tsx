import React, { ReactNode } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import "../style/custom.css";
import "tailwindcss/tailwind.css";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Infinita Conceling" }: Props) => (
  <html lang="id" className="scroll-smooth">
    <Head>
      <meta name="viewport" content="viewport-fit=cover" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="pt lombok sumbawa bersinar adalah perusahaan yang bergerak di bidang konstruksi bangunan" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Pushster&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      <link href="https://fonts.googleapis.com/css2?family=Viga&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet" />
    </Head>
    <body className="bg-white">
      <main>
        <Navbar />
        {children}
        <Footer />
      </main>
    </body>
  </html>
);

export default Layout;
