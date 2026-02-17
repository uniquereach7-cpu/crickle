import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Instagram } from "lucide-react";
import Layout from "@/components/Layout";
import { toast } from "@/hooks/use-toast";
import mapImage from "@/assets/map.png";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setName("");
      setEmail("");
      setMessage("");
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
    }, 1000);
  };

  const contactInfo = [
    { icon: <Phone size={18} />, label: "Phone", value: "6309283300", href: "tel:+916309283300" },
    { icon: <Mail size={18} />, label: "Email", value: "cricklehyderabad@gmail.com", href: "mailto:cricklehyderabad@gmail.com" },
    { icon: <MapPin size={18} />, label: "Address", value: "Crickle Hyderabad", href: "https://www.google.com/maps/place/Crickle+Hyderabad/data=!4m2!3m1!1s0x0:0x521430e7003ae42b?sa=X&ved=1t:2428&ictx=111" },
    { icon: <Instagram size={18} />, label: "Instagram", value: "@crickle.hyd", href: "https://www.instagram.com/crickle.hyd?igsh=dWdvYnY3bjRxYnF5" },
  ];

  return (
    <Layout>
      <section className="section-padding min-h-screen" aria-label="Contact">
        <div className="container-tight">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-border/50 text-muted-foreground mb-6">
              Get in Touch
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-foreground">
              Contact <span className="gold-gradient-text">Us</span>
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              className="glass-card p-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <h2 className="text-xl font-bold text-foreground mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-medium text-muted-foreground mb-2">Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    maxLength={100}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors text-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-medium text-muted-foreground mb-2">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    maxLength={255}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors text-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-medium text-muted-foreground mb-2">Message</label>
                  <textarea
                    id="contact-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help?"
                    rows={5}
                    maxLength={1000}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors text-sm resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSending || !name.trim() || !email.trim() || !message.trim()}
                  className="w-full py-3.5 rounded-xl text-sm font-semibold gold-gradient-bg text-primary-foreground transition-all duration-300 hover:scale-[1.02] gold-glow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSending ? "Sending…" : <><Send size={16} /> Send Message</>}
                </button>
              </form>
            </motion.div>

            {/* Contact Info + Map */}
            <motion.div
              className="flex flex-col gap-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="glass-card p-8">
                <h2 className="text-xl font-bold text-foreground mb-6">Info</h2>
                <div className="space-y-5">
                  {contactInfo.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-medium mb-0.5">{item.label}</p>
                        <p className="text-sm text-foreground group-hover:text-primary transition-colors">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Map Image */}
              <a
                href="https://www.google.com/maps/place/Crickle+Hyderabad/data=!4m2!3m1!1s0x0:0x521430e7003ae42b?sa=X&ved=1t:2428&ictx=111"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card overflow-hidden flex-1 min-h-[240px] flex items-center justify-center group hover:border-primary/30 transition-all duration-300 cursor-pointer"
              >
                <img
                  src={mapImage}
                  alt="Crickle Hyderabad Location Map"
                  className="w-full h-full object-contain group-hover:opacity-75 transition-opacity duration-300"
                  loading="lazy"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
