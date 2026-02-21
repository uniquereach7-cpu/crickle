// src/components/Socials.tsx
import React from "react";
import { motion, Variants } from "framer-motion";

// existing imports (use your aliases or relative paths)
import cr1 from "@/assets/crickle1.jpeg";
import cr2 from "@/assets/crickle2.jpeg";
import cr3 from "@/assets/crickle3.jpeg";
import cr4 from "@/assets/crickle5.jpeg";
import cr5 from "@/assets/crickle6.jpeg";

type Props = {
  instagramUrl?: string;
  videoSrc?: string;
  images?: string[];
};

const Socials: React.FC<Props> = ({
  instagramUrl = "https://www.instagram.com/crickle.hyd",
  videoSrc = "/assets/video/herovid.mp4",
  images = [cr1, cr2, cr3, cr4, cr5],
}) => {
  // right column top 2 images
  const rightTop = images.slice(0, 2);
  // main row (three horizontal images) that should appear BELOW the video
  const mainRow = images.slice(2, 5); // indexes 2,3,4

  const leftVideo = videoSrc;

  const parent: Variants = { visible: { transition: { staggerChildren: 0.1 } } };
  const fall: Variants = {
    hidden: { y: -40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 120, damping: 16 } },
  };
  const slide: Variants = {
    hidden: { x: -40, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 120, damping: 16 } },
  };
  const fadeIn: Variants = {
    hidden: { opacity: 0, scale: 0.995 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.45 } },
  };

  const openIG = (href?: string) => window.open(href ?? instagramUrl, "_blank", "noopener,noreferrer");

  return (
    <section aria-label="Socials" style={{ padding: "3rem 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-foreground text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        View Our <span className="gold-gradient-text">Social Highlights!</span>
      </motion.h2>
        </div>

        <div
          style={{
            borderRadius: 14,
            background: "rgba(255,255,255,0.6)",
            padding: 18,
            boxShadow: "0 10px 30px rgba(2,6,23,0.06)",
            border: "1px solid rgba(0,0,0,0.04)",
            backdropFilter: "blur(6px)",
          }}
        >
          {/* GRID: video (left) + right column (top two stacked). MAIN ROW placed below spanning both columns */}
          <div className="grid-root">
            {/* LEFT: video */}
            <motion.div className="left-video" initial="hidden" animate="visible" variants={fadeIn}>
              <div
                className="video-wrap"
                onClick={() => openIG()}
                role="button"
                aria-label="Open Instagram (video)"
              >
                <video src={leftVideo} autoPlay muted loop playsInline className="video-el" />
                <div className="play-overlay">
                  <div className="play-circle" aria-hidden>
                    <svg width="22" height="22" viewBox="0 0 24 24">
                      <path d="M7 6v12l10-6z" fill="#1f2937" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT COLUMN (top: two stacked small images) */}
            <div className="right-column">
              <motion.div className="top-stack" initial="hidden" animate="visible" variants={parent}>
                {rightTop.map((src, i) => (
                  <motion.a
                    key={i}
                    href={instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="stack-img"
                    variants={fall}
                  >
                    <img src={src} alt={`social-${i + 1}`} loading="lazy" />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* MAIN ROW: moved outside the right-column so it spans full width below */}
            <motion.div className="main-row" initial="hidden" animate="visible" variants={parent}>
              {mainRow.map((src, idx) => (
                <motion.a
                  key={idx}
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="main-img"
                  variants={slide}
                >
                  <img src={src} alt={`main-${idx + 3}`} loading="lazy" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* styles */}
      <style jsx suppressHydrationWarning>{`
        /* grid: video on left, right column on right; main row sits below spanning both columns */
        .grid-root {
          display: grid;
          gap: 18px;
          grid-template-columns: 1fr 420px;
          grid-template-areas:
            "video rightColumn"
            "main  main";
          align-items: start;
        }

        .left-video { grid-area: video; display:flex; align-items:stretch; }
        .video-wrap { width:100%; height:100%; border-radius:12px; overflow:hidden; position:relative; cursor:pointer; background:#ddd; }
        .video-el { width:100%; height:100%; object-fit:cover; display:block; min-height:560px; }
        .play-overlay { position:absolute; inset:0; display:flex; align-items:center; justify-content:center; pointer-events:none; }
        .play-circle { width:68px; height:68px; border-radius:50%; background: rgba(255,255,255,0.92); display:flex; align-items:center; justify-content:center; box-shadow: 0 8px 30px rgba(2,6,23,0.08); }

        /* right column container (top two stacked images) */
        .right-column { grid-area: rightColumn; display:flex; flex-direction:column; gap:14px; }

        /* top small stacked images */
        .top-stack { display:flex; flex-direction:column; gap:12px; }
        .stack-img { position:relative; border-radius:10px; overflow:hidden; display:block; min-height:120px; background:#f5f5f5; }
        .stack-img img { width:100%; height:100%; object-fit:cover; display:block; }

        /* MAIN ROW: 3 equal images that sit below and span full width */
        .main-row { grid-area: main; display:grid; grid-template-columns: repeat(3, 1fr); gap:12px; align-items:stretch; }
        .main-img { position:relative; border-radius:12px; overflow:hidden; display:block; min-height:220px; background:#fafafa; }
        .main-img img { width:100%; height:100%; object-fit:cover; display:block; }

        .badge { position:absolute; left:12px; top:12px; width:36px; height:36px; border-radius:50%; background: rgba(31,41,55,0.86); color:white; display:flex; align-items:center; justify-content:center; font-weight:600; font-size:13px; }

        /* ensure the left video is visually big on desktop but let the main-row be visible */
        .left-video { min-height: 560px; }
        .main-row .main-img { min-height: 180px; }

        /* responsive: stack on small screens */
        @media (max-width: 1024px) {
          .grid-root { grid-template-columns: 1fr; grid-template-areas: "video" "rightColumn" "main"; }
          .video-el { min-height: 260px; }
          .left-video { min-height: auto; }
          .main-row { grid-template-columns: repeat(3, minmax(120px, 1fr)); gap:10px; }
          .main-img { min-height: 120px; }
        }

        @media (max-width: 640px) {
          .stack-img { min-height: 96px; }
          .main-img { min-height: 96px; }
        }
      `}</style>
    </section>
  );
};

export default Socials;
