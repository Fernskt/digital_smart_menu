import { useState } from "react";
import { Search, Plus, Edit2, Eye, EyeOff } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Switch } from "../ui/switch";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  active: boolean;
  views: number;
}

const mockProducts: Product[] = [
  {
    id: 1,
    name: "Bife de Chorizo",
    price: 8500,
    category: "Carnes",
    image: "https://images.unsplash.com/photo-1613492220155-b10b65c64333?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVhayUyMGRpbm5lciUyMHBsYXRlfGVufDF8fHx8MTc2MzA5MTM1M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    active: true,
    views: 342
  },
  {
    id: 2,
    name: "Ravioles de Ricota",
    price: 6200,
    category: "Pastas",
    image: "https://images.unsplash.com/photo-1749169337822-d875fd6f4c9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGl0YWxpYW4lMjBmb29kfGVufDF8fHx8MTc2MzA0NTQzMXww&ixlib=rb-4.1.0&q=80&w=1080",
    active: true,
    views: 298
  },
  {
    id: 3,
    name: "Hamburguesa Deluxe",
    price: 5800,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1627378378955-a3f4e406c5de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjBnb3VybWV0JTIwZm9vZHxlbnwxfHx8fDE3NjMxMDIyMjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    active: true,
    views: 276
  },
  {
    id: 4,
    name: "Tiramisú",
    price: 3200,
    category: "Postres",
    image: "https://images.unsplash.com/photo-1759426016293-1b8be5849a72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0JTIwY2FrZSUyMHN3ZWV0fGVufDF8fHx8MTc2MzA1NzM0MXww&ixlib=rb-4.1.0&q=80&w=1080",
    active: true,
    views: 198
  }
];

export function ProductsList({ onEditProduct }: { onEditProduct: (id: number) => void }) {
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleProductStatus = (id: number) => {
    setProducts(products.map(p => 
      p.id === id ? { ...p, active: !p.active } : p
    ));
  };

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl mb-2">Productos</h1>
          <p className="text-gray-600">Gestiona todos los productos de tu carta</p>
        </div>
        <Button className="bg-[#1e40af] hover:bg-[#1e3a8a]">
          <Plus className="mr-2 w-5 h-5" />
          Agregar Producto
        </Button>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Todos</Button>
          <Button variant="outline">Carnes</Button>
          <Button variant="outline">Pastas</Button>
          <Button variant="outline">Postres</Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div 
            key={product.id}
            className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="aspect-video relative">
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3">
                <Badge 
                  className={product.active ? "bg-green-500" : "bg-gray-500"}
                >
                  {product.active ? "Activo" : "Oculto"}
                </Badge>
              </div>
            </div>
            
            <div className="p-5">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.category}</p>
                </div>
                <p className="text-xl text-[#1e40af]">${product.price.toLocaleString()}</p>
              </div>
              
              <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
                <Eye className="w-4 h-4" />
                <span>{product.views} vistas</span>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <Switch 
                    checked={product.active}
                    onCheckedChange={() => toggleProductStatus(product.id)}
                  />
                  <span className="text-sm text-gray-600">
                    {product.active ? "Visible" : "Oculto"}
                  </span>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => onEditProduct(product.id)}
                >
                  <Edit2 className="w-4 h-4 mr-1" />
                  Editar
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
