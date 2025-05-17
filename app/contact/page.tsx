"use client";

import ContactForm from "@/components/contact/ContactForm";
import ContactIntro from "@/components/contact/ContactIntro";
import HeroSection from "@/components/common/HeroSection";



export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 font-sans">
      <HeroSection
        title="Contact - Notary Nexus & Apostille Services"
        imageUrl="/office-building.png"
      />

      <div className="flex flex-col lg:flex-row bg-gradient-to-br from-green-600 to-green-900 text-white p-8 lg:p-16 gap-10 mt-12 rounded-lg shadow-md">
        <ContactIntro />
        <ContactForm />
      </div>
    </div>
  );
}

// "use client";


// export default function ContactPage() {
//   return (
//     <div className="w-full font-sans text-white">
//       {/* Header */}
//       <header className="flex flex-row items-center border-b-2 border-gray-300 mx-6 py-6">
//         <h1 className="text-2xl font-[DM Serif Display] ml-4 pr-9 border-r-2 border-gray-300">
//           NOTARY NEXUS<br className="hidden md:block" /> & APOSTILLE SERVICES
//         </h1>
//         <button className="ml-auto mr-4 rounded-full border px-6 py-2 text-sm hover:bg-gray-200 text-black">
//           Apostille Your Document
//         </button>
//         <button className="mr-4 rounded-full border px-6 py-2 text-sm hover:bg-gray-200 text-black">
//           Schedule A Notary
//         </button>
//       </header>

//       {/* Navbar */}
//       <nav className="ml-6 mt-4">
//         <ul className="flex gap-6 text-base text-black">
//           {[
//             { name: "Home", path: "Home" },
//             { name: "About", path: "About" },
//             { name: "Resources", path: "Resources" },
//             { name: "FAQ", path: "FAQ" },
//             { name: "Contact", path: "Contact" },
//           ].map((item) => (
//             <li key={item.name}>
//               <a
//                 href={item.path}
//                 className={`${
//                   item.name === "Contact"
//                     ? "text-teal-600 font-semibold"
//                     : "text-black"
//                 } hover:text-teal-600`}
//               >
//                 {item.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </nav>

//       {/* Hero Panel */}
//       <section
//         className="w-full h-[500px] bg-cover bg-center flex items-center justify-center text-center mt-6"
//         style={{ backgroundImage: "url(/office-building.png)" }}
//       >
//         <h1 className="text-[42px] md:text-[66px] font-[DM Serif Display] text-black drop-shadow-md">
//           Contact - Notary Nexus & Apostille Services
//         </h1>
//       </section>

//       {/* Contact Panel */}
//       <section className="flex flex-col lg:flex-row gap-10 px-6 md:px-[5%] mt-[70px] py-12 bg-gradient-to-br from-green-600 to-green-900">
//         {/* Text Block */}
//         <div className="flex flex-col lg:w-[45%]">
//           <h3 className="text-2xl">Contact Us</h3>
//           <h1 className="text-4xl font-bold mt-1">Send Us Your Message</h1>
//           <h4 className="text-lg mt-2">Fill in the form and let us know what you need</h4>

//           <div className="flex flex-col md:flex-row gap-6 mt-6">
//             <div className="bg-white text-center text-black rounded-2xl px-6 py-4 flex-1">
//               <p className="font-semibold text-green-700">Mailing Address</p>
//               <p className="text-gray-500 text-sm">1640 Metropolitan Circle, Tallahassee FL, 32308</p>
//             </div>
//             <div className="bg-white text-center text-black rounded-2xl px-6 py-4 flex-1">
//               <p className="font-semibold text-green-700">Offices</p>
//               <p className="text-gray-500 text-sm">1640 Metropolitan Circle, Tallahassee FL, 32308</p>
//             </div>
//           </div>
//         </div>

//         {/* Form Block */}
//         <div className="flex flex-col lg:w-[55%] mt-4 lg:mt-0">
//           <form className="space-y-5">
//             {[
//               { id: "fname", label: "First Name", placeholder: "John", type: "text" },
//               { id: "lname", label: "Last Name", placeholder: "Smith", type: "text" },
//               { id: "company-name", label: "Company", placeholder: "Example Ltd.", type: "text" },
//               { id: "phone", label: "Phone", placeholder: "123-456-789", type: "tel" },
//               { id: "email", label: "Email", placeholder: "you@example.com", type: "email" },
//             ].map(({ id, label, placeholder, type }) => (
//               <div key={id}>
//                 <label htmlFor={id} className="text-xl block mb-1">{label}:</label>
//                 <input
//                   id={id}
//                   name={id}
//                   type={type}
//                   placeholder={placeholder}
//                   className="w-full h-10 px-4 text-black text-lg rounded-md"
//                   required
//                 />
//               </div>
//             ))}

//             <div>
//               <p className="text-xl mb-2">What are you interested in?</p>
//               {[
//                 "Notary",
//                 "Apostille Services",
//                 "Fingerprinting",
//                 "Courier Services",
//                 "Misc.",
//               ].map((item) => (
//                 <div key={item} className="mb-1">
//                   <input type="radio" id={item} name="services" value={item.toLowerCase()} />
//                   <label htmlFor={item} className="ml-2">{item}</label>
//                 </div>
//               ))}
//             </div>

//             <div>
//               <label htmlFor="file" className="text-xl block mb-1">Upload your document:</label>
//               <input type="file" id="file" name="filename" className="text-black" />
//             </div>

//             <div>
//               <label htmlFor="message" className="text-xl block mb-1">Message</label>
//               <textarea
//                 name="message"
//                 id="message"
//                 rows={4}
//                 className="w-full px-4 py-2 text-black text-lg rounded-md"
//                 required
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               className="rounded-full bg-white text-green-800 px-10 py-3 text-base hover:bg-gray-100 shadow"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </section>
//     </div>
//   );
// }