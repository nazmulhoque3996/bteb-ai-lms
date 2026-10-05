import React, { useState, useRef, useEffect } from 'react';
import { useLms } from '../context/LmsContext';
import { ChatMessage } from '../types';
import { Bot, Send, X, Sparkles, RefreshCw, User, HelpCircle, BookOpen, AlertCircle } from 'lucide-react';

export const GeminiChatbot: React.FC = () => {
  const { language, isChatOpen, setIsChatOpen, activeChapterId } = useLms();

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: language === 'bn'
        ? 'আসসালামু আলাইকুম! আমি আপনার **BTEB Teacher Assistant** (বিটিইবি শিক্ষক সহকারী)। পলিটেকনিক ডিপ্লোমা ইঞ্জিনিয়ারিংয়ের IoT Architecture, কৃষিক্ষেত্রে আইওটি কিংবা কম্পিউটার ফান্ডামেন্টালস সম্পর্কিত যেকোনো প্রশ্ন আমাকে করতে পারেন। নিচে দেওয়া পরামর্শক প্রশ্নগুলোতে ক্লিক করেও শুরু করতে পারেন!'
        : 'Welcome! I am your **BTEB Teacher Assistant**. Feel free to ask any question regarding BTEB IoT Architecture, Agricultural IoT, or Computer Fundamentals. Click any quick suggestion below to start!',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isChatOpen) {
      scrollToBottom();
    }
  }, [messages, isChatOpen]);

  // Quick suggestion prompts as required by prompt
  const quickPrompts = [
    {
      labelBn: 'আইওটি আর্কিটেকচারের স্তরগুলো কি কি?',
      labelEn: 'What are the layers of IoT architecture?',
      prompt: 'আইওটি আর্কিটেকচারের স্তরগুলো কি কি এবং প্রতিটি স্তরের কাজ সংক্ষেপে বুঝিয়ে বলো।'
    },
    {
      labelBn: 'কৃষিক্ষেত্রে আইওটির ৩টি বাস্তব উদাহরণ',
      labelEn: '3 real-world examples of IoT in agriculture',
      prompt: 'কৃষিক্ষেত্রে আইওটির তিনটি বাস্তব উদাহরণ দিন এবং কীভাবে এটি কৃষকের উপকারে আসে তা বলো।'
    },
    {
      labelBn: 'কম্পিউটার প্রজন্মের মূল পার্থক্য',
      labelEn: 'Generations of computer comparison',
      prompt: 'কম্পিউটারের ১ম থেকে ৫ম প্রজন্মগুলোর মূল হার্ডওয়্যার পার্থক্য ব্যাখ্যা করো।'
    },
    {
      labelBn: 'স্মার্ট সেচে রিলে (Relay) কেন দরকার?',
      labelEn: 'Why is a Relay needed in Smart Irrigation?',
      prompt: 'স্মার্ট সেচ ব্যবস্থায় ESP32-এর সাথে রিলে (Relay Module) কেন ব্যবহার করা হয়?'
    }
  ];

  const handleSendMessage = async (userText: string) => {
    if (!userText.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: String(Date.now()),
      role: 'user',
      text: userText.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map(m => ({ role: m.role, text: m.text })),
          context: `Active Chapter ID: ${activeChapterId}. Language preference: ${language}`
        })
      });

      if (!response.ok) {
        throw new Error('Server returned error response');
      }

      const data = await response.json();
      const botMessage: ChatMessage = {
        id: String(Date.now() + 1),
        role: 'model',
        text: data.text || 'দুঃখিত, কোনো উত্তর পাওয়া যায়নি।',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (err: any) {
      console.error('Chat error:', err);
      const errorMessage: ChatMessage = {
        id: String(Date.now() + 1),
        role: 'model',
        text: language === 'bn'
          ? 'দুঃখিত, নেটওয়ার্ক বা সার্ভারে সাময়িক ত্রুটি হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।'
          : 'Sorry, unable to connect to the assistant server right now. Please try again.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: 'welcome-reset',
        role: 'model',
        text: language === 'bn'
          ? 'কথোপকথন রিসেট করা হয়েছে। আপনার নতুন প্রশ্নটি লিখুন।'
          : 'Conversation cleared. Feel free to ask a new question.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  // If chat is not open, return floating launch button
  if (!isChatOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsChatOpen(true)}
          className="flex items-center gap-2.5 px-4 py-3 bg-gradient-to-r from-emerald-800 to-teal-700 hover:from-emerald-700 hover:to-teal-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 cursor-pointer font-bold text-sm"
        >
          <Bot className="w-5 h-5 text-emerald-200" />
          <span>{language === 'bn' ? 'BTEB শিক্ষক সহকারী' : 'Ask BTEB AI Tutor'}</span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 sm:inset-auto sm:bottom-6 sm:right-6 sm:w-[460px] sm:h-[640px] z-50 bg-white sm:rounded-2xl shadow-2xl border border-slate-200/90 flex flex-col overflow-hidden animate-in fade-in duration-200">
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-emerald-900 to-teal-800 text-white p-4 flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
            <Bot className="w-5 h-5 text-emerald-300" />
          </div>
          <div>
            <h3 className="font-bold text-sm sm:text-base leading-tight">
              BTEB Teacher Assistant
            </h3>
            <div className="flex items-center gap-1.5 text-[11px] text-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Grounded on BTEB Curriculum</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={clearChat}
            className="p-1.5 rounded-lg text-emerald-200 hover:text-white hover:bg-white/10 transition cursor-pointer"
            title="Clear Chat History"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsChatOpen(false)}
            className="p-1.5 rounded-lg text-emerald-200 hover:text-white hover:bg-white/10 transition cursor-pointer"
            title="Close Assistant"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Quick Suggestion Chips */}
      <div className="p-2.5 bg-slate-50 border-b border-slate-200/80 flex items-center gap-1.5 overflow-x-auto text-xs no-scrollbar">
        <span className="text-[11px] font-bold text-slate-500 shrink-0 px-1">
          {language === 'bn' ? 'সাজেস্টেড:' : 'Quick:'}
        </span>
        {quickPrompts.map((qp, idx) => (
          <button
            key={idx}
            onClick={() => handleSendMessage(qp.prompt)}
            className="whitespace-nowrap px-2.5 py-1 bg-white border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/50 rounded-full text-slate-700 text-[11px] font-medium transition cursor-pointer shrink-0"
          >
            💡 {language === 'bn' ? qp.labelBn : qp.labelEn}
          </button>
        ))}
      </div>

      {/* Messages Scrollable Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#F8FAFC]">
        {messages.map(m => {
          const isUser = m.role === 'user';
          return (
            <div
              key={m.id}
              className={`flex gap-2.5 ${isUser ? 'justify-end' : 'justify-start'}`}
            >
              {!isUser && (
                <div className="w-7 h-7 rounded-lg bg-emerald-700 text-white flex items-center justify-center shrink-0 text-xs">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm leading-relaxed ${
                  isUser
                    ? 'bg-emerald-700 text-white rounded-br-none'
                    : 'bg-white text-slate-800 border border-slate-200/80 rounded-bl-none shadow-2xs'
                }`}
              >
                {/* Simple formatting helper for markdown bold and bullet points */}
                <div className="space-y-1">
                  {m.text.split('\n').map((line, lineIdx) => {
                    if (line.startsWith('- ') || line.startsWith('* ')) {
                      return (
                        <div key={lineIdx} className="flex items-start gap-1.5 pl-1">
                          <span className="text-emerald-500">•</span>
                          <span>{line.substring(2).replace(/\*\*(.*?)\*\*/g, '$1')}</span>
                        </div>
                      );
                    }
                    if (line.includes('**')) {
                      const parts = line.split('**');
                      return (
                        <p key={lineIdx}>
                          {parts.map((p, pIdx) => (pIdx % 2 === 1 ? <strong key={pIdx} className="font-bold">{p}</strong> : p))}
                        </p>
                      );
                    }
                    return <p key={lineIdx}>{line}</p>;
                  })}
                </div>

                <div
                  className={`text-[10px] mt-1 text-right ${
                    isUser ? 'text-emerald-200' : 'text-slate-400'
                  }`}
                >
                  {m.timestamp}
                </div>
              </div>

              {isUser && (
                <div className="w-7 h-7 rounded-lg bg-slate-700 text-white flex items-center justify-center shrink-0 text-xs">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          );
        })}

        {isLoading && (
          <div className="flex gap-2.5 items-center text-xs text-slate-500 pl-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-700 text-white flex items-center justify-center">
              <Bot className="w-4 h-4" />
            </div>
            <div className="bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-2xs flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce" />
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.2s]" />
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.4s]" />
              <span className="text-xs text-slate-600 font-medium ml-1">উত্তর তৈরি হচ্ছে...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage(input);
        }}
        className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={language === 'bn' ? 'আপনার প্রশ্ন লিখুন (বাংলা বা English)...' : 'Type your question (Bangla or English)...'}
          className="flex-1 text-xs sm:text-sm px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 placeholder:text-slate-400 font-sans"
        />
        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          className="p-2.5 bg-emerald-700 hover:bg-emerald-800 disabled:opacity-50 text-white rounded-xl transition cursor-pointer shadow-xs"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
