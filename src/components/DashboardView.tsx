import React from 'react';
import { useLms } from '../context/LmsContext';
import { COURSES, TEACHER_PROFILE } from '../data/courses';
import { 
  BookOpen, 
  CheckCircle, 
  Clock, 
  ArrowRight, 
  Award, 
  Radio, 
  Cpu, 
  Sparkles, 
  GraduationCap, 
  Mail, 
  FileText,
  UserCheck
} from 'lucide-react';

export const DashboardView: React.FC = () => {
  const {
    language,
    selectChapter,
    progress,
    completionPercentage,
    completedCount,
    totalChaptersCount,
    searchQuery,
    setSearchQuery,
    setIsChatOpen,
    setActiveView
  } = useLms();

  // Find last active chapter
  const allChapters = COURSES.flatMap(c => c.chapters);
  const lastActive = allChapters.find(ch => ch.id === progress.lastActiveChapterId) || allChapters[1];
  const lastActiveCourse = COURSES.find(c => c.id === lastActive.courseId) || COURSES[0];

  // Filter if search query exists
  const filteredChapters = searchQuery.trim()
    ? allChapters.filter(ch =>
        ch.titleBn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ch.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ch.descriptionBn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ch.descriptionEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ch.keyTopicsBn.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        ch.keyTopicsEn.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : null;

  return (
    <div className="space-y-8">
      {/* Search Filter Header (if searching) */}
      {filteredChapters && (
        <div className="bg-white p-5 rounded-2xl border border-emerald-200 shadow-xs">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-slate-900 text-sm">
              {language === 'bn' ? `"${searchQuery}" এর জন্য অনুসন্ধানের ফলাফল:` : `Search results for "${searchQuery}":`}
            </h3>
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs text-slate-500 hover:text-slate-800 underline cursor-pointer"
            >
              Clear Search
            </button>
          </div>
          {filteredChapters.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filteredChapters.map(ch => {
                const parentCourse = COURSES.find(c => c.id === ch.courseId)!;
                return (
                  <button
                    key={ch.id}
                    onClick={() => selectChapter(ch.courseId, ch.id)}
                    className="p-3 text-left rounded-xl border border-slate-200 bg-slate-50 hover:bg-emerald-50/50 hover:border-emerald-300 transition cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded">
                        {parentCourse.code}
                      </span>
                      <h4 className="font-bold text-slate-900 text-sm mt-1">
                        {language === 'bn' ? ch.titleBn : ch.titleEn}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                        {language === 'bn' ? ch.descriptionBn : ch.descriptionEn}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          ) : (
            <p className="text-xs text-slate-500 py-3">
              {language === 'bn' ? 'কোনো ফলাফল পাওয়া যায়নি। অন্য কীওয়ার্ড দিয়ে খুঁজুন।' : 'No matches found. Try another search query.'}
            </p>
          )}
        </div>
      )}

      {/* Hero Welcome & Quick Continue Banner */}
      <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-950 text-white rounded-3xl p-6 sm:p-9 shadow-md relative overflow-hidden">
        <div className="max-w-2xl relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-emerald-200">
            <GraduationCap className="w-4 h-4 text-amber-300" />
            <span>BTEB Diploma in Engineering • Probidhan 2022</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
            {language === 'bn'
              ? 'ডিপ্লোমা ইঞ্জিনিয়ারিং ও শিক্ষক প্রশিক্ষণ পোর্টাল'
              : 'Polytechnic Diploma & Teacher Training Portal'}
          </h1>

          <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
            {language === 'bn'
              ? 'সেন্সর ও আইওটি সিস্টেম (Code: 28563), কম্পিউটার টেকনোলজি এবং শিক্ষকদের আধুনিক এআই পাঠদান মডিউল সমৃদ্ধ সম্পূর্ণ ডিজিটাল লার্নিং প্ল্যাটফর্ম।'
              : 'Dedicated bilingual LMS for Sensor & IoT Systems (Code: 28563), Computer Fundamentals, and AI for Teachers with 15-mark quizzes and grounded AI assistance.'}
          </p>

          {/* Quick Continue Action Button */}
          {lastActive && (
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => selectChapter(lastActiveCourse.id, lastActive.id)}
                className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl text-xs sm:text-sm shadow-sm transition flex items-center gap-2 cursor-pointer"
              >
                <span>{language === 'bn' ? 'পড়া চালিয়ে যান:' : 'Resume Learning:'}</span>
                <span className="font-semibold text-slate-800">
                  {language === 'bn' ? lastActive.titleBn : lastActive.titleEn}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsChatOpen(true)}
                className="px-4 py-2.5 bg-white/15 hover:bg-white/20 text-white font-semibold rounded-xl text-xs sm:text-sm transition flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-emerald-300" />
                <span>{language === 'bn' ? 'AI শিক্ষককে প্রশ্ন করুন' : 'Ask AI Tutor'}</span>
              </button>
            </div>
          )}
        </div>

        {/* Decorative corner background */}
        <div className="absolute -right-10 -bottom-10 w-72 h-72 rounded-full bg-emerald-500/10 pointer-events-none blur-2xl" />
      </div>

      {/* Progress & Stat Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Progress Card */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              {language === 'bn' ? 'সার্বিক অগ্রগতি' : 'Overall Progress'}
            </span>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-3xl font-extrabold text-slate-900 font-mono">{completionPercentage}%</span>
              <span className="text-xs text-slate-500">
                ({completedCount} / {totalChaptersCount} {language === 'bn' ? 'অধ্যায় সম্পন্ন' : 'Chapters Done'})
              </span>
            </div>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2 mt-3 overflow-hidden">
            <div
              className="bg-emerald-600 h-2 rounded-full transition-all"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </div>

        {/* Enrolled Courses */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900 font-mono">{COURSES.length}</div>
            <div className="text-xs text-slate-500 mt-0.5">
              {language === 'bn' ? 'নিবন্ধিত কোর্সসমূহ' : 'Curriculum Courses'}
            </div>
          </div>
        </div>

        {/* Quizzes Taken */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900 font-mono">
              {Object.keys(progress.quizAttempts).length}
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              {language === 'bn' ? 'কুইজ সম্পন্ন হয়েছে' : 'Quizzes Completed'}
            </div>
          </div>
        </div>

        {/* AI Assisted Questions */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
            <UserCheck className="w-6 h-6" />
          </div>
          <div>
            <div className="text-sm font-bold text-slate-900 truncate">Mohammed Nazmul Hoque</div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              Instructor &amp; Course Lead (DIET)
            </div>
          </div>
        </div>
      </div>

      {/* Courses & Chapters Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">
            {language === 'bn' ? 'কোর্স ও অধ্যায়সমূহ' : 'Courses & Chapters'}
          </h2>
          <span className="text-xs font-semibold text-slate-500">
            {language === 'bn' ? 'অধ্যায়ে ক্লিক করে পড়া শুরু করুন' : 'Click chapter to open workstation'}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {COURSES.map(course => {
            const courseCompleted = course.chapters.filter(ch => progress.completedChapterIds.includes(ch.id)).length;
            const courseTotal = course.chapters.filter(ch => ch.status !== 'coming-soon').length;

            return (
              <div
                key={course.id}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs flex flex-col justify-between"
              >
                {/* Course Header */}
                <div className={`p-5 bg-gradient-to-r ${course.coverGradient} text-white`}>
                  <div className="flex justify-between items-start gap-2">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 bg-white/20 rounded">
                      {course.code}
                    </span>
                    <span className="text-[11px] font-medium text-emerald-200">
                      {language === 'bn' ? course.semesterBn : course.semesterEn}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mt-3 leading-snug">
                    {language === 'bn' ? course.titleBn : course.titleEn}
                  </h3>
                  <div className="text-xs text-slate-300 mt-1">
                    {language === 'bn' ? course.deptBn : course.deptEn}
                  </div>
                </div>

                {/* Chapters List */}
                <div className="p-4 space-y-2 flex-1">
                  {course.chapters.map(ch => {
                    const isDone = progress.completedChapterIds.includes(ch.id);
                    const isComingSoon = ch.status === 'coming-soon';

                    return (
                      <button
                        key={ch.id}
                        disabled={isComingSoon}
                        onClick={() => selectChapter(course.id, ch.id)}
                        className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between gap-3 ${
                          isComingSoon
                            ? 'border-slate-100 bg-slate-50/50 text-slate-400 cursor-not-allowed'
                            : isDone
                            ? 'border-emerald-200 bg-emerald-50/30 text-slate-900 hover:border-emerald-400 cursor-pointer'
                            : 'border-slate-200 bg-white hover:border-emerald-400 hover:bg-slate-50 cursor-pointer'
                        }`}
                      >
                        <div className="truncate">
                          <h4 className="font-bold text-xs sm:text-sm text-slate-800 truncate">
                            {language === 'bn' ? ch.titleBn : ch.titleEn}
                          </h4>
                          <span className="text-[11px] text-slate-500 block truncate mt-0.5">
                            {ch.hasQuiz ? (language === 'bn' ? 'লেকচার + ১৫-মার্ক কুইজ' : 'Lecture + 15M Quiz') : (language === 'bn' ? 'শীঘ্রই আসছে' : 'Coming Soon')}
                          </span>
                        </div>

                        {/* Status Badge */}
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${
                          isDone
                            ? 'bg-emerald-100 text-emerald-800'
                            : isComingSoon
                            ? 'bg-slate-100 text-slate-400'
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          {isDone
                            ? (language === 'bn' ? 'সম্পন্ন ✓' : 'Done ✓')
                            : isComingSoon
                            ? (language === 'bn' ? 'আসছে' : 'Soon')
                            : (language === 'bn' ? 'শুরু করুন' : 'Start')}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Card Footer */}
                <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>{course.probidhan}</span>
                  <span className="font-semibold text-slate-700">
                    {courseCompleted} / {courseTotal} {language === 'bn' ? 'সম্পন্ন' : 'Completed'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Instructor Profile Card */}
      <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-800 to-teal-600 text-white flex items-center justify-center font-bold text-2xl shadow-sm shrink-0">
            👨‍🏫
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-full">
              Course Creator &amp; Instructor
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
              {language === 'bn' ? TEACHER_PROFILE.nameBn : TEACHER_PROFILE.nameEn}
            </h3>
            <p className="text-xs text-slate-600 mt-0.5">
              {language === 'bn' ? TEACHER_PROFILE.titleBn : TEACHER_PROFILE.titleEn} · {language === 'bn' ? TEACHER_PROFILE.institutionBn : TEACHER_PROFILE.institutionEn}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveView('contact')}
            className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition cursor-pointer flex items-center gap-1.5"
          >
            <Mail className="w-4 h-4" />
            <span>{language === 'bn' ? 'শিক্ষককে বার্তা দিন' : 'Message Instructor'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
