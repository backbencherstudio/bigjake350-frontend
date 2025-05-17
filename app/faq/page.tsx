"use client";
import FaqList from "@/components/faq/FaqList";
import HeroSection from "@/components/common/HeroSection";


 

export default function FAQPage() {
  return (
    <div className="w-screen max-w-7xl mx-auto font-sans">

      <HeroSection
        title="FAQ"
        imageUrl="/pictures/office-building.png"
      />

      <FaqList />
    </div>
  );
}