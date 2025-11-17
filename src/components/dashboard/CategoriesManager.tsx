import { useState } from "react";
import { GripVertical, Plus, Edit2, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";

interface Category {
  id: number;
  name: string;
  productCount: number;
  order: number;
}

const mockCategories: Category[] = [
  { id: 1, name: "Entradas", productCount: 8, order: 1 },
  { id: 2, name: "Carnes", productCount: 12, order: 2 },
  { id: 3, name: "Pastas", productCount: 10, order: 3 },
  { id: 4, name: "Pescados", productCount: 6, order: 4 },
  { id: 5, name: "Ensaladas", productCount: 7, order: 5 },
  { id: 6, name: "Postres", productCount: 9, order: 6 },
  { id: 7, name: "Bebidas", productCount: 15, order: 7 }
];

export function CategoriesManager() {
  const [categories, setCategories] = useState<Category[]>(mockCategories);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);

  const addCategory = () => {
    if (newCategoryName.trim()) {
      const newCategory: Category = {
        id: Date.now(),
        name: newCategoryName,
        productCount: 0,
        order: categories.length + 1
      };
      setCategories([...categories, newCategory]);
      setNewCategoryName("");
    }
  };

  const deleteCategory = (id: number) => {
    setCategories(categories.filter(c => c.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl mb-2">Categorías</h1>
          <p className="text-gray-600">Organiza tus productos por categorías</p>
        </div>
      </div>
      
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <div className="mb-6">
          <h3 className="text-lg mb-4">Agregar nueva categoría</h3>
          <div className="flex gap-3">
            <Input
              placeholder="Nombre de la categoría"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addCategory()}
            />
            <Button 
              className="bg-[#1e40af] hover:bg-[#1e3a8a]"
              onClick={addCategory}
            >
              <Plus className="w-5 h-5 mr-2" />
              Agregar
            </Button>
          </div>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-lg mb-4">Categorías existentes</h3>
          <p className="text-sm text-gray-600 mb-4">
            Arrastra para reordenar
          </p>
          
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
            >
              <GripVertical className="w-5 h-5 text-gray-400 cursor-move" />
              
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <h4>{category.name}</h4>
                  <Badge variant="secondary">
                    {category.productCount} productos
                  </Badge>
                </div>
              </div>
              
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setEditingId(category.id)}
                >
                  <Edit2 className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => deleteCategory(category.id)}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h4 className="text-[#1e40af] mb-2">💡 Consejo</h4>
        <p className="text-sm text-gray-700">
          Organiza tus categorías en el orden en que quieres que aparezcan en la carta. 
          Los clientes verán las categorías en este mismo orden.
        </p>
      </div>
    </div>
  );
}
