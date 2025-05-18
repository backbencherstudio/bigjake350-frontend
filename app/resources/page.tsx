import React from 'react'
import Image from 'next/image'
import bgImage from '@/public/pictures/office-building.png'
import bgImage2 from '@/public/pictures/notary-official2.png'
import HeroSection from '@/components/common/HeroSection'
import NotaryPublicServices from '@/components/Resources/NotaryPublicServices'
import WeProvide from '@/components/Resources/WeProvide'
import NotaryServices from '@/components/Resources/NotaryServices'
import Fingerprinting from '@/components/Resources/Fingerprinting'

export default function Resources() {
    return (
        <div>
            {/* banner section */}
            <HeroSection title='Resources - Notary Nexus & Apostille Services' imageUrl={bgImage.src} />
            {/* NOTARY SERVICES */}
            <div className='container px-5 2xl:px-0 py-12'>
                <div className='flex flex-col md:flex-row items-center gap-14'>

                    {/* left side  */}
                    <div className='w-full md:w-1/2'>
                        <Image src={bgImage2} alt='notary services' width={500} height={500} className='rounded-t-[60px] rounded-s-[60px] w-full h-full object-cover object-center' />
                    </div>

                    {/* right side  */}
                    <div className='flex flex-col gap-5 w-full md:w-1/2'>
                        <h2 className='text-lg md:text-2xl text-[#85AB85] font-medium'>Notary Services</h2>
                        <h1 className='text-2xl sm:text-3xl xl:text-4xl font-bold text-[#3E813E] mb-4'>In Need of a Notary?</h1>
                        <p className='text-gray-500 text-xl'>At "Notary Nexus & Apostille Services", we understand that your time is valuable, and convenience is key. That's why we offer comprehensive mobile notary services tailored to suit your needs. Our dedicated team is ready to assist you wherever you are, ensuring a seamless and efficient notarization process!</p>
                    </div>
                </div>

                {/* Notary Public Services */}
                <NotaryPublicServices />
                {/* We Provide */}
                <WeProvide />
                {/* Notary Services */}
                <NotaryServices />
                {/* Fingerprinting */}
                <Fingerprinting />
            </div>


        </div>
    )
}
