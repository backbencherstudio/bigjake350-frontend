import React from 'react'
import bgImage3 from '@/public/pictures/notary-official-3.png'
import Image from 'next/image'

export default function NotaryServices() {
    return (
        <div className='mt-14'>
            <h1 className='text-2xl sm:text-3xl xl:text-4xl font-bold mb-10 text-[#3E813E]'>
                Mobile Notary Services
            </h1>
            <p className='text-gray-500 text-xl'>“Notary Nexus & Apostille Services” brings our services to your doorstep with our efficient mobile notary services. We understand the value of your time and the need for flexibility, so we offer a convenient solution to your notarization requirements. Our notaries will travel to your location, be it your home or office, to provide a seamless and hassle-free notarization experience. We ensure that your documents are properly notarized, meeting all legal requirements, without disrupting your busy schedule.</p>


            {/*  image */}
            <div className='flex flex-col md:flex-row gap-14 mt-10'>

                {/* left side  */}
                <div className='w-full md:w-1/2'>
                    <Image src={bgImage3} alt='notary services' width={700} height={700} className='rounded-t-[60px] rounded-s-[60px] w-full h-full object-cover object-center' />
                </div>

                {/* right side  */}
                <div className='flex flex-col gap-5 w-full md:w-1/2'>
                    <h1 className='text-2xl sm:text-3xl  font-bold text-[#3E813E] mb-4'>Remote Notarizations</h1>
                    <p className='text-gray-500 text-xl'>“Notary Nexus & Apostille Services” employs state-of-the-art technology to facilitate online notarizations. Our platform ensures a seamless and secure experience, allowing you to have your documents notarized remotely. We adhere to all legal and technical requirements for online notarizations, providing you with a credible and valid notarized document. We utilize the SigniX system to complete e-signing and notary.</p>
                    <h1 className='text-2xl sm:text-3xl font-bold text-[#3E813E] mb-4'>Key Features of Our Remote Notary Services</h1>
                    <ul className='list-disc list-inside flex flex-col gap-4'>
                        <li className='text-gray-500 text-xl '><span className='font-bold text-gray-500 text-xl'>Convenience:</span> With our remote notary services, you can have your documents notarized from the comfort of your home or office. There is no need for in-person visits or scheduling hassles.</li>

                        <li className='text-gray-500 text-xl'><span className='font-bold text-gray-500 text-xl'>Secure Transactions: </span>We prioritize the security and confidentiality of your documents. Our online platform utilizes security measures to safeguard your information during the notarization process.</li>

                        <li className='text-gray-500 text-xl'><span className='font-bold text-gray-500 text-xl'>Legal Validity:</span> Rest assured that our remote notarizations comply with government regulations and meet the same legal validity standards as traditional in-person notarizations.</li>
                    </ul>
                </div>
            </div>

            {/* Apostille Services */}
            <div className='flex flex-col mt-20'>
                <h1 className='text-2xl sm:text-3xl xl:text-4xl font-bold mb-4 text-[#3E813E]'>Apostille Services</h1>
                <p className='text-gray-500 text-xl'>If you require an Apostille, a specialized form of authentication for international documents, our experts are here to guide you through the process. We handle all the necessary steps to ensure your documents are legalized for use abroad, giving you peace of mind for your international ventures.</p>
            </div>
            {/* Notaria*/}
            <div className='flex flex-col mt-16'>
                <h1 className='text-2xl sm:text-3xl xl:text-4xl font-bold mb-4 text-[#3E813E]'>Notaria</h1>
                <p className='text-gray-500 text-xl'>“Notary Nexus & Apostille Services” proudly extends its services to the Hispanic community with our proficient notaria services. We understand the importance of accurate and legally binding notarizations, especially in the context of Spanish-speaking clients. Our skilled bilingual notaries ensure that you receive notarizations in your preferred language with precision and integrity.</p>
            </div>
        </div>
    )
}

