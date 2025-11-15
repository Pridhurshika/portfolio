import React from 'react';

function Research() {
  return (
    <section id="research" className="py-16 scroll-mt-20 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Research</span>
          </h2>
          <p className="text-gray-600 text-lg">Current research and academic work</p>
        </div>
        <div className="bg-white p-10 rounded-2xl shadow-xl border-l-4 border-orange-500 max-w-4xl mx-auto">
          <div className="flex items-start space-x-4 mb-6">
            <span className="text-5xl">🔬</span>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Final Year Research</h3>
              <p className="text-gray-600 text-lg mb-4">
                <strong className="text-gray-800">Topic:</strong> "Analyzing the impact of climate change on Sri Lanka's spice production and export industry"
              </p>
              <div className="flex items-center space-x-3">
                <span className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full text-sm font-bold shadow-md">
                  <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                  In Progress
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Research;

