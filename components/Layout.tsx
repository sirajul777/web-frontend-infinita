import React, { ReactNode } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Infinita Conceling" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  </div>
);

export default Layout;
