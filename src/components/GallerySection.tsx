import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const IMAGES = [
  { src: "/foto-pokemon.jpeg", alt: "Decoração Pokémon" },
  { src: "/foto-dino.jpeg", alt: "Festa Dinossauros" },
  { src: "/foto-safari.jpeg", alt: "Tema Safari" },
  { src: "/foto-salao1.jpeg", alt: "Nosso Salão" },
  { src: "/foto-placa.jpeg", alt: "Entrada do Espaço" },
  { src: "/foto-dentro.jpeg", alt: "Área Interna" },
];

const GallerySection = () => (
  <section id="galeria" className="py-24">
    <div className="container mx-auto px-6">
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground text-center mb-4">
        <span className="text-primary">Galeria</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-md mx-auto mb-14">
        Conheça nossos ambientes e se encante com cada detalhe.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {IMAGES.map((img, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-2xl aspect-[4/3] glass-emerald"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              width={800}
              height={600}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
              <span className="text-sm font-medium text-primary-foreground">{img.alt}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
