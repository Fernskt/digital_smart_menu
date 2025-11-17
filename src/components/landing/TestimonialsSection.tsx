import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const testimonials = [
  {
    id: 1,
    name: "Carlos Menéndez",
    role: "Dueño",
    restaurant: "Parrilla Don Carlos",
    image: "https://images.unsplash.com/photo-1647483684830-7ddde27dcf4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwb3duZXIlMjBzbWlsaW5nfGVufDF8fHx8MTc2MzM1MTQ1NXww&ixlib=rb-4.1.0&q=80&w=400",
    quote: "Dejé de gastar $50.000 mensuales en imprimir cartas. Ahora cambio los precios cuando quiero y mis clientes están felices con el QR.",
    rating: 5
  },
  {
    id: 2,
    name: "María Fernández",
    role: "Chef & Propietaria",
    restaurant: "Café La Esquina",
    image: "https://images.unsplash.com/photo-1758887261865-a2b89c0f7ac5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwb3duZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjMzOTkwNDl8MA&ixlib=rb-4.1.0&q=80&w=400",
    quote: "La mejor inversión que hice. Actualizo el menú del día en 2 minutos desde mi celular. Mis clientes adoran las fotos profesionales.",
    rating: 5
  },
  {
    id: 3,
    name: "Roberto Díaz",
    role: "Gerente General",
    restaurant: "Sushi Premium",
    image: "https://images.unsplash.com/photo-1647483684830-7ddde27dcf4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwb3duZXIlMjBzbWlsaW5nfGVufDF8fHx8MTc2MzM1MTQ1NXww&ixlib=rb-4.1.0&q=80&w=400",
    quote: "Tengo 3 sucursales y manejo todo desde un solo lugar. El tema Dark Gourmet es exactamente lo que necesitábamos para nuestro concepto premium.",
    rating: 5
  }
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-black via-[#0d0d0d] to-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#d4af37_1px,transparent_1px),linear-gradient(to_bottom,#d4af37_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#d4af37]/20 to-[#1e40af]/20 border border-[#d4af37]/30 text-[#d4af37] text-sm inline-block mb-4">
            Historias reales
          </span>
          <h2 className="text-4xl md:text-6xl text-white font-serif mb-6">
            Lo que Dicen Nuestros{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#b87333]">
              Clientes
            </span>
          </h2>
          <p className="text-xl text-white/70">
            Restaurantes que ya transformaron su operación
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="p-12 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-sm">
                {/* Quote Icon */}
                <div className="absolute top-8 right-8 opacity-10">
                  <Quote className="w-24 h-24 text-[#d4af37]" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-[#d4af37] fill-[#d4af37]" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-2xl md:text-3xl text-white font-serif mb-8 leading-relaxed">
                    "{testimonials[current].quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-[#d4af37]/50">
                      <ImageWithFallback
                        src={testimonials[current].image}
                        alt={testimonials[current].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-lg">
                        {testimonials[current].name}
                      </div>
                      <div className="text-white/60">
                        {testimonials[current].role} • {testimonials[current].restaurant}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={prev}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#d4af37]/50 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === current 
                      ? 'w-8 bg-[#d4af37]' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#d4af37]/50 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </motion.button>
          </div>

          {/* Stats Below */}
          <motion.div
            className="grid grid-cols-3 gap-8 mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {[
              { number: "500+", label: "Restaurantes Activos" },
              { number: "1M+", label: "Clientes Atendidos" },
              { number: "4.9★", label: "Rating Promedio" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl text-[#d4af37] font-semibold mb-2">
                  {stat.number}
                </div>
                <div className="text-white/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
