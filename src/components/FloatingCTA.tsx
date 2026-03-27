import { MessageCircle } from "lucide-react";

const FloatingCTA = () => (
  <a
    href="https://wa.me/5561984269150"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Faça sua reserva pelo WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300 animate-float glass-emerald md:bottom-8 md:right-8"
    style={{ background: "hsl(152 60% 36%)" }}
  >
    <MessageCircle size={20} />
    <span className="hidden sm:inline">Faça sua reserva</span>
  </a>
);

export default FloatingCTA;
