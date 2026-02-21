// Navbar.tsx (desktop part only changes)
// Goal: logo bigger + links closer to logo like reference, without causing horizontal scroll.

\"use client\";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import crickleLogo from "@/assets/crickle.png";

const navLinks = [
  { to: "/events", label: "Events" },
  { to: "/booking", label: "Book a Court" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

type NavbarProps = { variant?: "hero" | "sticky" };

const Navbar = ({ variant = "hero" }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHero = variant === "hero";

  // Split links around the logo: first two on the left, the rest on the right
  const leftLinks = navLinks.slice(0, 2);
  const rightLinks = navLinks.slice(2);

  const linkBase =
    "relative text-sm font-semibold tracking-wide transition-colors duration-200 whitespace-nowrap";
  const idle = isHero ? "text-linear-gradient(135deg, hsl(354 44% 48%), hsl(166 27% 36%), hsl(354 44% 48%));/85 hover:text-white" : "text-muted-foreground hover:text-foreground";
  const active = "text-primary";

  const NavItem = ({ to, label }: { to: string; label: string }) => {
    const isActive = pathname === to;
    return (
      <Link href={to} className={`${linkBase} ${isActive ? active : idle}`}>
        {label}
        {isActive && (
          <motion.div
            layoutId="nav-indicator"
            className="absolute -bottom-3 left-0 right-0 h-[2px] gold-gradient-bg rounded-full"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
      </Link>
    );
  };

  return (
    <nav
      className={[
        variant === "hero" ? "absolute top-0 left-0 right-0 z-50" : "fixed top-0 left-0 right-0 z-50",
        "overflow-x-clip",
      ].join(" ")}
    >
      <div className={isHero ? "bg-transparent" : "backdrop-blur-xl bg-background/80 border-b border-border/50 shadow-sm"}>
        <div className="max-w-[1600px] mx-auto px-8 lg:px-20">          {/* taller bar like reference */}
          <div className="h-28 flex items-center">
            {/* Desktop */}
           

<div className="hidden md:grid w-full items-center justify-center
                grid-cols-[max-content_max-content_max-content]
                gap-x-[clamp(22px,3vw,56px)]">
  {/* Left links */}
  <div className="flex items-center justify-end gap-[clamp(18px,2.4vw,36px)]">
    <NavItem to={leftLinks[0].to} label={leftLinks[0].label} />
    <NavItem to={leftLinks[1].to} label={leftLinks[1].label} />
  </div>

  {/* Logo */}
  <Link href="/" aria-label="Crickle Home" className="flex items-center justify-center">
    <img
      src={crickleLogo.src}
      alt="Crickle Logo"
      className="w-24 h-24 lg:w-28 lg:h-28 object-contain drop-shadow-[0_12px_34px_rgba(0,0,0,.45)]"
    />
  </Link>

  {/* Right links */}
  <div className="flex items-center justify-start gap-[clamp(18px,2.4vw,36px)]">
    {rightLinks.map((link) => (
      <NavItem key={link.to} to={link.to} label={link.label} />
    ))}
  </div>
</div>


            {/* Mobile */}
            <div className="md:hidden w-full flex items-center justify-between">
              <Link href="/" aria-label="Crickle Home" className="flex items-center">
                <img src={crickleLogo.src} alt="Crickle Logo" className="w-16 h-16 object-contain" />
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className={[
                  "p-2 rounded-xl transition-colors",
                  isHero ? "text-white hover:bg-white/10" : "text-foreground hover:bg-secondary",
                ].join(" ")}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu unchanged */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className={[
              "md:hidden overflow-hidden",
              isHero ? "backdrop-blur-xl bg-black/60 border-b border-white/10" : "backdrop-blur-xl bg-background/95 border-b border-border/50 shadow-sm",
            ].join(" ")}
          >
            <div className="px-6 py-6 flex flex-col gap-2">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.to;
                return (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.to}
                      onClick={() => setIsOpen(false)}
                      className={[
                        "block px-4 py-3 rounded-xl text-base font-semibold transition-colors",
                        isActive ? "text-primary bg-primary/10" : isHero ? "text-white/85 hover:text-white hover:bg-white/10" : "text-foreground/80 hover:text-foreground hover:bg-foreground/5",
                      ].join(" ")}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
