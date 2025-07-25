export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-900">
            Carnivore<span className="text-green-600">.Doctor</span>
          </h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-600">Find Practitioners</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Find Specialized Medical Practitioners for{' '}
            <span className="text-blue-600">Ketogenic</span> &{' '}
            <span className="text-green-600">Carnivore</span> Diets
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Connect with verified medical professionals in Pennsylvania who specialize in 
            ketogenic and carnivore dietary interventions for optimal metabolic health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors">
              Browse Directory
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Carnivore.Doctor?
            </h3>
            <p className="text-lg text-gray-600">
              Your trusted resource for specialized metabolic health care
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Verified Practitioners
              </h4>
              <p className="text-gray-600">
                All practitioners are licensed and verified medical professionals
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Specialized Training
              </h4>
              <p className="text-gray-600">
                Expertise in ketogenic and carnivore dietary interventions
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Patient-Centered Care
              </h4>
              <p className="text-gray-600">
                Focused on personalized metabolic health solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Health?
          </h3>
          <p className="text-xl mb-8">
            Find the right medical professional to guide your ketogenic or carnivore journey
          </p>
          <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
            Get Started Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Carnivore.Doctor</h4>
              <p className="text-sm text-gray-400">
                Connecting patients with specialized medical practitioners.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Directory</h5>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Find Practitioners</p>
                <p>Specialties</p>
                <p>Locations</p>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Resources</h5>
              <div className="space-y-2 text-sm text-gray-400">
                <p>About Ketogenic Diet</p>
                <p>Carnivore Protocol</p>
                <p>Patient Resources</p>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Contact</h5>
              <div className="space-y-2 text-sm text-gray-400">
                <p>info@carnivore.doctor</p>
                <p>(555) 123-4567</p>
                <p>Pennsylvania, USA</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 pt-6 text-center text-sm text-gray-400">
            <p>&copy; 2024 Carnivore.Doctor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}