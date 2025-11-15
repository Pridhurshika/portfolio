import React from 'react';

function Skills() {
  return (
    <section id="skills" className="py-16 scroll-mt-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-600 text-lg">Technologies and tools I work with</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
              <span className="text-2xl mr-2">💻</span>
              Programming Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {['R', 'Python', 'Java', 'C', 'SQL', 'Excel'].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-white text-blue-700 rounded-full text-sm font-semibold shadow-sm hover:shadow-md transition-shadow">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
              <span className="text-2xl mr-2">🛠️</span>
              Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Power BI', 'SPSS', 'Minitab'].map((tool) => (
                <span key={tool} className="px-4 py-2 bg-white text-green-700 rounded-full text-sm font-semibold shadow-sm hover:shadow-md transition-shadow">
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
              <span className="text-2xl mr-2">🌟</span>
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Teamwork', 'Leadership', 'Communication', 'Problem-Solving', 'Adaptability', 'Time Management', 'Planning & Organizing'].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-white text-purple-700 rounded-full text-sm font-semibold shadow-sm hover:shadow-md transition-shadow">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

