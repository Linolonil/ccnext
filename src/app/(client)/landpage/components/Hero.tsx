import ImgsHero from "./ImgsHero";
import StatsHero from "./StatsHero";
import TextHero from "./TextHero";

export default function Hero() {
  return (
    <section
    className="relative h-full md:h-[calc(100vh + 250px)] md:pt-0 pt-14 flex items-center flex-col lg:pt-32"
    id="hero-section"
    style={{
      backgroundImage: "url('/bg-2.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
      <div className="hero-content w-full h-full flex justify-center items-center z-10 px-4 sm:px-6">
        <div className=" flex flex-col lg:flex-row gap-10 lg:gap-16 items-center text-center lg:text-left w-full h-full max-w-6xl relative">
          {/* Text Content */}
          <TextHero />

          {/* Carrossel de Imagens */}
          <ImgsHero />
        </div>
      </div>

      {/* StatsHero passando um pouco para fora */}
        <StatsHero />
    </section>
  );
}

