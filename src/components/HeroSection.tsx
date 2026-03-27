import { Star } from "lucide-react";


const HEADLINE =
  "O Espaço Bela Vista é referência em eventos da Cidade Ocidental-GO. Com ampla área, e uma equipe dedicada, transformamos cada celebração em uma experiência memorável.";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background image */}
    <img
      src="/foto-salao3.jpeg"
      alt="Espaço Bela Vista - Salão de festas"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />

    <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl animate-fade-up">
      {/* Rating badge */}
      <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8">
        <span className="flex gap-0.5">
          {[1, 2, 3, 4].map((i) => (
            <Star key={i} size={14} className="fill-primary text-primary" />
          ))}
          <Star size={14} className="fill-primary/50 text-primary" />
        </span>
        <span className="text-xs font-medium text-primary-foreground/90">4.7 · Salão de festas</span>
      </div>

      <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground leading-tight mb-6">
        Espaço <span className="text-gradient-emerald">Bela Vista</span>
      </h1>

      <p className="text-primary-foreground/85 text-base sm:text-lg leading-relaxed mb-10 font-light">
        {HEADLINE}
      </p>

      <a
        href="https://wa.me/5561984269150"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
      >
        Faça sua reserva
      </a>
    </div>
  </section>
);

export default HeroSection;
