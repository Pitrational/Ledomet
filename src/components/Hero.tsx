import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1920,f_auto,q_auto/2776264/981701_714598.jpeg)',
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white uppercase mb-6 leading-tight tracking-wide">
          From Drawing to Final Product
        </h2>
        <p className="text-xl md:text-2xl lg:text-3xl text-white mb-12 max-w-4xl mx-auto leading-relaxed">
          Ledomet is your specialist for mechanical processing
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">

        </div>

        <div className="flex flex-col items-center">
          <p className="text-white/80 text-sm mb-2">Start page Ledomet Mechanical Processing</p>
          <button
            onClick={() => scrollToSection('competencies')}
            className="text-white hover:text-[#66B2FF] transition-colors animate-bounce"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
}
