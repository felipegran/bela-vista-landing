import { Users, PartyPopper, Utensils, TreePalm } from "lucide-react";

const FEATURES = [
  {
    icon: Users,
    title: "Equipe Dedicada",
    desc: "Profissionais prontos para tornar seu evento perfeito do início ao fim.",
  },
  {
    icon: PartyPopper,
    title: "Eventos Memoráveis",
    desc: "Casamentos, aniversários, formaturas e confraternizações com excelência.",
  },
  {
    icon: Utensils,
    title: "Espaço Completo",
    desc: "Cozinha equipada, salão climatizado e toda infraestrutura necessária.",
  },
  {
    icon: TreePalm,
    title: "Área Verde",
    desc: "Amplo espaço ao ar livre com paisagismo e iluminação encantadora.",
  },
];

const TESTIMONIAL =
  '"O melhor lugar pra se divertir com a família e amigos, sempre superando minhas expectativas. Agradeço a Deus todas as..."';

const AboutSection = () => (
  <section className="py-24 bg-secondary/50">
    <div className="container mx-auto px-6">
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground text-center mb-4">
        Por que escolher o <span className="text-primary">Bela Vista</span>?
      </h2>
      <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
        Mais do que um espaço, uma experiência completa para seus momentos especiais.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="glass-emerald rounded-2xl p-6 hover:scale-[1.03] transition-transform duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-4">
              <f.icon size={24} className="text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* Testimonial */}
      <div className="max-w-2xl mx-auto glass-emerald rounded-2xl p-8 text-center">
        <p className="text-foreground/80 italic leading-relaxed mb-4">{TESTIMONIAL}</p>
        <span className="text-sm font-semibold text-primary">— Luana Sousa</span>
      </div>
    </div>
  </section>
);

export default AboutSection;
