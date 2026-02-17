import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { PickleballRacket, CricketBat, PickleballBall } from "../SVGDoodles";
import heroBg from "@/assets/hero3.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" aria-label="Hero">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-background/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/20 to-background/40" />
      </div>

      {/* Floating Doodles */}
      <motion.div
        className="absolute top-32 right-[10%] text-primary/60 hidden lg:block"
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <PickleballRacket className="w-32 h-32" />
      </motion.div>
      <motion.div
        className="absolute bottom-40 left-[8%] text-primary/50 hidden lg:block"
        animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <CricketBat className="w-28 h-28" />
      </motion.div>
      <motion.div
        className="absolute top-[45%] right-[25%] text-primary/40 hidden xl:block"
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <PickleballBall className="w-16 h-16" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-28">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-primary/40 text-primary bg-primary/10 mb-8">
              Premium Indoor Sports
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight text-foreground mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Your Game.
            <br />
            <span className="gold-gradient-text">Elevated.</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Pickleball and Cricket courts designed for performance.
            Reserve your slot in seconds.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Link
              to="/booking"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-semibold gold-gradient-bg text-primary-foreground transition-all duration-300 hover:scale-105 gold-glow"
            >
              Book a Court
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-semibold border border-border/50 text-foreground hover:border-primary/40 hover:text-primary transition-all duration-300"
            >
              Explore Gallery
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={24} className="text-muted-foreground/50" />
      </motion.div>
    </section>
  );
};

export default Hero;
