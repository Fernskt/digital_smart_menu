import { useState } from "react";
import { Upload, Save } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Switch } from "../ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export function Settings() {
  const [logo, setLogo] = useState<string | null>(null);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogo(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl mb-2">Configuración</h1>
        <p className="text-gray-600">Personaliza tu restaurante y carta digital</p>
      </div>
      
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="appearance">Apariencia</TabsTrigger>
          <TabsTrigger value="team">Equipo</TabsTrigger>
          <TabsTrigger value="integrations">Integraciones</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="space-y-6">
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl mb-6">Información del restaurante</h3>
            
            <div className="space-y-6">
              <div>
                <Label htmlFor="restaurantName">Nombre del restaurante</Label>
                <Input
                  id="restaurantName"
                  placeholder="La Trattoria"
                  defaultValue="La Trattoria"
                />
              </div>
              
              <div>
                <Label htmlFor="address">Dirección</Label>
                <Input
                  id="address"
                  placeholder="Av. Corrientes 1234, CABA"
                  defaultValue="Av. Corrientes 1234, CABA"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input
                    id="phone"
                    placeholder="+54 11 1234-5678"
                    defaultValue="+54 11 1234-5678"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="contacto@latrattoria.com"
                    defaultValue="contacto@latrattoria.com"
                  />
                </div>
              </div>
              
              <div>
                <Label>Logo del restaurante</Label>
                <div className="mt-2">
                  {logo ? (
                    <div className="flex items-center gap-4">
                      <img src={logo} alt="Logo" className="w-24 h-24 object-cover rounded-xl border-2 border-gray-200" />
                      <Button variant="outline" onClick={() => setLogo(null)}>
                        Cambiar logo
                      </Button>
                    </div>
                  ) : (
                    <label className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-[#1e40af] transition-colors bg-gray-50">
                      <div className="text-center">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">Click para subir logo</p>
                        <p className="text-xs text-gray-400 mt-1">PNG, JPG hasta 5MB</p>
                      </div>
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleLogoUpload}
                      />
                    </label>
                  )}
                </div>
              </div>
              
              <Button className="bg-[#1e40af] hover:bg-[#1e3a8a]">
                <Save className="mr-2 w-5 h-5" />
                Guardar cambios
              </Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="appearance" className="space-y-6">
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl mb-6">Tema visual de la carta</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="border-2 border-[#1e40af] rounded-xl p-6 cursor-pointer hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <div className="w-full h-40 bg-gradient-to-br from-white to-gray-50 rounded-lg border border-gray-200 flex items-center justify-center">
                    <span className="text-2xl">☀️ Light Gourmet</span>
                  </div>
                </div>
                <h4 className="mb-2">Light Gourmet</h4>
                <p className="text-sm text-gray-600">Fondo blanco con acentos dorados y tipografía elegante</p>
                <div className="flex gap-2 mt-4">
                  <div className="w-8 h-8 bg-white border border-gray-300 rounded"></div>
                  <div className="w-8 h-8 bg-amber-100 rounded"></div>
                  <div className="w-8 h-8 bg-gray-100 rounded"></div>
                </div>
              </div>
              
              <div className="border-2 border-gray-200 rounded-xl p-6 cursor-pointer hover:shadow-lg transition-shadow hover:border-[#1e40af]">
                <div className="mb-4">
                  <div className="w-full h-40 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg flex items-center justify-center">
                    <span className="text-2xl text-white">🌙 Dark Bar</span>
                  </div>
                </div>
                <h4 className="mb-2">Dark Bar + Bistro</h4>
                <p className="text-sm text-gray-600">Fondo negro con acentos cobre y ambiente nocturno</p>
                <div className="flex gap-2 mt-4">
                  <div className="w-8 h-8 bg-gray-900 rounded"></div>
                  <div className="w-8 h-8 bg-gray-700 rounded"></div>
                  <div className="w-8 h-8 bg-amber-600 rounded"></div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div>
                  <Label>Mostrar fotos de productos</Label>
                  <p className="text-sm text-gray-600">Muestra imágenes en la carta pública</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div>
                  <Label>Mostrar precios</Label>
                  <p className="text-sm text-gray-600">Los clientes pueden ver los precios</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div>
                  <Label>Mostrar ingredientes</Label>
                  <p className="text-sm text-gray-600">Muestra la lista de ingredientes de cada plato</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
            
            <Button className="bg-[#1e40af] hover:bg-[#1e3a8a] mt-6">
              <Save className="mr-2 w-5 h-5" />
              Guardar apariencia
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="team" className="space-y-6">
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl mb-6">Miembros del equipo</h3>
            
            <div className="space-y-4 mb-6">
              {[
                { name: "Juan Pérez", email: "juan@latrattoria.com", role: "Dueño" },
                { name: "María González", email: "maria@latrattoria.com", role: "Editor" },
                { name: "Carlos Rodríguez", email: "carlos@latrattoria.com", role: "Cajero" }
              ].map((member, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#1e40af] text-white rounded-full flex items-center justify-center">
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <p>{member.name}</p>
                      <p className="text-sm text-gray-600">{member.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Select defaultValue={member.role.toLowerCase()}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dueño">Dueño</SelectItem>
                        <SelectItem value="editor">Editor</SelectItem>
                        <SelectItem value="cajero">Cajero</SelectItem>
                      </SelectContent>
                    </Select>
                    {member.role !== "Dueño" && (
                      <Button variant="ghost" size="sm" className="text-red-600">
                        Eliminar
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <Button className="bg-[#1e40af] hover:bg-[#1e3a8a]">
              Invitar miembro
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="integrations" className="space-y-6">
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl mb-6">Integraciones disponibles</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-6 border border-gray-200 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <h4>WhatsApp Business</h4>
                    <p className="text-sm text-gray-600">Recibe pedidos por WhatsApp directamente</p>
                  </div>
                </div>
                <Button variant="outline">Conectar</Button>
              </div>
              
              <div className="flex items-center justify-between p-6 border border-gray-200 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🖨️</span>
                  </div>
                  <div>
                    <h4>Impresoras de cocina</h4>
                    <p className="text-sm text-gray-600">Integra con impresoras térmicas para tickets</p>
                  </div>
                </div>
                <Button variant="outline">Configurar</Button>
              </div>
              
              <div className="flex items-center justify-between p-6 border border-gray-200 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">💳</span>
                  </div>
                  <div>
                    <h4>Mercado Pago</h4>
                    <p className="text-sm text-gray-600">Acepta pagos online integrados</p>
                  </div>
                </div>
                <Button variant="outline">Próximamente</Button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
