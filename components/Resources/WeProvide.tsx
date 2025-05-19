import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
export default function WeProvide() {
    const notaryServices = {
        leftColumn: [
            "Administer Oaths or Affirmations",
            "Take Acknowledgements",
            "Attest to Photocopies of Certain Documents",
            "Verify VIN Numbers",
            "Certify Contents of A Saftey Deposit Box",
            "Field Inspections",
            "Health Care Documents",
            "Job Verifications",
            "Medical Documents",
            "School Documents"
        ],
        rightColumn: [
            "Legal Documents",
            "Mortgage Documents",
            "Depositions",
            "State Level Apostille",
            "Federal Level Apostille/Certification",
            "Embassy Legalization",
            "Family Law",
            "Boat/Yacht Transactions",
            "Anything you would need a background screened Loan Signing Agent"
        ]
    }

    return (
        <div className="">
            <h1 className='text-2xl sm:text-3xl xl:text-4xl font-bold mb-10 text-[#3E813E]'>
                We Provide These Notary Services For:
            </h1>

            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                    {notaryServices.leftColumn.map((service, index) => (
                        <div key={index} className="flex items-center gap-2 mb-4">
                            <span className="text-[#2E7D32]"> <MdOutlineKeyboardArrowRight className='text-xl' /> </span>
                            <span>{service}</span>
                        </div>
                    ))}
                </div>

                <div className="flex-1">
                    {notaryServices.rightColumn.map((service, index) => (
                        <div key={index} className="flex items-center gap-2 mb-4">
                            <span className="text-[#2E7D32]"> <MdOutlineKeyboardArrowRight className='text-xl' /> </span>
                            <span>{service}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
