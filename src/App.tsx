import React, { useState } from 'react';
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
  const { activeView } = useLms();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* Top Navigation */}
      <Navbar onToggleSidebar={() => setSidebarOpen(prev => !prev)} />

      <div className="flex-1 flex">
        {/* Sidebar Navigation */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main Content Area */}
        <main className="flex-1 md:ml-72 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full transition-all">
          {activeView === 'dashboard' && <DashboardView />}
          {activeView === 'courses' && <ChapterWorkspace />}
          {activeView === 'resources' && <ResourcesView />}
          {activeView === 'faqs' && <FaqView />}
          {activeView === 'contact' && <ContactTeacherModal />}

          {/* Footer with mandatory credits */}
          <footer className="mt-16 pt-8 border-t border-slate-200/80 text-center text-xs text-slate-500 space-y-1.5 no-print">
            <p className="font-semibold text-slate-700">
              Mohammed Nazmul Hoque Shawon — Instructor, Computer Science &amp; Technology (CST), Daffodil Institute of Engineering and Technology
            </p>
            <p className="text-[11px] text-slate-400">
              Bangladesh Technical Education Board (BTEB) Diploma in Engineering • Sensor &amp; IoT System (Code: 28563) • Probidhan 2022
            </p>
          </footer>
        </main>
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
