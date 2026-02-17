import { motion } from "framer-motion";
import heroVideo from "@/assets/herovid.mp4";

const INSTAGRAM_URL = "https://www.instagram.com/crickle.hyd?igsh=dWdvYnY3bjRxYnF5";

const VideoSection = () => {
  const handleVideoClick = () => {
    window.open(INSTAGRAM_URL, "_blank");
  };

  return (
    <section className="w-full py-6 md:py-8 flex flex-col items-center gap-6" aria-label="Premium Courts Video">
      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-foreground text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        View Our <span className="gold-gradient-text">Social Highlights!</span>
      </motion.h2>
      
      <motion.div
        className="w-[90%] overflow-hidden rounded-lg cursor-pointer group"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        onClick={handleVideoClick}
      >
        <div className="w-full aspect-video bg-black/10 relative">
          <video
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover group-hover:opacity-75 transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default VideoSection;
