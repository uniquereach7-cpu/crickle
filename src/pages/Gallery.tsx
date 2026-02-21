"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Instagram } from "lucide-react";
import Layout from "@/components/Layout";

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  instagramUrl?: string;
  type: "image";
}

// Real images live in public/assets so they can be referenced directly
const galleryItems: GalleryItem[] = [
  { id: "1", src: "/assets/DSC00111.webp", alt: "Cricket stumps, bat and training balls on indoor turf", type: "image" },
  { id: "2", src: "/assets/DSC00118.webp", alt: "Coaches operating a bowling machine in the practice nets", type: "image" },
  { id: "3", src: "/assets/DSC00147.webp", alt: "Close-up of a pickleball paddle and ball before a serve", type: "image" },
  { id: "4", src: "/assets/DSC00200.webp", alt: "Player serving a pickleball beside the net", type: "image" },
  { id: "5", src: "/assets/DSC00208.webp", alt: "Crickle logo ", type: "image" },
];

const placeholderGradients = [
  "from-primary/20 to-accent/10",
  "from-secondary to-muted",
  "from-accent/15 to-primary/10",
  "from-muted to-secondary",
  "from-primary/10 to-secondary",
  "from-secondary to-accent/10",
  "from-accent/10 to-muted",
  "from-muted to-primary/15",
];

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <Layout>
      <section className="section-padding min-h-screen" aria-label="Gallery">
        <div className="container-tight">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-border/50 text-muted-foreground mb-6">
              Gallery
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-foreground">
              Our <span className="gold-gradient-text">Space</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-md mx-auto text-sm">
              A glimpse of the Crickle experience. Follow us for the latest.
            </p>
          </motion.div>

          {/* Instagram CTA */}
          <motion.div
            className="flex justify-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <a
              href="https://www.instagram.com/crickle.hyd?igsh=dWdvYnY3bjRxYnF5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border/50 text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
            >
              <Instagram size={18} />
              Follow @crickle.hyd
            </a>
          </motion.div>

          {/* Gallery Grid: simple 3 up, 2 down; centered last row */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {galleryItems.map((item, i) => (
              <motion.button
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`group relative w-full sm:w-[48%] md:w-[30%] aspect-[4/3] rounded-2xl overflow-hidden border border-border/20 hover:border-primary/30 transition-all duration-500 bg-gradient-to-br ${placeholderGradients[i % placeholderGradients.length]}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
                aria-label={`View ${item.alt}`}
              >
                {item.src ? (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center px-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                        <span className="text-primary text-lg font-bold">{i + 1}</span>
                      </div>
                      <p className="text-[11px] text-muted-foreground/60 line-clamp-2">{item.alt}</p>
                    </div>
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink size={20} className="text-foreground" />
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-background/90 backdrop-blur-md" onClick={() => setSelectedItem(null)} />
            <motion.div
              className="relative glass-card w-full max-w-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-background/60 backdrop-blur-sm text-foreground hover:bg-background/80 transition-colors"
                aria-label="Close lightbox"
              >
                <X size={18} />
              </button>

              <div className={`aspect-video bg-gradient-to-br ${placeholderGradients[(Number(selectedItem.id) - 1) % placeholderGradients.length]} flex items-center justify-center`}>
                {selectedItem.src ? (
                  <img
                    src={selectedItem.src}
                    alt={selectedItem.alt}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="text-center">
                    <p className="text-lg font-semibold text-foreground mb-2">{selectedItem.alt}</p>
                    <p className="text-xs text-muted-foreground">Image coming soon</p>
                  </div>
                )}
              </div>

              <div className="p-6 flex items-center justify-between">
                <p className="text-sm text-muted-foreground">{selectedItem.alt}</p>
                {selectedItem.instagramUrl && (
                  <a
                    href={selectedItem.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <Instagram size={14} /> View on Instagram
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;
