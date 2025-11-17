import { Check } from "lucide-react";
import { Button } from "../ui/button";

export function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "9.99",
      description: "Perfecto para pequeños negocios",
      features: [
        "Hasta 50 productos",
        "5 categorías",
        "10 mesas con QR",
        "Estadísticas básicas",
        "Actualizaciones ilimitadas",
        "Soporte por email"
      ],
      highlighted: false
    },
    {
      name: "Pro",
      price: "24.99",
      description: "Ideal para restaurantes medianos",
      features: [
        "Hasta 200 productos",
        "Categorías ilimitadas",
        "50 mesas con QR",
        "Estadísticas avanzadas",
        "Promociones programadas",
        "Soporte prioritario 24/7",
        "2 temas personalizados",
        "Sin marca de agua"
      ],
      highlighted: true,
      badge: "Más popular"
    },
    {
      name: "Premium",
      price: "49.99",
      description: "Para cadenas y grandes operaciones",
      features: [
        "Productos ilimitados",
        "Categorías ilimitadas",
        "Mesas ilimitadas",
        "Análisis avanzado con IA",
        "Múltiples sucursales",
        "API personalizada",
        "Gerente de cuenta dedicado",
        "Integración con TPV",
        "Marca blanca"
      ],
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
            <span className="text-[#1e40af]">Precios</span>
          </div>
          <h2 className="text-4xl lg:text-5xl mb-4">
            Planes simples y <span className="text-[#1e40af]">transparentes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Elige el plan perfecto para tu negocio. Sin costos ocultos, cancela cuando quieras.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg border-2 transition-all hover:scale-105 ${
                plan.highlighted 
                  ? 'border-[#1e40af] shadow-2xl relative' 
                  : 'border-gray-100'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#1e40af] text-white px-4 py-1.5 rounded-full text-sm">
                    {plan.badge}
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-5xl">${plan.price}</span>
                  <span className="text-gray-500 ml-2">/mes</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full py-6 rounded-xl ${
                  plan.highlighted 
                    ? 'bg-[#1e40af] hover:bg-[#1e3a8a] text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
              >
                Empezar ahora
              </Button>
            </div>
          ))}
        </div>
        
        <p className="text-center text-gray-600 mt-12">
          ¿Necesitas un plan personalizado? <a href="#" className="text-[#1e40af] hover:underline">Contáctanos</a>
        </p>
      </div>
    </section>
  );
}
