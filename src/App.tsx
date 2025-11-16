import Header from './components/Header';
import Hero from './components/Hero';
import Competencies from './components/Competencies';
import VideoExpertise from './components/VideoExpertise';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <div id="news" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-[#003366] text-center mb-8">Latest News</h2>
            <p className="text-center text-gray-700 text-lg">Stay tuned for our latest updates and innovations in mechanical processing.</p>
          </div>
        </div>
        <Competencies />
        <div id="company" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-[#003366] text-center mb-8">About Ledomet</h2>
            <p className="text-center text-gray-700 text-lg max-w-3xl mx-auto">
              Located in Wroclaw, Western Poland, Ledomet has been a trusted partner in mechanical processing and welded steel constructions for decades. Our commitment to quality, precision, and customer satisfaction drives everything we do.
            </p>
          </div>
        </div>
        <VideoExpertise />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
