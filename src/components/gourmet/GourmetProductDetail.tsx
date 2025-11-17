import { Star, Flame, Leaf, Milk, Fish, Wheat } from "lucide-react";
import { GourmetBackground } from "./GourmetBackground";
import { GourmetHeader } from "./GourmetHeader";
import { GourmetDivider } from "./GourmetDivider";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface Allergen {
  icon: React.ElementType;
  name: string;
}

const allergens: Allergen[] = [
  { icon: Milk, name: "Lácteos" },
  { icon: Wheat, name: "Gluten" },
];

interface GourmetProductDetailProps {
  restaurantName?: string;
  onBack?: () => void;
}

export function GourmetProductDetail({ 
  restaurantName = "Le Gourmet",
  onBack 
}: GourmetProductDetailProps) {
  const product = {
    name: "Wagyu Beef Ribeye",
    description: "Corte premium de wagyu japonés, criado en condiciones excepcionales para obtener el marmoleo perfecto. Sellado a fuego alto y terminado en mantequilla de hierbas finas.",
    longDescription: "Nuestro ribeye de wagyu es una experiencia culinaria única. La carne se sirve a temperatura perfecta, acompañada de una reducción de vino tinto Malbec, espárragos salteados al ajillo y papas gratinadas con queso gruyere. Un plato que define la alta cocina.",
    price: 18500,
    image: "https://images.unsplash.com/photo-1676300185292-e23bb3db50fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwc3RlYWslMjBkaXNofGVufDF8fHx8MTc2MzM1Mjc5OHww&ixlib=rb-4.1.0&q=80&w=1080",
    recommended: true,
    spicy: 0,
    ingredients: [
      "Wagyu ribeye 400g",
      "Reducción de vino Malbec",
      "Espárragos verdes frescos",
      "Papas gratinadas con gruyere",
      "Mantequilla de hierbas",
      "Sal Maldon",
      "Pimienta negra recién molida"
    ],
    prepTime: "25 minutos",
    servingSize: "1 persona"
  };

  return (
    <GourmetBackground variant="wood">
      <GourmetHeader 
        restaurantName={restaurantName} 
        showBack 
        onBack={onBack}
        minimal 
      />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20">
        {/* Hero Image */}
        <div className="aspect-[16/10] md:aspect-[21/9] rounded-3xl overflow-hidden mb-8 ring-2 ring-white/10 shadow-[0_0_60px_rgba(212,175,55,0.15)]">
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-3 mb-6">
          {product.recommended && (
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 backdrop-blur-sm">
              <Star className="w-4 h-4 text-[#d4af37] fill-[#d4af37]" />
              <span className="text-white text-sm font-medium">Chef's Choice</span>
            </div>
          )}
          {product.spicy > 0 && (
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/40 backdrop-blur-sm">
              {[...Array(product.spicy)].map((_, i) => (
                <Flame key={i} className="w-4 h-4 text-orange-500 fill-orange-500" />
              ))}
              <span className="text-white text-sm font-medium">Picante</span>
            </div>
          )}
        </div>

        {/* Title and Price */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl text-white font-serif mb-4 leading-tight">
            {product.name}
          </h1>
          <div className="flex items-baseline gap-3">
            <span className="text-5xl md:text-6xl text-[#d4af37] font-semibold">
              ${product.price.toLocaleString()}
            </span>
            <span className="text-white/60">por persona</span>
          </div>
        </div>

        <GourmetDivider />

        {/* Description */}
        <div className="mb-8 space-y-4">
          <p className="text-xl text-white/90 leading-relaxed">
            {product.description}
          </p>
          <p className="text-white/70 leading-relaxed">
            {product.longDescription}
          </p>
        </div>

        <GourmetDivider />

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Ingredients */}
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <h3 className="text-xl text-white font-serif mb-4 flex items-center gap-2">
              <Leaf className="w-5 h-5 text-[#d4af37]" />
              Ingredientes
            </h3>
            <ul className="space-y-3">
              {product.ingredients.map((ingredient, idx) => (
                <li key={idx} className="flex items-start gap-3 text-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-2 flex-shrink-0" />
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Info */}
          <div className="space-y-6">
            {/* Preparation */}
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <h4 className="text-white/60 text-sm mb-2">Tiempo de preparación</h4>
              <p className="text-xl text-white">{product.prepTime}</p>
            </div>

            {/* Serving */}
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <h4 className="text-white/60 text-sm mb-2">Porción</h4>
              <p className="text-xl text-white">{product.servingSize}</p>
            </div>

            {/* Allergens */}
            {allergens.length > 0 && (
              <div className="p-6 rounded-2xl bg-amber-500/10 backdrop-blur-sm border border-amber-500/30">
                <h4 className="text-amber-400 mb-3">⚠️ Alérgenos</h4>
                <div className="flex flex-wrap gap-3">
                  {allergens.map((allergen, idx) => {
                    const Icon = allergen.icon;
                    return (
                      <div 
                        key={idx}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10"
                      >
                        <Icon className="w-4 h-4 text-amber-400" />
                        <span className="text-white/90 text-sm">{allergen.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Recommendations */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-[#d4af37]/10 to-[#b87333]/10 backdrop-blur-sm border border-[#d4af37]/30">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#d4af37]/20 flex items-center justify-center flex-shrink-0">
              <Star className="w-6 h-6 text-[#d4af37] fill-[#d4af37]" />
            </div>
            <div>
              <h4 className="text-xl text-white font-serif mb-2">Recomendación del Chef</h4>
              <p className="text-white/80 leading-relaxed">
                Este plato marida perfectamente con nuestro Malbec Reserva 2019 o un Cabernet Sauvignon 
                de cuerpo completo. Sugerimos acompañar con nuestra ensalada de rúcula y parmesano como entrada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </GourmetBackground>
  );
}
