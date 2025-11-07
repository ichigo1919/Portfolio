import { Trophy, Award, Code, Brain } from 'lucide-react';
import { achievements } from '../data/portfolioData';

const iconMap = {
  trophy: Trophy,
  award: Award,
  code: Code,
  brain: Brain
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Achievements
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-4"></div>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Recognition and accomplishments that showcase my dedication and problem-solving abilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement) => {
              const Icon = iconMap[achievement.icon as keyof typeof iconMap];
              return (
                <div
                  key={achievement.id}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <Icon className="text-white" size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {achievement.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Academic Excellence
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl font-bold mb-2">7.89</div>
                  <div className="text-sm opacity-90">CGPA at NIT Jamshedpur</div>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl font-bold mb-2">98.7%</div>
                  <div className="text-sm opacity-90">Class XII (TSBIE)</div>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl font-bold mb-2">10/10</div>
                  <div className="text-sm opacity-90">Class X CGPA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
