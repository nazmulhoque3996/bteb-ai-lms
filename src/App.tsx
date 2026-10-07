import React from 'react';
import { LmsProvider, useLms } from './context/LmsContext';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { DashboardView } from './components/DashboardView';
import { ChapterWorkspace } from './components/ChapterWorkspace';
import { ResourcesView } from './components/ResourcesView';
import { FaqView } from './components/FaqView';
import { ContactTeacherModal } from './components/ContactTeacherModal';
import { GeminiChatbot } from './components/GeminiChatbot';

const MainLayout: React.FC = () => {
  const { activeView, sidebarState } = useLms();

  // Dynamic left offset:
  // When sidebar is closed: 0 padding -> main interface is centered in the exact center of the screen
  // When sidebar is on: shifts to the right (pl-72 or pl-20) to clear the sidebar smoothly
  const contentOffsetClass = 
    sidebarState === 'closed'
      ? 'pl-0'
      : sidebarState === 'collapsed'
      ? 'md:pl-20 pl-0'
      : 'md:pl-72 pl-0';

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* Top Navigation Bar with permanent, prominent Site Name and Sidebar controls */}
      <Navbar />

      <div className="flex-1 flex w-full relative">
        {/* Sidebar Navigation with Collapse (chuto kora) & Close (close kora) capabilities */}
        <Sidebar />

        {/* Content Wrapper: shifts right when sidebar is on, centers across the full screen when sidebar is off */}
        <div className={`flex-1 flex flex-col w-full ${contentOffsetClass} transition-all duration-300 ease-in-out`}>
          <main className="w-full max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 flex-1 transition-all duration-300">
            {activeView === 'dashboard' && <DashboardView />}
            {activeView === 'courses' && <ChapterWorkspace />}
            {activeView === 'resources' && <ResourcesView />}
            {activeView === 'faqs' && <FaqView />}
            {activeView === 'contact' && <ContactTeacherModal />}
          </main>

          {/* Footer with mandatory instructor credits */}
          <footer className="mt-auto pt-10 pb-8 border-t border-slate-200/80 text-center text-xs text-slate-500 space-y-1.5 no-print px-4">
            <p className="font-semibold text-slate-700">
              Mohammed Nazmul Hoque Shawon — Instructor, Computer Science &amp; Technology (CST), Daffodil Institute of Engineering and Technology
            </p>
            <p className="text-[11px] text-slate-400">
              Bangladesh Technical Education Board (BTEB) Diploma in Engineering • Sensor &amp; IoT System (Code: 28563) • Probidhan 2022
            </p>
          </footer>
        </div>
      </div>

      {/* Grounded Gemini Chatbot (BTEB Teacher Assistant) */}
      <GeminiChatbot />
    </div>
  );
};

export default function App() {
  return (
    <LmsProvider>
      <MainLayout />
    </LmsProvider>
  );
}
