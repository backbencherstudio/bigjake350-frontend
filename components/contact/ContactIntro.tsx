export default function ContactIntro() {
  return (
    <div className="flex flex-col justify-start w-full lg:w-1/2 text-white">
      <h3 className="text-2xl font-semibold">Contact Us</h3>
      <h1 className="text-4xl font-bold mt-2">Send Us Your Message</h1>
      <h4 className="text-lg mt-2">Fill in the form and let us know what you need</h4>

      <div className="flex flex-col md:flex-row gap-6 mt-6">
        <div className="bg-white text-center text-black rounded-2xl px-6 py-4 flex-1">
          <p className="font-semibold text-green-700">Mailing Address</p>
          <p className="text-gray-500 text-sm">1640 Metropolitan Circle, Tallahassee FL, 32308</p>
        </div>
        <div className="bg-white text-center text-black rounded-2xl px-6 py-4 flex-1">
          <p className="font-semibold text-green-700">Offices</p>
          <p className="text-gray-500 text-sm">1640 Metropolitan Circle, Tallahassee FL, 32308</p>
        </div>
      </div>
    </div>
  );
}
