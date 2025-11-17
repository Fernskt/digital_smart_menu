# 🌟 Gourmet Menu System - Digital Smart Menu

## Dark Premium Design System for High-End Restaurants

Una carta digital premium con estilo **Dark Gourmet**, diseñada específicamente para restaurantes de alta categoría, bares sofisticados y experiencias gastronómicas exclusivas.

---

## 🎨 Identidad Visual

### Colores Principales

- **Deep Black**: `#0d0d0d` / `#111111` - Fondo principal
- **Gold**: `#d4af37` - Acento primario (precios, botones activos)
- **Copper**: `#b87333` - Acento secundario
- **Deep Blue**: `#1e40af` - Acento alternativo

### Tipografía

- **Títulos**: Playfair Display (elegante, editorial)
- **Cuerpo**: Inter (moderna, legible)
- **Precios**: Semi-bold con color dorado destacado

---

## 📐 Componentes Disponibles

### 1. GourmetBackground
Fondo con imagen oscura + overlay semitransparente.

```tsx
<GourmetBackground variant="wood">
  {children}
</GourmetBackground>
```

**Variantes**: `wood`, `marble`, `texture`

### 2. CategoryChip
Chips de categorías con efecto glassmorphism.

```tsx
<CategoryChip 
  label="Carnes" 
  active={true}
  size="medium"
  onClick={handleClick}
/>
```

**Tamaños**: `small`, `medium`, `large`

### 3. ProductCard
Tarjetas de productos con 3 variantes.

```tsx
<ProductCard
  name="Wagyu Beef Ribeye"
  description="Premium wagyu ribeye 400g..."
  price={18500}
  image="url"
  variant="featured"
  recommended={true}
  spicy={2}
/>
```

**Variantes**:
- `compact` - Para móviles
- `default` - Versión estándar
- `featured` - Para promociones destacadas

### 4. GourmetDivider
Separadores elegantes con ornamentos opcionales.

```tsx
<GourmetDivider withOrnament />
```

### 5. PromoBadge
Badge de promoción con efecto glow.

```tsx
<PromoBadge text="Promo del día" />
```

### 6. GourmetHeader
Header con logo y navegación.

```tsx
<GourmetHeader 
  restaurantName="Le Gourmet"
  showBack={true}
  onBack={handleBack}
  minimal={false}
/>
```

---

## 📱 Vistas Principales

### GourmetMenuHome
Vista principal de la carta con:
- Búsqueda
- Filtros por categoría
- Sección de promociones
- Layout responsive (single/double column)

### GourmetCategoryView
Vista de categoría específica con:
- Header de categoría
- Layout editorial de dos columnas (desktop)
- Espaciado generoso

### GourmetProductDetail
Detalle completo del producto con:
- Imagen hero
- Badges (Chef's Choice, Picante)
- Ingredientes
- Información nutricional
- Alérgenos
- Recomendaciones del chef

---

## 🎯 Principios de Diseño

### 1. Dark Gourmet Style
- Fondo oscuro con overlays semitransparentes
- Glassmorphism sutil (backdrop-blur + bg-white/5)
- Bordes suaves con ring-1 ring-white/10

### 2. Jerarquía Visual
- Nombre del producto > Precio > Descripción
- Uso de color dorado para destacar elementos clave
- Espaciado generoso (feeling editorial)

### 3. Efectos Premium
- Glow dorado: `shadow-[0_0_30px_rgba(212,175,55,0.15)]`
- Hover con scale suave: `hover:scale-110 transition-transform duration-700`
- Borders con glow: `border-[#d4af37]/30`

### 4. Responsive
- **Mobile First**: Single column, chips horizontales
- **Tablet/Desktop**: Dos columnas estilo menú tradicional
- Breakpoint principal: `lg:` (1024px)

---

## 🔧 Utilidades CSS Personalizadas

### Scrollbar Hide
```css
.scrollbar-hide
```

### Text Shadow Glow
```css
.text-shadow-glow
```

### Backdrop Blur Gourmet
```css
.backdrop-blur-gourmet
```

---

## 📊 Sistema de Espaciado

- **Entre productos**: `gap-4` (16px)
- **Entre secciones**: `gap-12` to `gap-16` (48-64px)
- **Padding de cards**: `p-5` to `p-6` (20-24px)
- **Gaps en grids**: `gap-6` to `gap-8` (24-32px)

---

## 🎭 Tokens de Diseño

### Shadows & Glows
```tsx
// Subtle
shadow-[0_0_30px_rgba(212,175,55,0.15)]

// Medium
shadow-[0_0_40px_rgba(212,175,55,0.25)]

// Strong
shadow-[0_0_60px_rgba(212,175,55,0.3)]
```

### Glassmorphism
```tsx
bg-white/5 backdrop-blur-sm border border-white/10  // Low
bg-white/10 backdrop-blur-md border border-white/20 // Medium
bg-white/15 backdrop-blur-lg border border-white/30 // High
```

### Borders
```tsx
border border-white/10  // Subtle
border border-white/20  // Medium
border border-[#d4af37]/30 hover:border-[#d4af37]/50 // Gold accent
```

---

## 🚀 Uso Rápido

```tsx
import { GourmetMenuHome } from './components/gourmet';

function App() {
  return (
    <GourmetMenuHome 
      restaurantName="Le Gourmet"
      onProductClick={(product) => console.log(product)}
    />
  );
}
```

---

## 📝 Notas de Implementación

1. **Imágenes**: Usar ImageWithFallback para todas las imágenes
2. **Tipografía**: No usar clases de Tailwind para font-size en títulos (usar font-serif)
3. **Animaciones**: Transiciones suaves (300-700ms) para hover effects
4. **Accesibilidad**: Mantener contraste adecuado con fondo oscuro
5. **Performance**: Optimizar imágenes grandes (lazy loading built-in)

---

## 🎨 Design System Completo

Ver el componente `GourmetDesignSystem` para explorar todos los tokens, componentes y patrones visuales disponibles.

---

**Desarrollado para Digital Smart Menu**  
Plataforma SaaS Premium para Restaurantes
