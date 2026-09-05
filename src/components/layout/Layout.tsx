import React from "react";
import PrintGoNavbar from "./PrintGoNavbar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

/**
 * Layout
 *
 * Both navbars are imported so you can compare them side-by-side
 * or switch between them without deleting any code.
 *
 * To use the new framer-motion navbar:   comment out <Navbar /> and uncomment <PrintGoNavbar />
 * To revert to the original navbar:      comment out <PrintGoNavbar /> and uncomment <Navbar />
 *
 * Once confirmed, remove the unused import + component.
 */
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      {/* ── Original navbar (kept until new one is confirmed working) ── */}
      {/* <Navbar /> */}

      {/* ── New framer-motion navbar ── */}
      <PrintGoNavbar variant="floating" />

      <main id="main-content" style={{ paddingTop: "88px" }}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
