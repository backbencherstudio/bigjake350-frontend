import Documents from '@/components/ApostilleDocument/Documents';
import FloridaApostilleService from '@/components/ApostilleDocument/FloridaApostilleService';
import ButtonReusable from '@/components/reusable/ButtonReuseble';
import React from 'react'

// Pricing card data
const pricingCards = [
    {
        type: "Standard",
        price: 175,
        timeframes: ["4-14 Business Days", "1-2 Weeks"],
    },
    {
        type: "Rush",
        price: 225,
        timeframes: ["1-3 Business Days"],
    },
    {
        type: "Same Day",
        price: 275,
        timeframes: ["24 Hours"],
    }
];

export default function ApostilleDocument() {
    return (

        <>
            <div className='bg-[#F3E8DE]'>
                <div className='container px-5 2xl:px-0 py-20'>
                    <h1 className=' text-2xl sm:text-3xl xl:text-5xl font-bold text-center mb-4'>Apostille Services</h1>
                    <p className='text-center mb-8 text-gray-500 text-xl'>Expedited authentication, notary & translation services</p>

                    <div className='grid md:grid-cols-3 gap-10'>
                        {pricingCards.map((card, index) => (
                            <div key={index} className='bg-[#3F8F5F] text-white p-6 rounded-lg flex flex-col justify-between'>
                                <div>
                                    <h2 className='text-xl font-semibold mb-4'>{card.type}</h2>
                                    <div className='text-4xl font-bold mb-4 pb-4 border-b border-white'>${card.price}</div>
                                    <ul className='list-disc list-inside'>
                                        {card.timeframes.map((time, idx) => (
                                            <li key={idx} className='text-sm mb-2'>{time}</li>
                                        ))}
                                    </ul>
                                </div>
                                <ButtonReusable title="Order Now" className='bg-white !text-black hover:!bg-gray-200 transition-all duration-300' variant="secondary" />
                            </div>
                        ))}
                    </div>

                    <p className='text-center text-sm mt-4 text-gray-700'>*Not including shipping and fees charged by embassies or the Secretary of State</p>
                </div>
            </div>

            <FloridaApostilleService />
            <Documents />
        </>

    )
}
