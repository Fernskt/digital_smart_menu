interface GourmetBackgroundProps {
  variant?: 'wood' | 'marble' | 'texture';
  children: React.ReactNode;
}

export function GourmetBackground({ variant = 'wood', children }: GourmetBackgroundProps) {
  const backgroundImages = {
    wood: 'https://images.unsplash.com/photo-1525947088131-b701cd0f6dc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwd29vZCUyMHRleHR1cmV8ZW58MXx8fHwxNzYzMzQyMDYyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    marble: 'https://images.unsplash.com/photo-1744776411221-702f2848b0b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYzMzA3OTA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    texture: 'https://images.unsplash.com/photo-1525947088131-b701cd0f6dc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwd29vZCUyMHRleHR1cmV8ZW58MXx8fHwxNzYzMzQyMDYyfDA&ixlib=rb-4.1.0&q=80&w=1080'
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImages[variant]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Dark Overlay - High Contrast */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-black/80 via-black/75 to-black/85" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
