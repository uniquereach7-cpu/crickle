\"use client\";

import Layout from "@/components/Layout";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import CourtsSection from "@/components/home/CourtsSection";
import CTASection from "@/components/home/CTASection";
import Socials from "@/components/home/socials";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <CourtsSection />
      <Socials />
      <Features />
      <CTASection />
    </Layout>
  );
};

export default Index;
