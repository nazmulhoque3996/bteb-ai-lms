import React, { useState } from 'react';
import { useLms } from '../../context/LmsContext';
import { Cpu, HardDrive, Keyboard, Monitor, Zap, HelpCircle, CheckCircle, ArrowRight } from 'lucide-react';

export const ComputerStructureContent: React.FC = () => {
  const { language } = useLms();
  const [activeUnit, setActiveUnit] = useState<string>('alu');

  return (
    <div className="space-y-8 text-slate-800 printable-content">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-950 via-indigo-900 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-wider bg-white/10 border border-white/20 px-3 py-1 rounded-full text-indigo-200 font-semibold font-mono">
              BTEB • IT Support Services • Chapter 3
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-3 leading-tight">
              {language === 'bn' ? 'ডিজিটাল কম্পিউটার সিস্টেমের মৌলিক গঠন' : 'Basic Structure of Digital Computer System'}
            </h1>
            <p className="text-indigo-100/90 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              {language === 'bn'
                ? 'ভন নিউম্যান আর্কিটেকচার, সেন্ট্রাল প্রসেসিং ইউনিট (CPU) এর মূল অংশসমূহ (ALU, CU, Registers) এবং মেমরি হায়ারার্কি।'
                : 'Von Neumann Architecture, Central Processing Unit (ALU, CU, Registers), and primary vs secondary memory hierarchies.'}
            </p>
          </div>
          <div className="bg-indigo-800/40 border border-indigo-500/30 rounded-xl p-4 text-center min-w-[150px]">
            <div className="text-2xl font-bold text-sky-300 font-mono">CPU + I/O</div>
            <div className="text-xs text-indigo-200 mt-1">Core Architecture</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-white/15 text-xs text-indigo-100">
          <span className="bg-white/10 px-2.5 py-1 rounded-md">🧮 ALU (Arithmetic Logic)</span>
          <span className="bg-white/10 px-2.5 py-1 rounded-md">⚙️ CU (Control Unit)</span>
          <span className="bg-white/10 px-2.5 py-1 rounded-md">💾 Registers (Fastest Cache)</span>
          <span className="bg-white/10 px-2.5 py-1 rounded-md">⚡ RAM / ROM</span>
          <span className="bg-white/10 px-2.5 py-1 rounded-md">🖥️ Input / Output Unit</span>
        </div>
      </div>

      {/* 01. Von Neumann Architecture Diagram */}
      <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm space-y-4">
        <h2 className="text-xl font-bold text-slate-900">
          {language === 'bn' ? '০১. ভন নিউম্যান আর্কিটেকচার (কম্পিউটারের প্রাথমিক ব্লক ডায়াগ্রাম)' : '01. Von Neumann Architecture Block Diagram'}
        </h2>
        <p className="text-xs text-slate-500 leading-relaxed">
          {language === 'bn'
            ? 'জন ভন নিউম্যান (John Von Neumann)-এর নির্দেশিত স্টোর্ড-প্রোগ্রাম কম্পিউটার মডেল। এটি প্রধানত ৩টি ইউনিটে বিভক্ত:'
            : 'The universal stored-program computer model conceived by John Von Neumann, composed of three core modules:'}
        </p>

        {/* Interactive Block Diagram */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center text-center">
            {/* Input */}
            <div className="p-4 bg-slate-800/80 border border-slate-700 rounded-xl">
              <span className="text-2xl">⌨️</span>
              <h3 className="font-bold text-sky-400 text-sm mt-1">ইনপুট ইউনিট (Input Unit)</h3>
              <p className="text-xs text-slate-400 mt-1">কীবোর্ড, মাউস, স্ক্যানার</p>
              <div className="mt-2 text-[11px] bg-slate-700/60 p-1.5 rounded text-slate-300">বাইনারি সিগন্যালে কনভার্ট করে</div>
            </div>

            {/* CPU Box */}
            <div className="p-5 bg-indigo-950/70 border-2 border-indigo-500 rounded-xl shadow-lg relative">
              <span className="text-xs uppercase tracking-wider font-bold text-indigo-300 block mb-2">Central Processing Unit (CPU)</span>
              <div className="space-y-2">
                <div className="p-2.5 bg-slate-900 border border-indigo-400/40 rounded-lg text-xs font-bold text-white flex justify-between items-center">
                  <span>⚙️ Control Unit (CU)</span>
                  <span className="text-[10px] text-indigo-300 font-normal">নার্ভাস সিস্টেম</span>
                </div>
                <div className="p-2.5 bg-slate-900 border border-indigo-400/40 rounded-lg text-xs font-bold text-white flex justify-between items-center">
                  <span>🧮 ALU (Arithmetic Logic)</span>
                  <span className="text-[10px] text-indigo-300 font-normal">গাণিতিক হিসাব</span>
                </div>
                <div className="p-2.5 bg-slate-900 border border-indigo-400/40 rounded-lg text-xs font-bold text-white flex justify-between items-center">
                  <span>🚀 Registers (Internal Memory)</span>
                  <span className="text-[10px] text-indigo-300 font-normal">দ্রুততম মেমরি</span>
                </div>
              </div>
            </div>

            {/* Output */}
            <div className="p-4 bg-slate-800/80 border border-slate-700 rounded-xl">
              <span className="text-2xl">🖥️</span>
              <h3 className="font-bold text-pink-400 text-sm mt-1">আউটপুট ইউনিট (Output Unit)</h3>
              <p className="text-xs text-slate-400 mt-1">মনিটর, প্রিন্টার, স্পিকার</p>
              <div className="mt-2 text-[11px] bg-slate-700/60 p-1.5 rounded text-slate-300">মানুষের ভাষায় ফলাফল প্রদর্শন</div>
            </div>
          </div>

          {/* Memory Row */}
          <div className="max-w-md mx-auto p-4 bg-slate-800/90 border border-slate-700 rounded-xl text-center">
            <span className="text-xl">💾</span>
            <h4 className="font-bold text-emerald-400 text-sm mt-1">মেমরি ইউনিট (Memory Unit)</h4>
            <div className="grid grid-cols-2 gap-2 mt-2 text-xs">
              <div className="bg-slate-900 p-2 rounded border border-slate-700">
                <b className="text-slate-200 block">প্রাইমারি মেমরি</b>
                <span className="text-[11px] text-slate-400">RAM (অস্থায়ী) / ROM</span>
              </div>
              <div className="bg-slate-900 p-2 rounded border border-slate-700">
                <b className="text-slate-200 block">সেকেন্ডারি মেমরি</b>
                <span className="text-[11px] text-slate-400">HDD / SSD (স্থায়ী)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 02. Data Flow Pipeline Example (5 + 3 = 8) */}
      <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm space-y-4">
        <h2 className="text-xl font-bold text-slate-900">
          {language === 'bn' ? '০২. কীবোর্ডে "5+3" টাইপ থেকে মনিটরে "8" আসার ডেটা ফ্লো' : '02. Step-by-Step Data Flow: "5+3 = 8"'}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
          {[
            { step: 'ধাপ ১', title: 'Input Unit', desc: 'কীবোর্ডে "5+3" চাপলে ডেটা বাইনারিতে রূপান্তর হয়ে প্রাইমারি মেমরিতে (RAM) জমা হয়।' },
            { step: 'ধাপ ২', title: 'Control Unit', desc: 'CU মেমরি থেকে ইনস্ট্রাকশন পড়ে বুঝতে পারে যে দুটি সংখ্যা যোগ করতে হবে।' },
            { step: 'ধাপ ৩', title: 'ALU Calculation', desc: 'CU নির্দেশ দেয় এবং ALU গাণিতিক যোগ সম্পন্ন করে ফলাফল "8" বের করে।' },
            { step: 'ধাপ ৪', title: 'Memory Store', desc: 'ফলাফল "8" সাময়িকভাবে পুনরায় RAM মেমরিতে সংরক্ষিত হয়।' },
            { step: 'ধাপ ৫', title: 'Output Display', desc: 'মেমরি থেকে ফলাফলটি আউটপুট ইউনিটের (মনিটর) পর্দায় দৃশ্যমান হয়।' }
          ].map((s, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl text-center">
              <span className="text-[10px] uppercase font-bold text-indigo-700 font-mono bg-indigo-100/70 px-2 py-0.5 rounded-full inline-block mb-1.5">
                {s.step}
              </span>
              <h4 className="font-bold text-xs text-slate-900 mb-1">{s.title}</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 03. Hardware Troubleshooting Case */}
      <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm space-y-4">
        <h2 className="text-xl font-bold text-slate-900">
          {language === 'bn' ? '০৩. আইটি সাপোর্ট ও হার্ডওয়্যার ট্রাবলশুটিং দৃশ্যপট' : '03. IT Support Hardware Troubleshooting'}
        </h2>
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
          <div className="flex items-start gap-3">
            <span className="text-2xl">⚠️</span>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">
                দৃশ্যপট: কম্পিউটার অন হচ্ছে, ফ্যান ঘুরছে, কিন্তু ডিসপ্লেতে কিছুই আসছে না (No Display)।
              </h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                একজন আইটি টেকনিশিয়ান হিসেবে ব্লক ডায়াগ্রাম অনুযায়ী কোন কোন ইউনিট পরীক্ষা করতে হবে?
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
            <div className="bg-white p-3 rounded-lg border border-slate-200">
              <b className="text-slate-800 block mb-1">১. আউটপুট ইউনিট ফল্ট:</b>
              মনিটর পাওয়ার অন আছে কিনা এবং VGA/HDMI ক্যাবল ঠিকমতো লক করা আছে কিনা দেখতে হবে।
            </div>
            <div className="bg-white p-3 rounded-lg border border-slate-200">
              <b className="text-slate-800 block mb-1">২. মেমরি ইউনিট (RAM) ফল্ট:</b>
              র‍্যামের স্লটে ধুলা জমলে বা লুজ কানেকশন থাকলে সিপিইউ পোস্ট (POST) সম্পন্ন করতে পারে না। ইরেজার দিয়ে র‍্যাম পিন পরিষ্কার করে পুনরায় লাগাতে হবে।
            </div>
            <div className="bg-white p-3 rounded-lg border border-slate-200">
              <b className="text-slate-800 block mb-1">৩. প্রসেসর / মাদারবোর্ড ফল্ট:</b>
              সিপিইউ ওভারহিট হয়ে শাটডাউন হচ্ছে কি না বা থার্মাল পেস্ট শুকিয়ে গেছে কি না তা যাচাই করতে হবে।
            </div>
          </div>
        </div>
      </div>

      {/* 04. Computer Generations Table */}
      <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm space-y-4">
        <h2 className="text-xl font-bold text-slate-900">
          {language === 'bn' ? '০৪. কম্পিউটার প্রজন্মের সংক্ষিপ্ত তুলনামূলক ছক' : '04. Generations of Computer Comparison'}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-slate-100 text-slate-700 border-b border-slate-200">
                <th className="p-2.5 font-bold">প্রজন্ম</th>
                <th className="p-2.5 font-bold">সময়কাল</th>
                <th className="p-2.5 font-bold">মূল হার্ডওয়্যার প্রযুক্তি</th>
                <th className="p-2.5 font-bold">মেমরি ও গতি</th>
                <th className="p-2.5 font-bold">উদাহরণ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              <tr>
                <td className="p-2.5 font-semibold text-slate-900">১ম প্রজন্ম</td>
                <td className="p-2.5">১৯৪০–১৯৫৬</td>
                <td className="p-2.5">ভ্যাকুয়াম টিউব (Vacuum Tubes)</td>
                <td className="p-2.5">ম্যাগনেটিক ড্রাম, অত্যন্ত ধীরগতি</td>
                <td className="p-2.5">ENIAC, EDVAC</td>
              </tr>
              <tr>
                <td className="p-2.5 font-semibold text-slate-900">২য় প্রজন্ম</td>
                <td className="p-2.5">১৯৫৬–১৯৬৩</td>
                <td className="p-2.5">ট্রানজিস্টর (Transistors)</td>
                <td className="p-2.5">ম্যাগনেটিক কোর মেমরি, তুলনামূলক দ্রুত</td>
                <td className="p-2.5">IBM 1401</td>
              </tr>
              <tr>
                <td className="p-2.5 font-semibold text-slate-900">৩য় প্রজন্ম</td>
                <td className="p-2.5">১৯৬৪–১৯৭১</td>
                <td className="p-2.5">ইন্টিগ্রেটেড সার্কিট (IC)</td>
                <td className="p-2.5">সেমিকন্ডাক্টর মেমরি, কিবোর্ড ও মনিটর চালু</td>
                <td className="p-2.5">IBM 360</td>
              </tr>
              <tr>
                <td className="p-2.5 font-semibold text-slate-900">৪র্থ প্রজন্ম</td>
                <td className="p-2.5">১৯৭১–বর্তমান</td>
                <td className="p-2.5">মাইক্রোপ্রসেসর (VLSI / ULSI)</td>
                <td className="p-2.5">দ্রুতগতির RAM ও SSD, উচ্চ গতি</td>
                <td className="p-2.5">Intel Core, Ryzen, Mac</td>
              </tr>
              <tr>
                <td className="p-2.5 font-semibold text-slate-900">৫ম প্রজন্ম</td>
                <td className="p-2.5">বর্তমান ও ভবিষ্যৎ</td>
                <td className="p-2.5">কৃত্রিম বুদ্ধিমত্তা (AI) ও কোয়ান্টাম কম্পিউটিং</td>
                <td className="p-2.5">প্যারালাল প্রসেসিং, ভয়েস ও নিউরাল নেটওয়ার্ক</td>
                <td className="p-2.5">AI সুপারকম্পিউটার</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
