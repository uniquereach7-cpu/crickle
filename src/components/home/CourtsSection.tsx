import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const courts = [
  {
    name: "Pickleball Court",
    tag: "Pickleball",
    description: "Professional regulation court with premium flooring and lighting. Perfect for singles and doubles.",
    // slots: "16 slots / day",
  },
  {
    name: "Cricket Net",
    tag: "Cricket",
    description: "Full-length batting net with bowling machine access. Ideal for practice sessions.",
    // slots: "16 slots / day",
  },
  // {
  //   name: "Cricket Net 2",
  //   tag: "Cricket",
  //   description: "Full-length batting net. Great for team practice and individual skill development.",
  //   slots: "16 slots / day",
  // },
];

const CourtsSection = () => {
  return (
    <section className="section-padding" aria-label="Our Courts">
      <div className="container-tight">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-border/50 text-muted-foreground mb-6">
            Facilities
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-foreground">
            Our <span className="gold-gradient-text">Courts</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courts.map((court, i) => (
            <motion.div
              key={court.name}
              className="glass-card-hover group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Top gradient accent */}
              <div className="h-1 gold-gradient-bg" />

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium border border-primary/30 text-primary">
                    {court.tag}
                  </span>
                  <span className="text-xs text-muted-foreground">{court.slots}</span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">{court.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{court.description}</p>

                <Link
                  to="/booking"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all duration-300"
                >
                  Reserve Now <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourtsSection;
