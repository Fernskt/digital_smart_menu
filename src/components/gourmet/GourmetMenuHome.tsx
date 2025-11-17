import { useState } from "react";
import { Search } from "lucide-react";
import { GourmetBackground } from "./GourmetBackground";
import { GourmetHeader } from "./GourmetHeader";
import { GourmetFooter } from "./GourmetFooter";
import { CategoryChip } from "./CategoryChip";
import { ProductCard } from "./ProductCard";
import { PromoBadge } from "./PromoBadge";
import { Input } from "../ui/input";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  recommended?: boolean;
  spicy?: number;
  isPromo?: boolean;
}

const mockMenuItems: MenuItem[] = [
  {
    id: 1,
    name: "Wagyu Beef Ribeye",
    description: "Premium wagyu ribeye 400g con reducción de vino tinto, espárragos salteados y papas gratinadas",
    price: 18500,
    image: "https://images.unsplash.com/photo-1676300185292-e23bb3db50fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwc3RlYWslMjBkaXNofGVufDF8fHx8MTc2MzM1Mjc5OHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Carnes",
    recommended: true,
    spicy: 0
  },
  {
    id: 2,
    name: "Salmón Atlántico",
    description: "Filet de salmón a la parrilla con costra de hierbas, risotto de azafrán y vegetales de temporada",
    price: 14200,
    image: "https://images.unsplash.com/photo-1682377651820-0234f2abec85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nJTIwc2VhZm9vZHxlbnwxfHx8fDE3NjMzOTc5NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Pescados",
    spicy: 0,
    isPromo: true
  },
  {
    id: 3,
    name: "Tartar de Atún Rojo",
    description: "Atún rojo en tartar con aguacate, ponzu y crujiente de sésamo negro",
    price: 9800,
    image: "https://images.unsplash.com/photo-1760445529441-8c18f2bd2e81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwYXBwZXRpemVyfGVufDF8fHx8MTc2MzM2NTg3MHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Entradas",
    recommended: true,
    spicy: 1
  },
  {
    id: 4,
    name: "Sushi Premium Selection",
    description: "15 piezas de sushi premium: nigiri de salmón, atún, langostino y rolls especiales",
    price: 12500,
    image: "https://images.unsplash.com/photo-1489420716170-60870f8d5bd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwc3VzaGklMjBwbGF0dGVyfGVufDF8fHx8MTc2MzM5Nzk2NHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Sushi",
    spicy: 2
  },
  {
    id: 5,
    name: "Tarta de Chocolate Valrhona",
    description: "Mousse de chocolate 70% con crema inglesa de vainilla y oro comestible",
    price: 5200,
    image: "https://images.unsplash.com/photo-1741965134280-9094486efd82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZGVzc2VydCUyMHBsYXRpbmd8ZW58MXx8fHwxNzYzMzEwNDU2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Postres",
    recommended: true,
    spicy: 0
  },
  {
    id: 6,
    name: "Vino Malbec Reserva",
    description: "Catena Zapata Malbec Argentino 750ml - Año 2019",
    price: 8900,
    image: "https://images.unsplash.com/photo-1561668137-58955d51a5fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwd2luZSUyMGdsYXNzfGVufDF8fHx8MTc2MzM5Nzk2NHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Vinos",
    spicy: 0
  }
];

const categories = ["Todos", "Entradas", "Carnes", "Pescados", "Sushi", "Postres", "Vinos"];

interface GourmetMenuHomeProps {
  restaurantName?: string;
  onProductClick?: (product: MenuItem) => void;
}

export function GourmetMenuHome({ 
  restaurantName = "Le Gourmet", 
  onProductClick 
}: GourmetMenuHomeProps) {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = mockMenuItems.filter(item => {
    const matchesCategory = selectedCategory === "Todos" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const promoItems = filteredItems.filter(item => item.isPromo);
  const regularItems = filteredItems.filter(item => !item.isPromo);

  return (
    <GourmetBackground variant="wood">
      <GourmetHeader restaurantName={restaurantName} />
      
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Search - Centered */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-full max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <Input
              placeholder="Buscar en nuestra carta..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-14 bg-white/5 backdrop-blur-sm border-white/20 text-white placeholder:text-white/40 focus:border-[#d4af37]/50 focus:ring-[#d4af37]/20 rounded-2xl"
            />
          </div>
        </div>

        {/* Categories - Centered */}
        <div className="mb-12 flex justify-center">
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((category) => (
              <CategoryChip
                key={category}
                label={category}
                active={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
                size="medium"
              />
            ))}
          </div>
        </div>

        {/* Promo Section - Centered */}
        {promoItems.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <PromoBadge text="Promociones especiales" />
            </div>
            
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl w-full">
                {promoItems.map((item) => (
                  <ProductCard
                    key={item.id}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                    variant="featured"
                    recommended={item.recommended}
                    spicy={item.spicy}
                    onClick={() => onProductClick?.(item)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Menu Items - Mobile: Single Column Centered */}
        <div className="md:hidden space-y-4 flex flex-col items-center">
          {regularItems.map((item) => (
            <div key={item.id} className="w-full max-w-md">
              <ProductCard
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                variant="compact"
                recommended={item.recommended}
                spicy={item.spicy}
                onClick={() => onProductClick?.(item)}
              />
            </div>
          ))}
        </div>

        {/* Menu Items - Tablet/Desktop: Two Columns Centered */}
        <div className="hidden md:flex justify-center">
          <div className="grid grid-cols-2 gap-6 lg:gap-8 max-w-5xl w-full">
            {regularItems.map((item) => (
              <ProductCard
                key={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                variant="default"
                recommended={item.recommended}
                spicy={item.spicy}
                onClick={() => onProductClick?.(item)}
              />
            ))}
          </div>
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/60 text-lg">No se encontraron productos</p>
          </div>
        )}
      </div>

      <GourmetFooter />
    </GourmetBackground>
  );
}
