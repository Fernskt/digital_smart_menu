import { ArrowLeft } from "lucide-react";

interface GourmetHeaderProps {
  restaurantName: string;
  showBack?: boolean;
  onBack?: () => void;
  minimal?: boolean;
}

export function GourmetHeader({ restaurantName, showBack, onBack, minimal }: GourmetHeaderProps) {
  if (minimal) {
    return (
      <header className="sticky top-0 z-40 bg-black/40 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {showBack ? (
              <button 
                onClick={onBack}
                className="flex items-center gap-2 text-white/90 hover:text-[#d4af37] transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Volver</span>
              </button>
            ) : (
              <div />
            )}
            <h1 className="text-xl text-white font-serif">{restaurantName}</h1>
            <div className="w-20" />
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#d4af37] to-[#b87333] flex items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.3)]">
          <span className="text-4xl">🍽️</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl text-white font-serif mb-3 tracking-wide">
          {restaurantName}
        </h1>
        
        <p className="text-white/70 text-lg">
          Nuestra carta gourmet
        </p>
        
        <div className="flex items-center justify-center gap-4 mt-6 mb-2">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#d4af37]/50" />
          <div className="text-[#d4af37] text-2xl">✦</div>
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#d4af37]/50" />
        </div>
      </div>
    </header>
  );
}
