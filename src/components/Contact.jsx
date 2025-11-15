import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-16 scroll-mt-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-lg text-gray-700">Let's connect and discuss opportunities</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <a 
            href="mailto:pridhurshika17@gmail.com" 
            className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-blue-600 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex items-center space-x-4 group"
          >
            <div className="bg-blue-100 p-4 rounded-xl group-hover:bg-blue-200 transition-colors">
              <span className="text-3xl">✉️</span>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500 mb-1 uppercase tracking-wide">Email</p>
              <p className="text-blue-600 font-bold text-lg">pridhurshika17@gmail.com</p>
            </div>
          </a>
          <a 
            href="tel:+94768520990" 
            className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-green-600 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex items-center space-x-4 group"
          >
            <div className="bg-green-100 p-4 rounded-xl group-hover:bg-green-200 transition-colors">
              <span className="text-3xl">📞</span>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500 mb-1 uppercase tracking-wide">Phone</p>
              <p className="text-green-600 font-bold text-lg">+94 76 8520990</p>
            </div>
          </a>
          <a 
            href="https://github.com/Pridhurshika" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-purple-600 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex items-center space-x-4 group"
          >
            <div className="bg-purple-100 p-4 rounded-xl group-hover:bg-purple-200 transition-colors">
              <span className="text-3xl">💻</span>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500 mb-1 uppercase tracking-wide">GitHub</p>
              <p className="text-purple-600 font-bold text-lg">Pridhurshika</p>
            </div>
          </a>
          <a 
            href="https://www.linkedin.com/in/rathnavel-pridhurshika-a662a5372/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-blue-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex items-center space-x-4 group"
          >
            <div className="bg-blue-100 p-4 rounded-xl group-hover:bg-blue-200 transition-colors">
              <span className="text-3xl">💼</span>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500 mb-1 uppercase tracking-wide">LinkedIn</p>
              <p className="text-blue-500 font-bold text-lg">View Profile</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;

