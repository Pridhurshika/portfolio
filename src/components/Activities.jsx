import React from 'react';

function Activities() {
  return (
    <section id="activities" className="py-16 scroll-mt-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Extra Curricular Activities</span>
          </h2>
          <p className="text-gray-600 text-lg">Leadership and community involvement</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">International Iterative Club - UoP</h3>
            <p className="text-blue-700 font-semibold mb-2">Member</p>
            <p className="text-gray-600 text-sm">2023-Present</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-4xl mb-4">📝</div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">International Iterative Club - UoP</h3>
            <p className="text-green-700 font-semibold mb-2">Assistant Secretary</p>
            <p className="text-gray-600 text-sm">2024-2025</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Hill Country Youth Peace Summit</h3>
            <p className="text-purple-700 font-semibold mb-2">Organizing Committee</p>
            <p className="text-gray-600 text-sm">2023</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Activities;

