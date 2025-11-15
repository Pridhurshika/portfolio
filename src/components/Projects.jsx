import React from 'react';

function Projects() {
  return (
    <section id="projects" className="py-16 scroll-mt-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-600 text-lg">Featured work and research projects</p>
        </div>
        <div className="grid md:grid-cols-1 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-600 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-2xl font-bold text-gray-800">Mental Health Data Analysis</h3>
              <span className="text-3xl">🧠</span>
            </div>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              Explored the multivariate relationships among demographic characteristics, lifestyle factors, and mental health outcomes using several multivariate techniques.
            </p>
            <div className="flex items-center justify-between">
              <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-bold shadow-md">R</span>
              <a 
                href="https://github.com/Pridhurshika/Multivariate-mental-health-modeling" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-md"
              >
                View on GitHub →
              </a>
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg border-l-4 border-green-600 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-2xl font-bold text-gray-800">K-Means & Hierarchical Clustering</h3>
              <span className="text-3xl">📊</span>
            </div>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              Comparative study of K-Means and Hierarchical Clustering on the Iris dataset using Euclidean, Manhattan, and Minkowski distances. Evaluated using silhouette scores.
            </p>
            <div className="flex items-center justify-between">
              <span className="px-4 py-2 bg-green-600 text-white rounded-full text-sm font-bold shadow-md">Python</span>
              <a 
                href="https://github.com/Pridhurshika/Iris-clustering-analysis" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transform hover:scale-105 transition-all duration-300 shadow-md"
              >
                View on GitHub →
              </a>
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-lg border-l-4 border-purple-600 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-2xl font-bold text-gray-800">Bayesian Taxi Fare Prediction</h3>
              <span className="text-3xl">🚕</span>
            </div>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              Exploring key factors affecting taxi fares using Bayesian methods. Includes data preprocessing, EDA, Bayesian linear regression with model comparison and Naive Bayes classification for fare categorization.
            </p>
            <div className="flex items-center justify-between">
              <span className="px-4 py-2 bg-purple-600 text-white rounded-full text-sm font-bold shadow-md">R</span>
              <a 
                href="https://github.com/Pridhurshika/Bayesian-taxi-fare-prediction" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-6 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transform hover:scale-105 transition-all duration-300 shadow-md"
              >
                View on GitHub →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

