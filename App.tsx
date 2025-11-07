
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FeatureCard from './components/FeatureCard';

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Mobile-First Design',
    description: 'Our layouts are designed to be perfectly responsive, providing an optimal experience on any device, from mobile phones to desktops.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Lightning Fast',
    description: 'Built with performance in mind. We ensure your website loads quickly and runs smoothly for a seamless user experience.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Clean Code',
    description: 'We write clean, maintainable code using modern technologies like React and TypeScript, making it easy to scale and extend.',
  },
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-200 font-sans">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative text-center py-20 md:py-32 px-4 overflow-hidden">
            <div className="absolute inset-0 bg-indigo-500 opacity-10 blur-3xl rounded-full animate-pulse"></div>
            <div className="relative z-10">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
                    Build Modern Web Experiences
                </h1>
                <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-8">
                    Leverage the power of React and Tailwind CSS to create stunning, responsive websites that captivate your audience.
                </p>
                <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                    Get Started
                </button>
            </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-900/50 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Why Choose Us?</h2>
              <p className="text-gray-400 mt-2">Everything you need to build and launch your next project.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
