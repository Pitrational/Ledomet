export default function ContactCTA() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contact" className="bg-[#003366] text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          We are here for you!
        </h2>
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          Questions about our services or need assistance? We're happy to support you personally.
        </p>
        <button
          onClick={() => scrollToSection('contact')}
          className="bg-white text-[#003366] px-10 py-4 rounded-lg text-lg font-semibold hover:scale-105 transition-transform shadow-lg"
        >
          Contact Us
        </button>
      </div>
    </section>
  );
}
