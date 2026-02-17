import { motion } from "framer-motion";
import { InlineWidget } from "react-calendly";
import Layout from "@/components/Layout";

const Booking = () => {
  return (
    <Layout>
      <section className="section-padding min-h-screen" aria-label="Booking">
        <div className="container-tight">

          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-border/50 text-muted-foreground mb-6">
              Reservations
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-foreground">
              Book a <span className="gold-gradient-text">Court</span>
            </h1>

            <p className="mt-4 text-muted-foreground text-sm md:text-base">
              Select your preferred date and time below.
            </p>
          </motion.div>

          {/* Calendly Widget */}
          <motion.div
            className="glass-card p-6 md:p-8 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <InlineWidget
              url="https://calendly.com/askjoshi-0102/pickleball-court-bookings"
              styles={{
                height: "750px",
              }}
            />
          </motion.div>

        </div>
      </section>
    </Layout>
  );
};

export default Booking;