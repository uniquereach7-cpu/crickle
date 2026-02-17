import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import crickleLogo from "@/assets/crickle.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center">
                <img src={crickleLogo} alt="Crickle Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-display font-bold text-lg tracking-tight text-foreground">
                <span className="text-primary">Crickle</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium indoor sports experience. Pickleball & Cricket courts available for reservation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 tracking-wide uppercase">Navigate</h4>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/booking", label: "Book a Court" },
                { to: "/gallery", label: "Gallery" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sports */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 tracking-wide uppercase">Sports</h4>
            <ul className="space-y-3">
              <li className="text-sm text-muted-foreground">Pickleball — 1 Court</li>
              <li className="text-sm text-muted-foreground">Cricket Nets — 2 Courts</li>
              <li className="text-sm text-muted-foreground">Open 6:00 AM – 10:00 PM</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 tracking-wide uppercase">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+1234567890" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Phone size={14} /> +1 (234) 567-890
                </a>
              </li>
              <li>
                <a href="mailto:hello@crickle.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail size={14} /> hello@crickle.com
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={14} /> 123 Sports Ave, City
                </span>
              </li>
              <li>
                <a
                   href="https://instagram.com"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                 >
                   <Instagram size={14} /> @crickle
                 </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Crickle. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Premium indoor sports facility
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
