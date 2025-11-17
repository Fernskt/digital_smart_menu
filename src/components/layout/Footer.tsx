import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#d4af37] to-[#b87333] flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                <span className="text-black font-semibold">DSM</span>
              </div>
              <span className="font-semibold">Digital Smart Menu</span>
            </div>
            <p className="text-white/60 leading-relaxed">
              La plataforma premium para gestionar tu carta digital con estilo profesional
            </p>
          </div>
          
          <div>
            <h4 className="mb-4 text-[#d4af37] font-semibold">Producto</h4>
            <ul className="space-y-3 text-white/60">
              <li><a href="#" className="hover:text-[#d4af37] transition-colors">Características</a></li>
              <li><a href="#" className="hover:text-[#d4af37] transition-colors">Precios</a></li>
              <li><a href="#" className="hover:text-[#d4af37] transition-colors">Demo en Vivo</a></li>
              <li><a href="#" className="hover:text-[#d4af37] transition-colors">Integraciones</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 text-[#d4af37] font-semibold">Empresa</h4>
            <ul className="space-y-3 text-white/60">
              <li><a href="#" className="hover:text-[#d4af37] transition-colors">Nosotros</a></li>
              <li><a href="#" className="hover:text-[#d4af37] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#d4af37] transition-colors">Casos de Éxito</a></li>
              <li><a href="#" className="hover:text-[#d4af37] transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 text-[#d4af37] font-semibold">Soporte</h4>
            <ul className="space-y-3 text-white/60">
              <li><a href="#" className="hover:text-[#d4af37] transition-colors">Centro de Ayuda</a></li>
              <li><a href="#" className="hover:text-[#d4af37] transition-colors">Tutoriales</a></li>
              <li><a href="#" className="hover:text-[#d4af37] transition-colors">API</a></li>
              <li><a href="#" className="hover:text-[#d4af37] transition-colors">Estado del Sistema</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-white/60 mb-2">
              © 2025 Digital Smart Menu. Todos los derechos reservados.
            </p>
            <div className="flex gap-4 text-xs text-white/40">
              <a href="#" className="hover:text-[#d4af37] transition-colors">Términos</a>
              <span>•</span>
              <a href="#" className="hover:text-[#d4af37] transition-colors">Privacidad</a>
              <span>•</span>
              <a href="#" className="hover:text-[#d4af37] transition-colors">Cookies</a>
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-[#d4af37] hover:bg-white/10 hover:border-[#d4af37]/30 transition-all">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-[#d4af37] hover:bg-white/10 hover:border-[#d4af37]/30 transition-all">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-[#d4af37] hover:bg-white/10 hover:border-[#d4af37]/30 transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-[#d4af37] hover:bg-white/10 hover:border-[#d4af37]/30 transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
