import { motion } from "motion/react";
import { UserPlus, Upload, QrCode, Zap } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Crear tu cuenta",
    description: "Registrate en 2 minutos. Sin tarjeta de crédito requerida para la demo.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    number: "02",
    icon: Upload,
    title: "Cargar tus productos",
    description: "Subí tu menú y fotos. Nuestro sistema las optimiza automáticamente.",
    color: "from-purple-500 to-pink-500"
  },
  {
    number: "03",
    icon: QrCode,
    title: "Imprimir tus QR",
    description: "Descargá los códigos QR de cada mesa e imprimí una sola vez.",
    color: "from-green-500 to-emerald-500"
  },
  {
    number: "04",
    icon: Zap,
    title: "Actualizar en segundos",
    description: "Desde tu celular o PC, hacé cambios que se ven al instante.",
    color: "from-orange-500 to-red-500"
  }
];

export function HowItWorksNew() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-black via-[#0d0d0d] to-black overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#d4af37]/20 to-[#1e40af]/20 border border-[#d4af37]/30 text-[#d4af37] text-sm inline-block mb-4">
            Súper simple
          </span>
          <h2 className="text-4xl md:text-6xl text-white font-serif mb-6">
            ¿Cómo <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#b87333]">Funciona</span>?
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            4 pasos simples para tener tu carta digital funcionando
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative group"
              >
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-white/30 backdrop-blur-sm transition-all duration-500 h-full">
                  {/* Step Number */}
                  <div className="absolute top-6 right-6 text-6xl font-serif text-white/5 group-hover:text-white/10 transition-colors">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <motion.div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${step.color} mb-6 shadow-lg relative z-10`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl text-white font-serif mb-3 relative z-10">
                    {step.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed relative z-10">
                    {step.description}
                  </p>

                  {/* Connection Line (not on last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-[#d4af37]/50 to-transparent" />
                  )}

                  {/* Hover Glow */}
                  <div className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-white/60 mb-6 text-lg">
            ¿Necesitás ayuda para comenzar?
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#d4af37] to-[#b87333] text-black font-semibold shadow-[0_0_40px_rgba(212,175,55,0.3)] hover:shadow-[0_0_60px_rgba(212,175,55,0.5)] transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Agendar Demo Personal
            </motion.button>
            <motion.button
              className="px-8 py-4 rounded-full bg-white/5 border border-white/20 text-white hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Video Tutorial
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
