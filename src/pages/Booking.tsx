import { motion } from "framer-motion";
import { InlineWidget } from "react-calendly";
import Layout from "@/components/Layout";

const Booking = () => {
  return (
    <Layout>
      <section className="section-padding min-h-screen overflow-hidden" aria-label="Booking">
        <div className="container-tight">

          {/* Header */}
          <motion.div
            className="text-center mb-6 lg:mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase border border-border/50 text-muted-foreground mb-3">
              Reservations
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-foreground">
              Book a <span className="gold-gradient-text">Court</span>
            </h1>

            <p className="mt-3 text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
              Select your preferred date and time below.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-stretch">

            {/* LEFT SIDE */}
            <motion.div
              className="h-full"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.45 }}
            >
              <div className="glass-card h-full rounded-2xl p-6 md:p-8 flex flex-col justify-center">

                <div className="max-w-md mx-auto text-center lg:text-left">
                  <h2 className="text-2xl font-semibold mb-4">
                    Pickleball Court Bookings
                  </h2>

                  <p className="text-sm text-muted-foreground mb-5">
                    60 minute slots · 6:00 AM – 10:00 PM · Please arrive 5 minutes early.
                  </p>

                  <ul className="text-sm space-y-2 mb-6">
                    <li>• Booking is confirmed immediately</li>
                    <li>• Cancel or reschedule anytime</li>
                    <li>• Contact us for multi-court booking</li>
                  </ul>

                  <div className="border-t border-border/30 pt-5">
                    <div className="text-sm text-muted-foreground mb-1">Price</div>
                    <div className="text-2xl font-bold">₹800 / 60 min</div>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* RIGHT SIDE - CALENDAR */}
            <motion.div
              className="h-full"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.45 }}
            >
              <div className="rounded-2xl overflow-hidden h-full">

                <div
                  className="calendly-wrapper w-full h-full overflow-hidden"
                >
                  <InlineWidget
                    url="https://calendly.com/askjoshi-0102/pickleball-court-bookings"
                    styles={{
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </div>

              </div>
            </motion.div>
          </div>
        </div>

        {/* Height + Overflow Fix */}
        <style jsx>{`
          .calendly-wrapper {
            height: calc(100vh - 190px);
            min-height: 0px;
            overflow: hidden;
          }

          @media (max-width: 1024px) {
            .calendly-wrapper {
              height: calc(100vh - 220px);
              min-height: 520px;
            }
          }

          @media (max-width: 640px) {
            .calendly-wrapper {
              height: calc(100vh - 200px);
              min-height: 450px;
            }
          }
        `}</style>
      </section>
    </Layout>
  );
};

export default Booking;