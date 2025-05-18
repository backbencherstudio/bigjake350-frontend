import React from 'react'
import bannerImage from "@/public/pictures/banner.png"
import businessLogo from "@/public/pictures/business-logo2.png"
import Image from 'next/image'
import MobileNotaryServices from '@/components/Home/MobileNotaryServices'
import OurMobileNotaryServices from '@/components/Home/OurMobileNotaryServices'
import WhyChoose from '@/components/Home/WhyChoose'
import MeettheTeam from '@/components/Home/MeettheTeam'
import Testimonials from '@/components/Home/Testimonials'

export default function Home() {
  return (
    <>
      <div className="relative w-full bg-fixed bg-center bg-no-repeat bg-cover overflow-hidden"
        style={{
          backgroundImage: `url(${bannerImage.src})`,
          backgroundAttachment: 'fixed',
          perspective: '1px',
          transformStyle: 'preserve-3d'
        }}>
        <div className=''>
          <Image
            src={businessLogo}
            alt="no logo found"
            className="md:float-right w-[200px] md:w-[268px]"
          />
        </div>
        <div className="relative bg-[#3e813e] rounded-t-lg text-white sm:w-[50%] lg:w-[26%] h-1/2 mx-4 md:ml-[61px] text-center mt-8 md:mt-48 inline-block z-[1]">
          <div className='p-3 md:p-5 flex flex-col gap-2'>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">NOTARY NEXUS & APOSTILLE SERVICES</h1>
            <p className="font-sans text-sm md:text-base">* GENERAL NOTARY SERVICES</p>
            <p className="font-sans text-sm md:text-base">* LOAN SIGNING AGENT</p>
            <p className="font-sans text-sm md:text-base">* REMOTE ONLINE NOTARY</p>
          </div>

          <div className="bg-[#85ab85] w-full md:w-[150%] text-right text-[20px] md:text-[33px] pr-[25px] md:pr-[50px]">
            <p className="mb-0 pt-[10px]">JEFFERY JACOBS</p>
            <p className="mt-0 mr-[47px] md:mr-[94px] pb-[10px]">CEO</p>
          </div>

          <div className='p-3 md:p-5'>
            <h2 className="text-sm md:text-base">CONTACT US:</h2>
            <div className="contact-div text-sm md:text-base">561-542-3715</div>
            <div className="contact-div text-sm md:text-base">JJACOBSPUBLICSAFETY.COM</div>
            <div className="mb-[22px] text-sm md:text-base">JJACOBSPSELLC@OUTLOOK.COM</div>
          </div>
        </div>

        <div className="inline-block bg-[#D2B48C] w-full sm:w-auto sm:-ml-5 md:w-full lg:w-auto p-8 md:p-9.5">
          <span className="text-[#3e813e] text-[20px] md:text-[29px] font-bold">
            NEED NOTARY,<br />
            WE WILL TRAVEL.
          </span>
        </div>
      </div>
      <MobileNotaryServices />
      <OurMobileNotaryServices />
      <WhyChoose />
      <MeettheTeam />
      <Testimonials />
    </>
  )
}


