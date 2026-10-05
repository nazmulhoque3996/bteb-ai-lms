export type Language = 'bn' | 'en';

export type ChapterStatus = 'done' | 'in-progress' | 'coming-soon';

export interface QuizQuestion {
  id: number;
  questionBn: string;
  questionEn: string;
  type: 'mcq' | 'true-false' | 'analytical';
  optionsBn?: string[];
  optionsEn?: string[];
  correctAnswer: string | number; // index or value
  marks: number;
  explanationBn?: string;
  explanationEn?: string;
}

export interface Chapter {
  id: string;
  courseId: string;
  titleBn: string;
  titleEn: string;
  descriptionBn: string;
  descriptionEn: string;
  status: ChapterStatus;
  durationMins: number;
  hasLecture: boolean;
  hasLessonPlan: boolean;
  hasQuiz: boolean;
  lectureHtmlFile?: string;
  lessonPlanHtmlFile?: string;
  quizHtmlFile?: string;
  quizQuestions?: QuizQuestion[];
  keyTopicsBn: string[];
  keyTopicsEn: string[];
}

export interface Course {
  id: string;
  code: string;
  titleBn: string;
  titleEn: string;
  deptBn: string;
  deptEn: string;
  semesterBn: string;
  semesterEn: string;
  credits: number;
  probidhan: string;
  coverGradient: string;
  icon: string;
  chapters: Chapter[];
}

export interface QuizAttempt {
  chapterId: string;
  score: number;
  totalMarks: number;
  percentage: number;
  completedAt: string;
  answers: Record<string | number, any>;
}

export interface StudentProgress {
  completedChapterIds: string[];
  quizAttempts: Record<string, QuizAttempt>;
  lastActiveChapterId: string;
  notes: Record<string, string>;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
}
