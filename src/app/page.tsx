# Create the complete page.tsx file for the medical directory
page_content = '''import React from 'react';
import { Star, MapPin, Phone, Mail, Shield, CheckCircle, Users, Award } from 'lucide-react';

// TypeScript interfaces for type safety
interface Practitioner {
  id: string;
  name: string;
  title: string;
  specialty: string[];
  location: string;
  rating: number;
  reviewCount: number;
  verified: boolean;
  image: string;
  phone: string;
  email: string;
  experience: string;
  acceptingPatients: boolean;
}

interface TrustSignal {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Placeholder practitioner data
const featuredPractitioners: Practitioner[] = [
  {
    id: '1',
    name: 'Dr. Sarah Mitchell, MD',
    title: 'Internal Medicine & Metabolic Health',
    specialty: ['Ketogenic Diet', 'Carnivore Protocol', 'Metabolic Disorders'],
    location: 'Philadelphia, PA',
    rating: 4.9,
    reviewCount: 127,
    verified: true,
    image: '/api/placeholder/150/150',
    phone: '(215) 555-0123',
    email: 'dr.mitchell@example.com',
    experience: '15+ years',
    acceptingPatients: true
  },
  {
    id: '2',
    name: 'Dr. Michael Chen, DO',
    title: 'Family Medicine & Nutrition',
    specialty: ['Carnivore Diet', 'Autoimmune Protocols', 'Weight Management'],
    location: 'Pittsburgh, PA',
    rating: 4.8,
    reviewCount: 89,
    verified: true,
    image: '/api/placeholder/150/150',
    phone: '(412) 555-0456',
    email: 'dr.chen@example.com',
    experience: '12+ years',
    acceptingPatients: true
  },
  {
    id: '3',
    name: 'Dr. Emily Rodriguez, MD',
    title: 'Endocrinology & Metabolic Medicine',
    specialty: ['Ketogenic Therapy', 'Diabetes Reversal', 'Hormonal Health'],
    location: 'Harrisburg, PA',
    rating: 4.9,
    reviewCount: 156,
    verified: true,
    image: '/api/placeholder/150/150',
    phone: '(717) 555-0789',
    email: 'dr.rodriguez@example.com',
    experience: '18+ years',
    acceptingPatients: false
  }
];

// Trust signals data
const trustSignals: TrustSignal[] = [
  {
    icon: <Shield className="w-8 h-8 text-blue-600" />,
    title: 'Verified Practitioners',
    description: 'All practitioners are licensed and verified medical professionals'
  },
  {
    icon: <Award className="w-8 h-8 text-green-600" />,
    title: 'Specialized Training',
    description: 'Expertise in ketogenic and carnivore dietary interventions'
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: 'Patient-Centered Care',
    description: 'Focused on personalized metabolic health solutions'
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-900">
                Carnivore<span className="text-green-600">.Doctor</span>
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#directory" className="text-gray-700 hover:text-blue-600 font-medium">
                Find Practitioners
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
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
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Carnivore.Doctor?
            </h3>
            <p className="text-lg text-gray-600">
              Your trusted resource for specialized metabolic health care
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {trustSignals.map((signal, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {signal.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {signal.title}
                </h4>
                <p className="text-gray-600">
                  {signal.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Practitioners Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Practitioners
            </h3>
            <p className="text-lg text-gray-600">
              Meet some of Pennsylvania's leading specialists in ketogenic and carnivore medicine
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPractitioners.map((practitioner) => (
              <div key={practitioner.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
                {/* Practitioner Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <img 
                      src={practitioner.image} 
                      alt={practitioner.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 flex items-center">
                        {practitioner.name}
                        {practitioner.verified && (
                          <CheckCircle className="w-5 h-5 text-blue-600 ml-2" />
                        )}
                      </h4>
                      <p className="text-sm text-gray-600">{practitioner.title}</p>
                    </div>
                  </div>
                </div>

                {/* Rating and Location */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-900 ml-1">
                      {practitioner.rating}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">
                      ({practitioner.reviewCount} reviews)
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    {practitioner.location}
                  </div>
                </div>

                {/* Specialties */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {practitioner.specialty.map((spec, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Experience and Status */}
                <div className="flex justify-between items-center mb-4 text-sm">
                  <span className="text-gray-600">Experience: {practitioner.experience}</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    practitioner.acceptingPatients 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {practitioner.acceptingPatients ? 'Accepting Patients' : 'Not Accepting'}
                  </span>
                </div>

                {/* Contact Actions */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                    View Profile
                  </button>
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Phone className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Mail className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors">
              View All Practitioners
            </button>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Health?
          </h3>
          <p className="text-xl mb-8 text-blue-100">
            Find the right medical professional to guide your ketogenic or carnivore journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Search by Location
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors">
              Browse Specialties
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Carnivore.Doctor</h4>
              <p className="text-gray-400 text-sm">
                Connecting patients with specialized medical practitioners for ketogenic and carnivore dietary interventions.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Directory</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Find Practitioners</a></li>
                <li><a href="#" className="hover:text-white">Specialties</a></li>
                <li><a href="#" className="hover:text-white">Locations</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Resources</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">About Ketogenic Diet</a></li>
                <li><a href="#" className="hover:text-white">Carnivore Protocol</a></li>
                <li><a href="#" className="hover:text-white">Patient Resources</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contact</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Email: info@carnivore.doctor</li>
                <li>Phone: (555) 123-4567</li>
                <li>Pennsylvania, USA</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Carnivore.Doctor. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}'''

# Write the file
with open('page.tsx', 'w') as f:
    f.write(page_content)

print("✅ Professional medical directory homepage created successfully!")
print("\n📁 File: page.tsx")
print("📏 Size:", len(page_content), "characters")
print("\n🏥 Features included:")
print("- Professional medical color scheme (blues, greens, whites)")
print("- Hero section with clear value proposition")
print("- Trust signals with verification badges")
print("- Featured practitioners with placeholder data")
print("- Mobile-responsive design with Tailwind CSS")
print("- TypeScript interfaces for type safety")
print("- Accessibility-compliant structure")
print("- Call-to-action sections")
print("- Professional footer")
print("\n🔧 Next steps:")
print("1. Replace src/app/page.tsx with this content")
print("2. Install lucide-react icons: npm install lucide-react")
print("3. Add placeholder images or replace with actual practitioner photos")
print("4. Customize colors and content as needed")
