import React, { useState, useEffect } from 'react';
import { useLms } from '../context/LmsContext';
import { QuizQuestion } from '../types';
import { Clock, CheckCircle2, XCircle, RotateCcw, Award, AlertCircle, Printer, BookOpen } from 'lucide-react';

interface InteractiveQuizPlayerProps {
  chapterId: string;
  chapterTitle: string;
  questions: QuizQuestion[];
}

export const InteractiveQuizPlayer: React.FC<InteractiveQuizPlayerProps> = ({
  chapterId,
  chapterTitle,
  questions
}) => {
  const { language, saveQuizAttempt, progress } = useLms();

  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, any>>({});
  const [analyticalAnswer, setAnalyticalAnswer] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [calculatedScore, setCalculatedScore] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(15 * 60); // 15 mins
  const [showTeacherKey, setShowTeacherKey] = useState<boolean>(false);

  // Existing attempt if any
  const previousAttempt = progress.quizAttempts[chapterId];

  // Timer countdown
  useEffect(() => {
    if (isSubmitted || timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          handleSubmit(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isSubmitted, timeLeft]);

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSelectOption = (questionId: number, optionIndex: number | string) => {
    if (isSubmitted) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const answeredCount = Object.keys(selectedAnswers).length + (analyticalAnswer.trim().length > 5 ? 1 : 0);
  const totalQuestions = questions.length;
  const progressPercent = Math.min(100, Math.round((answeredCount / totalQuestions) * 100));

  const handleSubmit = (isAuto: boolean = false) => {
    if (isSubmitted) return;

    let score = 0;
    let totalMarks = 0;

    questions.forEach(q => {
      totalMarks += q.marks;
      if (q.type === 'mcq' || q.type === 'true-false') {
        const userAnswer = selectedAnswers[q.id];
        if (userAnswer !== undefined && Number(userAnswer) === Number(q.correctAnswer)) {
          score += q.marks;
        }
      } else if (q.type === 'analytical') {
        // For analytical 5 marks question, if student provided thoughtful answer (> 20 chars), give base score and note instructor assessment
        if (analyticalAnswer.trim().length >= 25) {
          score += Math.min(5, Math.round(q.marks * 0.8)); // provisional 4/5 marks
        }
      }
    });

    setCalculatedScore(score);
    setIsSubmitted(true);

    // Save to context / localStorage
    saveQuizAttempt({
      chapterId,
      score,
      totalMarks: 15,
      percentage: Math.round((score / 15) * 100),
      completedAt: new Date().toISOString(),
      answers: { ...selectedAnswers, analytical: analyticalAnswer }
    });
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setAnalyticalAnswer('');
    setIsSubmitted(false);
    setCalculatedScore(0);
    setTimeLeft(15 * 60);
    setShowTeacherKey(false);
  };

  return (
    <div className="space-y-6 printable-content">
      {/* Quiz Header Bar */}
      <div className="bg-gradient-to-r from-slate-900 to-emerald-950 text-white p-5 sm:p-6 rounded-2xl border border-emerald-900/60 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-900/50 px-2.5 py-1 rounded-full uppercase tracking-wider">
            15 Marks Class Quiz
          </span>
          <h2 className="text-xl sm:text-2xl font-bold mt-2">
            {chapterTitle}
          </h2>
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 mt-2">
            <span>🎯 পূর্ণমান: ১৫</span>
            <span>·</span>
            <span>📝 মোট প্রশ্ন: {questions.length}টি</span>
            <span>·</span>
            <span>⏱️ সময়: ১৫ মিনিট</span>
          </div>
        </div>

        {/* Live Timer Card */}
        <div className={`p-3 rounded-xl border flex items-center gap-3 font-mono ${
          timeLeft <= 60
            ? 'bg-rose-950/80 border-rose-500 text-rose-300 animate-pulse'
            : 'bg-white/10 border-white/15 text-emerald-300'
        }`}>
          <Clock className="w-5 h-5 text-amber-400" />
          <div>
            <div className="text-xl sm:text-2xl font-bold leading-none">{formatTimer(timeLeft)}</div>
            <div className="text-[10px] text-slate-300 uppercase tracking-wider mt-0.5">Remaining</div>
          </div>
        </div>
      </div>

      {/* Answered Progress Track */}
      <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm">
        <div className="flex justify-between items-center text-xs font-semibold text-slate-600 mb-2">
          <span>{language === 'bn' ? 'উত্তর সম্পন্ন:' : 'Answered Progress:'} {answeredCount} / {totalQuestions}</span>
          <span>{progressPercent}%</span>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
          <div
            className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2.5 transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Result Card (shown after submission) */}
      {isSubmitted && (
        <div className="bg-gradient-to-br from-emerald-900 to-teal-900 text-white rounded-2xl p-6 sm:p-7 shadow-lg border border-emerald-500/30 text-center animate-in fade-in duration-300">
          <Award className="w-12 h-12 text-amber-300 mx-auto mb-2" />
          <h3 className="text-xl font-bold">
            {language === 'bn' ? 'কুইজের ফলাফল ও মূল্যায়ন' : 'Quiz Evaluation Result'}
          </h3>
          <div className="text-4xl sm:text-5xl font-black text-amber-300 font-mono my-3">
            {calculatedScore} <span className="text-xl font-normal text-emerald-200">/ 15</span>
          </div>
          <p className="text-sm text-emerald-100 max-w-md mx-auto leading-relaxed">
            {calculatedScore >= 13
              ? 'চমৎকার! আপনি এই অধ্যায়ের প্রতিটি কারিগরি কনসেপ্ট অত্যন্ত দক্ষতার সাথে আয়ত্ত করেছেন।'
              : calculatedScore >= 10
              ? 'ভালো হয়েছে! কিছু খুঁটিনাটি বিষয় নিচে দেওয়া উত্তরমালা থেকে আরেকবার রিভাইজ করুন।'
              : 'আরেকটু প্রস্তুতি নেওয়া প্রয়োজন। লেকচার নোটসটি পড়ে পুনরায় কুইজটি দিন।'}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-5">
            <button
              onClick={() => setShowTeacherKey(!showTeacherKey)}
              className="px-4 py-2 bg-amber-400 text-slate-900 font-bold rounded-xl text-xs sm:text-sm hover:bg-amber-300 transition flex items-center gap-1.5 cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              {showTeacherKey ? (language === 'bn' ? 'উত্তরমালা লুকান' : 'Hide Answer Key') : (language === 'bn' ? 'শিক্ষক সমাধান ও উত্তরমালা দেখুন' : 'Show Teacher Answer Key')}
            </button>
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-white/15 text-white font-semibold rounded-xl text-xs sm:text-sm hover:bg-white/20 transition flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" /> {language === 'bn' ? 'পুনরায় কুইজ দিন' : 'Retake Quiz'}
            </button>
          </div>
        </div>
      )}

      {/* Questions List */}
      <div className="space-y-4">
        {questions.map((q, idx) => {
          const isAnalytical = q.type === 'analytical';
          const isTrueFalse = q.type === 'true-false';
          const options = language === 'bn' ? (q.optionsBn || []) : (q.optionsEn || []);
          const isSelected = selectedAnswers[q.id] !== undefined;

          return (
            <div
              key={q.id}
              className={`bg-white rounded-xl p-5 border transition-all ${
                isSubmitted && !isAnalytical
                  ? Number(selectedAnswers[q.id]) === Number(q.correctAnswer)
                    ? 'border-emerald-300 bg-emerald-50/20'
                    : isSelected
                    ? 'border-rose-300 bg-rose-50/20'
                    : 'border-slate-200'
                  : 'border-slate-200/90 shadow-sm'
              }`}
            >
              {/* Question Header */}
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                  {language === 'bn' ? q.questionBn : q.questionEn}
                </h3>
                <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 shrink-0">
                  {q.marks} {language === 'bn' ? 'নম্বর' : 'Mark'}
                </span>
              </div>

              {/* Options (MCQ / True-False) */}
              {!isAnalytical && options.length > 0 && (
                <div className={`grid gap-2.5 mt-4 ${isTrueFalse ? 'grid-cols-2' : 'grid-cols-1 sm:grid-cols-2'}`}>
                  {options.map((opt, optIdx) => {
                    const isChoice = Number(selectedAnswers[q.id]) === optIdx;
                    const isCorrect = Number(q.correctAnswer) === optIdx;

                    let optionStyle = 'border-slate-200 hover:border-emerald-300 hover:bg-slate-50 text-slate-700';

                    if (isSubmitted) {
                      if (isCorrect) {
                        optionStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-semibold ring-1 ring-emerald-500';
                      } else if (isChoice && !isCorrect) {
                        optionStyle = 'border-rose-400 bg-rose-50 text-rose-900';
                      } else {
                        optionStyle = 'border-slate-200 opacity-60 text-slate-500';
                      }
                    } else if (isChoice) {
                      optionStyle = 'border-emerald-600 bg-emerald-50/80 text-emerald-950 font-semibold shadow-xs';
                    }

                    return (
                      <button
                        key={optIdx}
                        disabled={isSubmitted}
                        onClick={() => handleSelectOption(q.id, optIdx)}
                        className={`text-left p-3 rounded-lg border text-xs sm:text-sm flex items-center justify-between transition cursor-pointer ${optionStyle}`}
                      >
                        <span>{opt}</span>
                        {isSubmitted && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                        {isSubmitted && isChoice && !isCorrect && <XCircle className="w-4 h-4 text-rose-500 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Analytical Scenario Textarea */}
              {isAnalytical && (
                <div className="mt-3.5 space-y-2">
                  <textarea
                    rows={4}
                    disabled={isSubmitted}
                    value={analyticalAnswer}
                    onChange={(e) => setAnalyticalAnswer(e.target.value)}
                    placeholder={language === 'bn' ? 'এখানে আপনার বিশদ উত্তর ও ট্রাবলশুটিং ধাপসমূহ লিখুন...' : 'Write your step-by-step diagnostic workflow and causes here...'}
                    className="w-full text-xs sm:text-sm p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50 font-sans"
                  />
                  <div className="flex justify-between items-center text-[11px] text-slate-500">
                    <span>{language === 'bn' ? 'সম্ভাব্য কারণ ও ৫টি ধাপ স্পষ্টভাবে উল্লেখ করুন।' : 'Clearly outline root causes and diagnostic steps.'}</span>
                    <span>{analyticalAnswer.length} chars</span>
                  </div>
                </div>
              )}

              {/* Explanation (Shown when submitted or teacher key open) */}
              {(isSubmitted || showTeacherKey) && (
                <div className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-600 bg-slate-50/70 p-3 rounded-lg flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-emerald-800 block mb-0.5">
                      {language === 'bn' ? 'সঠিক উত্তরের বিশ্লেষণ:' : 'Technical Explanation:'}
                    </strong>
                    <span>{language === 'bn' ? q.explanationBn : q.explanationEn}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm no-print">
        <div className="text-xs text-slate-500">
          {isSubmitted ? (
            <span className="text-emerald-700 font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> আপনার কুইজ সংরক্ষণ সম্পন্ন হয়েছে।
            </span>
          ) : (
            <span>সবগুলো প্রশ্নের উত্তর সম্পন্ন করে Submit বাটনে ক্লিক করুন।</span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => window.print()}
            className="px-3.5 py-2 border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
          >
            <Printer className="w-4 h-4" /> Print / Save PDF
          </button>
          {!isSubmitted ? (
            <button
              onClick={() => handleSubmit(false)}
              className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-xs sm:text-sm shadow-sm transition flex items-center gap-1.5 cursor-pointer"
            >
              ✓ Submit Quiz (১৫ নম্বর)
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="px-5 py-2 bg-slate-800 hover:bg-slate-900 text-white font-bold rounded-lg text-xs sm:text-sm transition flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" /> Retake Quiz
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
