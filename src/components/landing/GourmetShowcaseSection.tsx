import { motion } from "motion/react";
import { Palette, Sparkles, Monitor } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function GourmetShowcaseSection() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-black via-[#0d0d0d] to-black overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4af37]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1e40af]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#d4af37]/20 to-[#1e40af]/20 border border-[#d4af37]/30 mb-6">
            <Palette className="w-4 h-4 text-[#d4af37]" />
            <span className="text-[#d4af37] text-sm">Diseño Premium</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl text-white font-serif mb-5">
            Cartas que Enamoran <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#b87333]">
              a Primera Vista
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            Temas profesionales diseñados por expertos. Tu carta se ve como la de un restaurante de 5 estrellas.
          </p>
        </motion.div>

        {/* Themes Showcase */}
        <div className="space-y-20 md:space-y-24">
          {/* Dark Gourmet Theme */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 border border-[#d4af37]/30 mb-6">
                  <Sparkles className="w-4 h-4 text-[#d4af37]" />
                  <span className="text-[#d4af37] text-sm">Dark Gourmet Premium</span>
                </div>
                
                <h3 className="text-4xl text-white font-serif mb-4">
                  Elegancia Sofisticada
                </h3>
                <p className="text-white/70 text-lg mb-6 leading-relaxed">
                  Fondo oscuro con toques dorados. Perfecto para restaurantes premium, 
                  bares de alta gama y experiencias gastronómicas exclusivas.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Tipografía editorial elegante",
                    "Efectos glassmorphism premium",
                    "Fotos con glows dorados",
                    "Animaciones suaves y profesionales"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-white/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dark Theme Preview */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative rounded-3xl overflow-hidden border-2 border-[#d4af37]/30 shadow-[0_0_80px_rgba(212,175,55,0.3)]">
                  {/* Simulated Dark Menu */}
                  <div className="aspect-[9/16] bg-gradient-to-b from-black via-[#0d0d0d] to-black p-8">
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#d4af37] to-[#b87333] flex items-center justify-center">
                        <span className="text-2xl">🍽️</span>
                      </div>
                      <h4 className="text-2xl text-white font-serif mb-1">Le Gourmet</h4>
                      <p className="text-white/60 text-sm">Nuestra carta premium</p>
                    </div>

                    {/* Category Chips */}
                    <div className="flex gap-2 mb-6 overflow-x-auto scrollbar-hide">
                      <div className="px-4 py-2 rounded-full bg-[#d4af37] text-black text-sm whitespace-nowrap">
                        Carnes
                      </div>
                      <div className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm whitespace-nowrap">
                        Pastas
                      </div>
                      <div className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm whitespace-nowrap">
                        Postres
                      </div>
                    </div>

                    {/* Product Cards with Real Images */}
                    <div className="space-y-4">
                      {[
                        { 
                          name: "Bife de Chorizo Premium", 
                          desc: "Angus argentino, 400g", 
                          price: 15900,
                          img: "https://images.unsplash.com/photo-1714692571386-0f26dec1bab5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwc3RlYWslMjBwbGF0ZXxlbnwxfHx8fDE3NjM0MTE3MjB8MA&ixlib=rb-4.1.0&q=80&w=300"
                        },
                        { 
                          name: "Ravioles de Ricota", 
                          desc: "Salsa fileto, albahaca", 
                          price: 9500,
                          img: "https://images.unsplash.com/photo-1676300184847-4ee4030409c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwcGFzdGElMjBkaXNofGVufDF8fHx8MTc2MzM0NTkzNXww&ixlib=rb-4.1.0&q=80&w=300"
                        },
                        { 
                          name: "Copa de Vino Reserva", 
                          desc: "Malbec premium, cosecha 2020", 
                          price: 4800,
                          img: "https://images.unsplash.com/photo-1514705623137-05589a935b0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2luZSUyMGdsYXNzfGVufDF8fHx8MTc2MzM2NzAyNnww&ixlib=rb-4.1.0&q=80&w=300"
                        }
                      ].map((item, i) => (
                        <div key={i} className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#d4af37]/30 transition-all">
                          <div className="flex gap-4">
                            <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 shadow-lg">
                              <ImageWithFallback
                                src={item.img}
                                alt={item.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <h5 className="text-white mb-1 font-serif">{item.name}</h5>
                              <p className="text-white/60 text-xs mb-2">{item.desc}</p>
                              <div className="text-[#d4af37] font-semibold">${item.price.toLocaleString()}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#d4af37]/20 to-[#b87333]/20 blur-3xl -z-10 opacity-50" />
              </motion.div>
            </div>
          </motion.div>

          {/* Light Bistro Theme */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Light Theme Preview */}
              <motion.div
                className="relative order-2 lg:order-1"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative rounded-3xl overflow-hidden border-2 border-[#1e40af]/30 shadow-[0_0_80px_rgba(30,64,175,0.3)]">
                  {/* Simulated Light Menu */}
                  <div className="aspect-[9/16] bg-gradient-to-b from-white via-gray-50 to-white p-8">
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#1e40af] to-[#3b82f6] flex items-center justify-center">
                        <span className="text-2xl">☕</span>
                      </div>
                      <h4 className="text-2xl text-gray-900 font-serif mb-1">Café Bistro</h4>
                      <p className="text-gray-600 text-sm">Menú del día</p>
                    </div>

                    {/* Category Chips */}
                    <div className="flex gap-2 mb-6 overflow-x-auto scrollbar-hide">
                      <div className="px-4 py-2 rounded-full bg-[#1e40af] text-white text-sm whitespace-nowrap">
                        Desayunos
                      </div>
                      <div className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm whitespace-nowrap">
                        Almuerzos
                      </div>
                      <div className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm whitespace-nowrap">
                        Bebidas
                      </div>
                    </div>

                    {/* Product Cards with Real Images */}
                    <div className="space-y-4">
                      {[
                        { 
                          name: "Latte Art Especial", 
                          desc: "Espresso doble, leche texturizada", 
                          price: 1800,
                          img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBsYXR0ZSUyMGFydHxlbnwxfHx8fDE3NjMzODMzMzR8MA&ixlib=rb-4.1.0&q=80&w=300"
                        },
                        { 
                          name: "Bruschetta Caprese", 
                          desc: "Tomate, mozzarella, albahaca", 
                          price: 2400,
                          img: "https://images.unsplash.com/photo-1536739782508-c2388552aad3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicnVzY2hldHRhJTIwYXBwZXRpemVyfGVufDF8fHx8MTc2MzMzOTAxOXww&ixlib=rb-4.1.0&q=80&w=300"
                        },
                        { 
                          name: "Tiramisú Tradicional", 
                          desc: "Receta italiana, café amaretto", 
                          price: 2200,
                          img: "https://images.unsplash.com/photo-1714385905983-6f8e06fffae1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aXJhbWlzdSUyMGRlc3NlcnR8ZW58MXx8fHwxNzYzMzkzMjcwfDA&ixlib=rb-4.1.0&q=80&w=300"
                        }
                      ].map((item, i) => (
                        <div key={i} className="p-4 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all">
                          <div className="flex gap-4">
                            <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 shadow-sm">
                              <ImageWithFallback
                                src={item.img}
                                alt={item.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <h5 className="text-gray-900 mb-1 font-serif">{item.name}</h5>
                              <p className="text-gray-600 text-xs mb-2">{item.desc}</p>
                              <div className="text-[#1e40af] font-semibold">${item.price.toLocaleString()}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#1e40af]/20 to-[#3b82f6]/20 blur-3xl -z-10 opacity-50" />
              </motion.div>

              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1e40af]/10 border border-[#1e40af]/30 mb-6">
                  <Monitor className="w-4 h-4 text-[#1e40af]" />
                  <span className="text-[#1e40af] text-sm">Light Bistro Elegante</span>
                </div>
                
                <h3 className="text-4xl text-white font-serif mb-4">
                  Frescura y Claridad
                </h3>
                <p className="text-white/70 text-lg mb-6 leading-relaxed">
                  Diseño limpio y luminoso. Ideal para cafeterías, brunch places 
                  y espacios diurnos con atmósfera relajada.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Colores suaves y amigables",
                    "Máxima legibilidad en luz natural",
                    "Estilo minimalista moderno",
                    "Perfect para menús del día"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-white/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1e40af]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16 md:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-sm">
            <p className="text-white/90 text-lg mb-4">
              ¿Querés un tema personalizado para tu marca?
            </p>
            <motion.button
              onClick={() => {
                const section = document.getElementById("pricing");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#d4af37] to-[#b87333] text-black font-semibold hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Planes y Precios
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
