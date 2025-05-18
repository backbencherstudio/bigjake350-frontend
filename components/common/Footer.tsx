import React from 'react'
import logo from '@/public/pictures/business-logo2.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <div className='container px-5 2xl:px-0 py-12'>
            <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8'>
                {/* Left Side Content - Order 2 on mobile, 1 on desktop */}
                <div className='space-y-6 max-w-xl order-2 lg:order-1'>
                    <p className='text-gray-700 text-xl'>
                        Our mission is to simplify the notarization process by bringing our services to you, wherever you are.
                    </p>

                    <div>
                        <h2 className='text-xl font-bold text-gray-900 mb-4'>
                            By Appointment Only - Mobile and Remote Online Services
                        </h2>
                    </div>

                    <div className='flex flex-col md:flex-row gap-8 md:gap-16'>
                        <div>
                            <h3 className='font-bold text-gray-900 mb-3 border-b border-gray-300 pb-2' >Main Office</h3>
                            <div className=''>
                                <p className='text-gray-700'>1234 Random Road Blvd, Tallahassee Fl 32301</p>
                            </div>
                        </div>

                        <div>
                            <h3 className='font-bold text-gray-900 mb-3 border-b border-gray-300 pb-2'>Quick Contact</h3>
                            <div className=''>
                                <Link href="mailto:jjacobspsellc@outlook.com" className='text-gray-700 underline hover:text-gray-900 block mb-2'>
                                    jjacobspsellc@outlook.com
                                </Link>
                                <Link href="tel:561-542-3715" className='text-gray-700  underline hover:text-gray-900 block'>
                                    561-542-3715
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side Logo - Order 1 on mobile, 2 on desktop */}
                <div className='flex flex-col items-center w-full lg:w-auto gap-4 order-1 lg:order-2'>
                    <div className='flex justify-center w-full'>
                        <Image
                            src={logo}
                            alt="Business Logo"
                            width={200}
                            height={200}
                            className='object-contain'
                        />
                    </div>
                    <div className='text-center'>
                        <p className='font-bold text-gray-900 mb-2'>Need a Notary?</p>
                        <button className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors'>
                            Schedule One Today!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
