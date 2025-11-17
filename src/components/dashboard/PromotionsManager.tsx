import { useState } from "react";
import { Plus, Tag, Calendar, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Switch } from "../ui/switch";

interface Promotion {
  id: number;
  name: string;
  discount: number;
  startDate: string;
  endDate: string;
  active: boolean;
  products: string[];
}

const mockPromotions: Promotion[] = [
  {
    id: 1,
    name: "Happy Hour",
    discount: 30,
    startDate: "2025-11-14",
    endDate: "2025-11-20",
    active: true,
    products: ["Cerveza Artesanal", "Gin Tonic", "Mojito"]
  },
  {
    id: 2,
    name: "Menú Ejecutivo",
    discount: 20,
    startDate: "2025-11-14",
    endDate: "2025-11-30",
    active: true,
    products: ["Entrada + Principal + Postre"]
  },
  {
    id: 3,
    name: "2x1 Postres",
    discount: 50,
    startDate: "2025-11-10",
    endDate: "2025-11-15",
    active: false,
    products: ["Tiramisú", "Brownie", "Cheesecake"]
  }
];

export function PromotionsManager() {
  const [promotions, setPromotions] = useState<Promotion[]>(mockPromotions);

  const togglePromotion = (id: number) => {
    setPromotions(promotions.map(p =>
      p.id === id ? { ...p, active: !p.active } : p
    ));
  };

  const deletePromotion = (id: number) => {
    setPromotions(promotions.filter(p => p.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl mb-2">Promociones</h1>
          <p className="text-gray-600">Gestiona descuentos y ofertas especiales</p>
        </div>
        <Button className="bg-[#1e40af] hover:bg-[#1e3a8a]">
          <Plus className="mr-2 w-5 h-5" />
          Nueva Promoción
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {promotions.map((promo) => (
          <div
            key={promo.id}
            className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Tag className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl mb-1">{promo.name}</h3>
                  <Badge 
                    className={promo.active ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}
                  >
                    {promo.active ? "Activa" : "Inactiva"}
                  </Badge>
                </div>
              </div>
              
              <div className="text-3xl text-orange-600">
                -{promo.discount}%
              </div>
            </div>
            
            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar className="w-4 h-4" />
                <span>
                  {new Date(promo.startDate).toLocaleDateString('es-AR')} - {new Date(promo.endDate).toLocaleDateString('es-AR')}
                </span>
              </div>
              
              <div>
                <p className="text-sm text-gray-600 mb-2">Productos incluidos:</p>
                <div className="flex flex-wrap gap-2">
                  {promo.products.map((product, idx) => (
                    <Badge key={idx} variant="outline">
                      {product}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <Switch
                  checked={promo.active}
                  onCheckedChange={() => togglePromotion(promo.id)}
                />
                <span className="text-sm text-gray-600">
                  {promo.active ? "Desactivar" : "Activar"}
                </span>
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => deletePromotion(promo.id)}
                className="text-red-600 hover:text-red-700 hover:bg-red-50"
              >
                <Trash2 className="w-4 h-4 mr-1" />
                Eliminar
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
        <h4 className="text-orange-700 mb-2">🎯 Crea promociones efectivas</h4>
        <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
          <li>Las promociones destacadas aparecen primero en la carta</li>
          <li>Programa promociones por horarios (ej: Happy Hour 18-21hs)</li>
          <li>Combina productos para crear ofertas especiales</li>
          <li>Analiza qué promociones generan más conversiones</li>
        </ul>
      </div>
    </div>
  );
}
