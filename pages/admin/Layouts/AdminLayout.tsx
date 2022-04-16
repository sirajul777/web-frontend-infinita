import React, { ReactNode } from "react";
import Head from "next/head";
// import "../style/custom.css";
import "tailwindcss/tailwind.css";
import NavMin from "../components/NavMin";

type Props = {
  children?: ReactNode;
  title?: string;
};

const AdminLayout = ({ children, title = "Infinita Conceling" }: Props) => (
  <html lang="id">
    <head>
      {/* <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content="Start your development with a Dashboard for Bootstrap 4." />
      <meta name="author" content="Creative Tim" /> */}
      <link rel="icon" href="../assets/img/brand/favicon.png" type="image/png" />

      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" />

      <link rel="stylesheet" href="/vendors/assets/vendor/nucleo/css/nucleo.css" type="text/css" />
      <link rel="stylesheet" href="/vendors/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" type="text/css" />

      <link rel="stylesheet" href="/vendors/assets/css/argon.css?v=1.2.0" type="text/css" />
    </head>
    <body className="bg-white">
      <main>
        <NavMin />
        {children}

        {/* <Footer /> */}
      </main>
      <script src="/vendors/assets/vendor/jquery/dist/jquery.min.js" />
      <script src="/vendors/assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js" />
      <script src="/vendors/assets/vendor/js-cookie/js.cookie.js" />
      <script src="/vendors/assets/vendor/jquery.scrollbar/jquery.scrollbar.min.js" />
      <script src="/vendors/assets/vendor/jquery-scroll-lock/dist/jquery-scrollLock.min.js" />

      <script src="/vendors/assets/vendor/chart.js/dist/Chart.min.js" />
      <script src="/vendors/assets/vendor/chart.js/dist/Chart.extension.js" />

      <script src="/vendors/assets/js/argon.js?v=1.2.0" />
    </body>
  </html>
);

export default AdminLayout;
