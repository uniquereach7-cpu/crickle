import { motion } from "framer-motion";
import { Clock, Shield, Zap } from "lucide-react";
import { PickleballRacket, CricketBat, CourtNet } from "../SVGDoodles";
import instantVideo from "@/assets/instant.mp4";
import premiumcourtsVideo from "@/assets/premiumcourts.mp4";
import flexibleTimingsVideo from "@/assets/flexible-timings.mp4";

const features = [
  {
    icon: <Zap size={22} />,
    title: "Instant Booking",
    description: "Reserve your court in seconds. Real-time availability, zero friction.",
    doodle: <PickleballRacket className="w-16 h-16" />,
    video: instantVideo,
  },
  {
    icon: <Shield size={22} />,
    title: "Premium Courts",
    description: "Professional-grade surfaces. 1 Pickleball court and 2 Cricket nets.",
    doodle: <CricketBat className="w-14 h-14" />,
    video: premiumcourtsVideo,
  },
  {
    icon: <Clock size={22} />,
    title: "Flexible Hours",
    description: "Open 6 AM to 10 PM. 60-minute slots designed around your schedule.",
    doodle: <CourtNet className="w-20 h-12" />,
    video: flexibleTimingsVideo,
  },
];

const Features = () => {
  return (
    <section className="section-padding bg-transparent" aria-label="Features">
      <div className="container-tight">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-border/50 text-muted-foreground mb-6">
            Why Crickle
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-foreground">
            Built for <span className="gold-gradient-text">Performance</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="glass-card-hover flex flex-col h-full overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Video Container */}
              <div className="w-full h-48 overflow-hidden bg-primary/10">
                <video
                  src={feature.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content Container */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center text-primary">
                    {feature.icon}
                  </div>
                  <div className="text-primary/40">
                    {feature.doodle}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
