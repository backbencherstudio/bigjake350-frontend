"use client"
import { Plus, Minus } from 'lucide-react'
import React, { useState } from 'react'

export default function CommonQuestions() {
    const [activeQuestion, setActiveQuestion] = useState(null);

    const commonQuestions = [
        {
            question: "What is An Apostille?",
            answer: "An “apostille” is a form of authentication issued to documents for use in countries that participate in the Hague Convention of 1961. An Apostille is issued as an attachment and will validate the authenticity of your document to the foreign entity you are required to present your document to. One Source Process offers standard and expedited apostille and legalization services"
        },
        {
            question: "Can you apostille photocopies of my documents?",
            answer: "Yes! We can apostille a scanned copy of any personal, business, or U.S. State-issued document including vital records such as birth, death, and marriage certificates. It takes minutes to submit a request with us online here. Just upload a clear, color scan of the document you'd like to have authenticated and we'll ship back the copy to any domestic or international address with an original apostille attachment. Copies of vital records will receive a New York apostille and all other document copies receive a District of Columbia apostille. Please note that this method, while widely accepted in most cases, does have limitations depending on the authority you're presenting it to and country of use. One Source Process will always advise our apostille services clients of these restrictions when we review your request but does not guarantee that they will be accepted. If you want more information regarding our photocopy Apostille process, please visit our page here."
        },
        {
            question: "What documents can you apostille?",
            answer: "We are capable of obtaining an apostille on documents such as birth certificates, FBI reports, transcripts, marriage certificates, death certificates, FBI background reports, social security letters, company bylaws, powers of attorney agreements, trademarks, diplomas, transcripts, treaties, warrants, extraditions, agreements, certificates of good standing and much more!"
        },
        {
            question: "What is your refund policy?",
            answer: "Once your documents have been reviewed and payment is received you are only eligible to receive a refund prior to your documents being submitted to the Secretary or Department of State. This does not include the cost of any used shipping labels. Any cancellations made after payment is submitted incur a 10% fee of the invoice amount."
        }
    ]

    return (
        <div className='bg-[#2E8B57] py-10'>
            <div className='container px-5 2xl:px-0 pb-5'>
                <h1 className='text-2xl sm:text-3xl xl:text-4xl font-bold text-white mb-4 text-center'>Common questions about Apostille and Legalization</h1>
            </div>

            {/* question and answer  */}
            <div className='container px-5 2xl:px-0 '>
                <div className='flex flex-col gap-5'>
                    {commonQuestions.map((question, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md overflow-hidden"
                        >
                            <button
                                className="w-full cursor-pointer px-6 py-4 text-left font-semibold flex justify-between items-center hover:bg-gray-50"
                                onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
                            >
                                <span>{question.question}</span>
                                <span className="transform transition-transform duration-200">
                                    {activeQuestion === index ? <Minus className='text-gray-500' /> : <Plus className='text-gray-500 ' />}
                                </span>
                            </button>
                            {activeQuestion === index && (
                                <div className="px-6 py-4 bg-gray-50">
                                    <p className="text-gray-700">{question.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

