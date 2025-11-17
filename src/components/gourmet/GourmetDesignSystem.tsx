import { GourmetBackground } from "./GourmetBackground";
import { CategoryChip } from "./CategoryChip";
import { ProductCard } from "./ProductCard";
import { GourmetDivider } from "./GourmetDivider";
import { PromoBadge } from "./PromoBadge";

/**
 * GOURMET DESIGN SYSTEM
 * 
 * This component showcases all design tokens, components, and patterns
 * used in the Digital Smart Menu Gourmet experience.
 */
export function GourmetDesignSystem() {
  return (
    <GourmetBackground variant="wood">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl text-white font-serif mb-4">Gourmet Design System</h1>
          <p className="text-white/70 text-xl">Dark Premium Style Guide</p>
          <GourmetDivider withOrnament />
        </div>

        {/* Color Tokens */}
        <section className="mb-20">
          <h2 className="text-3xl text-white font-serif mb-8">Color Tokens</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="h-24 rounded-xl bg-[#0d0d0d] border border-white/20 mb-3" />
              <p className="text-white text-sm">Deep Black</p>
              <p className="text-white/60 text-xs">#0d0d0d</p>
            </div>
            <div>
              <div className="h-24 rounded-xl bg-[#d4af37] border border-white/20 mb-3" />
              <p className="text-white text-sm">Gold</p>
              <p className="text-white/60 text-xs">#d4af37</p>
            </div>
            <div>
              <div className="h-24 rounded-xl bg-[#b87333] border border-white/20 mb-3" />
              <p className="text-white text-sm">Copper</p>
              <p className="text-white/60 text-xs">#b87333</p>
            </div>
            <div>
              <div className="h-24 rounded-xl bg-[#1e40af] border border-white/20 mb-3" />
              <p className="text-white text-sm">Deep Blue</p>
              <p className="text-white/60 text-xs">#1e40af</p>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-20">
          <h2 className="text-3xl text-white font-serif mb-8">Typography</h2>
          <div className="space-y-6 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div>
              <h1 className="text-5xl text-white font-serif mb-2">Playfair Display</h1>
              <p className="text-white/60 text-sm">H1 Gourmet - Títulos principales</p>
            </div>
            <div>
              <h2 className="text-3xl text-white font-serif mb-2">Category Title</h2>
              <p className="text-white/60 text-sm">H2 Category - Títulos de categoría</p>
            </div>
            <div>
              <h3 className="text-2xl text-white font-serif mb-2">Product Name</h3>
              <p className="text-white/60 text-sm">H3 Product - Nombres de productos</p>
            </div>
            <div>
              <p className="text-white/90">Body text - Inter Regular para descripciones</p>
              <p className="text-white/60 text-sm">Body - Texto principal</p>
            </div>
            <div>
              <p className="text-2xl text-[#d4af37] font-semibold">$18,500</p>
              <p className="text-white/60 text-sm">Price Label - Semi-bold en dorado</p>
            </div>
          </div>
        </section>

        {/* Category Chips */}
        <section className="mb-20">
          <h2 className="text-3xl text-white font-serif mb-8">Category Chips</h2>
          <div className="space-y-6">
            <div>
              <p className="text-white/60 mb-3">Small</p>
              <div className="flex flex-wrap gap-3">
                <CategoryChip label="Entradas" size="small" />
                <CategoryChip label="Carnes" size="small" active />
                <CategoryChip label="Postres" size="small" />
              </div>
            </div>
            <div>
              <p className="text-white/60 mb-3">Medium</p>
              <div className="flex flex-wrap gap-3">
                <CategoryChip label="Entradas" size="medium" />
                <CategoryChip label="Carnes" size="medium" active />
                <CategoryChip label="Postres" size="medium" />
              </div>
            </div>
            <div>
              <p className="text-white/60 mb-3">Large</p>
              <div className="flex flex-wrap gap-3">
                <CategoryChip label="Entradas" size="large" />
                <CategoryChip label="Carnes" size="large" active />
                <CategoryChip label="Postres" size="large" />
              </div>
            </div>
          </div>
        </section>

        {/* Dividers */}
        <section className="mb-20">
          <h2 className="text-3xl text-white font-serif mb-8">Dividers</h2>
          <div className="space-y-8 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div>
              <p className="text-white/60 mb-4">Simple Divider</p>
              <GourmetDivider />
            </div>
            <div>
              <p className="text-white/60 mb-4">Ornament Divider</p>
              <GourmetDivider withOrnament />
            </div>
          </div>
        </section>

        {/* Product Cards */}
        <section className="mb-20">
          <h2 className="text-3xl text-white font-serif mb-8">Product Cards</h2>
          <div className="space-y-12">
            <div>
              <p className="text-white/60 mb-4">Compact Variant (Mobile)</p>
              <ProductCard
                name="Wagyu Beef Ribeye"
                description="Premium wagyu ribeye 400g con reducción de vino"
                price={18500}
                image="https://images.unsplash.com/photo-1676300185292-e23bb3db50fa?w=400"
                variant="compact"
                recommended
                spicy={1}
              />
            </div>
            
            <div>
              <p className="text-white/60 mb-4">Default Variant</p>
              <div className="max-w-md">
                <ProductCard
                  name="Wagyu Beef Ribeye"
                  description="Premium wagyu ribeye 400g con reducción de vino"
                  price={18500}
                  image="https://images.unsplash.com/photo-1676300185292-e23bb3db50fa?w=400"
                  variant="default"
                  recommended
                />
              </div>
            </div>
            
            <div>
              <p className="text-white/60 mb-4">Featured Variant (Promociones)</p>
              <div className="max-w-md">
                <ProductCard
                  name="Wagyu Beef Ribeye"
                  description="Premium wagyu ribeye 400g con reducción de vino"
                  price={18500}
                  image="https://images.unsplash.com/photo-1676300185292-e23bb3db50fa?w=400"
                  variant="featured"
                  recommended
                  spicy={2}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Badges */}
        <section className="mb-20">
          <h2 className="text-3xl text-white font-serif mb-8">Badges</h2>
          <div className="flex flex-wrap gap-4">
            <PromoBadge text="Promo del día" />
            <PromoBadge text="Happy Hour" />
            <PromoBadge text="Especial de la casa" />
          </div>
        </section>

        {/* Glassmorphism Examples */}
        <section className="mb-20">
          <h2 className="text-3xl text-white font-serif mb-8">Glassmorphism Effects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <p className="text-white">Low opacity</p>
              <p className="text-white/60 text-sm">bg-white/5</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
              <p className="text-white">Medium opacity</p>
              <p className="text-white/60 text-sm">bg-white/10</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/15 backdrop-blur-lg border border-white/30">
              <p className="text-white">High opacity</p>
              <p className="text-white/60 text-sm">bg-white/15</p>
            </div>
          </div>
        </section>

        {/* Spacing Guide */}
        <section className="mb-20">
          <h2 className="text-3xl text-white font-serif mb-8">Spacing System</h2>
          <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="space-y-4 text-white/80">
              <p>• Entre productos: 4 (1rem / 16px)</p>
              <p>• Entre secciones: 12-16 (3-4rem / 48-64px)</p>
              <p>• Padding de cards: 5-6 (1.25-1.5rem / 20-24px)</p>
              <p>• Gaps en grids: 6-8 (1.5-2rem / 24-32px)</p>
              <p>• Margin vertical generoso para feeling editorial</p>
            </div>
          </div>
        </section>

        {/* Shadow System */}
        <section className="mb-20">
          <h2 className="text-3xl text-white font-serif mb-8">Shadow & Glow Effects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 shadow-[0_0_30px_rgba(212,175,55,0.15)]">
              <p className="text-white mb-2">Subtle Gold Glow</p>
              <p className="text-white/60 text-sm">shadow-[0_0_30px_rgba(212,175,55,0.15)]</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 shadow-[0_0_40px_rgba(212,175,55,0.25)]">
              <p className="text-white mb-2">Medium Gold Glow</p>
              <p className="text-white/60 text-sm">shadow-[0_0_40px_rgba(212,175,55,0.25)]</p>
            </div>
          </div>
        </section>
      </div>
    </GourmetBackground>
  );
}
