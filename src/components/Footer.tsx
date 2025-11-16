import { ChevronUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#003366] text-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm">
            © 2025 Ledomet Mechanical Processing. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#privacy" className="text-sm hover:text-[#66B2FF] transition-colors">
              Privacy
            </a>
            <a href="#imprint" className="text-sm hover:text-[#66B2FF] transition-colors">
              Imprint
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1 text-sm hover:text-[#66B2FF] transition-colors"
            >
              <span>Back to top</span>
              <ChevronUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
