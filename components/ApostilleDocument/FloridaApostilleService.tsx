"use client"
import React, { useState } from 'react'
import rightImage from "@/public/pictures/legal-document.png"
import Image from 'next/image'
import ButtonReusable from '../reusable/ButtonReuseble'



export default function FloridaApostilleService() {
    const [readMore, setReadMore] = useState(false)

    const cardData = [
        {
            title: "Apply Online",
            description: "Submit our form online and calculate an estimated cost immediately. We will also review a scan of your documents for any errors and let you know ASAP if additional steps are required."
        },
        {
            title: "Send Us Your Documents",
            description: "No need to make an appointment or go to a physical location. Just mail us your documents through a secure tracked shipping service (FedEx, DHL, or UPS). In some cases we may not even need the physical copy!"
        },
        {
            title: "Receive Your Documents",
            description: "Once completed, your apostilled/legalized documents will be shipped to you via FedEx or DHL and will arrive at your doorstep. Whether in the US or Worldwide, we’ll get your important documents to you wherever you may be."
        }
    ]

    return (
        <div className='container px-5 2xl:px-0 py-10'>
            <h1 className='text-2xl text-center sm:text-3xl xl:text-5xl  font-bold text-[#3E813E]'>Florida Apostille Services</h1>

            <div className='flex flex-col lg:flex-row gap-12 mt-14'>
                <div className='flex flex-col gap-7 w-full lg:w-6/12'>
                    <p className='text-gray-500 text-xl'>An apostille is a form that is attached to your document and certifies the authenticity of the signatures and seals.
                    </p>
                    <p className='text-gray-500 text-xl'>Members of the Hague Convention of 1961 established a uniform process of confirming the authenticity of documents. Countries belonging to this convention accept the apostille, while non-member countries require documents to follow the embassy legalization process.</p>

                    <p className='text-gray-500 text-xl font-semibold italic'>Don't worry if you are unsure about getting an apostille or embassy legalization. We know what is needed, have worked with almost every country, and will quickly authenticate your documents.</p>

                    <p className='text-gray-500 text-xl'>As experts in apostille services, we know which type of authentication is required. We have worked with nearly every country worldwide and can help you properly apostille your documents.</p>

                    <p className='text-gray-500 text-xl'>We offer Florida Apostille Services for Personal and Business Documents.</p>
                    {readMore && (
                        <>
                            <p className='text-gray-500 text-xl'>Whether you need an apostille for personal or business documents, we can help. Situations that may require authentication for personal documents are: marriage, buying property, and attending school overseas. If you are looking to do business in other countries, it is quite common to obtain an apostille or embassy legalization for your documents.
                            </p>

                            <p className='text-gray-500 text-xl'>Some common personal documents that require an apostille are:</p>
                            <ul className='text-gray-500 text-xl list-disc pl-6'>
                                <li>Birth certificate</li>
                                <li>Death certificate</li>
                                <li>Passport</li>
                                <li>School records</li>
                            </ul>

                            <p className='text-gray-500 text-xl'>Some common business documents that require an apostille are:</p>
                            <ul className='text-gray-500 text-xl list-disc pl-6'>
                                <li>Hiring information</li>
                                <li>Articles of Incorporation</li>
                                <li>Business license and permit</li>
                            </ul>

                            <p className='text-gray-500 text-xl'>We can also help you determine if you need to contact the Florida Secretary of State to apply for the apostille or when to work with the U.S. Department of State in Washington, D.C.

                                Did you know… you must obtain a separate apostille for each required document – there is no way for one apostille to authenticate several documents at once.

                                Many people who try to get an apostille or embassy legalization on their own become frustrated and often have the application rejected or denied. But we have worked with Florida and federal offices to quickly and successfully obtain an apostille.</p>
                        </>
                    )}
                    <div className='flex justify-start'>
                        <ButtonReusable title={readMore ? "read less" : "read more"} className='!bg-gray-500 px-6 capitalize py-2 !text-white hover:!bg-gray-700 transition-all duration-300' variant="secondary" onClick={() => setReadMore(!readMore)} />
                    </div>


                </div>

                {/* right image */}
                <div className='flex flex-col w-full lg:w-7/12 lg:h-fit'>
                    <Image width={500} height={500} src={rightImage} alt='notary' className='w-full h-auto object-cover object-center rounded-4xl' />
                </div>
            </div>



            {/* card design */}

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-14'>
                {
                    cardData.map((item, index) => (
                        <div key={index} className='flex flex-col justify-center  gap-4 p-6 bg-white rounded-[30px] shadow-md border border-gray-500'>
                            <h2 className='text-lg md:text-2xl font-bold text-[#3E813E] mb-2'>{item.title}</h2>
                            <p className='text-gray-500 text-base md:text-lg'>{item.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
