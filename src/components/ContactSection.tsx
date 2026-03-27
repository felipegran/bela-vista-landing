import { MapPin, Phone, Instagram } from "lucide-react";

const ADDRESS = "Quadra 14 Lote 20 Friburgo B, Friburgo, Cidade Ocidental, GO, 72887-236";
const PHONE = "+55 61 98426-9150";
const INSTAGRAM = "@belavista.festas";
const MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.023470724654!2d-47.94327492347!3d-16.097383282472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935984f2d48dc9c3%3A0xf8fe296a5c6f3f33!2sBela%20Vista%20(espa%C3%A7o%20de%20eventos)!5e0!3m2!1spt-BR!2sbr!4v1711510000000!5m2!1spt-BR!2sbr";

const ContactSection = () => (
  <section id="localizacao" className="py-24 bg-secondary/50">
    <div className="container mx-auto px-6">
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground text-center mb-4">
        <span className="text-primary">Localização</span> & Contato
      </h2>
      <p className="text-muted-foreground text-center max-w-md mx-auto mb-14">
        Venha nos visitar ou entre em contato pelo WhatsApp.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Info cards */}
        <div className="flex flex-col gap-5">
          <div className="glass-emerald rounded-2xl p-6 flex items-start gap-4">
            <MapPin className="text-primary mt-1 shrink-0" size={22} />
            <div>
              <h3 className="font-display font-semibold text-foreground mb-1">Endereço</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{ADDRESS}</p>
            </div>
          </div>

          <div className="glass-emerald rounded-2xl p-6 flex items-start gap-4">
            <Phone className="text-primary mt-1 shrink-0" size={22} />
            <div>
              <h3 className="font-display font-semibold text-foreground mb-1">WhatsApp</h3>
              <a
                href="https://wa.me/5561984269150"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline"
              >
                {PHONE}
              </a>
            </div>
          </div>

          <div className="glass-emerald rounded-2xl p-6 flex items-start gap-4">
            <Instagram className="text-primary mt-1 shrink-0" size={22} />
            <div>
              <h3 className="font-display font-semibold text-foreground mb-1">Instagram</h3>
              <a
                href="https://instagram.com/belavista.festas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline"
              >
                {INSTAGRAM}
              </a>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden glass-emerald min-h-[320px]">
          <iframe
            title="Localização Espaço Bela Vista"
            src={MAPS_EMBED}
            className="w-full h-full min-h-[320px] border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
