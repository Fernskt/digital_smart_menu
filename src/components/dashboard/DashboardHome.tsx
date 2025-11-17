import { TrendingUp, Eye, Package, Tag } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { Button } from "../ui/button";

const viewsData = [
  { day: "Lun", views: 234 },
  { day: "Mar", views: 287 },
  { day: "Mié", views: 312 },
  { day: "Jue", views: 389 },
  { day: "Vie", views: 456 },
  { day: "Sáb", views: 523 },
  { day: "Dom", views: 478 }
];

const topProducts = [
  { name: "Bife de Chorizo", views: 342, revenue: "$4,520" },
  { name: "Ravioles de Ricota", views: 298, revenue: "$3,870" },
  { name: "Hamburguesa Deluxe", views: 276, revenue: "$3,210" },
  { name: "Ensalada Caesar", views: 234, revenue: "$2,980" },
  { name: "Tiramisú", views: 198, revenue: "$2,450" }
];

export function DashboardHome({ restaurantName }: { restaurantName: string }) {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl mb-2">Bienvenido a {restaurantName}</h1>
        <p className="text-gray-600">Aquí está el resumen de tu negocio</p>
      </div>
      
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-600">Productos Activos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl">48</p>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +12% vs mes anterior
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Package className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-l-4 border-l-purple-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-600">Vistas (7 días)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl">2,679</p>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +28% vs semana anterior
                </p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Eye className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-l-4 border-l-orange-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-600">Promociones Activas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl">3</p>
                <p className="text-xs text-gray-600 mt-1">
                  2 finalizan hoy
                </p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <Tag className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-l-4 border-l-red-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-600">Productos Ocultos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl">5</p>
                <p className="text-xs text-gray-600 mt-1">
                  Sin stock temporalmente
                </p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <Package className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Vistas de la última semana</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={viewsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="views" 
                  stroke="#1e40af" 
                  strokeWidth={3}
                  dot={{ fill: '#1e40af', r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Top 5 Productos Más Vistos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#1e40af] text-white flex items-center justify-center">
                        {index + 1}
                      </div>
                      <div>
                        <p>{product.name}</p>
                        <p className="text-sm text-gray-500">{product.views} vistas</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-green-600">{product.revenue}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Acciones rápidas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button className="bg-[#1e40af] hover:bg-[#1e3a8a] h-auto py-4">
              <Package className="mr-2" />
              Agregar Producto
            </Button>
            <Button variant="outline" className="h-auto py-4">
              <Tag className="mr-2" />
              Nueva Promoción
            </Button>
            <Button variant="outline" className="h-auto py-4">
              <Eye className="mr-2" />
              Ver Carta Pública
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
