import React from 'react'
import bannerImage from "@/public/pictures/banner.png"
import businessLogo from "@/public/pictures/business-logo2.png"
import Image from 'next/image'

export default function Home() {
  return (
    <div className="mx-auto font-sans">
      <div className="relative w-full bg-fixed bg-center bg-no-repeat bg-cover overflow-hidden"
        style={{
          backgroundImage: `url(${bannerImage.src})`,
          backgroundAttachment: 'fixed',
          perspective: '1px',
          transformStyle: 'preserve-3d'
        }}>
        <Image
          src={businessLogo}
          alt="no logo found"
          className="w-[268px] float-right"
        />
        <div className="relative bg-[#3e813e] text-white w-[26%] h-1/2 ml-[61px] text-center mt-48 inline-block z-[1]">
          <h1 className="title-panel-header">NOTARY NEXUS & APOSTILLE SERVICES</h1>
          <p className="font-sans">* GENERAL NOTARY SERVICES</p>
          <p className="font-sans">* LOAN SIGNING AGENT</p>
          <p className="font-sans">* REMOTE ONLINE NOTARY</p>

          <div className="bg-[#85ab85] w-[150%] text-right text-[33px] pr-[50px]">
            <p className="mb-0 pt-[10px]">JEFFERY JACOBS</p>
            <p className="mt-0 mr-[94px] pb-[10px]">CEO</p>
          </div>

          <h2>CONTACT US:</h2>
          <div className="contact-div">561-542-3715</div>
          <div className="contact-div">JJACOBSPUBLICSAFETY.COM</div>
          <div className="mb-[22px]">JJACOBSPSELLC@OUTLOOK.COM</div>
        </div>

        <div className="inline-block bg-[#D2B48C] -ml-1 p-4">
          <span className="text-[#3e813e] text-[29px] font-bold">
            NEED NOTARY,<br />
            WE WILL TRAVEL.
          </span>
        </div>
      </div>
      <div className='bg-white'>
        <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error a, dolorum magni facere quae sequi libero vel, aspernatur eveniet architecto voluptatibus. Sunt maiores ex maxime, quidem, dolore consequuntur omnis praesentium suscipit aliquid similique molestiae labore reiciendis provident expedita alias voluptatem qui rem quam consectetur perspiciatis soluta laborum! Ratione eligendi at facilis eveniet, soluta aperiam delectus alias obcaecati autem ipsum atque iste id omnis aspernatur architecto exercitationem cupiditate consequatur? Blanditiis quis magnam, autem odio, quae consequatur quidem corrupti sint nulla doloremque, quos adipisci eligendi voluptatibus laboriosam. Cupiditate, quis at! Mollitia minima dolorum maiores eos laborum libero doloremque eaque molestias odit at expedita a earum cupiditate nam eius reiciendis debitis sapiente, sed sunt omnis assumenda consectetur quod! Enim, numquam placeat. Temporibus animi minima maxime fugiat porro, laudantium, culpa pariatur illum id eum doloremque aspernatur corrupti. Minus quae adipisci, ullam ut sequi alias minima natus non corrupti voluptatibus dicta aspernatur veritatis culpa, voluptatum aperiam aliquid maiores quod odio facilis! Qui quibusdam voluptate hic fugit odio impedit itaque nobis enim veniam nesciunt incidunt et id quas sint, error quo debitis, consectetur perspiciatis quos nulla eius, dolore ipsum. Aut iure consequatur cupiditate nihil natus saepe eum iste eaque</h1>
      </div>
    </div>
  )
}
