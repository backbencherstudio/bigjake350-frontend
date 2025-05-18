"use client"
import React from 'react'
import bgImage from "@/public/pictures/green-gradient.png"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


export default function Testimonials() {
    const data = [
        {
            name: "John Smith",
            role: "CEO, Tech Corp",
            description: "The service exceeded our expectations. Their team's dedication and expertise made our project a huge success.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
            rating: 5,
            date: "2024-01-01",
        },
        {
            name: "Sarah Johnson",
            role: "Marketing Director",
            description: "Outstanding experience working with them. They delivered exactly what we needed, on time and within budget.",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
            rating: 5,
            date: "2024-02-15",
        },
        {
            name: "Michael Chen",
            role: "Startup Founder",
            description: "Incredible attention to detail and professional service. Would highly recommend to anyone looking for quality work.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
            rating: 5,
            date: "2024-03-01",
        }
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dotsClass: "slick-dots custom-dots",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    }

    return (
        <div style={{ backgroundImage: `url(${bgImage.src})` }} className='bg-cover bg-center bg-no-repeat py-16'>
            <div className='container px-5 2xl:px-0'>
                <p className='text-white text-xl uppercase mb-4 '>testimonials</p>
                <h1 className='text-2xl sm:text-3xl xl:text-4xl font-bold text-white  mb-12'>Our Clients have been Extremely Satisfied with our Notary Services!</h1>

                <div className='max-w-4xl mx-auto'>
                    <style jsx global>{`
                        .custom-dots {
                            bottom: -40px;
                        }
                        .custom-dots li {
                            margin: 0 4px;
                        }
                        .custom-dots li button {
                            width: 12px;
                            height: 12px;
                            border-radius: 50%;
                            background: rgba(255, 255, 255, 0.5);
                            padding: 0;
                        }
                        .custom-dots li button:before {
                            display: none;
                        }
                        .custom-dots li.slick-active button {
                            background: white;
                        }
                    `}</style>
                    <Slider {...settings}>
                        {data.map((item, index) => (
                            <div key={index} className='px-4'>
                                <div className='bg-white rounded-t-[50px] rounded-s-[50px] shadow-[0_4px_20px_0px_rgba(0,0,0,0.3)] p-8 flex flex-col items-center'>
                                    <div className='w-24 h-24 rounded-full overflow-hidden mb-6'>
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className='w-full h-full object-cover'
                                        />
                                    </div>
                                    <p className='text-gray-500 text-xl text-center mb-6'>{item.description}</p>
                                    <h3 className='text-xl font-semibold text-gray-900'>{item.name}</h3>
                                    <p className='text-gray-500'>{item.role}</p>
                                    <div className='flex gap-1 mt-4'>
                                        {[...Array(item.rating)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

