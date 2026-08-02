import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import TrustStrip from "@/components/home/TrustStrip";
import HeritageStory from "@/components/home/HeritageStory";
import HorizontalScroll from "@/components/home/HorizontalScroll";
import FabricSpotlight from "@/components/home/FabricSpotlight";
import WhyKodTex from "@/components/home/WhyKodTex";
import AudienceSection from "@/components/home/AudienceSection";
import Testimonials from "@/components/home/Testimonials";
import InstagramFeed from "@/components/home/InstagramFeed";
import BlogPreview from "@/components/home/BlogPreview";
import TradeCTA from "@/components/home/TradeCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <TrustStrip />
      <HeritageStory />
      <HorizontalScroll />
      <FabricSpotlight
        eyebrow="The Corduroy Story"
        heading="Every wale, mastered."
        body="4-wale to 21-wale. Structured, dobby, stretch, yarn-dyed, indigo wash. Every finish for every application. Built on decades of corduroy expertise from Kailash Vivek & Co."
        ctaLabel="Explore Corduroy"
        ctaHref="/fabrics/corduroy"
        imageSrc="/images/hero/hero-corduroy-black.jpg"
        imageAlt="Close-up of corduroy wale texture"
        tags={[
          { label: "8-wale" },
          { label: "14-wale" },
          { label: "21-wale" },
          { label: "23-wale" },
          { label: "Stretch" },
          { label: "Yarn-dyed" },
          { label: "Indigo" },
        ]}
      />
      <FabricSpotlight
        eyebrow="The Linen Story"
        heading="Pure linen. Honest fabric."
        body="Natural, breathable, authentic. Linen's natural slub texture makes every length unique. Our pure linen and linen-cotton blends get softer with every wash — built for makers who appreciate honest materials."
        ctaLabel="Explore Linen"
        ctaHref="/fabrics/linen"
        imageSrc="/images/fabrics/linen/fine-melange-linen.JPG"
        imageAlt="Close-up of linen slub texture"
        imageRight
      />
      <WhyKodTex />
      <AudienceSection />
      <Testimonials />
      <InstagramFeed />
      <BlogPreview />
      <TradeCTA />
    </>
  );
}
