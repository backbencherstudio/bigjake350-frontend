"use client";

import BioDescription from "@/components/about/BioDescription";
import BioHighlight from "@/components/about/BioHighlight";
import BioImage from "@/components/about/BioImage";
import HeroSection from "@/components/common/HeroSection";



export default function AboutPage() {
  return (
    <div className="mx-auto font-sans">



      <HeroSection
        title="About - Notary Nexus & Apostille Services"
        imageUrl="/pictures/office-building.png"
      />

      {/* <section className="flex flex-col justify-between mt-[70px] mx-[24px]">
        <div className="flex flex-col md:flex-row justify-between  ">
        <BioHighlight />
        <BioImage />
        </div>
        <BioDescription />
      </section> */}



      <section className="bg-gradient-to-t from-green-800  to-white px-6 lg:px-16 py-12   mx-auto">
        <div className="bg-gradient-to-b from-white via-[#06742799] to-white px-6 mt-8 mb-20 lg:px-16 py-12   mx-auto font-sans rounded-3xl shadow-sm">
          {/* Top row: highlight + image */}
          <div className="  flex flex-col sm:flex-row  justify-between items-center sm:items-start">
            {/* Bio Highlight */}
            <BioHighlight />

            {/* Bio Image */}
            <BioImage />
          </div>

          {/* Bio Details Below */}
          <BioDescription />

        </div>
      </section>


    </div>
  );
}
