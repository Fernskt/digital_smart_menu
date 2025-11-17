import { Store, Upload, QrCode, TrendingUp } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      icon: Store,
      title: "1. Crear restaurante",
      description: "Registra tu negocio en menos de 2 minutos. Agrega tu logo y personaliza los colores.",
      color: "bg-blue-500"
    },
    {
      icon: Upload,
      title: "2. Cargar productos",
      description: "Sube tus platos con fotos, precios y descripciones. Organiza por categorías.",
      color: "bg-purple-500"
    },
    {
      icon: QrCode,
      title: "3. Imprimir QR",
      description: "Descarga los códigos QR para cada mesa. Imprime y coloca en tu restaurante.",
      color: "bg-green-500"
    },
    {
      icon: TrendingUp,
      title: "4. Ver estadísticas",
      description: "Analiza el comportamiento de tus clientes y optimiza tu carta en base a datos reales.",
      color: "bg-orange-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-50 rounded-full mb-4">
            <span className="text-[#1e40af]">Cómo funciona</span>
          </div>
          <h2 className="text-4xl lg:text-5xl mb-4">
            Configura tu carta digital en <span className="text-[#1e40af]">minutos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un proceso simple y rápido que transforma tu restaurante
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-gray-300 to-transparent" />
                )}
                
                <div className="text-center">
                  <div className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
