import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";

interface HeaderProps {
  onMenuClick?: () => void;
  transparent?: boolean;
}

export function Header({ onMenuClick, transparent }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "benefits", "demo", "gourmet", "features", "pricing", "cta"];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Using scroll-margin-top from CSS, just scroll to element
      section.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: "hero", label: "Inicio" },
    { id: "benefits", label: "Beneficios" },
    { id: "demo", label: "Demo" },
    { id: "gourmet", label: "Diseño Gourmet" },
    { id: "pricing", label: "Precios" }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        transparent 
          ? 'bg-black/40 backdrop-blur-xl border-b border-white/10' 
          : 'bg-white/80 backdrop-blur-lg border-b border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button 
            onClick={() => scrollToSection("hero")}
            className="flex items-center space-x-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#d4af37] to-[#b87333] flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.3)] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all">
              <span className="text-black font-semibold">DSM</span>
            </div>
            <span className={`text-xl font-semibold ${transparent ? 'text-white' : 'text-gray-900'}`}>
              Digital Smart Menu
            </span>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`transition-all duration-300 relative group ${
                  transparent 
                    ? 'text-white/80 hover:text-[#d4af37]' 
                    : 'text-gray-600 hover:text-gray-900'
                } ${activeSection === link.id ? (transparent ? 'text-[#d4af37]' : 'text-[#1e40af]') : ''}`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#d4af37] to-[#b87333]" />
                )}
              </button>
            ))}
            <Button 
              variant="ghost" 
              className={transparent ? 'text-white hover:text-[#d4af37] hover:bg-white/10' : ''}
            >
              Iniciar sesión
            </Button>
            <Button 
              onClick={() => scrollToSection("cta")}
              className="bg-gradient-to-r from-[#d4af37] to-[#b87333] hover:from-[#b87333] hover:to-[#d4af37] text-black shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all"
            >
              Probar Gratis
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${transparent ? 'hover:bg-white/10' : 'hover:bg-gray-100'}`}
          >
            {mobileMenuOpen ? (
              <X className={`w-6 h-6 ${transparent ? 'text-white' : 'text-gray-900'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${transparent ? 'text-white' : 'text-gray-900'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-left px-4 py-2 rounded-lg transition-all ${
                    transparent 
                      ? 'text-white hover:bg-white/10' 
                      : 'text-gray-900 hover:bg-gray-100'
                  } ${activeSection === link.id ? 'bg-white/10 text-[#d4af37]' : ''}`}
                >
                  {link.label}
                </button>
              ))}
              <Button 
                variant="ghost" 
                className={`justify-start ${transparent ? 'text-white hover:bg-white/10' : ''}`}
              >
                Iniciar sesión
              </Button>
              <Button 
                onClick={() => scrollToSection("cta")}
                className="bg-gradient-to-r from-[#d4af37] to-[#b87333] text-black"
              >
                Probar Gratis
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
