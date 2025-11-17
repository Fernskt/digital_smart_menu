import { motion } from "motion/react";
import { Zap, Printer, QrCode, Percent, Camera, PackageX } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Actualizá precios en 3 segundos",
    description: "Cambios instantáneos. Sin esperas, sin diseñadores, sin IT.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Printer,
    title: "Olvidate de imprimir cartas",
    description: "Ahorrá tiempo y dinero. Sin vueltas a la imprenta.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: QrCode,
    title: "QR automático para cada mesa",
    description: "Un código único por mesa. Imprimí una sola vez.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Percent,
    title: "Promos del día en un clic",
    description: "Activá y desactivá ofertas según tu stock disponible.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Camera,
    title: "Fotos profesionales sin diseñador",
    description: "Subí tus fotos y se ven increíbles automáticamente.",
    color: "from-red-500 to-rose-500"
  },
  {
    icon: PackageX,
    title: "Modo sin stock instantáneo",
    description: "Ocultá productos agotados con un solo toque.",
    color: "from-indigo-500 to-violet-500"
  }
];

export function BenefitsSection() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-black via-[#0d0d0d] to-black overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#d4af37]/20 to-[#1e40af]/20 border border-[#d4af37]/30 text-[#d4af37] text-sm">
              Lo que realmente importa
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl text-white font-serif mb-5">
            Beneficios que <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#b87333]">Transforman</span> tu Negocio
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            Resolvé los dolores de cabeza diarios de gestionar un restaurante con tecnología que funciona
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 overflow-hidden group-hover:border-white/20 h-full">
                  {/* Hover Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-2xl`} />
                  
                  {/* Icon */}
                  <motion.div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${benefit.color} mb-6 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl text-white font-serif mb-3 group-hover:text-[#d4af37] transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#d4af37]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
          <p className="text-white/60 mb-4">¿Listo para simplificar tu operación?</p>
          <motion.button
            onClick={() => {
              const section = document.getElementById("demo");
              if (section) {
                section.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#d4af37] to-[#b87333] text-black font-semibold shadow-[0_0_40px_rgba(212,175,55,0.3)] hover:shadow-[0_0_60px_rgba(212,175,55,0.5)] transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Demo Interactiva
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
