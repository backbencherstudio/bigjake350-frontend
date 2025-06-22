import React from 'react'
import { User } from 'lucide-react'
import Image from 'next/image'

export default function MeettheTeam() {
    const team = [

        {
            name: "Jeffrey Jacobs",
            title: "CEO",
            subtitle: "",
            email: "",
            image: "/pictures/meetTeam/ceo.jpg"
        },
        {
            name: "Necole",
            title: "Vice President",
            subtitle: "Notary Public",
            email: "",
            image: "/pictures/meetTeam/team_co.jpg"
        },

        {
            name: "Amanda",
            title: "Notary partner",
            subtitle: "( I Need A Notary )",
            email: "amandalofflernotary@gmail.com",
            image: "/pictures/meetTeam/Notary-partner.png"
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
                        <div>
                            {
                                member.image ? (
                                    <Image src={member.image} alt={member.name} className='w-36 h-36 rounded-full object-cover' width={144} height={144} />
                                ) : (
                                    <User className='w-36 h-36 text-white border-2 border-gray-300 rounded-full p-2' />
                                )
                            }
                        </div>
                        <h3 className='mt-6 text-md md:text-xl font-bold text-black uppercase'>{member.name}</h3>
                        <p className='mt-2 text-gray-600 text-center capitalize '>{member.title}</p>
                        <p className='mt-2 text-gray-500 text-sm text-center capitalize '>{member.subtitle}</p>
                        <p className='mt-2 text-gray-500 text-sm text-center'>{member.email}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
