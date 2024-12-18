import Header from './components/Header';
import Navigation from './components/Navigation';
import HardwareSection from './components/hardware/HardwareSection';
import FeatureCard from './components/FeatureCard';
import ContactForm from './components/ContactForm';
import TeamSection from './components/team/TeamSection';

function App() {
  const features = [
    {
      title: 'Real-Time Data Monitoring',
      description: 'Tracks crop conditions to ensure optimal growth and yield.',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Urban Market Integration',
      description: 'Seamless communication for timely order placement and harvest.',
      imageUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Sustainability Focused',
      description: 'Reduces resource usage and supports eco-friendly practices.',
      imageUrl: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <HardwareSection />

        <section id="features" className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Features & Goals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </section>

        <TeamSection />

        <section id="contact" className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <ContactForm />
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Smart Greenhouse. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;