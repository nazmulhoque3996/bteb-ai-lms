import React from 'react';
import { useLms } from '../context/LmsContext';
import { Search, Globe, Bot, Menu, Sparkles, BookOpen } from 'lucide-react';

interface NavbarProps {
  onToggleSidebar: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar }) => {
  const {
    language,
    toggleLanguage,
    searchQuery,
    setSearchQuery,
    completionPercentage,
    setIsChatOpen,
    setActiveView
  } = useLms();

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-6 py-2.5 shadow-2xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 sm:gap-6">
        {/* Brand / Logo Zone */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onToggleSidebar}
            className="md:hidden p-1.5 rounded-lg text-slate-600 hover:bg-slate-100 transition cursor-pointer"
            aria-label="Toggle Navigation"
          >
            <Menu className="w-5 h-5" />
          </button>

          <button
            onClick={() => setActiveView('dashboard')}
            className="flex items-center gap-2.5 text-left group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-800 to-teal-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
              ⚙️
            </div>
            <div>
              <span className="font-bold text-slate-900 text-base sm:text-lg tracking-tight group-hover:text-emerald-700 transition">
                BTEB Diploma LMS
              </span>
              <span className="hidden sm:block text-[11px] text-slate-500 font-medium leading-none">
                {language === 'bn' ? 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড' : 'Polytechnic Engineering Portal'}
              </span>
            </div>
          </button>
        </div>

        {/* Search Bar Zone */}
        <div className="flex-1 max-w-md mx-2 hidden sm:block">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'bn' ? 'লেকচার, সেন্সর বা টপিক খুঁজুন (যেমন: DHT11, ALU)...' : 'Search lectures, sensors, topics (e.g., DHT11, ALU)...'}
              className="w-full pl-9 pr-4 py-1.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Right Action Zone */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Progress Indicator */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-slate-50 rounded-lg border border-slate-200 text-xs">
            <span className="text-slate-500">{language === 'bn' ? 'অগ্রগতি:' : 'Progress:'}</span>
            <span className="font-bold font-mono text-emerald-700">{completionPercentage}%</span>
            <div className="w-12 bg-slate-200 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-emerald-600 h-1.5 rounded-full transition-all"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
          </div>

          {/* Language Toggle Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-700 transition cursor-pointer"
            title="Toggle Language (বাংলা / English)"
          >
            <Globe className="w-3.5 h-3.5 text-emerald-600" />
            <span>{language === 'bn' ? 'বাংলা' : 'English'}</span>
          </button>

          {/* AI Tutor Floating/Navbar Trigger */}
          <button
            onClick={() => setIsChatOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-bold shadow-xs transition cursor-pointer"
          >
            <Bot className="w-4 h-4 text-emerald-200" />
            <span className="hidden sm:inline">
              {language === 'bn' ? 'AI শিক্ষক সহকারী' : 'AI Tutor'}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
