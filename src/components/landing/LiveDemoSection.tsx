import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Edit3, Eye, EyeOff, DollarSign, Check } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const demoProducts = [
  { 
    id: 1, 
    name: "Bife de Chorizo Premium", 
    price: 12500, 
    visible: true, 
    category: "Carnes",
    description: "Angus argentino, 400g con guarnición",
    image: "https://images.unsplash.com/photo-1714692571386-0f26dec1bab5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwc3RlYWslMjBwbGF0ZXxlbnwxfHx8fDE3NjM0MTE3MjB8MA&ixlib=rb-4.1.0&q=80&w=400"
  },
  { 
    id: 2, 
    name: "Ravioles de Ricota", 
    price: 8900, 
    visible: true, 
    category: "Pastas",
    description: "Salsa fileto casera con albahaca fresca",
    image: "https://images.unsplash.com/photo-1676300184847-4ee4030409c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwcGFzdGElMjBkaXNofGVufDF8fHx8MTc2MzM0NTkzNXww&ixlib=rb-4.1.0&q=80&w=400"
  },
  { 
    id: 3, 
    name: "Bruschetta Caprese", 
    price: 6500, 
    visible: true, 
    category: "Entradas",
    description: "Tomate cherry, mozzarella, albahaca",
    image: "https://images.unsplash.com/photo-1536739782508-c2388552aad3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicnVzY2hldHRhJTIwYXBwZXRpemVyfGVufDF8fHx8MTc2MzMzOTAxOXww&ixlib=rb-4.1.0&q=80&w=400"
  },
  { 
    id: 4, 
    name: "Tiramisú Casero", 
    price: 4200, 
    visible: false, 
    category: "Postres",
    description: "Receta italiana tradicional, café amaretto",
    image: "https://images.unsplash.com/photo-1714385905983-6f8e06fffae1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aXJhbWlzdSUyMGRlc3NlcnR8ZW58MXx8fHwxNzYzMzkzMjcwfDA&ixlib=rb-4.1.0&q=80&w=400"
  }
];

export function LiveDemoSection() {
  const [products, setProducts] = useState(demoProducts);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editPrice, setEditPrice] = useState("");
  const [lastAction, setLastAction] = useState("");

  const handlePriceChange = (id: number) => {
    const newPrice = parseInt(editPrice);
    if (newPrice && newPrice > 0) {
      setProducts(prev => prev.map(p => 
        p.id === id ? { ...p, price: newPrice } : p
      ));
      setEditingId(null);
      setEditPrice("");
      setLastAction(`Precio actualizado a $${newPrice.toLocaleString()}`);
      setTimeout(() => setLastAction(""), 3000);
    }
  };

  const toggleVisibility = (id: number) => {
    setProducts(prev => prev.map(p => 
      p.id === id ? { ...p, visible: !p.visible } : p
    ));
    const product = products.find(p => p.id === id);
    setLastAction(product?.visible ? "Producto ocultado" : "Producto activado");
    setTimeout(() => setLastAction(""), 3000);
  };

  return (
    <section className="relative py-20 md:py-28 bg-black overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1e40af]/5 via-transparent to-[#d4af37]/5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#d4af37]/20 to-[#1e40af]/20 border border-[#d4af37]/30 text-[#d4af37] text-sm inline-block mb-4">
            Probá en vivo
          </span>
          <h2 className="text-4xl md:text-5xl text-white font-serif mb-5">
            Cambios <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#b87333]">Instantáneos</span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            Mirá qué fácil es actualizar tu carta. Hacelo vos mismo ahora 👇
          </p>
        </motion.div>

        {/* Demo Container */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Admin Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-br from-[#1e40af] to-[#1e40af]/70">
                  <Edit3 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl text-white font-semibold">Panel de Control</h3>
                  <p className="text-white/60 text-sm">Actualizá en tiempo real</p>
                </div>
              </div>

              {/* Action Feedback */}
              <AnimatePresence>
                {lastAction && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-4 p-3 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center gap-2"
                  >
                    <Check className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 text-sm">{lastAction}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Products List */}
              <div className="space-y-4">
                {products.map((product) => (
                  <motion.div
                    key={product.id}
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                    layout
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="text-white">{product.name}</h4>
                        <span className="text-white/50 text-sm">{product.category}</span>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => toggleVisibility(product.id)}
                        className={`${product.visible ? 'text-green-400 hover:text-green-300' : 'text-red-400 hover:text-red-300'}`}
                      >
                        {product.visible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                      </Button>
                    </div>

                    {editingId === product.id ? (
                      <div className="flex gap-2">
                        <Input
                          type="number"
                          value={editPrice}
                          onChange={(e) => setEditPrice(e.target.value)}
                          placeholder="Nuevo precio"
                          className="bg-white/10 border-white/20 text-white"
                          autoFocus
                        />
                        <Button
                          size="sm"
                          onClick={() => handlePriceChange(product.id)}
                          className="bg-[#d4af37] hover:bg-[#b87333] text-black"
                        >
                          <Check className="w-4 h-4" />
                        </Button>
                      </div>
                    ) : (
                      <button
                        onClick={() => {
                          setEditingId(product.id);
                          setEditPrice(product.price.toString());
                        }}
                        className="flex items-center gap-2 text-[#d4af37] hover:text-[#b87333] transition-colors group"
                      >
                        <DollarSign className="w-4 h-4" />
                        <span className="text-xl font-semibold">{product.price.toLocaleString()}</span>
                        <Edit3 className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30">
                <p className="text-white/90 text-sm">
                  💡 <strong>Probá ahora:</strong> Cambiá un precio o ocultá un producto. Los cambios se reflejan al instante →
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Live Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="sticky top-24">
              <div className="p-8 rounded-3xl bg-gradient-to-br from-black to-[#0d0d0d] border border-[#d4af37]/30 shadow-[0_0_60px_rgba(212,175,55,0.2)]">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-white/50 text-sm ml-4">Vista del Cliente</span>
                </div>

                <div className="text-center mb-8">
                  <h3 className="text-3xl text-white font-serif mb-2">Le Gourmet</h3>
                  <p className="text-white/60">Nuestra carta</p>
                </div>

                {/* Menu Items with Images */}
                <div className="space-y-4">
                  <AnimatePresence mode="popLayout">
                    {products.filter(p => p.visible).map((product) => (
                      <motion.div
                        key={product.id}
                        layout
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-[#d4af37]/30 transition-all shadow-lg"
                      >
                        <div className="flex gap-4 p-4">
                          {/* Product Image */}
                          <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
                            <ImageWithFallback
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          {/* Product Info */}
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start gap-2 mb-1">
                              <h4 className="text-white font-serif">{product.name}</h4>
                              <motion.span
                                key={product.price}
                                initial={{ scale: 1.2, color: "#d4af37" }}
                                animate={{ scale: 1, color: "#d4af37" }}
                                className="text-xl font-semibold whitespace-nowrap"
                              >
                                ${product.price.toLocaleString()}
                              </motion.span>
                            </div>
                            <p className="text-white/60 text-sm mb-2">
                              {product.description}
                            </p>
                            <span className="text-[#d4af37]/70 text-xs">{product.category}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                <div className="mt-6 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-400 text-sm">Actualización en vivo</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
