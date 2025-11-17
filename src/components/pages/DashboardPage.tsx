import { useState } from "react";
import { DashboardSidebar } from "../layout/DashboardSidebar";
import { DashboardHome } from "../dashboard/DashboardHome";
import { ProductsList } from "../dashboard/ProductsList";
import { ProductForm } from "../dashboard/ProductForm";
import { CategoriesManager } from "../dashboard/CategoriesManager";
import { QRManager } from "../dashboard/QRManager";
import { PromotionsManager } from "../dashboard/PromotionsManager";
import { Statistics } from "../dashboard/Statistics";
import { Settings } from "../dashboard/Settings";

export function DashboardPage() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [editingProduct, setEditingProduct] = useState<number | null>(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const restaurantName = "La Trattoria";

  const renderContent = () => {
    if (activeSection === "products" && editingProduct !== null) {
      return (
        <ProductForm
          productId={editingProduct}
          onSave={() => {
            setEditingProduct(null);
            // In a real app, would save to backend
          }}
          onCancel={() => setEditingProduct(null)}
        />
      );
    }

    switch (activeSection) {
      case "dashboard":
        return <DashboardHome restaurantName={restaurantName} />;
      case "products":
        return <ProductsList onEditProduct={setEditingProduct} />;
      case "categories":
        return <CategoriesManager />;
      case "qr":
        return <QRManager />;
      case "promotions":
        return <PromotionsManager />;
      case "stats":
        return <Statistics />;
      case "settings":
        return <Settings />;
      default:
        return <DashboardHome restaurantName={restaurantName} />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <DashboardSidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        restaurantName={restaurantName}
        onCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
        collapsed={sidebarCollapsed}
      />
      
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}
