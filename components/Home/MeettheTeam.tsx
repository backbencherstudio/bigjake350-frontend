import React from 'react'
import { User } from 'lucide-react'

export default function MeettheTeam() {
    const team = [
        {
            name: "Jeffery Jacob",
            title: "CEO"
        },
        {
            name: "Blank",
            title: "CEO"
        },
        {
            name: "Blank",
            title: "CEO"
        }
    ]

    return (
        <div className='container px-5 2xl:px-0 py-10'>
            <div className='flex flex-col gap-4'>
                <p className='text-[#769271] text-xl uppercase'>our notaries</p>
                <h1 className='text-2xl sm:text-3xl xl:text-4xl font-bold text-[#3E813E]'>Meet the Team</h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                {team.map((member, index) => (
                    <div key={index} className='bg-white rounded-t-[50px] rounded-s-[50px] shadow-[0_4px_20px_0px_rgba(0,0,0,0.3)] p-8 flex flex-col items-center'>
                        <div className='bg-[#2563eb] rounded-full p-6'>
                            <User className='w-16 h-16 text-white' />
                        </div>
                        <h3 className='mt-6 text-md md:text-xl font-bold text-black uppercase'>{member.name}</h3>
                        <p className='mt-2 text-gray-600 text-center'>{member.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
