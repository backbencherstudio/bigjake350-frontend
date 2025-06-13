'use client'
import React, { useState } from 'react'
import { OurMobileNotaryServices as services } from '@/data/OurMobileNotaryServices'
import { Plus, Minus } from 'lucide-react'
import Link from 'next/link'

export default function OurMobileNotaryServices() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleQuestion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className='container px-5 2xl:px-0 py-8'>
            <h1 className='text-2xl sm:text-3xl xl:text-4xl font-bold text-[#3E813E] mb-8'>Our Mobile Notary Services</h1>
            <p className='text-gray-500 text-xl mb-8'>With our comprehensive range of notary and related services, we’ll come to you to legalize all your important documents. At Notary Nexus & Apostille Services, our services extend beyond traditional notarial offerings, ensuring you experience a seamless and efficient process from start to finish.</p>

            <div className='w-full'>
                {services.map((item, index) => (
                    <div key={index} className='border-t border-x border-gray-400 last:border-b transition-colors duration-200'>
                        <button
                            onClick={() => toggleQuestion(index)}
                            className='w-full flex items-center gap-4 p-4 text-left hover:bg-gray-50 rounded-lg cursor-pointer'
                        >
                            <span className='text-[#769271]'>
                                {openIndex === index ? (
                                    <Minus className="w-7 h-7" />
                                ) : (
                                    <Plus className="w-7 h-7" />
                                )}
                            </span>
                            <h2 className='text-gray-500 font-medium'>{item.question}</h2>
                        </button>

                        {openIndex === index && (
                            <div className='p-4 pt-0 pl-14 border-t'>
                                {item.description && (
                                    <p className='text-gray-500 font-medium  my-4'>{item.description}</p>
                                )}
                                {typeof item.answer === 'object' && (
                                    <>
                                        {item.answer.sections?.map((section, sIdx) => (
                                            <div key={sIdx} className='mb-4'>
                                                {section.title && (
                                                    <h3 className='font-medium text-xl text-gray-700 mb-2'>{section.title}</h3>
                                                )}
                                                {section.content && (
                                                    <p className='text-gray-500 font-medium mt-3'>{section.content}</p>
                                                )}
                                                {section.list && (
                                                    <ul className='mt-3 list-disc pl-5 text-gray-500 font-medium'>
                                                        {section.list.map((item, lIdx) => (
                                                            <li key={lIdx}>{item}</li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        ))}
                                        {item.answer.button && (
                                            <div className='mt-6'>
                                                <Link
                                                    href={item.answer.button.link}
                                                    className='inline-block px-6 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors'
                                                >
                                                    {item.answer.button.text}
                                                </Link>
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
