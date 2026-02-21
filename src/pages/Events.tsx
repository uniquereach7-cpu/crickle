\"use client\";

import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, Clock, Trophy, Users } from "lucide-react";
import Layout from "@/components/Layout";

type EventItem = {
  id: string;
  title: string;
  date: string;
  time: string;
  type: string;
  location: string;
  description: string;
  cta?: { label: string; to: string };
};

const upcomingEvents: EventItem[] = [
  {
    id: "pickle-open",
    title: "Crickle Pickle Open",
    date: "March 8, 2026",
    time: "7:00 AM – 3:00 PM",
    type: "Tournament · Doubles",
    location: "Pickleball Court · Crickle Hyderabad",
    description: "Skill-based brackets, certified referees, and prizes for every podium finish.",
    cta: { label: "Join the bracket", to: "/booking" },
  },
  {
    id: "junior-clinic",
    title: "Junior Cricket Clinic",
    date: "March 16, 2026",
    time: "4:00 PM – 7:00 PM",
    type: "Coaching · Ages 10-16",
    location: "Net 1 & Net 2",
    description: "High-intensity drills with certified coaches. Limited to 12 players for focused feedback.",
    cta: { label: "Reserve a spot", to: "/booking" },
  },
  {
    id: "mixed-mash",
    title: "Mixed Mash Social Night",
    date: "March 22, 2026",
    time: "6:00 PM – 9:30 PM",
    type: "Social · Round Robin",
    location: "Pickleball Court",
    description: "Music, rotating partners, snacks on us. Perfect for meeting the community.",
    cta: { label: "RSVP", to: "/contact" },
  },
];

const weeklyPrograms = [
  {
    label: "Open Play Pickleball",
    days: "Tue · Thu · Sat",
    time: "6:00 AM – 9:00 AM",
    note: "Drop in, we balance courts by skill level.",
  },
  {
    label: "Fast Bowl Session",
    days: "Wed · Fri",
    time: "7:00 PM – 9:00 PM",
    note: "Two bowling machines, max 10 players per lane.",
  },
  {
    label: "Beginner Pickle Intro",
    days: "Sunday",
    time: "8:00 AM – 10:00 AM",
    note: "Learn rules, scoring, and footwork with our coaching crew.",
  },
];

const Events = () => {
  return (
    <Layout>
      <section className="section-padding min-h-screen" aria-label="Events">
        <div className="container-tight">
          {/* Hero */}
          <motion.div
            className="text-center mb-10 lg:mb-14"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.22em] uppercase border border-border/60 text-muted-foreground mb-4">
              <CalendarDays size={14} />
              Events
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-foreground">
              Play, Compete & Connect at <span className="gold-gradient-text">Crickle</span>
            </h1>

            <p className="mt-4 text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
              Upcoming tournaments, coaching clinics, and social nights crafted for our pickleball and cricket community.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold gold-gradient-bg text-primary-foreground gold-glow"
              >
                View Available Slots
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold border border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
              >
                Host an Event
              </Link>
            </div>
          </motion.div>

          {/* Upcoming events */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mb-12">
            {upcomingEvents.map((event, idx) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * idx, duration: 0.4 }}
                className="group rounded-2xl border border-border/60 bg-background/60 backdrop-blur-xl p-6 hover:border-primary/40 transition-all duration-300 h-full"
              >
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  <Trophy size={14} className="text-primary" />
                  {event.type}
                </div>

                <h3 className="mt-3 text-xl font-semibold text-foreground leading-tight">
                  {event.title}
                </h3>

                <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CalendarDays size={16} />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{event.location}</span>
                  </div>
                </div>

                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {event.description}
                </p>

                {event.cta && (
                  <Link
                    href={event.cta.to}
                    className="mt-5 inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-semibold gold-gradient-bg text-primary-foreground shadow-sm transition-all gold-glow"
                  >
                    {event.cta.label}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          {/* Weekly programs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl border border-border/60 bg-background/60 backdrop-blur-xl p-6 lg:p-8"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Programs</div>
                <h2 className="text-2xl font-semibold text-foreground">Weekly Rhythm</h2>
                <p className="text-sm text-muted-foreground mt-2 max-w-xl">
                  Structured sessions that keep the community active and make it easy to drop in consistently.
                </p>
              </div>

              <Link
                to="/booking"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold border border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
              >
                <Users size={16} />
                Check availability
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {weeklyPrograms.map((program) => (
                <div
                  key={program.label}
                  className="rounded-xl border border-border/50 bg-muted/10 p-5 h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{program.days}</div>
                    <h3 className="mt-2 text-lg font-semibold text-foreground">{program.label}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{program.time}</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{program.note}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Host with us */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="mt-8 rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 p-6 lg:p-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 items-center">
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">Private Rentals</div>
                <h3 className="text-2xl font-semibold text-foreground">Plan a corporate league, birthday match, or team offsite</h3>
                <p className="text-sm text-muted-foreground mt-3 max-w-2xl">
                  We handle scheduling, on-ground coordinators, basic refreshments, and playlists. Share your idea and we will shape the run-of-show.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold gold-gradient-bg text-primary-foreground gold-glow"
                >
                  Talk to the team
                </Link>
                <Link
                  to="/booking"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold border border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                >
                  View calendar
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
