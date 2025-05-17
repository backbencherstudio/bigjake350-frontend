import Image from "next/image";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  iconId: number;
}

export default function FaqItem({ question, answer, isOpen, onClick, iconId }: FaqItemProps) {
  return (
    <div
      className={`border-t border-x border-gray-400 last:border-b transition-colors duration-200 ${isOpen ? "bg-gray-100" : "bg-white"}`}
      onClick={onClick}
    >
      <div className="flex items-center gap-4 p-5 cursor-pointer">
        <Image
          src={isOpen ? "/pictures/notary-minus-icon.png" : "/pictures/notary-cross-icon.png"}
          alt="icon"
          width={20}
          height={20}
        />
        <p className="text-black text-base font-medium">{question}</p>
      </div>
      {isOpen && (
        <div className="px-8 pb-5 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}