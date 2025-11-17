import { 
  LayoutDashboard, 
  ShoppingBag, 
  FolderKanban, 
  QrCode, 
  Tag, 
  BarChart3, 
  Settings,
  LogOut,
  ChevronLeft
} from "lucide-react";
import { Button } from "../ui/button";

interface DashboardSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  restaurantName: string;
  onCollapse?: () => void;
  collapsed?: boolean;
}

export function DashboardSidebar({ 
  activeSection, 
  onSectionChange, 
  restaurantName,
  onCollapse,
  collapsed 
}: DashboardSidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'products', label: 'Productos', icon: ShoppingBag },
    { id: 'categories', label: 'Categorías', icon: FolderKanban },
    { id: 'qr', label: 'Mesas y QR', icon: QrCode },
    { id: 'promotions', label: 'Promociones', icon: Tag },
    { id: 'stats', label: 'Estadísticas', icon: BarChart3 },
    { id: 'settings', label: 'Configuración', icon: Settings },
  ];

  return (
    <aside className={`bg-white border-r border-gray-200 h-screen flex flex-col transition-all ${collapsed ? 'w-20' : 'w-64'}`}>
      <div className="p-6 border-b border-gray-200 flex items-center justify-between">
        {!collapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-xl bg-[#1e40af] flex items-center justify-center">
              <span className="text-white text-sm">DSM</span>
            </div>
            <div>
              <p className="text-sm text-gray-500">Panel de</p>
              <p className="truncate max-w-[140px]">{restaurantName}</p>
            </div>
          </div>
        )}
        {collapsed && (
          <div className="w-8 h-8 rounded-xl bg-[#1e40af] flex items-center justify-center mx-auto">
            <span className="text-white text-sm">DSM</span>
          </div>
        )}
        {onCollapse && !collapsed && (
          <button onClick={onCollapse} className="p-1 hover:bg-gray-100 rounded">
            <ChevronLeft className="w-4 h-4" />
          </button>
        )}
      </div>
      
      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`w-full flex items-center ${collapsed ? 'justify-center' : 'space-x-3'} px-3 py-2.5 rounded-xl transition-colors ${
                isActive 
                  ? 'bg-[#1e40af] text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              title={collapsed ? item.label : undefined}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </button>
          );
        })}
      </nav>
      
      <div className="p-4 border-t border-gray-200">
        <Button 
          variant="ghost" 
          className={`w-full ${collapsed ? 'px-2' : ''}`}
          title={collapsed ? 'Cerrar sesión' : undefined}
        >
          <LogOut className="w-5 h-5" />
          {!collapsed && <span className="ml-2">Cerrar sesión</span>}
        </Button>
      </div>
    </aside>
  );
}
