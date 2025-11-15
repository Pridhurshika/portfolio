import React from 'react';

function Home() {
  return (
    <section id="home" className="pt-20 pb-16 scroll-mt-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          <div className="md:w-2/3 animate-fade-in-up">
            <div className="mb-6">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Statistics Undergraduate</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Rathnavel</span>
              <br />
              <span className="text-gray-800">Pridhurshika</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              A highly motivated final-year undergraduate pursuing a <span className="font-semibold text-blue-600">BSc (Hons) in Statistics</span>, with a strong academic background in statistical modeling, data analysis, and quantitative reasoning.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Passionate about extracting meaningful insights from data and applying statistical techniques to solve real-world problems. Experienced in handling complex datasets, building predictive models, and communicating analytical results effectively.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transform hover:-translate-y-1 transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>
          <div className="mt-8 md:mt-0 md:w-1/3 w-full">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 animate-fade-in">
              <h3 className="font-bold mb-6 text-xl text-gray-800 border-b-2 border-blue-100 pb-3">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">📍</span>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-gray-800">Kandy, Sri Lanka</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">✉️</span>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href="mailto:pridhurshika17@gmail.com" className="text-blue-600 hover:underline font-medium">pridhurshika17@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">📞</span>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a href="tel:+94768520990" className="text-blue-600 hover:underline font-medium">+94 76 8520990</a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">💻</span>
                  <div>
                    <p className="text-sm text-gray-500">GitHub</p>
                    <a href="https://github.com/Pridhurshika" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Pridhurshika</a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">💼</span>
                  <div>
                    <p className="text-sm text-gray-500">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/rathnavel-pridhurshika-a662a5372/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">View Profile</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;

