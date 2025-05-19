import React from 'react'
import ButtonReusable from '../reusable/ButtonReuseble'

export default function TalkOurExpertsBanner() {
    return (
        <div className='bg-[#2E8B57] py-5'>
            <div className='container px-5 2xl:px-0 py-10'>
                <h1 className='text-2xl text-center sm:text-3xl xl:text-4xl  font-bold text-white'>Place an order to calculate your cost or talk to our experts</h1>
                <div className='flex flex-col md:flex-row justify-center gap-5 md:gap-14 mt-10'>
                    <ButtonReusable className='!bg-white !text-black px-10 py-3 hover:!bg-gray-200' title='Place Order' variant='secondary' />
                    <ButtonReusable className='!bg-white !text-black px-10 py-3 hover:!bg-gray-200' title='Talk to Expert' variant='secondary' />
                </div>
            </div>
        </div>
    )
}
