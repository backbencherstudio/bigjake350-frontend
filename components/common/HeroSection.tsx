interface HeroProps {
  title: string;
  imageUrl: string;
}

export default function HeroSection({ title, imageUrl }: HeroProps) {
  return (
    <section className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full rounded-xl overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})`, filter: "brightness(0.5)" }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
        <h1 className="text-3xl sm:text-4xl lg:text-[64px] font-bold text-green-100 drop-shadow-md">
          {title}
        </h1>
      </div>
    </section>
  );
}
