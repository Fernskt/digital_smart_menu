import { useState } from "react";
import { ChevronRight, ChevronLeft, Check } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

interface OnboardingFlowProps {
  onComplete: (data: any) => void;
}

export function OnboardingFlow({ onComplete }: OnboardingFlowProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessType: "",
    name: "",
    address: "",
    theme: "light",
    categories: [] as string[]
  });

  const businessTypes = [
    { id: "restaurant", name: "Restaurante", icon: "🍽️", description: "Restaurante tradicional o gourmet" },
    { id: "bar", name: "Bar", icon: "🍺", description: "Bar, pub o cervecería" },
    { id: "cafe", name: "Cafetería", icon: "☕", description: "Café, confitería o panadería" },
    { id: "rotiseria", name: "Rotisería", icon: "🍗", description: "Comida para llevar" }
  ];

  const defaultCategories = [
    "Entradas", "Principales", "Pastas", "Carnes", "Pescados", 
    "Ensaladas", "Postres", "Bebidas", "Vinos", "Cervezas"
  ];

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
    else onComplete(formData);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const toggleCategory = (category: string) => {
    setFormData({
      ...formData,
      categories: formData.categories.includes(category)
        ? formData.categories.filter(c => c !== category)
        : [...formData.categories, category]
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-3xl w-full">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center flex-1">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                    step >= s ? 'bg-[#1e40af] text-white' : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {step > s ? <Check className="w-5 h-5" /> : s}
                </div>
                {s < 4 && (
                  <div className={`flex-1 h-1 mx-2 transition-colors ${
                    step > s ? 'bg-[#1e40af]' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Tipo</span>
            <span>Información</span>
            <span>Tema</span>
            <span>Categorías</span>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          {/* Step 1: Business Type */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl mb-2">¿Qué tipo de negocio tienes?</h2>
                <p className="text-gray-600">Selecciona el que mejor describa tu negocio</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {businessTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setFormData({ ...formData, businessType: type.id })}
                    className={`p-6 rounded-2xl border-2 transition-all text-left hover:scale-105 ${
                      formData.businessType === type.id
                        ? 'border-[#1e40af] bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-4xl mb-3">{type.icon}</div>
                    <h3 className="text-xl mb-1">{type.name}</h3>
                    <p className="text-sm text-gray-600">{type.description}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Basic Information */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl mb-2">Información básica</h2>
                <p className="text-gray-600">Cuéntanos más sobre tu negocio</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Nombre del negocio *</Label>
                  <Input
                    id="name"
                    placeholder="Ej: La Trattoria"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="address">Dirección</Label>
                  <Input
                    id="address"
                    placeholder="Ej: Av. Corrientes 1234, CABA"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="mt-2"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Theme Selection */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl mb-2">Elige el tema visual</h2>
                <p className="text-gray-600">Selecciona cómo se verá tu carta digital</p>
              </div>
              
              <RadioGroup 
                value={formData.theme}
                onValueChange={(value) => setFormData({ ...formData, theme: value })}
                className="space-y-4"
              >
                <div 
                  className={`border-2 rounded-2xl p-6 cursor-pointer transition-all ${
                    formData.theme === 'light' ? 'border-[#1e40af] bg-blue-50' : 'border-gray-200'
                  }`}
                  onClick={() => setFormData({ ...formData, theme: 'light' })}
                >
                  <div className="flex items-center gap-4">
                    <RadioGroupItem value="light" id="light" />
                    <div className="flex-1">
                      <Label htmlFor="light" className="cursor-pointer">
                        <div className="flex items-center gap-4 mb-3">
                          <span className="text-2xl">☀️</span>
                          <h3 className="text-xl">Light Gourmet</h3>
                        </div>
                        <p className="text-sm text-gray-600">
                          Fondo blanco con acentos dorados. Perfecto para restaurantes elegantes.
                        </p>
                        <div className="flex gap-2 mt-3">
                          <div className="w-8 h-8 bg-white border border-gray-300 rounded"></div>
                          <div className="w-8 h-8 bg-amber-100 rounded"></div>
                          <div className="w-8 h-8 bg-gray-100 rounded"></div>
                        </div>
                      </Label>
                    </div>
                  </div>
                </div>
                
                <div 
                  className={`border-2 rounded-2xl p-6 cursor-pointer transition-all ${
                    formData.theme === 'dark' ? 'border-[#1e40af] bg-blue-50' : 'border-gray-200'
                  }`}
                  onClick={() => setFormData({ ...formData, theme: 'dark' })}
                >
                  <div className="flex items-center gap-4">
                    <RadioGroupItem value="dark" id="dark" />
                    <div className="flex-1">
                      <Label htmlFor="dark" className="cursor-pointer">
                        <div className="flex items-center gap-4 mb-3">
                          <span className="text-2xl">🌙</span>
                          <h3 className="text-xl">Dark Bar + Bistro</h3>
                        </div>
                        <p className="text-sm text-gray-600">
                          Fondo oscuro con acentos cobre. Ideal para bares y ambientes nocturnos.
                        </p>
                        <div className="flex gap-2 mt-3">
                          <div className="w-8 h-8 bg-gray-900 rounded"></div>
                          <div className="w-8 h-8 bg-gray-700 rounded"></div>
                          <div className="w-8 h-8 bg-amber-600 rounded"></div>
                        </div>
                      </Label>
                    </div>
                  </div>
                </div>
              </RadioGroup>
            </div>
          )}

          {/* Step 4: Categories */}
          {step === 4 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl mb-2">Categorías iniciales</h2>
                <p className="text-gray-600">Selecciona las categorías que usarás (puedes cambiarlas después)</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {defaultCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => toggleCategory(category)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      formData.categories.includes(category)
                        ? 'border-[#1e40af] bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{category}</span>
                      {formData.categories.includes(category) && (
                        <Check className="w-5 h-5 text-[#1e40af]" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
              
              <p className="text-sm text-gray-600 text-center">
                {formData.categories.length} categorías seleccionadas
              </p>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-8 border-t border-gray-200">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={step === 1}
            >
              <ChevronLeft className="mr-2 w-5 h-5" />
              Anterior
            </Button>
            
            <Button
              onClick={nextStep}
              className="bg-[#1e40af] hover:bg-[#1e3a8a]"
              disabled={
                (step === 1 && !formData.businessType) ||
                (step === 2 && !formData.name)
              }
            >
              {step === 4 ? 'Finalizar' : 'Siguiente'}
              {step < 4 && <ChevronRight className="ml-2 w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
