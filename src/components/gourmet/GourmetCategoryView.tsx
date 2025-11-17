import { GourmetBackground } from "./GourmetBackground";
import { GourmetHeader } from "./GourmetHeader";
import { GourmetFooter } from "./GourmetFooter";
import { GourmetDivider } from "./GourmetDivider";
import { ProductCard } from "./ProductCard";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  recommended?: boolean;
  spicy?: number;
}

const categoryItems: MenuItem[] = [
  {
    id: 1,
    name: "Wagyu Beef Ribeye",
    description: "Premium wagyu ribeye 400g con reducción de vino tinto, espárragos salteados y papas gratinadas",
    price: 18500,
    image: "https://images.unsplash.com/photo-1676300185292-e23bb3db50fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwc3RlYWslMjBkaXNofGVufDF8fHx8MTc2MzM1Mjc5OHww&ixlib=rb-4.1.0&q=80&w=1080",
    recommended: true,
  },
  {
    id: 2,
    name: "Bife de Chorizo Argentino",
    description: "Corte premium 350g con chimichurri casero y papas rústicas al romero",
    price: 14500,
    image: "https://images.unsplash.com/photo-1613492220155-b10b65c64333?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVhayUyMGRpbm5lciUyMHBsYXRlfGVufDF8fHx8MTc2MzA5MTM1M3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    name: "Costillas BBQ Premium",
    description: "Costillas de cerdo glaseadas con salsa BBQ artesanal, coleslaw y mazorcas",
    price: 12800,
    image: "https://images.unsplash.com/photo-1676300185292-e23bb3db50fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwc3RlYWslMjBkaXNofGVufDF8fHx8MTc2MzM1Mjc5OHww&ixlib=rb-4.1.0&q=80&w=1080",
    spicy: 2,
  },
  {
    id: 4,
    name: "Rack de Cordero",
    description: "Carré de cordero con costra de hierbas, puré de batata y reducción de frutos rojos",
    price: 16200,
    image: "https://images.unsplash.com/photo-1676300185292-e23bb3db50fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwc3RlYWslMjBkaXNofGVufDF8fHx8MTc2MzM1Mjc5OHww&ixlib=rb-4.1.0&q=80&w=1080",
    recommended: true,
  }
];

interface GourmetCategoryViewProps {
  categoryName?: string;
  restaurantName?: string;
  onBack?: () => void;
  onProductClick?: (product: MenuItem) => void;
}

export function GourmetCategoryView({ 
  categoryName = "Carnes", 
  restaurantName = "Le Gourmet",
  onBack,
  onProductClick 
}: GourmetCategoryViewProps) {
  return (
    <GourmetBackground variant="wood">
      <GourmetHeader 
        restaurantName={restaurantName} 
        showBack 
        onBack={onBack}
        minimal 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-20">
        {/* Category Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl text-white font-serif mb-4 tracking-wide">
            {categoryName}
          </h2>
          <p className="text-white/60 text-lg">
            Nuestras especialidades en {categoryName.toLowerCase()}
          </p>
          <GourmetDivider withOrnament />
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-4">
          {categoryItems.map((item) => (
            <ProductCard
              key={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
              variant="compact"
              recommended={item.recommended}
              spicy={item.spicy}
              onClick={() => onProductClick?.(item)}
            />
          ))}
        </div>

        {/* Desktop Layout - Two Columns Editorial Style */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-2 gap-16">
            {categoryItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => onProductClick?.(item)}
                className="text-left group"
              >
                <div className="space-y-4">
                  {/* Image */}
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-white/10">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3 px-2">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl text-white font-serif leading-tight flex-1">
                        {item.name}
                      </h3>
                      <span className="text-2xl text-[#d4af37] font-semibold whitespace-nowrap">
                        ${item.price.toLocaleString()}
                      </span>
                    </div>
                    
                    <p className="text-white/70 leading-relaxed">
                      {item.description}
                    </p>
                    
                    {(item.recommended || item.spicy) && (
                      <div className="flex items-center gap-2">
                        {item.recommended && (
                          <span className="text-xs px-3 py-1 rounded-full bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/30">
                            Recomendado
                          </span>
                        )}
                        {item.spicy && item.spicy > 0 && (
                          <span className="text-xs px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30">
                            Picante
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Separator between items */}
                {index < categoryItems.length - 1 && (
                  <div className="mt-12">
                    <GourmetDivider />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <GourmetFooter />
    </GourmetBackground>
  );
}
