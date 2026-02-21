"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { InlineWidget } from "react-calendly";
import Layout from "@/components/Layout";

type Court = {
  id: string;
  name: string;
  url: string; // calendly url for this court
  priceLabel?: string;
  note?: string;
};

const courts: Court[] = [
  {
    id: "pickle",
    name: "Pickleball Court",
    url: "https://calendly.com/cricklehyderabad/pickle-ball-booking",
    priceLabel: "₹800 / 60 min",
    note: "60 minute slots · 6:00 AM – 10:00 PM · Please arrive 5 minutes early.",
  },
  {
    id: "cricket",
    name: "Cricket Net 1",
    url: "https://calendly.com/cricklehyderabad/cricket-booking",
    priceLabel: "₹800 / 60 min",
    note: "60 minute slots · 6:00 AM – 10:00 PM · Please arrive 5 minutes early.",
  },
  {
    id: "cricket-net-2",
    name: "Cricket Net 2",
    url: "https://calendly.com/cricklehyderabad/cricket-booking-net-2",
    priceLabel: "₹800 / 60 min",
    note: "60 minute slots · 6:00 AM – 10:00 PM · Please arrive 5 minutes early.",
  },
];


const Booking = () => {
  const [selected, setSelected] = useState<Court>(courts[0]);

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

          {/* Court selector */}
          <div className="flex justify-center lg:justify-start gap-3 mb-4">
            {courts.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelected(c)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selected.id === c.id
                    ? "gold-gradient-bg text-primary-foreground gold-glow"
                    : "glass-card text-muted-foreground hover:text-foreground hover:border-primary/30"
                }`}
                aria-pressed={selected.id === c.id}
              >
                {c.name}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-stretch">

            {/* LEFT SIDE */}
<motion.div
  className="h-full"
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.05, duration: 0.45 }}
>
  <div className="h-full flex flex-col gap-4">
    

    {/* Booking details card */}
    <div
      className="rounded-2xl p-6 md:p-8 flex items-center"
      style={{
        background: "rgba(255,255,255,0.03)",
        backdropFilter: "blur(6px)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="w-full max-w-md mx-auto text-center lg:text-left">
        <h2 className="text-2xl font-semibold mb-4">{selected.name} Bookings</h2>

        <p className="text-sm text-muted-foreground mb-5">{selected.note}</p>

        <ul className="text-sm space-y-2 mb-6">
          <li>• Booking is confirmed immediately (if payment enabled)</li>
          <li>• Cancel or reschedule from the confirmation email</li>
          <li>• For groups or multi-court bookings contact us directly</li>
        </ul>

        <div className="border-t border-border/30 pt-5">
          <div className="text-sm text-muted-foreground mb-1">Price</div>
          <div className="text-2xl font-bold">{selected.priceLabel}</div>
        </div>
      </div>
    </div>
    {/* Membership promo box */}
    <div
      className="rounded-2xl p-5 md:p-6"
      style={{
        background:
          "linear-gradient(135deg, rgba(186,58,73,0.14), rgba(63,160,143,0.14))",
        backdropFilter: "blur(8px)",
        border: "1px solid rgba(255,255,255,0.10)",
      }}
    >
      <div>
        <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">
          Membership
        </div>

        <h3 className="text-xl md:text-2xl font-semibold leading-tight">
          Become a Member
        </h3>

        <p className="text-sm text-muted-foreground mt-2">
          Get exclusive benefits, priority slots, and special member pricing.
        </p>
      </div>

      <ul className="mt-4 space-y-2 text-sm">
        <li>• Priority booking windows</li>
        <li>• Discounted court rates</li>
        <li>• Member-only tournaments & events</li>
        <li>• Faster support for reschedules</li>
      </ul>

      <div className="mt-5">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium gold-gradient-bg text-primary-foreground gold-glow"
        >
          Become a Member
        </Link>
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
              <div
                className="rounded-2xl overflow-hidden h-full"
                style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.04)" }}
              >
                <div className="calendly-wrapper w-full h-full overflow-hidden">
                  {/* InlineWidget will re-render when selected.url changes */}
                  <InlineWidget
                    url={selected.url}
                    styles={{
                      height: "100%",
                      width: "100%",
                    }}
                    // if you're using TypeScript and InlineWidget complains, cast as any:
                    // {...(InlineWidget as any)({ url: selected.url, styles: { height: '100%', width: '100%' } })}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Height + Overflow + styling fixes */}
        <style>{`
          /* Calendar wrapper: try to make the iframe fit the viewport so Calendly won't scroll */
          .calendly-wrapper {
            height: calc(100vh - 190px); /* tweak the 190px if your header changes */
            min-height: 900px;           /* ensure large enough on desktop */
            max-height: 90vh;
            overflow: hidden;
            background: transparent;
          }

          /* smaller screens */
          @media (max-width: 1024px) {
            .calendly-wrapper {
              height: calc(100vh - 220px);
              min-height: 600px;
            }
          }

          @media (max-width: 640px) {
            .calendly-wrapper {
              height: calc(100vh - 160px);
              min-height: 420px;
            }
          }
        `}</style>
      </section>
    </Layout>
  );
};

export default Booking;
