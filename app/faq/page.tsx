"use client";
import FaqList from "@/components/faq/FaqList";
import HeroSection from "@/components/common/HeroSection";


 

export default function FAQPage() {
  return (
    <div className=" bg-gradient-to-br from-gray-200 to-gray-100 mx-auto font-sans">

      <HeroSection
        title="FAQ"
        imageUrl="/pictures/office-building.png"
      />

      <FaqList />
    </div>
  );
}