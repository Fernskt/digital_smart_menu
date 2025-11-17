import { ArrowRight, Play } from "lucide-react";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-blue-50 rounded-full">
              <span className="text-[#1e40af]">✨ Plataforma SaaS #1 en Argentina</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl tracking-tight">
              La carta digital para restaurantes del <span className="text-[#1e40af]">futuro</span>
            </h1>
            
            <p className="text-xl text-gray-600">
              Moderniza tu negocio con menús digitales accesibles vía QR. 
              Actualiza precios en segundos, muestra fotos profesionales y analiza estadísticas en tiempo real.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-[#1e40af] hover:bg-[#1e3a8a] text-lg px-8 py-6 rounded-xl"
              >
                Crear cuenta gratis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 rounded-xl"
              >
                <Play className="mr-2 w-5 h-5" />
                Ver demo
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div>
                <p className="text-gray-900">+2,500</p>
                <p className="text-sm text-gray-500">Restaurantes activos</p>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div>
                <p className="text-gray-900">4.9/5</p>
                <p className="text-sm text-gray-500">⭐ Valoración promedio</p>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div>
                <p className="text-gray-900">95%</p>
                <p className="text-sm text-gray-500">Satisfacción del cliente</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-3xl opacity-20" />
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1609951734391-b79a50460c6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjByZXN0YXVyYW50JTIwbWVudXxlbnwxfHx8fDE3NjMxNDM3NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Digital menu mockup"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">📊</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Vistas hoy</p>
                    <p className="text-xl">+342</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Actualización</p>
                    <p>2 segundos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
