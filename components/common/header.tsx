import ButtonReusable from "../reusable/ButtonReuseble";

export default function Header() {
  return (
    <div className="bg-gradient-to-b from-white via-[#067427] to-white flex flex-col md:flex-row items-center md:justify-between border-b-2 border-gray-300 px-4 py-6 space-y-4 md:space-y-0">
      <h1 className="text-center  text-green-100 md:text-left text-xl sm:text-2xl font-[DM Serif Display] font-bold md:ml-4 md:pr-9 md:border-r-2 md:border-gray-300">
        NOTARY NEXUS<br className="hidden md:block" /> & APOSTILLE SERVICES
      </h1>

      <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-4">


        <ButtonReusable title=" Apostille Your Document" variant="outline" />
        <ButtonReusable title="Schedule A Notary" variant="outline" />
      </div>
    </div>
  );
}
