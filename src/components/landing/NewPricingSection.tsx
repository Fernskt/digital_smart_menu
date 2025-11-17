import { motion } from "motion/react";
import { Check, Sparkles, Zap, Crown } from "lucide-react";
import { Button } from "../ui/button";

const plans = [
  {
    name: "Starter",
    icon: Zap,
    price: 10000,
    description: "Perfecto para comenzar",
    color: "from-blue-500 to-cyan-500",
    features: [
      "1 sucursal",
      "100 productos",
      "QR ilimitados",
      "2 temas incluidos",
      "Soporte por email",
      "Actualizaciones en tiempo real"
    ],
    popular: false
  },
  {
    name: "Pro",
    icon: Sparkles,
    price: 18000,
    description: "El más elegido",
    color: "from-[#d4af37] to-[#b87333]",
    features: [
      "3 sucursales",
      "500 productos",
      "QR ilimitados",
      "Todos los temas premium",
      "Promos avanzadas",
      "Estadísticas completas",
      "Soporte prioritario",
      "Integración WhatsApp"
    ],
    popular: true
  },
  {
    name: "Premium",
    icon: Crown,
    price: 30000,
    description: "Para cadenas de restaurantes",
    color: "from-purple-500 to-pink-500",
    features: [
      "Sucursales ilimitadas",
      "Productos ilimitados",
      "QR ilimitados",
      "Temas personalizados",
      "Multi-idioma",
      "Reportes PDF automáticos",
      "Integración con sistemas",
      "Gerente de cuenta dedicado"
    ],
    popular: false
  }
];

export function NewPricingSection() {
  return (
    <section className="relative py-20 md:py-28 bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#1e40af]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
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
            Planes transparentes
          </span>
          <h2 className="text-4xl md:text-6xl text-white font-serif mb-6">
            Un Precio, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#b87333]">Sin Sorpresas</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Todo incluido. Sin costos ocultos. Cancelá cuando quieras.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative group"
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#d4af37] to-[#b87333] text-black text-sm font-semibold shadow-[0_0_30px_rgba(212,175,55,0.5)]">
                      Más Popular
                    </div>
                  </div>
                )}

                <div className={`relative h-full p-8 rounded-3xl backdrop-blur-sm border-2 transition-all duration-500 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-white/15 to-white/5 border-[#d4af37]/50 shadow-[0_0_60px_rgba(212,175,55,0.3)] scale-105' 
                    : 'bg-gradient-to-br from-white/10 to-white/5 border-white/10 hover:border-white/30'
                }`}>
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${plan.color} mb-6 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-3xl text-white font-serif mb-2">{plan.name}</h3>
                  <p className="text-white/60 mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl text-white font-semibold">
                        ${plan.price.toLocaleString()}
                      </span>
                      <span className="text-white/60">/mes</span>
                    </div>
                    <p className="text-white/50 text-sm mt-2">+ IVA</p>
                  </div>

                  {/* CTA */}
                  <Button
                    className={`w-full mb-8 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-[#d4af37] to-[#b87333] hover:from-[#b87333] hover:to-[#d4af37] text-black shadow-[0_0_30px_rgba(212,175,55,0.3)]'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                    }`}
                    size="lg"
                  >
                    {plan.popular ? 'Comenzar Ahora' : 'Elegir Plan'}
                  </Button>

                  {/* Features */}
                  <div className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className={`p-1 rounded-full bg-gradient-to-br ${plan.color} flex-shrink-0 mt-0.5`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-white/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Glow Effect on Hover */}
                  <div className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Money Back Guarantee */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block p-8 rounded-3xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                <Check className="w-6 h-6 text-green-400" />
              </div>
              <h4 className="text-2xl text-white font-serif">Garantía de 30 días</h4>
            </div>
            <p className="text-white/70 max-w-2xl">
              Si no estás 100% satisfecho en los primeros 30 días, te devolvemos tu dinero. Sin preguntas.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
