import Image from 'next/image'
import React from 'react'
import fingerprintingImg from '@/public/pictures/fingerprinting.png'

export default function Fingerprinting() {
    return (
        <>
            <div className='flex flex-col md:flex-row  gap-14 mt-20'>
                {/* left side  */}
                <div className='flex flex-col gap-5 w-full md:w-1/2'>
                    <h1 className='text-2xl sm:text-3xl xl:text-4xl font-bold text-[#3E813E] mb-4'>Fingerprinting</h1>
                    <p className='text-gray-500 text-xl'>In addition to notary services, we offer reliable fingerprinting services. Our professionals are trained to capture your fingerprints accurately, meeting the requirements for various purposes such as background checks, licenses, and more.</p>
                </div>
                {/* right side  */}
                <div className='w-full md:w-1/2'>
                    <Image src={fingerprintingImg} alt='notary services' width={500} height={500} className='rounded-t-[60px] rounded-s-[60px] w-full h-full object-cover object-center' />
                </div>


            </div>

            {/* Courier Services */}
            <div className='flex flex-col mt-20'>
                <h1 className='text-2xl sm:text-3xl xl:text-4xl font-bold mb-4 text-[#3E813E]'>Courier Services</h1>
                <p className='text-gray-500 text-xl'>“Notary Nexus & Apostille Services” offers convenient courier services as part of our concierge business model. We understand that your time is valuable, and our team ensures that your documents are securely and promptly delivered to the required destinations, providing a hassle-free experience.</p>
            </div>
            {/* Document Legalization*/}
            <div className='flex flex-col mt-20'>
                <h1 className='text-2xl sm:text-3xl xl:text-4xl font-bold mb-4 text-[#3E813E]'>Document Legalization</h1>
                <p className='text-gray-500 text-xl'>Navigating the process of document legalization can be complex and time-consuming. Let us handle it for you. We streamline the legalization of your important documents, ensuring they are valid and accepted for official use. At “Notary Nexus & Apostille Services”, we take pride in offering top-notch notary services designed to meet your unique requirements. Our commitment to efficiency, accuracy, and convenience, coupled with our special military/veteran/first responder discount, makes us your preferred choice for notary services.</p>

                <h1 className='mt-10 font-bold text-xl text-gray-500 text-center'>"Contact us today to schedule an appointment and experience the epitome of professional notary assistance"</h1>
            </div>
        </>
    )
}

