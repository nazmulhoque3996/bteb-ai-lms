import React, { useState } from 'react';
import { useLms } from '../context/LmsContext';
import { TEACHER_PROFILE } from '../data/courses';
import { Mail, Send, CheckCircle2, User, Phone, MapPin, Building, MessageSquare } from 'lucide-react';

export const ContactTeacherModal: React.FC = () => {
  const { language } = useLms();
  const [name, setName] = useState('');
  const [polytechnic, setPolytechnic] = useState('');
  const [category, setCategory] = useState('academic');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setIsSent(true);
  };

  const handleReset = () => {
    setName('');
    setPolytechnic('');
    setMessage('');
    setIsSent(false);
  };

  return (
    <div className="space-y-6">
      {/* Teacher Profile Card */}
      <div className="bg-gradient-to-r from-emerald-950 via-teal-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-md">
        <div className="flex flex-wrap items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-3xl font-bold shadow-inner">
            👨‍🏫
          </div>
          <div>
            <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-wider">
              {language === 'bn' ? 'কোর্স ইন্সট্রাক্টর' : 'Lead Instructor Profile'}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold mt-1">
              {language === 'bn' ? TEACHER_PROFILE.nameBn : TEACHER_PROFILE.nameEn}
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100/90 mt-0.5">
              {language === 'bn' ? TEACHER_PROFILE.titleBn : TEACHER_PROFILE.titleEn}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 mt-2">
              <span className="flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-emerald-400" />
                {language === 'bn' ? TEACHER_PROFILE.institutionBn : TEACHER_PROFILE.institutionEn}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                {language === 'bn' ? TEACHER_PROFILE.locationBn : TEACHER_PROFILE.locationEn}
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <a href={`mailto:${TEACHER_PROFILE.email}`} className="text-amber-300 underline">
                  {TEACHER_PROFILE.email}
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Message Form */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xs max-w-2xl mx-auto">
        {isSent ? (
          <div className="text-center py-8 space-y-3">
            <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
            <h3 className="text-xl font-bold text-slate-900">
              {language === 'bn' ? 'বার্তাটি সফলভাবে পাঠানো হয়েছে!' : 'Message Sent Successfully!'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              {language === 'bn'
                ? `ধন্যবাদ ${name}। আপনার প্রশ্ন বা বার্তাটি ইন্সট্রাক্টর মুহাম্মদ নাজমুল হক শাওন মহোদয়ের নিকট সংরক্ষিত হয়েছে। খুব শীঘ্রই ফিরতি নির্দেশনা পাবেন।`
                : `Thank you, ${name}. Your message has been sent to instructor Mohammed Nazmul Hoque Shawon.`}
            </p>
            <button
              onClick={handleReset}
              className="mt-4 px-5 py-2 bg-emerald-700 text-white text-xs sm:text-sm font-bold rounded-xl hover:bg-emerald-800 transition cursor-pointer"
            >
              {language === 'bn' ? 'আরেকটি বার্তা পাঠান' : 'Send Another Message'}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                {language === 'bn' ? 'শিক্ষককে সরাসরি বার্তা পাঠান' : 'Direct Message to Teacher'}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                {language === 'bn'
                  ? 'ডিপ্লোমা ক্লাস, ল্যাব এক্সপেরিমেন্ট বা প্রজেক্ট সম্পর্কিত যেকোনো পরামর্শের জন্য লিখুন।'
                  : 'Ask academic queries, lab troubleshooting doubts, or project guidance.'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {language === 'bn' ? 'আপনার নাম *' : 'Your Full Name *'}
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={language === 'bn' ? 'যেমন: আরিফুল ইসলাম' : 'e.g. Ariful Islam'}
                  className="w-full text-xs sm:text-sm p-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {language === 'bn' ? 'পলিটেকনিক ইনস্টিটিউট / কলেজ' : 'Polytechnic Institute'}
                </label>
                <input
                  type="text"
                  value={polytechnic}
                  onChange={(e) => setPolytechnic(e.target.value)}
                  placeholder={language === 'bn' ? 'যেমন: ঢাকা পলিটেকনিক ইনস্টিটিউট' : 'e.g. Dhaka Polytechnic Institute'}
                  className="w-full text-xs sm:text-sm p-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {language === 'bn' ? 'বার্তার বিষয় বা ক্যাটাগরি' : 'Message Category'}
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full text-xs sm:text-sm p-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
              >
                <option value="academic">তাত্ত্বিক পাঠদান ও সিলেবাস সম্পর্কিত (Academic / Syllabus)</option>
                <option value="lab">ব্যবহারিক ল্যাব ও সেন্সর কানেকশন (Lab / Hardware Interfacing)</option>
                <option value="quiz">কুইজ ও বোর্ড প্রশ্ন সংক্রান্ত (Quiz / Board Questions)</option>
                <option value="feedback">পরামর্শ ও ফিডব্যাক (Feedback)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {language === 'bn' ? 'আপনার বার্তা বা প্রশ্ন *' : 'Your Detailed Message *'}
              </label>
              <textarea
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={language === 'bn' ? 'আপনার প্রশ্ন বা সমস্যা বিস্তারিত লিখুন...' : 'Describe your academic or practical lab question in detail...'}
                className="w-full text-xs sm:text-sm p-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
              />
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                className="px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl text-xs sm:text-sm shadow-xs transition flex items-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{language === 'bn' ? 'বার্তা পাঠান' : 'Send Message'}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
