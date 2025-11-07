import { Code2, Palette, Server, Database, Wrench, BookOpen } from 'lucide-react';
import { skills, education } from '../data/portfolioData';

const skillCategories = [
  { title: 'Languages', skills: skills.languages, icon: Code2, color: 'from-blue-500 to-cyan-500' },
  { title: 'Frontend', skills: skills.frontend, icon: Palette, color: 'from-purple-500 to-pink-500' },
  { title: 'Backend', skills: skills.backend, icon: Server, color: 'from-green-500 to-emerald-500' },
  { title: 'Databases', skills: skills.databases, icon: Database, color: 'from-orange-500 to-red-500' },
  { title: 'Tools', skills: skills.tools, icon: Wrench, color: 'from-yellow-500 to-orange-500' },
  { title: 'CS Fundamentals', skills: skills.fundamentals, icon: BookOpen, color: 'from-teal-500 to-cyan-500' }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <div
                    key={category.title}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 bg-gradient-to-br ${category.color} rounded-lg`}>
                        <Icon className="text-white" size={24} />
                      </div>
                      <h4 className="text-xl font-semibold text-slate-900">
                        {category.title}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                          {edu.year}
                        </span>
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                          {edu.score}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-slate-600">
                        {edu.institute}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
