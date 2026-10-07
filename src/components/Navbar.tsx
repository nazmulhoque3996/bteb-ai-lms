import React from 'react';
import { useLms } from '../context/LmsContext';
import { Search, Globe, Bot, PanelLeft, PanelLeftClose, PanelLeftOpen, Menu } from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    language,
    toggleLanguage,
    searchQuery,
    setSearchQuery,
    completionPercentage,
    setIsChatOpen,
    setActiveView,
    sidebarState,
    toggleSidebar,
    toggleSidebarCollapse,
  } = useLms();

  const getSidebarToggleTitle = () => {
    if (sidebarState === 'closed') {
      return language === 'bn' ? 'মেন্যু খুলুন (Open Sidebar)' : 'Open Sidebar';
    }
    if (sidebarState === 'collapsed') {
      return language === 'bn' ? 'মেন্যু বড় করুন (Expand Sidebar)' : 'Expand Sidebar';
    }
    return language === 'bn' ? 'মেন্যু ছোট/বন্ধ করুন (Collapse Sidebar)' : 'Collapse Sidebar';
  };

  return (
    <header className="h-14 sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-3 sm:px-6 shadow-2xs">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between gap-2 sm:gap-6">
        {/* Brand & Sidebar Toggle Zone */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Universal Sidebar Toggle Button (Desktop & Mobile) */}
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-xl text-slate-700 hover:text-emerald-800 hover:bg-emerald-50 border border-slate-200/80 transition cursor-pointer flex items-center justify-center shrink-0"
            title={getSidebarToggleTitle()}
            aria-label="Toggle Navigation Sidebar"
          >
            {sidebarState === 'closed' ? (
              <PanelLeft className="w-5 h-5" />
            ) : sidebarState === 'collapsed' ? (
              <PanelLeftOpen className="w-5 h-5 text-emerald-700" />
            ) : (
              <PanelLeftClose className="w-5 h-5 text-emerald-700" />
            )}
          </button>

          {/* Site Name and Logo (Always Visible & Prominent) */}
          <button
            onClick={() => setActiveView('dashboard')}
            className="flex items-center gap-2.5 text-left group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-800 to-teal-600 text-white flex items-center justify-center font-bold text-lg shadow-sm shrink-0">
              ⚙️
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-slate-900 text-base sm:text-lg tracking-tight group-hover:text-emerald-700 transition leading-none">
                BTEB Diploma LMS
              </span>
              <span className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5 hidden xs:block">
                {language === 'bn' ? 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড' : 'Polytechnic Engineering Portal'}
              </span>
            </div>
          </button>
        </div>

        {/* Search Bar Zone */}
        <div className="flex-1 max-w-md mx-2 hidden md:block">
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
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
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
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-700 transition cursor-pointer"
            title="Toggle Language (বাংলা / English)"
          >
            <Globe className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>{language === 'bn' ? 'বাংলা' : 'English'}</span>
          </button>

          {/* AI Tutor Floating/Navbar Trigger */}
          <button
            onClick={() => setIsChatOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold shadow-xs transition cursor-pointer shrink-0"
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
