import React from 'react'
import Image from 'next/image'
import whyChoose from "@/public/pictures/stamping-doc.png"

export default function WhyChoose() {
    return (
        <div className='container px-5 2xl:px-0 py-10'>
            <div className='flex flex-col lg:flex-row gap-10 '>
                <div className='flex flex-col gap-10 w-full lg:w-6/12'>
                    <h1 className='text-2xl sm:text-3xl xl:text-4xl font-bold text-[#3E813E]'>Why Choose Our Notary Services?</h1>
                    <p className='text-gray-500 text-xl'>At Notary Nexus & Apostille Services, we stand out from the rest because we genuinely care about our clients. We know that your time is valuable, and we respect your schedule and convenience. Our mission is to simplify the notarization process by bringing our services to you, wherever you are. We are not just notaries; we are your reliable partners in handling all your notarial needs. We believe that understanding your unique situation is crucial to providing the best possible service. Your needs, whether they involve legal documents, real estate closings, or power of attorney, are our priority. From notary services and remote online notaries to loan signings and document legalization, we ensure a seamless process every step of the way.</p>
                </div>
                <div className='flex flex-col w-full lg:w-7/12'>
                    <Image width={500} height={500} src={whyChoose} alt='notary' className='w-full h-full object-cover object-center rounded-4xl' />
                </div>
            </div>

        </div>
    )
}
