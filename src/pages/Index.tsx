import Layout from "@/components/Layout";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import CourtsSection from "@/components/home/CourtsSection";
import CTASection from "@/components/home/CTASection";
import VideoSection from "@/components/home/VideoSection";
import ImageSection from "@/components/home/ImageSection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <CourtsSection />
      <VideoSection />
      <ImageSection />
      <Features />
      <CTASection />
    </Layout>
  );
};

export default Index;
