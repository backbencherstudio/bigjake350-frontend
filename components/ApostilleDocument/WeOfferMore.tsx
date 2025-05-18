import React from 'react'
import Image from 'next/image'
import floridaApostille from '@/public/pictures/legal-document-2.png'
import PieChart from '@/public/pictures/pie-chart.png'

export default function WeOfferMore() {
    return (
        <div className='container px-5 2xl:px-0 py-10 '>
            <h1 className='text-2xl sm:text-3xl xl:text-4xl font-bold text-[#3E813E] mb-4'>We Offer More</h1>
            <div className='flex flex-col md:flex-row gap-14'>

                {/* left  side  */}
                <div className='flex flex-col gap-5 w-full md:w-1/2'>
                    <p className='text-gray-700 text-xl'>We don’t believe that simply obtaining your apostille is enough. So, we offer more with our apostille service.</p>

                    <ul className='list-disc list-inside text-gray-500 text-lg flex flex-col gap-5 ml-10'>
                        <li>Upon receiving your documents, we do a FREE review of all information, verifying all is correct and notifying you of any errors. Doing this eliminates the possibility of the apostille being delayed or even rejected. And all of this is done before you submit your payment to us. With other companies, you often have to pay before you know if you have everything needed.</li>

                        <li>We also offer certified translation services. When obtaining the apostille, we can have your documents translated into the needed language. This will save you time and money from translating all paperwork separately.</li>

                        <li>When necessary, we can expedite your apostille application, sometimes even same-day service. Our staff is available 7 days a week to answer questions and obtain your apostille – even if you have a tight deadline.</li>
                        <li>
                            If you are currently out of the country – we can still help you obtain the apostille you need. Simply upload or mail us the paperwork. We will get the apostille and send you all documents via Fed Ex or DHL carrier service.
                        </li>
                    </ul>

                    <p className='text-gray-700 text-xl'>You get more when working with One Source Process. Besides a fast turnaround with excellent customer service, you get more than most other companies offer. You get our expertise and willingness to go that extra mile for you.</p>

                    <h1 className='text-2xl sm:text-3xl xl:text-4xl font-bold text-[#3E813E] mb-4'>You will Love Our Customer Service Standards</h1>
                    <p className='text-gray-700 text-xl'>We are committed to 100% customer satisfaction and take extra steps to ensure this happens. When you place your order, we assign one account representative who will handle the apostille process from beginning to end. You can speak with your personal at any time during the apostille process. When you choose One Source Process for your Florida apostille needs, you can trust that we will provide you with the highest level of service. Our Florida apostille process is simple, stress-free, and will exceed your expectations; we guarantee it.</p>

                    <h1 className='text-2xl sm:text-3xl xl:text-4xl font-bold text-[#3E813E] mb-4'>Working with One Source Process</h1>
                    <p className='text-gray-700 text-xl'>You don’t have to try to obtain a Florida apostille or embassy legalization on your own; let us help. We have worked with just about every country and can quickly get your apostille to you. If you are in Florida and need to apostille a document (or several documents), please don’t hesitate to contact us. We can point you in the right direction even if you are unsure what you need. Once you have the necessary documents, we will be here for you when you are ready to place the apostille order and get started. Please contact us at our toll-free number 1-800-668-5448 or email us at apostille@onesourceprocess.com. We are available 7 days a week. Monday-Friday 9am – 6pm EST Saturday – Sunday 9am – 4pm EST We look forward to working with you.</p>
                </div>

                {/* right side  */}
                <div className='w-full md:w-1/2 lg:h-fit'>
                    <Image src={PieChart} alt='notary services' width={500} height={500} className=' w-full h-full object-cover object-center' />
                </div>
            </div>
        </div >
    )
}
