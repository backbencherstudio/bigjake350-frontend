import React from 'react'

export default function Documents() {
    return (
        <div className='bg-[#F5F5F5] py-10'>
            <div className='container px-5 2xl:px-0'>
                <h1 className='text-2xl text-center sm:text-3xl xl:text-5xl font-bold text-[#3E813E]'>Documents We Apostille in the USA</h1>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-14'>
                    {/* Personal Documents Section */}
                    <div>
                        <h2 className='text-[#3E813E] text-xl md:text-2xl font-semibold  mb-4'>Personal or Family Documents</h2>
                        <ul className='space-y-2 text-gray-600 font-medium list-disc list-inside'>
                            <li>Marriage Certificates</li>
                            <li>Death Certificates</li>
                            <li>Birth Certificates</li>
                            <li>Divorce Decrees</li>
                            <li>Single Status Affidavits</li>
                            <li>Power of Attorney</li>
                            <li>Wills</li>
                            <li>Car Titles</li>
                            <li>Adoption Dossier</li>
                            <li>FBI records</li>
                            <li>Criminal History Reports</li>
                            <li>Any Notarized Document</li>
                        </ul>
                    </div>

                    {/* Corporate Documents Section */}
                    <div>
                        <h2 className='text-[#3E813E] text-xl md:text-2xl font-semibold  mb-4'>Corporate Documents</h2>
                        <ul className='space-y-2 text-gray-600 font-medium list-disc list-inside'>
                            <li>Certificates of Good Standing</li>
                            <li>Certificates of Incorporation</li>
                            <li>Certificates of Origin</li>
                            <li>Power of Attorney</li>
                            <li>Hiring Documents</li>
                            <li>Company Invoices</li>
                            <li>Other Business Documents</li>
                        </ul>
                    </div>

                    {/* Academic Documents Section */}
                    <div>
                        <h2 className='text-[#3E813E] text-xl md:text-2xl font-semibold  mb-4'>Academic Documents</h2>
                        <ul className='space-y-2 text-gray-600 font-medium list-disc list-inside'>
                            <li>High School</li>
                            <li>GED</li>
                            <li>College Diplomas</li>
                            <li>Report Cards</li>
                            <li>Other Various School Records</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
