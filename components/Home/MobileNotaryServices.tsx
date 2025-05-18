import React from 'react'
import rightImage from "@/public/pictures/doc-signing.png"
import Image from 'next/image'
import ButtonReusable from '../reusable/ButtonReuseble'

export default function MobileNotaryServices() {
    return (
        <div className='conatiner mx-auto px-5 2xl:px-0 py-10'>
            <div className='flex flex-col lg:flex-row gap-10 '>
                <div className='flex flex-col gap-10 w-full lg:w-6/12'>
                    <h1 className='text-2xl sm:text-3xl xl:text-5xl font-bold text-[#3E813E]'>Mobile Notary Services</h1>
                    <h2 className='text-lg md:text-2xl text-[#85AB85]'>Your Mobile Notary Team is Here for You!</h2>
                    <p className='text-gray-500 text-xl'>Welcome to Notary Nexus & Apostille Services, where exceptional service meets compassionate care. Our team understands that life is fast-paced, and finding a reliable, kind-hearted notary can be a challenge. That's where we come in! We're not just professional notaries; we're your trusted partners in navigating the complexities of notarization.
                    </p>
                    <p className='text-gray-500 text-xl'>Our notaries prioritize your situation, your family, and building lasting relationships with you. With us, you're not just a client, but part of our extended family. We specialize in the notarization of international documents, dual citizenship, getting married overseas, setting up businesses in other countries, and selling properties.</p>
                    <p className='text-gray-500 text-xl'>We proudly offer military, veteran, and first responder discounts. Let us be the notaries you're proud to refer to your loved ones.</p>

                    <ButtonReusable className='!text-black border-2 bg-gray-200' title="Have Question? Contact Us!" variant="outline" />
                </div>
                <div className='flex flex-col w-full lg:w-7/12'>
                    <Image width={500} height={500} src={rightImage} alt='notary' className='w-full h-full object-cover object-center rounded-4xl' />
                </div>
            </div>
        </div>
    )
}

