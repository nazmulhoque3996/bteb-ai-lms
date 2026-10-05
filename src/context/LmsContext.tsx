import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, StudentProgress, QuizAttempt } from '../types';
import { COURSES } from '../data/courses';

interface LmsContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  activeView: 'dashboard' | 'courses' | 'chat' | 'resources' | 'faqs' | 'contact';
  setActiveView: (view: 'dashboard' | 'courses' | 'chat' | 'resources' | 'faqs' | 'contact') => void;
  activeCourseId: string;
  activeChapterId: string;
  activeTab: 'lecture' | 'plan' | 'quiz';
  setActiveTab: (tab: 'lecture' | 'plan' | 'quiz') => void;
  selectChapter: (courseId: string, chapterId: string, tab?: 'lecture' | 'plan' | 'quiz') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  progress: StudentProgress;
  markChapterComplete: (chapterId: string) => void;
  saveQuizAttempt: (attempt: QuizAttempt) => void;
  saveNote: (chapterId: string, text: string) => void;
  resetProgress: () => void;
  exportProgress: () => void;
  isChatOpen: boolean;
  setIsChatOpen: (open: boolean) => void;
  totalChaptersCount: number;
  completedCount: number;
  completionPercentage: number;
}

const DEFAULT_PROGRESS: StudentProgress = {
  completedChapterIds: ['iot-architecture'], // starting with chapter 1 in progress/done
  quizAttempts: {},
  lastActiveChapterId: 'iot-in-agriculture',
  notes: {},
};

const LmsContext = createContext<LmsContextType | undefined>(undefined);

export const LmsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    return (localStorage.getItem('bteb_lms_lang') as Language) || 'bn';
  });

  const [activeView, setActiveView] = useState<'dashboard' | 'courses' | 'chat' | 'resources' | 'faqs' | 'contact'>('dashboard');
  const [activeCourseId, setActiveCourseId] = useState<string>('sensor-iot-28563');
  const [activeChapterId, setActiveChapterId] = useState<string>('iot-in-agriculture');
  const [activeTab, setActiveTab] = useState<'lecture' | 'plan' | 'quiz'>('lecture');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

  const [progress, setProgress] = useState<StudentProgress>(() => {
    try {
      const saved = localStorage.getItem('bteb_lms_progress');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to load progress from localStorage', e);
    }
    return DEFAULT_PROGRESS;
  });

  useEffect(() => {
    localStorage.setItem('bteb_lms_lang', language);
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    try {
      localStorage.setItem('bteb_lms_progress', JSON.stringify(progress));
    } catch (e) {
      console.error('Failed to save progress to localStorage', e);
    }
  }, [progress]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState(prev => (prev === 'bn' ? 'en' : 'bn'));
  };

  const selectChapter = (courseId: string, chapterId: string, tab: 'lecture' | 'plan' | 'quiz' = 'lecture') => {
    setActiveCourseId(courseId);
    setActiveChapterId(chapterId);
    setActiveTab(tab);
    setActiveView('courses');
    setProgress(prev => ({
      ...prev,
      lastActiveChapterId: chapterId,
    }));
  };

  const markChapterComplete = (chapterId: string) => {
    setProgress(prev => {
      const isAlready = prev.completedChapterIds.includes(chapterId);
      const newCompleted = isAlready
        ? prev.completedChapterIds.filter(id => id !== chapterId)
        : [...prev.completedChapterIds, chapterId];
      return {
        ...prev,
        completedChapterIds: newCompleted,
      };
    });
  };

  const saveQuizAttempt = (attempt: QuizAttempt) => {
    setProgress(prev => ({
      ...prev,
      quizAttempts: {
        ...prev.quizAttempts,
        [attempt.chapterId]: attempt,
      },
      completedChapterIds: prev.completedChapterIds.includes(attempt.chapterId)
        ? prev.completedChapterIds
        : [...prev.completedChapterIds, attempt.chapterId],
    }));
  };

  const saveNote = (chapterId: string, text: string) => {
    setProgress(prev => ({
      ...prev,
      notes: {
        ...prev.notes,
        [chapterId]: text,
      },
    }));
  };

  const resetProgress = () => {
    if (window.confirm(language === 'bn' ? 'আপনি কি সমস্ত পড়ার অগ্রগতি ও কুইজের রেকর্ড রিসেট করতে চান?' : 'Are you sure you want to reset all learning progress and quiz records?')) {
      setProgress({
        completedChapterIds: [],
        quizAttempts: {},
        lastActiveChapterId: 'iot-architecture',
        notes: {},
      });
    }
  };

  const exportProgress = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(progress, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `bteb_lms_progress_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Compute overall stats
  const activeAvailableChapters = COURSES.flatMap(c => c.chapters).filter(ch => ch.status !== 'coming-soon');
  const totalChaptersCount = activeAvailableChapters.length;
  const completedCount = activeAvailableChapters.filter(ch => progress.completedChapterIds.includes(ch.id)).length;
  const completionPercentage = totalChaptersCount > 0 ? Math.round((completedCount / totalChaptersCount) * 100) : 0;

  return (
    <LmsContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        activeView,
        setActiveView,
        activeCourseId,
        activeChapterId,
        activeTab,
        setActiveTab,
        selectChapter,
        searchQuery,
        setSearchQuery,
        progress,
        markChapterComplete,
        saveQuizAttempt,
        saveNote,
        resetProgress,
        exportProgress,
        isChatOpen,
        setIsChatOpen,
        totalChaptersCount,
        completedCount,
        completionPercentage,
      }}
    >
      {children}
    </LmsContext.Provider>
  );
};

export const useLms = () => {
  const context = useContext(LmsContext);
  if (!context) {
    throw new Error('useLms must be used within an LmsProvider');
  }
  return context;
};
