import { useState } from "react";
import { LandingPage } from "./components/pages/LandingPage";
import { DashboardPage } from "./components/pages/DashboardPage";
import { OnboardingFlow } from "./components/onboarding/OnboardingFlow";
import { PublicMenu } from "./components/menu/PublicMenu";
import { GourmetMenuHome } from "./components/gourmet/GourmetMenuHome";
import { GourmetCategoryView } from "./components/gourmet/GourmetCategoryView";
import { GourmetProductDetail } from "./components/gourmet/GourmetProductDetail";
import { GourmetDesignSystem } from "./components/gourmet/GourmetDesignSystem";
import { Button } from "./components/ui/button";

type AppView = 'landing' | 'onboarding' | 'dashboard' | 'menu-light' | 'menu-dark' | 'gourmet-home' | 'gourmet-category' | 'gourmet-detail' | 'design-system';

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>('landing');
  const [onboardingData, setOnboardingData] = useState<any>(null);

  const handleOnboardingComplete = (data: any) => {
    setOnboardingData(data);
    setCurrentView('dashboard');
  };

  // Development navigation menu - Minimalist footer
  const DevNav = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
      <div 
        className="fixed bottom-0 left-0 right-0 z-[999] transition-all duration-300"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        <div className={`transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          <div className="bg-[#00000080] backdrop-blur-md border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 py-2">
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs text-white/50 whitespace-nowrap">
                  Dev: <span className="text-[#d4af37]">{currentView}</span>
                </span>
                <div className="flex flex-wrap gap-1.5 justify-center flex-1">
                  <Button
                    size="sm"
                    onClick={() => setCurrentView('landing')}
                    className={`h-7 px-3 text-xs ${currentView === 'landing' ? 'bg-[#1e40af] text-white' : 'bg-white/5 hover:bg-white/10 text-white/70 border-0'}`}
                  >
                    Landing
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => setCurrentView('onboarding')}
                    className={`h-7 px-3 text-xs ${currentView === 'onboarding' ? 'bg-[#1e40af] text-white' : 'bg-white/5 hover:bg-white/10 text-white/70 border-0'}`}
                  >
                    Onboarding
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => setCurrentView('dashboard')}
                    className={`h-7 px-3 text-xs ${currentView === 'dashboard' ? 'bg-[#1e40af] text-white' : 'bg-white/5 hover:bg-white/10 text-white/70 border-0'}`}
                  >
                    Dashboard
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => setCurrentView('menu-light')}
                    className={`h-7 px-3 text-xs ${currentView === 'menu-light' ? 'bg-[#1e40af] text-white' : 'bg-white/5 hover:bg-white/10 text-white/70 border-0'}`}
                  >
                    Light
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => setCurrentView('menu-dark')}
                    className={`h-7 px-3 text-xs ${currentView === 'menu-dark' ? 'bg-[#1e40af] text-white' : 'bg-white/5 hover:bg-white/10 text-white/70 border-0'}`}
                  >
                    Dark
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => setCurrentView('gourmet-home')}
                    className={`h-7 px-3 text-xs ${currentView === 'gourmet-home' ? 'bg-[#d4af37] text-black' : 'bg-white/5 hover:bg-white/10 text-white/70 border-0'}`}
                  >
                    Gourmet
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => setCurrentView('gourmet-category')}
                    className={`h-7 px-3 text-xs ${currentView === 'gourmet-category' ? 'bg-[#d4af37] text-black' : 'bg-white/5 hover:bg-white/10 text-white/70 border-0'}`}
                  >
                    Categoría
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => setCurrentView('gourmet-detail')}
                    className={`h-7 px-3 text-xs ${currentView === 'gourmet-detail' ? 'bg-[#d4af37] text-black' : 'bg-white/5 hover:bg-white/10 text-white/70 border-0'}`}
                  >
                    Detalle
                  </Button>
                </div>
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
        {/* Hover trigger area */}
        <div className={`h-1 bg-gradient-to-r from-[#1e40af]/50 to-[#d4af37]/50 ${isVisible ? 'opacity-0' : 'opacity-100'} transition-opacity`} />
      </div>
    );
  };

  return (
    <>
      {currentView === 'landing' && <LandingPage />}
      {currentView === 'onboarding' && (
        <OnboardingFlow onComplete={handleOnboardingComplete} />
      )}
      {currentView === 'dashboard' && <DashboardPage />}
      {currentView === 'menu-light' && <PublicMenu theme="light" restaurantName="La Trattoria" />}
      {currentView === 'menu-dark' && <PublicMenu theme="dark" restaurantName="Dark Bar & Bistro" />}
      {currentView === 'gourmet-home' && (
        <GourmetMenuHome 
          restaurantName="Le Gourmet"
          onProductClick={() => setCurrentView('gourmet-detail')}
        />
      )}
      {currentView === 'gourmet-category' && (
        <GourmetCategoryView 
          categoryName="Carnes"
          restaurantName="Le Gourmet"
          onBack={() => setCurrentView('gourmet-home')}
          onProductClick={() => setCurrentView('gourmet-detail')}
        />
      )}
      {currentView === 'gourmet-detail' && (
        <GourmetProductDetail 
          restaurantName="Le Gourmet"
          onBack={() => setCurrentView('gourmet-home')}
        />
      )}
      {currentView === 'design-system' && <GourmetDesignSystem />}
      
      <DevNav />
    </>
  );
}
