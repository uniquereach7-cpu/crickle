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

// Placeholder gallery items with generated gradient colors
const galleryItems: GalleryItem[] = [
  { id: "1", src: "", alt: "Indoor pickleball court with professional lighting", type: "image" },
  { id: "2", src: "", alt: "Cricket net practice session", type: "image" },
  { id: "3", src: "", alt: "Players enjoying a doubles match", type: "image" },
  { id: "4", src: "", alt: "Facility lounge area", type: "image" },
  { id: "5", src: "", alt: "Cricket batting practice", type: "image" },
  { id: "6", src: "", alt: "Evening court view", type: "image" },
  { id: "7", src: "", alt: "Pickleball tournament action", type: "image" },
  { id: "8", src: "", alt: "Court detail shot", type: "image" },
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

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {galleryItems.map((item, i) => (
              <motion.button
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`group relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br ${placeholderGradients[i]} border border-border/20 hover:border-primary/30 transition-all duration-500`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
                aria-label={`View ${item.alt}`}
              >
                {/* Placeholder Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                      <span className="text-primary text-lg font-bold">{i + 1}</span>
                    </div>
                    <p className="text-[11px] text-muted-foreground/60 line-clamp-2">{item.alt}</p>
                  </div>
                </div>

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

              <div className={`aspect-video bg-gradient-to-br ${placeholderGradients[Number(selectedItem.id) - 1]} flex items-center justify-center`}>
                <div className="text-center">
                  <p className="text-lg font-semibold text-foreground mb-2">{selectedItem.alt}</p>
                  <p className="text-xs text-muted-foreground">Replace with actual image</p>
                </div>
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
