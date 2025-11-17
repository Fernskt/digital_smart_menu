import { TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from "recharts";

const categoryData = [
  { name: "Carnes", views: 1245, percentage: 28 },
  { name: "Pastas", views: 1023, percentage: 23 },
  { name: "Bebidas", views: 987, percentage: 22 },
  { name: "Postres", views: 654, percentage: 15 },
  { name: "Ensaladas", views: 532, percentage: 12 }
];

const hourlyData = [
  { hour: "12h", views: 45 },
  { hour: "13h", views: 123 },
  { hour: "14h", views: 156 },
  { hour: "15h", views: 89 },
  { hour: "20h", views: 178 },
  { hour: "21h", views: 234 },
  { hour: "22h", views: 198 },
  { hour: "23h", views: 112 }
];

const COLORS = ['#1e40af', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981'];

const weeklyComparison = [
  { week: "Sem 1", current: 2145, previous: 1876 },
  { week: "Sem 2", current: 2387, previous: 2145 },
  { week: "Sem 3", current: 2679, previous: 2387 },
  { week: "Sem 4", current: 2834, previous: 2679 }
];

export function Statistics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl mb-2">Estadísticas</h1>
        <p className="text-gray-600">Analiza el comportamiento de tus clientes</p>
      </div>
      
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-600">Total de vistas (mes)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl mb-2">10,834</p>
            <div className="flex items-center gap-2 text-sm text-green-600">
              <TrendingUp className="w-4 h-4" />
              <span>+24% vs mes anterior</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-600">Producto más visto</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl mb-2">Bife de Chorizo</p>
            <p className="text-sm text-gray-600">1,245 vistas este mes</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-600">Hora pico</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl mb-2">21:00</p>
            <p className="text-sm text-gray-600">234 vistas promedio</p>
          </CardContent>
        </Card>
      </div>
      
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Vistas por categoría</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={categoryData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="views" fill="#1e40af" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Distribución por categoría</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percentage }) => `${name} ${percentage}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="views"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Vistas por horario</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={hourlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="hour" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="views" 
                  stroke="#8b5cf6" 
                  strokeWidth={3}
                  dot={{ fill: '#8b5cf6', r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Comparativa semanal</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={weeklyComparison}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="previous" fill="#d1d5db" radius={[8, 8, 0, 0]} name="Anterior" />
                <Bar dataKey="current" fill="#1e40af" radius={[8, 8, 0, 0]} name="Actual" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      
      {/* Top Products Table */}
      <Card>
        <CardHeader>
          <CardTitle>Top 10 Productos Más Vistos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { name: "Bife de Chorizo", views: 1245, trend: "+15%" },
              { name: "Ravioles de Ricota", views: 1023, trend: "+22%" },
              { name: "Hamburguesa Deluxe", views: 987, trend: "+8%" },
              { name: "Ensalada Caesar", views: 876, trend: "-3%" },
              { name: "Tiramisú", views: 765, trend: "+12%" },
              { name: "Cerveza Artesanal", views: 654, trend: "+18%" },
              { name: "Pizza Margherita", views: 543, trend: "+5%" },
              { name: "Salmón Grillado", views: 432, trend: "+9%" },
              { name: "Brownie con Helado", views: 387, trend: "+14%" },
              { name: "Limonada Natural", views: 298, trend: "+7%" }
            ].map((product, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#1e40af] text-white rounded-lg flex items-center justify-center">
                    {index + 1}
                  </div>
                  <span>{product.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-gray-600">{product.views} vistas</span>
                  <span className={`flex items-center gap-1 ${
                    product.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {product.trend.startsWith('+') ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : (
                      <TrendingDown className="w-4 h-4" />
                    )}
                    {product.trend}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
