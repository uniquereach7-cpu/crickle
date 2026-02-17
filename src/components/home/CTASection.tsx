import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ctaBg from "@/assets/crickle3.jpeg";

const CTASection = () => {
  return (
    <section className="section-padding" aria-label="Call to Action">
      <div className="container-tight">
        <motion.div
          className="glass-card relative overflow-hidden text-center py-20 px-8"
          style={{
            backgroundImage: `url('${ctaBg}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Background overlay for text readability */}
          <div className="absolute inset-0 bg-background/60 rounded-2xl" />

          {/* Subtle gradient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-10 gold-gradient-bg blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-foreground mb-4">
              Ready to <span className="gold-gradient-text">Play?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto mb-10">
              Pick your court, choose your time, and we'll see you on the floor.
            </p>
            <Link
              to="/booking"
              className="group inline-flex items-center justify-center gap-3 px-10 py-4 rounded-2xl text-base font-semibold gold-gradient-bg text-primary-foreground transition-all duration-300 hover:scale-105 gold-glow"
            >
              Book Your Court
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
