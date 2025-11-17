export function GourmetFooter() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#d4af37]/30" />
          <div className="text-[#d4af37]/50 text-xl">✦</div>
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#d4af37]/30" />
        </div>
        
        <p className="text-white/40 text-sm mb-2">
          Carta digital premium
        </p>
        <p className="text-white/30 text-xs">
          Powered by Digital Smart Menu
        </p>
      </div>
    </footer>
  );
}
