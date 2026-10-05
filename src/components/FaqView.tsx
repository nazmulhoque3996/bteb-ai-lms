import React, { useState } from 'react';
import { useLms } from '../context/LmsContext';
import { BTEB_FAQS } from '../data/courses';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const FaqView: React.FC = () => {
  const { language } = useLms();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          {language === 'bn' ? 'সাধারণ প্রশ্নোত্তর (Student FAQs)' : 'Frequently Asked Questions (BTEB FAQs)'}
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          {language === 'bn'
            ? 'বিটিইবি ডিপ্লোমা ইন ইঞ্জিনিয়ারিং পরীক্ষা পদ্ধতি, ল্যাব রিকোয়ারমেন্টস এবং কুইজ সম্পর্কিত তথ্য।'
            : 'Answers regarding BTEB grading distributions, practical laboratory requirements, and quiz retakes.'}
        </p>
      </div>

      <div className="space-y-3">
        {BTEB_FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs transition"
            >
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full text-left p-4.5 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 transition"
              >
                <span className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                  {language === 'bn' ? faq.qBn : faq.qEn}
                </span>
                <span className="p-1 rounded-full bg-slate-100 text-slate-600 shrink-0">
                  {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </button>

              {isOpen && (
                <div className="p-4.5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40">
                  {language === 'bn' ? faq.aBn : faq.aEn}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
