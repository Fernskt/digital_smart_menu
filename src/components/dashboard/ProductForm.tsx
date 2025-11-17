import { useState } from "react";
import { Upload, X } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Switch } from "../ui/switch";

interface ProductFormProps {
  productId?: number;
  onSave: () => void;
  onCancel: () => void;
}

export function ProductForm({ productId, onSave, onCancel }: ProductFormProps) {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    ingredients: "",
    category: "",
    active: true
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl mb-2">
            {productId ? "Editar Producto" : "Nuevo Producto"}
          </h1>
          <p className="text-gray-600">
            Completa la información del producto
          </p>
        </div>
      </div>
      
      <div className="bg-white rounded-2xl border border-gray-200 p-8">
        <form className="space-y-6">
          {/* Image Upload */}
          <div>
            <Label>Imagen del producto</Label>
            <div className="mt-2">
              {imagePreview ? (
                <div className="relative w-full aspect-video rounded-xl overflow-hidden border-2 border-dashed border-gray-300">
                  <img 
                    src={imagePreview} 
                    alt="Preview" 
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => setImagePreview(null)}
                    className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center w-full aspect-video border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-[#1e40af] transition-colors bg-gray-50">
                  <Upload className="w-12 h-12 text-gray-400 mb-3" />
                  <p className="text-sm text-gray-600">
                    Click para subir imagen
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    PNG, JPG hasta 10MB
                  </p>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </label>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name">Nombre del producto *</Label>
              <Input
                id="name"
                placeholder="Ej: Bife de Chorizo"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            
            <div>
              <Label htmlFor="price">Precio *</Label>
              <Input
                id="price"
                type="number"
                placeholder="8500"
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="category">Categoría *</Label>
            <Select 
              value={formData.category}
              onValueChange={(value) => setFormData({...formData, category: value})}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecciona una categoría" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="entradas">Entradas</SelectItem>
                <SelectItem value="carnes">Carnes</SelectItem>
                <SelectItem value="pastas">Pastas</SelectItem>
                <SelectItem value="pescados">Pescados</SelectItem>
                <SelectItem value="ensaladas">Ensaladas</SelectItem>
                <SelectItem value="postres">Postres</SelectItem>
                <SelectItem value="bebidas">Bebidas</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="description">Descripción</Label>
            <Textarea
              id="description"
              placeholder="Describe el plato, su preparación y características principales..."
              rows={4}
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
            />
          </div>
          
          <div>
            <Label htmlFor="ingredients">Ingredientes</Label>
            <Textarea
              id="ingredients"
              placeholder="Lista de ingredientes separados por coma..."
              rows={3}
              value={formData.ingredients}
              onChange={(e) => setFormData({...formData, ingredients: e.target.value})}
            />
          </div>
          
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div>
              <Label>Estado del producto</Label>
              <p className="text-sm text-gray-600">
                {formData.active ? "Visible en la carta" : "Oculto en la carta"}
              </p>
            </div>
            <Switch
              checked={formData.active}
              onCheckedChange={(checked) => setFormData({...formData, active: checked})}
            />
          </div>
          
          <div className="flex gap-4 pt-6">
            <Button
              type="button"
              className="flex-1 bg-[#1e40af] hover:bg-[#1e3a8a]"
              onClick={onSave}
            >
              Guardar Producto
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
            >
              Cancelar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
