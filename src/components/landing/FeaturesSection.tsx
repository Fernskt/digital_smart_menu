import { Zap, QrCode, ImageIcon, PackageX, BarChart3, Clock } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: "Actualización instantánea",
      description: "Cambia precios y productos en 2 segundos. Sin reimprimir menús físicos nunca más.",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: QrCode,
      title: "QR para cada mesa",
      description: "Genera códigos QR únicos para cada mesa y sector de tu restaurante.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: ImageIcon,
      title: "Fotos profesionales",
      description: "Muestra tus platos con imágenes de alta calidad que aumentan las ventas.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: PackageX,
      title: "Control de stock",
      description: "Marca productos sin stock automáticamente. Evita decepciones.",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: BarChart3,
      title: "Estadísticas en tiempo real",
      description: "Analiza qué productos son más vistos y populares entre tus clientes.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Clock,
      title: "Promociones programadas",
      description: "Configura promociones por horario, día de la semana o temporada.",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-50 rounded-full mb-4">
            <span className="text-[#1e40af]">Características</span>
          </div>
          <h2 className="text-4xl lg:text-5xl mb-4">
            Todo lo que necesitas para <span className="text-[#1e40af]">digitalizar</span> tu negocio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una plataforma completa con todas las herramientas que necesitas para modernizar tu restaurante
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-6`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
