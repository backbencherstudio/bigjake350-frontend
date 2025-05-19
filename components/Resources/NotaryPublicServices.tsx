"use client"
import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

import { BiSolidDownArrow, BiSolidRightArrow } from "react-icons/bi";
import { NotaryPublic } from '@/data/NotaryPublic'

export default function NotaryPublicServices() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleQuestion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className='py-14 mt-10'>
            <div className='flex flex-col gap-5'>
                <h1 className='text-2xl sm:text-3xl xl:text-4xl font-bold text-[#3E813E]'>Notary Public Services</h1>
                <p className='text-gray-500 text-xl'>Our skilled notaries are equipped to handle a variety of notary services, including:</p>
            </div>
            {/* faq items */}
            <div className='w-full mt-10'>
                {NotaryPublic.map((item, index) => (
                    <div key={index} className='border-t border-x border-gray-400 last:border-b transition-colors duration-200'>
                        <button
                            onClick={() => toggleQuestion(index)}
                            className='w-full flex items-center gap-4 p-4 text-left hover:bg-gray-50 rounded-lg cursor-pointer'
                        >
                            <span className='text-[#769271]'>
                                {openIndex === index ? <BiSolidDownArrow className="text-lg" /> : <BiSolidRightArrow className="text-lg" />}
                            </span>
                            <h2 className='text-gray-500 font-medium'>{item.question}</h2>
                        </button>

                        {openIndex === index && (
                            <div className='p-4 pt-0 pl-14 border-t'>
                                <p className='text-gray-500 text-xl py-5'>{item.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

