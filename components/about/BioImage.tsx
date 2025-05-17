import Image from "next/image";
export default function BioImage() {
  return (
    <div className="w-full md:max-w-1/4 aspect-square  border rounded-full shadow-xl  overflow-hidden  ">
    
      <Image
        src="/pictures/bio-picture.png"
        alt="Jeffery Jacobs"
        width={1280}
        height={880}
        className="w-full max-w-md object-cover mx-auto rounded-xl relative top-[50px]  scale-125 "
      />
    </div>
  );
}
