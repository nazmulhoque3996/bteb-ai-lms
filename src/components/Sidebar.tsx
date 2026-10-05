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
  ChevronRight,
  GraduationCap
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const {
    language,
    activeView,
    setActiveView,
    activeCourseId,
    activeChapterId,
    selectChapter,
    progress,
    setIsChatOpen
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
    if (window.innerWidth < 768) {
      onClose();
    }
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-40 md:hidden"
        />
      )}

      {/* Sidebar Panel */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-72 bg-white border-r border-slate-200/90 flex flex-col transition-transform duration-300 ease-in-out md:translate-x-0 ${
          isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
        }`}
      >
        {/* Header branding on mobile */}
        <div className="p-4 border-b border-slate-100 flex items-center justify-between md:hidden">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-emerald-700" />
            <span className="font-bold text-slate-900 text-sm">BTEB Diploma LMS</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
          >
            ✕
          </button>
        </div>

        {/* Navigation List */}
        <div className="p-3.5 space-y-1">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1 block">
            {language === 'bn' ? 'প্রধান মেন্যু' : 'Main Navigation'}
          </span>
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
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
                <span className="flex-1 text-left">
                  {language === 'bn' ? item.labelBn : item.labelEn}
                </span>
                {item.isSpecial && !isActive && (
                  <span className="text-[10px] bg-emerald-600 text-white px-1.5 py-0.2 rounded font-mono font-bold">
                    AI
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Enrolled Courses Accordion / Quick List */}
        <div className="flex-1 overflow-y-auto px-3.5 py-2 border-t border-slate-100 space-y-4">
          <div className="flex items-center justify-between px-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
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
                  <span className="text-[10px] font-mono text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
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
                          if (window.innerWidth < 768) onClose();
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
        </div>

        {/* Footer Credit */}
        <div className="p-3 border-t border-slate-100 bg-slate-50 text-[11px] text-slate-500 text-center leading-relaxed">
          <span className="font-semibold text-slate-700 block">Mohammed Nazmul Hoque Shawon</span>
          <span>Instructor, CST, Daffodil Institute of Engineering &amp; Technology</span>
        </div>
      </aside>
    </>
  );
};
