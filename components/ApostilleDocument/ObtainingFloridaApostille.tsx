import React from 'react'
import Image from 'next/image'
import floridaApostille from '@/public/pictures/legal-document-2.png'




export default function ObtainingFloridaApostille() {
    return (
        <div className='container px-5 2xl:px-0 py-10'>
            <div className='flex flex-col md:flex-row items-center gap-14'>

                {/* left side  */}
                <div className='w-full md:w-1/2'>
                    <Image src={floridaApostille} alt='notary services' width={500} height={500} className=' w-full h-full object-cover object-center' />
                </div>

                {/* right side  */}
                <div className='flex flex-col gap-5 w-full md:w-1/2'>
                    <h1 className='text-2xl sm:text-3xl xl:text-4xl font-bold text-[#3E813E] mb-4'>Obtaining a Florida Apostille</h1>
                    <p className='text-gray-500 text-xl'>There is still more to understand. Once you know what documents need an apostille and who to contact, you must determine which documents must be notarized and which cannot, which documents must be original or when certified copies are accepted, and more. You don’t have to do this alone. Let us help you apostille your Florida documents. Working with us is as easy as 1 – 2 – 3 To begin, simply fill out our Order Form here. You will then send us your original documents (or a certified copy). Sit back and wait for us to do the hard work for you. Once we are confident that all documents in your order are correct and ready, only then do we send you a pricing invoice and timeline for completion. We will work with the proper office of authentications, including Florida state offices, federal offices, and, if needed, the Embassy or Consulate.</p>


                    <h1 className='text-2xl sm:text-3xl xl:text-4xl font-bold text-[#3E813E] mb-4'>Do you need an apostille on documents issued in different states?</h1>
                    <p className='text-gray-500 text-xl'>We are able to process multiple documents, simultaneously, in all 50 states and territories. Check out our apostille services in Texas, our apostille services in Sacramento and our apostille services in Talahassee. You can also view our services in other states and cities here.</p>
                </div>
            </div>
        </div >
    )
}
