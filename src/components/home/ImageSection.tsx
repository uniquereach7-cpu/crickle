import { motion } from "framer-motion";
import homeImage from "@/assets/homeimg.png";

const INSTAGRAM_URL = "https://www.instagram.com/crickle.hyd?igsh=dWdvYnY3bjRxYnF5";

const ImageSection = () => {
  const handleImageClick = () => {
    window.open(INSTAGRAM_URL, "_blank");
  };

  return (
    <section className="w-full py-3 md:py-4 flex justify-center" aria-label="Gallery Image">
      <motion.div
        className="w-[90%] overflow-hidden rounded-lg cursor-pointer group"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        onClick={handleImageClick}
      >
        <div className="w-full aspect-video bg-transparent relative flex items-center justify-center">
          <img
            src={homeImage}
            alt="Premium courts gallery"
            className="w-full h-full object-contain group-hover:opacity-75 transition-opacity duration-300"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M9 12h6M12 9v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ImageSection;
