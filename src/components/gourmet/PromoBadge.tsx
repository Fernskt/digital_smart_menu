interface PromoBadgeProps {
  text?: string;
}

export function PromoBadge({ text = "Promo del día" }: PromoBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 shadow-[0_0_20px_rgba(251,146,60,0.4)]">
      <span className="text-lg">🔥</span>
      <span className="text-white font-medium">{text}</span>
    </div>
  );
}
