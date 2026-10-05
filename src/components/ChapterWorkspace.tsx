import React, { useState } from 'react';
import { useLms } from '../context/LmsContext';
import { COURSES } from '../data/courses';
import { IotArchitectureContent } from './content/IotArchitectureContent';
import { IotAgricultureContent } from './content/IotAgricultureContent';
import { ComputerStructureContent } from './content/ComputerStructureContent';
import { InteractiveQuizPlayer } from './InteractiveQuizPlayer';
import { 
  BookOpen, 
  Calendar, 
  Award, 
  CheckCircle2, 
  Printer, 
  Maximize2, 
  Minimize2, 
  ChevronLeft, 
  ChevronRight,
  ArrowLeft
} from 'lucide-react';

export const ChapterWorkspace: React.FC = () => {
  const {
    language,
    activeCourseId,
    activeChapterId,
    activeTab,
    setActiveTab,
    selectChapter,
    progress,
    markChapterComplete,
    setActiveView
  } = useLms();

  const [isDistractionFree, setIsDistractionFree] = useState<boolean>(false);

  const course = COURSES.find(c => c.id === activeCourseId) || COURSES[0];
  const chapter = course.chapters.find(ch => ch.id === activeChapterId) || course.chapters[0];
  const isCompleted = progress.completedChapterIds.includes(chapter.id);

  // Compute next and previous chapters across the active course
  const currentChapterIndex = course.chapters.findIndex(ch => ch.id === chapter.id);
  const prevChapter = currentChapterIndex > 0 ? course.chapters[currentChapterIndex - 1] : null;
  const nextChapter = currentChapterIndex < course.chapters.length - 1 ? course.chapters[currentChapterIndex + 1] : null;

  return (
    <div className={`space-y-6 ${isDistractionFree ? 'fixed inset-0 z-50 bg-[#F8FAFC] overflow-y-auto p-4 sm:p-8' : ''}`}>
      {/* Chapter Top Bar / Breadcrumb */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveView('dashboard')}
            className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition cursor-pointer"
            title="Back to Dashboard"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <span>{language === 'bn' ? course.titleBn : course.titleEn}</span>
              <span>·</span>
              <span className="font-mono text-emerald-700 font-bold">{course.code}</span>
              <span>·</span>
              <span>{course.probidhan}</span>
            </div>
            <h1 className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
              {language === 'bn' ? chapter.titleBn : chapter.titleEn}
            </h1>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Mark as Complete Button */}
          <button
            onClick={() => markChapterComplete(chapter.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              isCompleted
                ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                : 'bg-white border border-slate-300 text-slate-700 hover:border-emerald-500 hover:text-emerald-700'
            }`}
          >
            <CheckCircle2 className={`w-4 h-4 ${isCompleted ? 'text-emerald-600' : 'text-slate-400'}`} />
            <span>
              {isCompleted
                ? (language === 'bn' ? 'অধ্যায় সম্পন্ন ✓' : 'Completed ✓')
                : (language === 'bn' ? 'সম্পন্ন চিহ্নিত করুন' : 'Mark as Done')}
            </span>
          </button>

          {/* Distraction Free Mode */}
          <button
            onClick={() => setIsDistractionFree(!isDistractionFree)}
            className="p-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition cursor-pointer"
            title={isDistractionFree ? 'Exit Full Screen' : 'Distraction-Free Reading Mode'}
          >
            {isDistractionFree ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          {/* Print Button */}
          <button
            onClick={() => window.print()}
            className="hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold cursor-pointer"
            title="Print Lecture Handout"
          >
            <Printer className="w-3.5 h-3.5 text-slate-500" />
            <span>Print</span>
          </button>
        </div>
      </div>

      {/* Interactive Tabs Header */}
      <div className="flex items-center gap-2 p-1.5 bg-slate-200/70 rounded-2xl w-fit border border-slate-200">
        <button
          onClick={() => setActiveTab('lecture')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
            activeTab === 'lecture'
              ? 'bg-white text-emerald-950 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <BookOpen className="w-4 h-4 text-emerald-600" />
          <span>{language === 'bn' ? 'লেকচার নোটস (Lecture)' : 'Lecture Notes'}</span>
        </button>

        <button
          onClick={() => setActiveTab('plan')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
            activeTab === 'plan'
              ? 'bg-white text-emerald-950 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Calendar className="w-4 h-4 text-teal-600" />
          <span>{language === 'bn' ? 'লেসন প্ল্যান (Lesson Plan)' : 'Lesson Plan'}</span>
        </button>

        <button
          onClick={() => setActiveTab('quiz')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
            activeTab === 'quiz'
              ? 'bg-white text-emerald-950 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Award className="w-4 h-4 text-amber-500" />
          <span>{language === 'bn' ? '১৫-মার্ক কুইজ (Quiz)' : 'Interactive Quiz (15M)'}</span>
        </button>
      </div>

      {/* Tab Content Renderer */}
      <div className="transition-all duration-300">
        {/* LECTURE TAB */}
        {activeTab === 'lecture' && (
          <div>
            {chapter.id === 'iot-architecture' && <IotArchitectureContent />}
            {chapter.id === 'iot-in-agriculture' && <IotAgricultureContent />}
            {chapter.id === 'basic-structure-generations' && <ComputerStructureContent />}
          </div>
        )}

        {/* LESSON PLAN TAB */}
        {activeTab === 'plan' && (
          <div>
            {chapter.id === 'iot-in-agriculture' ? (
              <IotAgricultureContent />
            ) : chapter.id === 'iot-architecture' ? (
              <IotArchitectureContent />
            ) : (
              <ComputerStructureContent />
            )}
          </div>
        )}

        {/* QUIZ TAB */}
        {activeTab === 'quiz' && (
          <div>
            {chapter.quizQuestions && chapter.quizQuestions.length > 0 ? (
              <InteractiveQuizPlayer
                chapterId={chapter.id}
                chapterTitle={language === 'bn' ? chapter.titleBn : chapter.titleEn}
                questions={chapter.quizQuestions}
              />
            ) : (
              <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center">
                <p className="text-slate-500 text-sm">
                  {language === 'bn' ? 'এই অধ্যায়ের কুইজ শীঘ্রই যুক্ত করা হবে।' : 'Quiz for this chapter is coming soon.'}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Chapter Next / Previous Footer */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-white rounded-2xl border border-slate-200/80 shadow-2xs no-print">
        {prevChapter && prevChapter.status !== 'coming-soon' ? (
          <button
            onClick={() => selectChapter(course.id, prevChapter.id)}
            className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-emerald-700 transition cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>
              {language === 'bn' ? 'পূর্ববর্তী অধ্যায়:' : 'Previous:'} {language === 'bn' ? prevChapter.titleBn : prevChapter.titleEn}
            </span>
          </button>
        ) : <div />}

        {nextChapter && nextChapter.status !== 'coming-soon' ? (
          <button
            onClick={() => selectChapter(course.id, nextChapter.id)}
            className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition cursor-pointer"
          >
            <span>
              {language === 'bn' ? 'পরবর্তী অধ্যায়:' : 'Next:'} {language === 'bn' ? nextChapter.titleBn : nextChapter.titleEn}
            </span>
            <ChevronRight className="w-4 h-4" />
          </button>
        ) : <div />}
      </div>
    </div>
  );
};
