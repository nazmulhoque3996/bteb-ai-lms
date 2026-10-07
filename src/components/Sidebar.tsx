import React from 'react';
import { useLms } from '../context/LmsContext';
import { COURSES } from '../data/courses';
import { 
  LayoutDashboard, 
  BookOpen, 
  Bot, 
  DownloadCloud, 
  HelpCircle, 
  Mail, 
  CheckCircle, 
  Clock, 
  ChevronLeft,
  ChevronRight,
  X,
  Radio,
  Cpu,
  Sparkles
} from 'lucide-react';

export const Sidebar: React.FC = () => {
  const {
    language,
    activeView,
    setActiveView,
    activeCourseId,
    activeChapterId,
    selectChapter,
    progress,
    setIsChatOpen,
    sidebarState,
    toggleSidebarCollapse,
    closeSidebar,
  } = useLms();

  const navItems = [
    { id: 'dashboard', labelBn: 'ড্যাশবোর্ড (হোম)', labelEn: 'Dashboard (Home)', icon: LayoutDashboard },
    { id: 'courses', labelBn: 'কোর্স ও মডিউলসমূহ', labelEn: 'Courses & Modules', icon: BookOpen },
    { id: 'chat', labelBn: 'AI শিক্ষক সহকারী (Gemini)', labelEn: 'AI Tutor Chatbot', icon: Bot, isSpecial: true },
    { id: 'resources', labelBn: 'রিসোর্স ও ডাউনলোড', labelEn: 'Resources & Downloads', icon: DownloadCloud },
    { id: 'faqs', labelBn: 'বিটিইবি প্রশ্নোত্তর (FAQ)', labelEn: 'Student FAQs', icon: HelpCircle },
    { id: 'contact', labelBn: 'শিক্ষকের সাথে যোগাযোগ', labelEn: 'Contact Teacher', icon: Mail },
  ];

  const handleNavClick = (id: string) => {
    if (id === 'chat') {
      setIsChatOpen(true);
    } else {
      setActiveView(id as any);
    }
    // Auto-close on mobile screen
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      closeSidebar();
    }
  };

  const isCollapsed = sidebarState === 'collapsed';
  const isClosed = sidebarState === 'closed';

  const getCourseIcon = (iconName: string) => {
    if (iconName === 'Radio') return <Radio className="w-4 h-4 text-emerald-600" />;
    if (iconName === 'Cpu') return <Cpu className="w-4 h-4 text-indigo-600" />;
    return <Sparkles className="w-4 h-4 text-amber-500" />;
  };

  return (
    <>
      {/* Mobile Backdrop Overlay (only active below md when sidebar is open) */}
      {!isClosed && (
        <div
          onClick={closeSidebar}
          className="fixed top-14 inset-x-0 bottom-0 bg-slate-900/40 backdrop-blur-xs z-25 md:hidden"
          aria-hidden="true"
        />
      )}

      {/* Main Sidebar Panel */}
      <aside
        className={`fixed top-14 bottom-0 left-0 z-30 bg-white border-r border-slate-200/90 flex flex-col transition-all duration-300 ease-in-out shadow-xs ${
          isClosed
            ? '-translate-x-full opacity-0 pointer-events-none'
            : 'translate-x-0 opacity-100'
        } ${
          isCollapsed ? 'w-20' : 'w-72'
        }`}
      >
        {/* Top Control Header inside Sidebar */}
        <div className={`p-3 border-b border-slate-100 flex items-center ${isCollapsed ? 'justify-center flex-col gap-2' : 'justify-between'}`}>
          {!isCollapsed ? (
            <>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  {language === 'bn' ? 'মেন্যু ও মডিউল' : 'Course Menu'}
                </span>
              </div>
              <div className="flex items-center gap-1">
                {/* Collapse / Minimize Button ("chuto kora") */}
                <button
                  onClick={toggleSidebarCollapse}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-emerald-700 hover:bg-slate-100 transition cursor-pointer"
                  title={language === 'bn' ? 'মিনিমাইজ / ছোট করুন (Collapse to icons)' : 'Collapse to compact view'}
                  aria-label="Collapse Sidebar"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                {/* Close Button ("close kora") */}
                <button
                  onClick={closeSidebar}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition cursor-pointer"
                  title={language === 'bn' ? 'মেন্যু বন্ধ করুন (Close Sidebar)' : 'Close Sidebar'}
                  aria-label="Close Sidebar"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Expand Button in Collapsed Mode */}
              <button
                onClick={toggleSidebarCollapse}
                className="p-2 rounded-xl text-emerald-700 hover:bg-emerald-50 border border-slate-200 transition cursor-pointer"
                title={language === 'bn' ? 'বড় করুন (Expand Sidebar)' : 'Expand Sidebar'}
                aria-label="Expand Sidebar"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              {/* Close Button */}
              <button
                onClick={closeSidebar}
                className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition cursor-pointer"
                title={language === 'bn' ? 'সম্পূর্ণ বন্ধ করুন (Hide)' : 'Hide Sidebar'}
                aria-label="Close Sidebar"
              >
                <X className="w-4 h-4" />
              </button>
            </>
          )}
        </div>

        {/* Main Navigation Items */}
        <div className={`p-2.5 space-y-1 ${isCollapsed ? 'flex flex-col items-center' : ''}`}>
          {!isCollapsed && (
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 py-0.5 block">
              {language === 'bn' ? 'নেভিগেশন' : 'Navigation'}
            </span>
          )}

          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            const label = language === 'bn' ? item.labelBn : item.labelEn;

            if (isCollapsed) {
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  title={label}
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition cursor-pointer relative ${
                    isActive
                      ? 'bg-emerald-700 text-white shadow-xs'
                      : item.isSpecial
                      ? 'text-emerald-700 bg-emerald-50 hover:bg-emerald-100'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {item.isSpecial && !isActive && (
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  )}
                </button>
              );
            }

            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                  isActive
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : item.isSpecial
                    ? 'text-emerald-800 bg-emerald-50/70 hover:bg-emerald-100/70'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : item.isSpecial ? 'text-emerald-700' : 'text-slate-400'}`} />
                <span className="flex-1 text-left truncate">{label}</span>
                {item.isSpecial && !isActive && (
                  <span className="text-[10px] bg-emerald-600 text-white px-1.5 py-0.2 rounded font-mono font-bold">
                    AI
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Modules & Courses Area */}
        <div className={`flex-1 overflow-y-auto px-2.5 py-2 border-t border-slate-100 ${isCollapsed ? 'space-y-3 flex flex-col items-center' : 'space-y-4'}`}>
          {!isCollapsed ? (
            <>
              <div className="flex items-center justify-between px-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  {language === 'bn' ? 'সিলেবাস ও অধ্যায়সমূহ' : 'Curriculum Modules'}
                </span>
              </div>

              <div className="space-y-3">
                {COURSES.map(course => (
                  <div key={course.id} className="space-y-1">
                    <div className="px-2 py-1 flex items-center justify-between text-[11px] font-bold text-slate-700">
                      <span className="truncate pr-1">
                        {language === 'bn' ? course.titleBn : course.titleEn}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded shrink-0">
                        {course.code}
                      </span>
                    </div>

                    <div className="space-y-0.5 pl-1.5">
                      {course.chapters.map(ch => {
                        const isSelected = activeCourseId === course.id && activeChapterId === ch.id && activeView === 'courses';
                        const isDone = progress.completedChapterIds.includes(ch.id);
                        const isComingSoon = ch.status === 'coming-soon';

                        return (
                          <button
                            key={ch.id}
                            disabled={isComingSoon}
                            onClick={() => {
                              selectChapter(course.id, ch.id);
                              if (typeof window !== 'undefined' && window.innerWidth < 768) closeSidebar();
                            }}
                            className={`w-full flex items-center justify-between p-2 rounded-lg text-xs transition cursor-pointer text-left ${
                              isSelected
                                ? 'bg-emerald-50 text-emerald-950 font-bold border-l-2 border-emerald-600'
                                : isComingSoon
                                ? 'text-slate-400 opacity-60 cursor-not-allowed'
                                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                            }`}
                          >
                            <div className="flex items-center gap-2 truncate pr-1">
                              {isDone ? (
                                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                              ) : isComingSoon ? (
                                <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                              ) : (
                                <div className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                              )}
                              <span className="truncate">{language === 'bn' ? ch.titleBn : ch.titleEn}</span>
                            </div>

                            {/* Status Badge */}
                            <span className={`text-[10px] shrink-0 font-medium px-1.5 py-0.2 rounded ${
                              isDone
                                ? 'bg-emerald-100 text-emerald-800'
                                : isComingSoon
                                ? 'bg-slate-100 text-slate-500'
                                : 'bg-amber-100 text-amber-800'
                            }`}>
                              {isDone
                                ? (language === 'bn' ? 'সম্পন্ন' : 'Done')
                                : isComingSoon
                                ? (language === 'bn' ? 'আসছে' : 'Soon')
                                : (language === 'bn' ? 'চলমান' : 'Active')}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            /* Collapsed Course Icons */
            COURSES.map(course => (
              <button
                key={course.id}
                onClick={() => {
                  const firstAvailable = course.chapters.find(ch => ch.status !== 'coming-soon') || course.chapters[0];
                  selectChapter(course.id, firstAvailable.id);
                }}
                title={`${course.code} - ${language === 'bn' ? course.titleBn : course.titleEn}`}
                className="w-12 h-12 rounded-xl flex flex-col items-center justify-center p-1 border border-slate-200/80 hover:border-emerald-500 hover:bg-emerald-50/50 transition cursor-pointer text-slate-700"
              >
                {getCourseIcon(course.icon)}
                <span className="text-[9px] font-mono font-bold text-slate-500 mt-0.5 leading-none">{course.code.slice(0, 5)}</span>
              </button>
            ))
          )}
        </div>

        {/* Footer Credit Area */}
        <div className={`border-t border-slate-100 bg-slate-50 ${isCollapsed ? 'p-2 flex justify-center' : 'p-3 text-center'}`}>
          {!isCollapsed ? (
            <div className="text-[11px] text-slate-500 leading-tight">
              <span className="font-semibold text-slate-700 block">Mohammed Nazmul Hoque Shawon</span>
              <span className="text-[10px]">Instructor, CST, Daffodil Institute (DIET)</span>
            </div>
          ) : (
            <div
              className="w-8 h-8 rounded-full bg-emerald-800 text-white font-bold text-xs flex items-center justify-center shadow-2xs"
              title="Mohammed Nazmul Hoque Shawon (Instructor CST, DIET)"
            >
              NS
            </div>
          )}
        </div>
      </aside>
    </>
  );
};
