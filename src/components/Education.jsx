import React from 'react';

function Education() {
  return (
    <section id="education" className="py-16 scroll-mt-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-gray-600 text-lg">Academic journey and achievements</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">B.Sc. (Hons.) in Statistics</h3>
                <p className="text-blue-600 font-semibold text-lg mb-1">University of Peradeniya</p>
                <p className="text-gray-500 text-sm mb-3">2021–Present</p>
              </div>
              <span className="text-4xl">🎓</span>
            </div>
            <div className="bg-blue-50 px-4 py-2 rounded-lg inline-block">
              <p className="text-blue-700 font-bold text-lg">Current GPA: <span className="text-2xl">3.4</span></p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">G.C.E (Advanced Level)</h3>
                <p className="text-green-600 font-semibold text-lg mb-1">Physical Science (B2C)</p>
                <p className="text-gray-500 text-sm mb-3">K/Girls' High School, Kandy</p>
              </div>
              <span className="text-4xl">📚</span>
            </div>
            <div className="bg-green-50 px-4 py-2 rounded-lg inline-block">
              <p className="text-green-700 font-semibold">Completed: 2019</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;

