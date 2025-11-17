import { motion } from "motion/react";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function NewHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1759419038843-29749ac4cd2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcmVzdGF1cmFudCUyMGludGVyaW9yfGVufDF8fHx8MTc2MzM4Mzg3Nnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Elegant restaurant"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e40af]/20 to-[#d4af37]/10" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#d4af37]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#d4af37]/20 to-[#1e40af]/20 border border-[#d4af37]/30 backdrop-blur-sm mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-[#d4af37]" />
              <span className="text-white/90 text-sm">Plataforma SaaS Premium 2025</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-5xl md:text-7xl text-white font-serif mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              La Carta Digital que{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#b87333]">
                Tus Clientes Aman
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl text-white/80 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Actualizá precios, fotos y productos en <span className="text-[#d4af37] font-semibold">segundos</span>. 
              QR para cada mesa. Sin imprimir. Sin complicaciones.
            </motion.p>

            {/* Features List */}
            <motion.div
              className="space-y-3 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {[
                "✓ Cambios en tiempo real desde cualquier dispositivo",
                "✓ QR automático para cada mesa de tu local",
                "✓ Temas gourmet premium incluidos"
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-3 text-white/90"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Button
                size="lg"
                onClick={() => {
                  const section = document.getElementById("pricing");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="bg-gradient-to-r from-[#d4af37] to-[#b87333] hover:from-[#b87333] hover:to-[#d4af37] text-black shadow-[0_0_40px_rgba(212,175,55,0.3)] hover:shadow-[0_0_60px_rgba(212,175,55,0.5)] transition-all duration-300 group"
              >
                <span>Probar Gratis Ahora</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const section = document.getElementById("demo");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="border-white/30 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-[#d4af37]/50 transition-all duration-300 group"
              >
                <Play className="w-5 h-5 mr-2" />
                <span>Ver Demo en Vivo</span>
              </Button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              className="flex items-center gap-6 mt-12 pt-8 border-t border-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <div>
                <div className="text-3xl text-white font-semibold">500+</div>
                <div className="text-white/60 text-sm">Restaurantes activos</div>
              </div>
              <div className="h-12 w-px bg-white/10" />
              <div>
                <div className="text-3xl text-white font-semibold">4.9★</div>
                <div className="text-white/60 text-sm">Rating promedio</div>
              </div>
              <div className="h-12 w-px bg-white/10" />
              <div>
                <div className="text-3xl text-white font-semibold">98%</div>
                <div className="text-white/60 text-sm">Satisfacción</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Mockups - Gourmet Menu Preview (Static, No Scroll) */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {/* Phone Mockup - Gourmet Theme - Static Preview */}
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -10, 0],
              }}
              transition={{
                opacity: { duration: 0.8 },
                scale: { duration: 0.8 },
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <div className="relative mx-auto w-[280px] h-[570px] bg-gradient-to-br from-gray-800 to-black rounded-[40px] p-3 shadow-[0_0_80px_rgba(212,175,55,0.4)] ring-1 ring-white/10">
                <div className="w-full h-full bg-[#0d0d0d] rounded-[32px] overflow-hidden border border-white/10">
                  {/* Phone Screen Content - Static Capture */}
                  <div className="relative h-full bg-gradient-to-b from-black via-[#0d0d0d] to-black">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-30">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)]" />
                    </div>

                    {/* Header */}
                    <div className="relative bg-gradient-to-b from-black via-black/95 to-transparent pt-6 pb-4 px-6 text-center border-b border-[#d4af37]/20">
                      <div className="text-2xl text-white font-serif mb-1 tracking-wide">Le Gourmet</div>
                      <div className="text-[#d4af37] text-xs tracking-widest">MENÚ PREMIUM</div>
                    </div>
                    
                    {/* Category Chips */}
                    <div className="px-6 py-4 flex gap-2 justify-center bg-black/40">
                      <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#d4af37] to-[#b87333] text-black text-xs font-semibold whitespace-nowrap shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                        Carnes
                      </div>
                      <div className="px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 text-white text-xs whitespace-nowrap">
                        Pastas
                      </div>
                    </div>

                    {/* Product Cards - Static Snapshot */}
                    <div className="px-6 py-4 space-y-3 bg-gradient-to-b from-black/40 to-black/60">
                      {/* Product 1 - Steak */}
                      <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 shadow-lg backdrop-blur-sm">
                        <div className="aspect-[16/9] overflow-hidden">
                          <ImageWithFallback
                            src="https://images.unsplash.com/photo-1714692571386-0f26dec1bab5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwc3RlYWslMjBwbGF0ZXxlbnwxfHx8fDE3NjM0MTE3MjB8MA&ixlib=rb-4.1.0&q=80&w=400"
                            alt="Bife Premium"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-3">
                          <div className="text-white font-serif text-sm mb-1">Bife de Chorizo</div>
                          <div className="text-white/50 text-[10px] mb-1.5">Angus argentino, 400g</div>
                          <div className="text-[#d4af37] font-semibold text-sm">$15,900</div>
                        </div>
                      </div>

                      {/* Product 2 - Pasta */}
                      <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 shadow-lg backdrop-blur-sm">
                        <div className="aspect-[16/9] overflow-hidden">
                          <ImageWithFallback
                            src="https://images.unsplash.com/photo-1676300184847-4ee4030409c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwcGFzdGElMjBkaXNofGVufDF8fHx8MTc2MzM0NTkzNXww&ixlib=rb-4.1.0&q=80&w=400"
                            alt="Ravioles"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-3">
                          <div className="text-white font-serif text-sm mb-1">Ravioles de Ricota</div>
                          <div className="text-white/50 text-[10px] mb-1.5">Salsa fileto, albahaca</div>
                          <div className="text-[#d4af37] font-semibold text-sm">$9,500</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Desktop Preview - Behind */}
            <motion.div
              className="absolute -bottom-8 -right-8 w-[350px] h-[220px] rounded-xl bg-gradient-to-br from-gray-900 to-black p-4 shadow-[0_0_60px_rgba(30,64,175,0.3)] border border-white/10 hidden lg:block overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
            >
              <div className="w-full h-full bg-[#0d0d0d] rounded-lg p-4 overflow-hidden">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1e40af] to-[#1e40af]/70 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white/90 text-xs font-semibold">Dashboard</div>
                    <div className="text-white/50 text-[10px]">Panel de control</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="h-2 bg-gradient-to-r from-[#1e40af] to-[#1e40af]/50 rounded flex-1" style={{ width: '80%' }} />
                    <span className="text-white/40 text-[10px]">Productos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 bg-gradient-to-r from-[#d4af37] to-[#d4af37]/50 rounded flex-1" style={{ width: '60%' }} />
                    <span className="text-white/40 text-[10px]">Ventas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 bg-gradient-to-r from-[#1e40af] to-[#1e40af]/50 rounded flex-1" style={{ width: '90%' }} />
                    <span className="text-white/40 text-[10px]">Visitas</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/20 to-[#1e40af]/20 blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
