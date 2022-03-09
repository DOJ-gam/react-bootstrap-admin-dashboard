import React from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/nav/Navbar";
import Sidebar from "../components/sidebar/Sidebar";

const DefaultLayout = ({ children }) => {
  return (
    <body class="sb-nav-fixed">
      <Navbar />
      <div className="main">
        <div id="layoutSidenav">
          <Sidebar>
            <div className="children">{children}</div>
          </Sidebar>
          <div id="layoutSidenav_content">
            <main>
              <div class="container-fluid px-4">{children}</div>
              <Footer />
            </main>
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </body>
  );
};

export default DefaultLayout;
