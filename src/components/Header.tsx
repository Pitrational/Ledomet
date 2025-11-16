import { Phone, Menu, X, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#003366] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-4xl md:text-5xl font-bold cursor-pointer" onClick={() => scrollToSection('hero')}>
              Ledomet
            </h1>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('company')} className="hover:text-[#66B2FF] transition-colors">
               About Us
            </button>
            <button onClick={() => scrollToSection('competencies')} className="hover:text-[#66B2FF] transition-colors">
              Competencies
            </button>
            <button onClick={() => scrollToSection('machinery')} className="hover:text-[#66B2FF] transition-colors">
              Machinery
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-[#66B2FF] transition-colors">
              Contact
            </button>
            <div className="flex items-center space-x-3 ml-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#66B2FF] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#66B2FF] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#66B2FF] transition-colors">
                <Linkedin size={20} />
              </a>
              <span className="text-xl">PL</span>
            </div>
          </nav>

          <div className="hidden lg:flex items-center space-x-6">
            <a href="tel:+4873219694" className="flex items-center space-x-2 hover:text-[#66B2FF] transition-colors">
              <Phone size={18} />
              <span>+48 694 287 538</span>
            </a>
            <a href="mailto:info@ledomet-plast.com" className="hover:text-[#66B2FF] transition-colors">
              info@ledomet-plast.com
            </a>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-white/20 pt-4">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('news')} className="text-left hover:text-[#66B2FF] transition-colors">
                News
              </button>
              <button onClick={() => scrollToSection('company')} className="text-left hover:text-[#66B2FF] transition-colors">
                Company
              </button>
              <button onClick={() => scrollToSection('competencies')} className="text-left hover:text-[#66B2FF] transition-colors">
                Competencies
              </button>
              <button onClick={() => scrollToSection('machinery')} className="text-left hover:text-[#66B2FF] transition-colors">
                Machinery
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left hover:text-[#66B2FF] transition-colors">
                Contact
              </button>
              <div className="flex items-center space-x-4 pt-2">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} />
                </a>
                <span className="text-xl">🇩🇪</span>
              </div>
              <a href="tel:+4973219694" className="flex items-center space-x-2 pt-2">
                <Phone size={18} />
                <span>+49 7321 96940</span>
              </a>
              <a href="mailto:info@ledomet-plast.com">info@ledomet-plast.com</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
