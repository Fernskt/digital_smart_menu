interface GourmetDividerProps {
  withOrnament?: boolean;
}

export function GourmetDivider({ withOrnament = false }: GourmetDividerProps) {
  if (withOrnament) {
    return (
      <div className="flex items-center gap-4 my-8">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#d4af37]/50 to-[#d4af37]" />
        <div className="text-[#d4af37] text-xl">✦</div>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#d4af37]/50 to-[#d4af37]" />
      </div>
    );
  }

  return (
    <div className="h-px w-full bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent my-6" />
  );
}
