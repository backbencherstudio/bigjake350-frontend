"use client";

import BioDescription from "@/components/about/BioDescription";
import BioHighlight from "@/components/about/BioHighlight";
import BioImage from "@/components/about/BioImage";
import HeroSection from "@/components/common/HeroSection";

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-t from-green-800 via-white to-white mx-auto font-sans">
      <HeroSection
        title="About - Notary Nexus & Apostille Services"
        imageUrl="/pictures/office-building.png"
      />
      <section className="container  px-6 lg:px-16 py-12 mx-auto">
        <div className="  backdrop-blur-md bg-white/10 border border-white/30 rounded-3xl shadow-lg px-6 mt-8 mb-10 lg:px-16 py-12 mx-auto font-sans">
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start">
            <BioHighlight />
            <BioImage />
          </div>
        </div>
        <BioDescription />
      </section>
    </div>
  );
}