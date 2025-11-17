import { Star, Flame } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { cn } from "../ui/utils";

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
  variant?: 'default' | 'compact' | 'featured';
  recommended?: boolean;
  spicy?: number;
  onClick?: () => void;
}

export function ProductCard({ 
  name, 
  description, 
  price, 
  image, 
  variant = 'default',
  recommended,
  spicy,
  onClick 
}: ProductCardProps) {
  
  if (variant === 'compact') {
    return (
      <button
        onClick={onClick}
        className="w-full text-left group"
      >
        <div className="flex gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-[#d4af37]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]">
          <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 ring-1 ring-white/10">
            <ImageWithFallback
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-1">
              <h4 className="text-white font-medium truncate">{name}</h4>
              {recommended && (
                <Star className="w-4 h-4 text-[#d4af37] fill-[#d4af37] flex-shrink-0" />
              )}
            </div>
            <p className="text-sm text-white/60 line-clamp-2 mb-2">{description}</p>
            <div className="flex items-center justify-between">
              <span className="text-[#d4af37] font-semibold">${price.toLocaleString()}</span>
              {spicy && spicy > 0 && (
                <div className="flex gap-0.5">
                  {[...Array(spicy)].map((_, i) => (
                    <Flame key={i} className="w-3 h-3 text-orange-500 fill-orange-500" />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </button>
    );
  }

  if (variant === 'featured') {
    return (
      <button
        onClick={onClick}
        className="w-full text-left group"
      >
        <div className="rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 overflow-hidden hover:border-[#d4af37]/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.2)]">
          <div className="aspect-[4/3] relative overflow-hidden">
            <ImageWithFallback
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            {recommended && (
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-[#d4af37]/50 flex items-center gap-1.5">
                <Star className="w-4 h-4 text-[#d4af37] fill-[#d4af37]" />
                <span className="text-xs text-white font-medium">Chef's Choice</span>
              </div>
            )}
          </div>
          
          <div className="p-6">
            <h3 className="text-2xl text-white font-serif mb-2">{name}</h3>
            <p className="text-white/70 mb-4">{description}</p>
            <div className="flex items-center justify-between">
              <span className="text-3xl text-[#d4af37] font-semibold">${price.toLocaleString()}</span>
              {spicy && spicy > 0 && (
                <div className="flex gap-1">
                  {[...Array(spicy)].map((_, i) => (
                    <Flame key={i} className="w-4 h-4 text-orange-500 fill-orange-500" />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className="w-full text-left group"
    >
      <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden hover:bg-white/8 hover:border-[#d4af37]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]">
        <div className="aspect-video relative overflow-hidden">
          <ImageWithFallback
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {recommended && (
            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-[#d4af37]/50 flex items-center justify-center">
              <Star className="w-4 h-4 text-[#d4af37] fill-[#d4af37]" />
            </div>
          )}
        </div>
        
        <div className="p-5">
          <h3 className="text-xl text-white font-serif mb-2">{name}</h3>
          <p className="text-sm text-white/60 mb-3 line-clamp-2">{description}</p>
          <div className="flex items-center justify-between">
            <span className="text-2xl text-[#d4af37] font-semibold">${price.toLocaleString()}</span>
            {spicy && spicy > 0 && (
              <div className="flex gap-1">
                {[...Array(spicy)].map((_, i) => (
                  <Flame key={i} className="w-4 h-4 text-orange-500 fill-orange-500" />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </button>
  );
}
