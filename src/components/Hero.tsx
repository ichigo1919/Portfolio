import { Github, Mail, Phone, ArrowDown } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* ===== Left Side (Text) ===== */}
          <div className="text-center lg:text-left">
            <div className="mb-8 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                {personalInfo.name}
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-2">
                {personalInfo.title}
              </p>
              <p className="text-lg text-slate-400">
                {personalInfo.department}
              </p>
            </div>

            <p className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto lg:mx-0">
              {personalInfo.summary}
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
              >
                <Mail size={20} />
                <span>Email Me</span>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Phone size={20} />
                <span>Call Me</span>
              </a>
            </div>

            <button
              onClick={() => scrollToSection('about')}
              className="animate-bounce inline-flex items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors"
            >
              <span>Explore More</span>
              <ArrowDown size={20} />
            </button>
          </div>

          {/* ===== Right Side (Profile Image with Glowing Ring) ===== */}
          <div className="flex justify-center lg:justify-end relative">
            {/* Glowing animated ring */}
            <div className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 blur-md opacity-70 animate-[spin_8s_linear_infinite]"></div>

            {/* Profile Image */}
            <img
              src="/jashu-profile.jpg"
              alt="Jashwanth Chamkuri"
              className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-transparent shadow-xl shadow-cyan-500/40 hover:scale-105 transition-transform duration-300 animate-[float_4s_ease-in-out_infinite]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
