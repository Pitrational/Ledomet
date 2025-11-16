const competencies = [
  {
    title: 'Consulting',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Insustrial Equipment',
    image: 'https://images.pexels.com/photos/1474993/pexels-photo-1474993.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Product Design and Development',
    image: 'https://images.pexels.com/photos/8960464/pexels-photo-8960464.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Mechanical Processing',
    image: 'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1920,f_auto,q_auto/2776264/142232_90886.jpeg',
  },
];

export default function Competencies() {
  return (
    <section id="competencies" className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#003366] text-center mb-12 uppercase">
          Competencies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {competencies.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg border-2 border-white shadow-lg hover:shadow-2xl transition-all duration-300 h-64 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                <h3 className="text-2xl md:text-3xl font-bold text-white p-6">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
