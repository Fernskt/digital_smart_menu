import { motion } from "motion/react";
import { 
  BarChart3, 
  Building2, 
  Users, 
  MessageSquare, 
  Package, 
  Palette, 
  Gauge,
  Shield
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Dashboard con Estadísticas",
    description: "Productos más vistos, horarios pico, performance de promos y reportes completos.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Building2,
    title: "Multi-sucursales",
    description: "Gestioná múltiples locales desde una sola cuenta. Cada uno con su carta personalizada.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Users,
    title: "Roles para Empleados",
    description: "Asigná permisos específicos: admin, editor, visualizador. Control total de accesos.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: MessageSquare,
    title: "Integración WhatsApp",
    description: "Botón directo a WhatsApp desde la carta. Tus clientes pueden consultar o pedir.",
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    icon: Package,
    title: "Gestión de Stock",
    description: "Ocultá productos sin stock automáticamente. Activalos cuando vuelvan.",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Palette,
    title: "Temas Personalizables",
    description: "Colores de marca, logos, fuentes. Tu carta refleja tu identidad visual.",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    icon: Gauge,
    title: "Hosting Incluido",
    description: "Servidor ultra-rápido, CDN global, uptime 99.9%. Todo incluido sin costos extras.",
    gradient: "from-indigo-500 to-blue-500"
  },
  {
    icon: Shield,
    title: "Seguridad Premium",
    description: "SSL certificado, backups automáticos diarios, protección contra ataques.",
    gradient: "from-slate-500 to-gray-500"
  }
];

export function PowerFeaturesSection() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-black via-[#0d0d0d] to-black overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#1e40af]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#d4af37]/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#d4af37]/20 to-[#1e40af]/20 border border-[#d4af37]/30 text-[#d4af37] text-sm inline-block mb-4">
            Características poderosas
          </span>
          <h2 className="text-4xl md:text-6xl text-white font-serif mb-6">
            Todo lo que Necesitás, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#b87333]">
              en un Solo Lugar
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Funcionalidades empresariales para gestionar tu negocio gastronómico como un profesional
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative"
              >
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-500 h-full">
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg text-white font-semibold mb-2 group-hover:text-[#d4af37] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover Glow */}
                  <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
            <p className="text-white/90 mb-2">
              ¿Necesitás una característica específica?
            </p>
            <p className="text-white/60 text-sm">
              Hablanos y la desarrollamos para vos
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
