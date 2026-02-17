import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import bgg from "@/assets/bgg1.png";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
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
      
      {/* Navbar - separate to maintain z-50 */}
      <Navbar />
      
      {/* Main Content with higher z-index */}
      <main className="flex-1 pt-20 relative z-10">
        {children}
      </main>
      
      {/* Footer - with proper z-index */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
