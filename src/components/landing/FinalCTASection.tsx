import { motion } from "motion/react";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function FinalCTASection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1759419038843-29749ac4cd2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcmVzdGF1cmFudCUyMGludGVyaW9yfGVufDF8fHx8MTc2MzM4Mzg3Nnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Restaurant"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e40af]/20 to-[#d4af37]/20" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0 ? '#d4af37' : '#1e40af',
            }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#d4af37]/20 to-[#1e40af]/20 border border-[#d4af37]/30 backdrop-blur-sm mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <Sparkles className="w-4 h-4 text-[#d4af37]" />
          <span className="text-white/90 text-sm">Únete a 500+ restaurantes exitosos</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          className="text-5xl md:text-7xl text-white font-serif mb-8 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Dejá de Depender de{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
            Cartas Impresas
          </span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="text-2xl md:text-3xl text-white/90 mb-12 font-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Llevá tu restaurante al nivel que <span className="text-[#d4af37] font-semibold">merece</span>
        </motion.p>

        {/* Benefits Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {[
            { icon: Zap, text: "Implementación en 24hs" },
            { icon: Sparkles, text: "Sin costos de setup" },
            { icon: ArrowRight, text: "Soporte en español" }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <Icon className="w-8 h-8 text-[#d4af37] mx-auto mb-3" />
                <p className="text-white/90">{item.text}</p>
              </div>
            );
          })}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#d4af37] to-[#b87333] hover:from-[#b87333] hover:to-[#d4af37] text-black shadow-[0_0_60px_rgba(212,175,55,0.4)] hover:shadow-[0_0_80px_rgba(212,175,55,0.6)] transition-all duration-300 group text-lg px-10 py-7"
          >
            <span>Probar Demo Gratis</span>
            <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white/30 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-[#d4af37]/50 transition-all duration-300 text-lg px-10 py-7"
          >
            Implementarlo Hoy
          </Button>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="text-center">
            <div className="text-white/60 text-sm mb-1">🔒 Pago Seguro</div>
            <div className="text-white/40 text-xs">SSL Certificado</div>
          </div>
          <div className="h-8 w-px bg-white/10" />
          <div className="text-center">
            <div className="text-white/60 text-sm mb-1">✅ Sin Contrato</div>
            <div className="text-white/40 text-xs">Cancelá cuando quieras</div>
          </div>
          <div className="h-8 w-px bg-white/10" />
          <div className="text-center">
            <div className="text-white/60 text-sm mb-1">⚡ Setup Rápido</div>
            <div className="text-white/40 text-xs">24 horas o menos</div>
          </div>
        </motion.div>

        {/* Urgency Message */}
        <motion.div
          className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          <p className="text-orange-300 font-semibold mb-2">
            🔥 Oferta de lanzamiento
          </p>
          <p className="text-white/80">
            Los primeros 100 restaurantes obtienen <span className="text-[#d4af37] font-semibold">3 meses gratis</span> del plan Pro
          </p>
        </motion.div>
      </div>
    </section>
  );
}
