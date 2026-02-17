import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import bgg from "@/assets/bgg1.png";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="min-h-screen flex flex-col bg-transparent relative">
      {/* Fixed Background Image */}
      <div
        className="fixed inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `url('${bgg}')`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          pointerEvents: "none",
        }}
      />

      {/* Navbar overlays content; hero variant only on home */}
      <Navbar variant={isHome ? "hero" : "sticky"} />

      {/* Main Content: no top padding on home (navbar is inside hero visually),
          padding on other pages (navbar is fixed and would cover content) */}
      <main className={["flex-1 relative z-10", isHome ? "" : "pt-24"].join(" ")}>
        {children}
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
