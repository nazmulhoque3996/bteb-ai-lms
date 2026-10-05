import React from 'react';
import { useLms } from '../context/LmsContext';
import { DownloadCloud, FileText, Cpu, BookOpen, Printer, Save, CheckCircle2 } from 'lucide-react';

export const ResourcesView: React.FC = () => {
  const { language, exportProgress, progress } = useLms();

  const resources = [
    {
      titleBn: 'Sensor & IoT System (Code: 28563) সিলেবাস ও ল্যাব গাইড',
      titleEn: 'Sensor & IoT System (Code: 28563) Syllabus & Lab Manual',
      categoryBn: 'বিটিইবি সিলেবাস',
      categoryEn: 'BTEB Syllabus',
      size: '2.4 MB PDF',
      descBn: 'প্রবিধান ২০২২ অনুযায়ী সম্পূর্ণ তাত্ত্বিক মানবণ্টন ও বাধ্যতামূলক ১৫টি ব্যবহারিক পরীক্ষার নির্দেশিকা।',
      descEn: 'Official BTEB Probidhan 2022 curriculum and 15 compulsory lab experiment specifications.'
    },
    {
      titleBn: 'ESP32 & Arduino সেন্সর কানেকশন চিটশিট (Pinout Guide)',
      titleEn: 'ESP32 & Arduino Sensor Wiring & Pinout Cheatsheet',
      categoryBn: 'হার্ডওয়্যার সহায়িকা',
      categoryEn: 'Hardware Pinouts',
      size: '1.8 MB PDF',
      descBn: 'Soil Moisture, DHT22, LDR, pH Sensor এবং 5V Relay-এর সাথে ESP32/NodeMCU-এর বিস্তারিত ওয়্যারিং ডায়াগ্রাম।',
      descEn: 'High-resolution wiring pinouts for ESP32, DHT22, capacitive soil probes, and relay drivers.'
    },
    {
      titleBn: 'কম্পিউটার টেকনোলজি ফান্ডামেন্টালস বোর্ড প্রশ্ন ব্যাংক',
      titleEn: 'Computer Technology Fundamentals Board Question Bank',
      categoryBn: 'প্রশ্ন ব্যাংক',
      categoryEn: 'Question Bank',
      size: '3.1 MB PDF',
      descBn: 'বিগত ৫ বছরের বিটিইবি সেমিস্টার ফাইনাল পরীক্ষার অতি সংক্ষিপ্ত, সংক্ষিপ্ত ও রচনামূলক প্রশ্নের সমাধান।',
      descEn: 'Previous 5-year BTEB diploma semester final question papers with model answers.'
    },
    {
      titleBn: '৯০-মিনিটের লেসন প্ল্যান ও অ্যাসেসমেন্ট ব্লুপ্রিন্ট',
      titleEn: '90-Minute Polytechnic Lesson Plan Blueprint',
      categoryBn: 'শিক্ষকদের গাইডলাইন',
      categoryEn: 'Teacher Guidelines',
      size: '1.2 MB PDF',
      descBn: 'পলিটেকনিক শিক্ষকদের জন্য ব্লুমস ট্যাক্সোনমি অনুযায়ী আউটকামভিত্তিক লেসন প্ল্যান ফ্রেমওয়ার্ক।',
      descEn: 'Outcome-based 90-minute classroom flow templates for polytechnic engineering instructors.'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            {language === 'bn' ? 'রিসোর্স ও ডাউনলোড সেন্টার' : 'Resources & Downloads'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            {language === 'bn'
              ? 'বিটিইবি ডিপ্লোমা সিলেবাস, হার্ডওয়্যার পিনআউট ও স্টাডি মেটেরিয়ালস সংগ্রহ করুন।'
              : 'Official BTEB curriculum syllabi, hardware pinout cheatsheets, and instructor handouts.'}
          </p>
        </div>

        {/* Export Progress Button */}
        <button
          onClick={exportProgress}
          className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-xs transition cursor-pointer"
        >
          <Save className="w-4 h-4" />
          <span>{language === 'bn' ? 'আমার অগ্রগতি এক্সপোর্ট করুন (JSON)' : 'Export My Progress'}</span>
        </button>
      </div>

      {/* Resources Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {resources.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs hover:border-emerald-300 transition flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                  {language === 'bn' ? item.categoryBn : item.categoryEn}
                </span>
                <span className="text-[11px] font-mono text-slate-400">{item.size}</span>
              </div>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                {language === 'bn' ? item.titleBn : item.titleEn}
              </h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                {language === 'bn' ? item.descBn : item.descEn}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-400">PDF Document</span>
              <button
                onClick={() => window.print()}
                className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer"
              >
                <DownloadCloud className="w-3.5 h-3.5 text-emerald-700" />
                <span>{language === 'bn' ? 'ডাউনলোড / প্রিন্ট' : 'Download'}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
