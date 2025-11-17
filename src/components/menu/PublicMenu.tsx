import { useState } from "react";
import { ArrowLeft, Search, Star } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  ingredients?: string[];
  isPromo?: boolean;
  discount?: number;
}

const mockMenuItems: MenuItem[] = [
  {
    id: 1,
    name: "Bife de Chorizo",
    description: "400g de carne premium con guarnición de papas rústicas",
    price: 8500,
    image: "https://images.unsplash.com/photo-1613492220155-b10b65c64333?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVhayUyMGRpbm5lciUyMHBsYXRlfGVufDF8fHx8MTc2MzA5MTM1M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Carnes",
    ingredients: ["Bife de chorizo", "Papas rústicas", "Chimichurri", "Ensalada"]
  },
  {
    id: 2,
    name: "Ravioles de Ricota",
    description: "Pasta fresca casera rellena de ricota con salsa de tomate",
    price: 6200,
    image: "https://images.unsplash.com/photo-1749169337822-d875fd6f4c9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGl0YWxpYW4lMjBmb29kfGVufDF8fHx8MTc2MzA0NTQzMXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Pastas",
    ingredients: ["Ravioles", "Ricota", "Salsa de tomate", "Albahaca", "Parmesano"],
    isPromo: true,
    discount: 20
  },
  {
    id: 3,
    name: "Hamburguesa Deluxe",
    description: "Doble carne, queso cheddar, bacon y vegetales frescos",
    price: 5800,
    image: "https://images.unsplash.com/photo-1627378378955-a3f4e406c5de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjBnb3VybWV0JTIwZm9vZHxlbnwxfHx8fDE3NjMxMDIyMjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Burgers",
    ingredients: ["Doble medallón", "Cheddar", "Bacon", "Lechuga", "Tomate", "Cebolla"]
  },
  {
    id: 4,
    name: "Tiramisú",
    description: "Clásico postre italiano con café y mascarpone",
    price: 3200,
    image: "https://images.unsplash.com/photo-1759426016293-1b8be5849a72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0JTIwY2FrZSUyMHN3ZWV0fGVufDF8fHx8MTc2MzA1NzM0MXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Postres",
    ingredients: ["Mascarpone", "Café", "Cacao", "Vainillas"],
    isPromo: true,
    discount: 15
  }
];

const categories = ["Todos", "Carnes", "Pastas", "Burgers", "Postres", "Bebidas"];

interface PublicMenuProps {
  theme?: 'light' | 'dark';
  restaurantName?: string;
}

export function PublicMenu({ theme = 'light', restaurantName = "La Trattoria" }: PublicMenuProps) {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = mockMenuItems.filter(item => {
    const matchesCategory = selectedCategory === "Todos" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const isDark = theme === 'dark';

  if (selectedItem) {
    return (
      <div 
        className={`min-h-screen ${
          isDark 
            ? 'bg-gray-900 text-white' 
            : 'bg-white text-gray-900'
        }`}
      >
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className={`sticky top-0 z-10 ${isDark ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-lg border-b ${isDark ? 'border-gray-800' : 'border-gray-200'} p-4`}>
            <button 
              onClick={() => setSelectedItem(null)}
              className={`flex items-center gap-2 ${isDark ? 'text-amber-500' : 'text-[#1e40af]'}`}
            >
              <ArrowLeft className="w-5 h-5" />
              Volver
            </button>
          </div>

          {/* Item Detail */}
          <div className="p-6 space-y-6">
            <div className="aspect-video rounded-2xl overflow-hidden">
              <ImageWithFallback
                src={selectedItem.image}
                alt={selectedItem.name}
                className="w-full h-full object-cover"
              />
            </div>

            {selectedItem.isPromo && (
              <div className="flex gap-2">
                <Badge className="bg-orange-500 text-white">
                  🔥 PROMO -{selectedItem.discount}%
                </Badge>
              </div>
            )}

            <div>
              <h1 className="text-3xl mb-3">{selectedItem.name}</h1>
              <p className={`text-lg mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {selectedItem.description}
              </p>
              
              <div className="flex items-baseline gap-3">
                {selectedItem.isPromo && selectedItem.discount && (
                  <span className={`text-xl line-through ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                    ${selectedItem.price.toLocaleString()}
                  </span>
                )}
                <span className={`text-4xl ${isDark ? 'text-amber-500' : 'text-[#1e40af]'}`}>
                  ${selectedItem.isPromo && selectedItem.discount 
                    ? (selectedItem.price * (1 - selectedItem.discount / 100)).toLocaleString()
                    : selectedItem.price.toLocaleString()
                  }
                </span>
              </div>
            </div>

            {selectedItem.ingredients && (
              <div className={`p-6 rounded-2xl ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <h3 className="mb-3">Ingredientes</h3>
                <ul className="space-y-2">
                  {selectedItem.ingredients.map((ingredient, idx) => (
                    <li key={idx} className={`flex items-center gap-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-amber-500' : 'bg-[#1e40af]'}`} />
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`min-h-screen ${
        isDark 
          ? 'bg-gray-900 text-white' 
          : 'bg-white text-gray-900'
      }`}
    >
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className={`sticky top-0 z-10 ${isDark ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-lg border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
          <div className="p-6 text-center">
            <div className={`w-16 h-16 mx-auto mb-3 rounded-full ${isDark ? 'bg-amber-600' : 'bg-[#1e40af]'} flex items-center justify-center text-white`}>
              <span className="text-2xl">🍽️</span>
            </div>
            <h1 className="text-2xl mb-1">{restaurantName}</h1>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Nuestra carta digital
            </p>
          </div>

          {/* Search */}
          <div className="px-6 pb-4">
            <div className="relative">
              <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} />
              <Input
                placeholder="Buscar platos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`pl-10 ${
                  isDark 
                    ? 'bg-gray-800 border-gray-700 text-white placeholder:text-gray-500' 
                    : 'bg-gray-50'
                }`}
              />
            </div>
          </div>

          {/* Categories */}
          <div className="px-6 pb-4">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                    selectedCategory === category
                      ? isDark
                        ? 'bg-amber-600 text-white'
                        : 'bg-[#1e40af] text-white'
                      : isDark
                        ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="p-6 space-y-4">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                No se encontraron productos
              </p>
            </div>
          ) : (
            filteredItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`w-full text-left rounded-2xl overflow-hidden transition-all hover:scale-[1.02] ${
                  isDark 
                    ? 'bg-gray-800 hover:bg-gray-750' 
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="flex gap-4 p-4">
                  <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="truncate">{item.name}</h3>
                      {item.isPromo && (
                        <Badge className="bg-orange-500 text-white text-xs flex-shrink-0">
                          -{item.discount}%
                        </Badge>
                      )}
                    </div>
                    <p className={`text-sm line-clamp-2 mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {item.description}
                    </p>
                    <div className="flex items-baseline gap-2">
                      {item.isPromo && item.discount && (
                        <span className={`text-sm line-through ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                          ${item.price.toLocaleString()}
                        </span>
                      )}
                      <span className={`${isDark ? 'text-amber-500' : 'text-[#1e40af]'}`}>
                        ${item.isPromo && item.discount 
                          ? (item.price * (1 - item.discount / 100)).toLocaleString()
                          : item.price.toLocaleString()
                        }
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            ))
          )}
        </div>

        {/* Footer */}
        <div className={`mt-12 p-6 text-center border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
          <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            Powered by Digital Smart Menu
          </p>
        </div>
      </div>
    </div>
  );
}
