export default function VideoExpertise() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="machinery" className="bg-[#F5F5F5] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#003366] text-center mb-8">
          We get steel in shape
        </h2>

        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-xl"
              src="https://www.youtube.com/embed/OLCL6OYbSTw"
              title="Industrial Manufacturing Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="text-center mt-6">
            <p className="text-gray-700 mb-4">Watch our CNC milling in action.</p>
            <button
              onClick={() => scrollToSection('machinery')}
              className="bg-[#003366] text-white px-8 py-3 rounded-lg hover:bg-[#004d99] transition-colors"
            >
              More Information
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003366] text-center mb-6">
            Metal processing of large components
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Ledomet is a specialist mechanical processing company Poland, offering contract manufacturing for welded steel constructions with CNC processing. In addition to welding in various processes and mechanical finishing on state-of-the-art moving column milling machines, our expertise includes sandblasting, painting, annealing, quality management, and commissioned measurements. At our Heidenheim location, we provide a unique vertical range of manufacture with modern machinery for fast reactions and short delivery times. Our high quality standards shine in every process, backed by trained specialists.
          </p>
        </div>
      </div>
    </section>
  );
}
