# AI for Teachers & BTEB Diploma LMS

A modern, responsive, bilingual Learning Management System (LMS) specifically crafted for Bangladesh Technical Education Board (BTEB) Diploma in Engineering students and teachers, featuring structured course modules, interactive 15-mark quizzes with instant scoring, and a grounded Gemini-powered BTEB Teacher Assistant.

### User Review & Critical Decisions

> [!IMPORTANT]
> The following design and architectural choices have been confirmed based on user feedback:

- **Confirmed Decision 1 (Reading Mode)**: Interactive stylized tabs with distraction-free reading mode and print utility for lecture notes and lesson plans.
- **Confirmed Decision 2 (Data Persistence)**: Client-side `localStorage` caching for module completion states, quiz scores, and retake records, with export/reset options.
- **Confirmed Decision 3 (Gemini AI Tutor Persona & Mode)**: Friendly, encouraging BTEB polytechnic instructor assistant persona (`models/gemini-3.8-flash`) answering queries strictly grounded in the uploaded syllabus materials with bilingual (Bangla & English) support and quick suggestion chips.
- **Confirmed Decision 4 (Bilingual Experience)**: Global instant toggle between Bangla (বাংলা) and English across all UI labels, navigation, progress badges, and tutor suggestions.

---

### 1. Overview & Core Concept

- **What It Does**: Provides a dedicated, high-contrast, mobile-first academic platform for BTEB CST and Electronics polytechnic diploma students. It organizes curricula into intuitive course tracks:
  1. *Course 1: Sensor & IoT Systems (Code: 28563)* — Chapter 1 (IoT & Architecture) & Chapter 2 (IoT in Agriculture).
  2. *Course 2: Computer Technology Fundamentals* — Chapter 1 (Basic Structure & Computer Generations).
  3. *Course 3: AI for Teachers (Special Training Module)* — Prompt Engineering for Lesson Plans & Automated Assessment.
- **Target Audience / Persona**: BTEB Diploma in Engineering students preparing for board exams, viva voce, and practical labs; polytechnic CST instructors needing classroom-ready 90-minute lesson plans and rubric-aligned assessments.
- **Key Value**: Preserves and renders all attached BTEB technical texts, animated flow diagrams, lesson plan timelines, and 15-mark quiz sets without alteration, while augmenting them with real-time score tracking and an on-demand grounded AI tutor.

---

### 2. User Experience & Visual Design

- **Key User Flows**:
  1. **Dashboard (Home)**: High-level overview of enrolled courses, global completion progress circle/bar, quick resume button for the last active chapter, and recent quiz score summaries.
  2. **Course & Chapter Explorer**: Clean sidebar and module grid displaying course cards, codes, and credit info. Selecting a chapter opens a 3-tab interactive workstation:
     - `[Lecture Notes]`: Rich typography, data flow diagrams, key sensors table, and exam tips.
     - `[Lesson Plan]`: 90-minute structured classroom flow, teacher cues, learning outcomes, and milestone checklist.
     - `[Interactive Quiz]`: 15-mark quiz player (MCQs + Analytical/Scenario questions), countdown timer, live progress indicator, automated scoring with instant answer keys, and explanations.
  3. **BTEB Teacher Assistant (Gemini Chatbot)**: Floating toggle and dedicated sidebar drawer with predefined suggestion chips ("আইওটি আর্কিটেকচারের স্তরগুলো কি কি?", "কৃষিক্ষেত্রে আইওটির তিনটি বাস্তব উদাহরণ দিন", etc.), streaming conversational markdown, and contextual grounding.
  4. **Resources & Downloads**: Quick access to downloadable syllabi, lesson plan printables, and hardware pinout cheatsheets.
  5. **Student FAQs & Contact**: Collapsible accordion covering BTEB exam patterns, syllabus coverage, practical lab requirements, and direct message modal to Instructor Mohammed Nazmul Hoque Shawon.

- **Visual Identity & Theme**:
  - *Color Palette (60-30-10 Rule)*:
    - Dominant Canvas (60%): Crisp off-white (`#F8FAFC`) with soft mint backgrounds (`#F0FDF4`) in light mode; deep slate/forest navy (`#071612`) in dark mode.
    - Structural Surfaces (30%): White cards (`#FFFFFF`) with hairline forest-tinted borders (`#D1FAE5` / `#164E63`).
    - Emerald Accents (10%): Deep Forest Green (`#0D5C3A` / `#0A4D2E`), Emerald Green (`#10B981`), and golden amber status highlights (`#F59E0B`).
  - *Typography & Hierarchy*:
    - Bangla Headings & Body: `Hind Siliguri` / `Noto Sans Bengali` for crisp Bengali rendering.
    - English, Code & Metrics: `Inter` and `JetBrains Mono` for tabular numerals, hardware specs, and code snippets.
    - Zero-pill discipline: Clean text metadata separated by middle dots (`·`) instead of generic pill tag clusters.
  - *Footer Attribution*:
    - "Mohammed Nazmul Hoque Shawon — Instructor, Computer Science & Technology (CST), Daffodil Institute of Engineering and Technology"

---

### 3. Key Product Decisions & Trade-Offs

- **Decision 1: Native HTML Component Integration vs. Raw Iframes**:
  - *Chosen Approach*: Embed the full, pristine HTML lecture, lesson plan, and quiz contents inside responsive React containers with scoped typography and CSS, preserving the original technical accuracy, tables, animations, and questions.
  - *Why*: Provides instant page loading, unified theme synchronization, seamless search across lecture text, and shared local storage state with the LMS tracker.
- **Decision 2: Server-Side Gemini API Proxy**:
  - *Chosen Approach*: Implement a secure `/api/chat` server-side route powered by `@google/genai` using model `gemini-3.8-flash` with grounded system instructions containing all lecture content.
  - *Why*: Adheres to strict environment security constraints (no client-side API keys exposed), ensures reliable multi-turn context retention, and guarantees grounded polytechnic teacher persona responses.
- **Decision 3: Local Storage Persistence with Export**:
  - *Chosen Approach*: Store chapter completion flags, quiz score history, language preference (`bn` / `en`), and notes in `localStorage`.
  - *Why*: Allows students in Bangladesh polytechnics to retain progress across browser refreshes without mandatory cloud authentication.

---

### 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│                        Top Navigation Bar                              │
│  [Logo: BTEB Diploma LMS] ── [Global Search] ── [Language Toggle BN/EN]│
└────────────────────────────────────────────────────────────────────────┘
                                    │
┌───────────────────────────┬───────┴────────────────────────────────────┐
│      Main Left Sidebar    │                 Active View                │
│ ├── Dashboard (Home)      │ ┌────────────────────────────────────────┐ │
│ ├── Courses & Modules     │ │ Course: Sensor & IoT Systems (28563)   │ │
│ ├── AI Tutor Chatbot      │ │ Tabs: [Lecture Notes][Plan][15M Quiz]  │ │
│ ├── Resources & Downloads │ └────────────────────────────────────────┘ │
│ ├── BTEB Exam FAQs        │ ┌────────────────────────────────────────┐ │
│ └── Contact Instructor    │ │ Interactive Content / Quiz Runner      │ │
│                           │ └────────────────────────────────────────┘ │
└───────────────────────────┴────────────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│        Server-Side Gemini API Proxy (/api/chat)                        │
│        @google/genai SDK • Model: gemini-3.8-flash                     │
│        System Grounding: BTEB IoT & Computer Fundamentals Materials   │
└────────────────────────────────────────────────────────────────────────┘
```

- **Data Models**:
  - `Course`: id, code, titleBn, titleEn, department, chapters, progress.
  - `Chapter`: id, titleBn, titleEn, status (`done` | `in-progress` | `coming-soon`), lectureHtml, lessonPlanHtml, quizData.
  - `QuizQuestion`: id, textBn, textEn, options, correctIndex, explanation, marks.
  - `StudentProgress`: completedChapters, quizScores (`chapterId -> { score, total, timestamp }`), currentLanguage.
  - `ChatMessage`: id, role (`user` | `model`), text, timestamp, suggestedPrompts.
