import { cn } from "../ui/utils";

interface CategoryChipProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
}

export function CategoryChip({ label, active, onClick, size = 'medium' }: CategoryChipProps) {
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        'rounded-full transition-all duration-300 whitespace-nowrap font-medium',
        'border backdrop-blur-sm',
        sizeClasses[size],
        active 
          ? 'bg-[#d4af37] border-[#d4af37] text-black shadow-[0_0_20px_rgba(212,175,55,0.3)]' 
          : 'bg-white/5 border-white/20 text-white/90 hover:bg-white/10 hover:border-[#d4af37]/50 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]'
      )}
    >
      {label}
    </button>
  );
}
