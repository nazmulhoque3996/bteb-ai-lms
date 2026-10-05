import React, { useState } from 'react';
import { useLms } from '../../context/LmsContext';
import { Droplet, Sun, Thermometer, FlaskConical, Play, RotateCcw, AlertTriangle, ShieldCheck, Check } from 'lucide-react';

export const IotAgricultureContent: React.FC = () => {
  const { language } = useLms();
  const [activeStep, setActiveStep] = useState<number>(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([0]);

  // 90-minute class flow steps
  const steps = [
    { time: '0–5 min', tag: 'Engage', titleBn: 'Warm-up & Attendance', titleEn: 'Warm-up & Problem Hook', cueBn: 'কৃষকের পানি ও সারের অপচয়ের সমস্যা দিয়ে ক্লাস শুরু করুন। “জমিতে পানি কখন দিতে হবে—কৃষক কীভাবে বুঝবেন?” প্রশ্ন করে ২-৩ জনের মতামত শুনুন।', cueEn: 'Open class with agricultural water waste problem. Ask 2 students how farmers determine irrigation timing.' },
    { time: '5–15 min', tag: 'Lecture', titleBn: 'Topic 1: Smart Agriculture', titleEn: 'Topic 1: Smart Agriculture Overview', cueBn: 'বোর্ডে লিখুন: Sensor → Controller → Wi-Fi → Monitoring/Control। সাধারণ চাষাবাদ ও স্মার্ট এগ্রিকালচারের পার্থক্য বুঝিয়ে বলুন।', cueEn: 'Diagram on board: Sensor -> Controller -> Wi-Fi -> Monitoring/Control. Contrast traditional and smart farming.' },
    { time: '15–30 min', tag: 'Interact', titleBn: 'Topic 2: Key Sensors', titleEn: 'Topic 2: Key Sensors (Moisture, DHT, LDR, pH)', cueBn: 'প্রতিটি সেন্সরের ক্ষেত্রে “কী পরিমাপ করে?” এবং “কোথায় ব্যবহার হয়?” এই দুটি নির্দিষ্ট প্রশ্ন করুন। ক্যাপাসিটিভ সেন্সর কেন জং ধরে না তা আলোচনা করুন।', cueEn: 'For each sensor, ask "What does it measure?" and "Where is it applied?". Explain why capacitive probes resist corrosion.' },
    { time: '30–50 min', tag: 'Core', titleBn: 'Topic 3: Smart Irrigation', titleEn: 'Topic 3: Smart Irrigation Architecture', cueBn: 'মূল ডেটা ফ্লো: Soil Moisture → ESP32 → Logic (Threshold < 30%) → 5V Relay → 220V Water Pump। ড্রাই হলে ON, ওয়েট হলে OFF উদাহরণ দিন।', cueEn: 'Core flow: Soil Moisture -> ESP32 -> Threshold logic -> 5V Relay -> 220V Pump.' },
    { time: '50–62 min', tag: 'Lecture', titleBn: 'Applications: Weather & Crops', titleEn: 'Applications: Weather & Crop Health', cueBn: 'গ্রিনহাউসে DHT11/22 দিয়ে তাপমাত্রা নিয়ন্ত্রণ ও ফ্যান চালু করা এবং pH সেন্সরের মাধ্যমে সারের কার্যকারিতা মনিটরিং বোঝান।', cueEn: 'Illustrate greenhouse climate control and soil pH balancing for tailored nutrient distribution.' },
    { time: '62–70 min', tag: 'Practice', titleBn: 'Mini Simulation / Scenario', titleEn: 'Mini Practical Simulation', cueBn: 'একটি কাল্পনিক রিডিং দিন: মাটির আর্দ্রতা ২৫% এবং থ্রেশহোল্ড ৩০%। পাম্প কি চালু হবে নাকি বন্ধ থাকবে? সবাইকে উত্তর নিশ্চিত করতে বলুন।', cueEn: 'Hypothetical reading: Moisture 25%, Threshold 30%. Ask students whether the pump toggles ON or OFF.' },
    { time: '70–82 min', tag: 'Assess', titleBn: 'Assessment: 15-Mark Quiz', titleEn: 'Assessment: 15-Mark Class Quiz', cueBn: 'শিক্ষার্থীদের দ্রুত ১০টি MCQ এবং ১টি চিন্তামূলক প্রশ্নের উত্তর দিতে বলুন। কুইজ শেষ হলে সঠিক উত্তরের ব্যাখ্যা প্রদান করুন।', cueEn: 'Conduct the 10 MCQ questions and the 5-mark diagnostic troubleshooting scenario.' },
    { time: '82–88 min', tag: 'Review', titleBn: 'Recap: 10 Must-Remember Points', titleEn: 'Recap & Key Memory Anchors', cueBn: 'শিক্ষার্থীদের নিজেদের ভাষায় ৩টি জিনিস বলতে বলুন: ১টি সেন্সর, ১টি আইওটি ডিভাইস এবং ১টি বাস্তব কৃষির প্রয়োগ।', cueEn: 'Call on students to state 1 sensor, 1 IoT device, and 1 agricultural automation application.' },
    { time: '88–90 min', tag: 'Close', titleBn: 'Exit Ticket', titleEn: 'Exit Ticket', cueBn: 'এক লাইনের সমাপনী প্রশ্ন: “স্মার্ট সেচ ব্যবস্থায় রিলে (Relay) কেন অপরিহার্য?” ১-২ জনের উত্তর শুনে ক্লাস শেষ করুন।', cueEn: 'Final exit question: "Why is a Relay module indispensable in smart irrigation?"' }
  ];

  const toggleStepDone = (index: number) => {
    setCompletedSteps(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
    setActiveStep(index);
  };

  const markNext = () => {
    if (!completedSteps.includes(activeStep)) {
      setCompletedSteps(prev => [...prev, activeStep]);
    }
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const resetTimeline = () => {
    setActiveStep(0);
    setCompletedSteps([0]);
  };

  return (
    <div className="space-y-8 text-slate-800 printable-content">
      {/* Hero Badge */}
      <div className="bg-gradient-to-r from-emerald-950 via-teal-900 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-wider bg-white/10 border border-white/20 px-3 py-1 rounded-full text-emerald-200 font-semibold font-mono">
              BTEB • SENSOR &amp; IoT SYSTEM (28563) • CHAPTER 2
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-3 leading-tight">
              {language === 'bn' ? 'কৃষিক্ষেত্রে আইওটি (IoT in Agriculture)' : 'IoT in Agriculture'}
            </h1>
            <p className="text-emerald-100/90 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              {language === 'bn'
                ? 'স্মার্ট সেচ ব্যবস্থা, কৃষি সেন্সর, রিলে মডিউল ও পাম্প অটোমেশন — ৯০ মিনিটের ক্লাসরুম রেডি লেসন প্ল্যান।'
                : 'Smart Irrigation, agricultural sensors, relay modules, and pump automation — 90-minute classroom-ready module.'}
            </p>
          </div>
          <div className="bg-emerald-800/40 border border-emerald-500/30 rounded-xl p-4 text-center min-w-[150px]">
            <div className="text-2xl font-bold text-amber-300 font-mono">90 Mins</div>
            <div className="text-xs text-emerald-200 mt-1">Full Class Module</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-white/15 text-xs text-emerald-100">
          <span className="bg-white/10 px-2.5 py-1 rounded-md">🌱 Soil Moisture</span>
          <span className="bg-white/10 px-2.5 py-1 rounded-md">💧 220V Water Pump</span>
          <span className="bg-white/10 px-2.5 py-1 rounded-md">⚡ 5V Relay Trigger</span>
          <span className="bg-white/10 px-2.5 py-1 rounded-md">📡 ESP32 Logic</span>
          <span className="bg-white/10 px-2.5 py-1 rounded-md">📱 Remote Monitoring</span>
        </div>
      </div>

      {/* 4 Main Agricultural Sensors */}
      <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm space-y-4">
        <h2 className="text-xl font-bold text-slate-900">
          {language === 'bn' ? '০১. কৃষিতে ব্যবহৃত ৪টি প্রধান সেন্সর' : '01. 4 Key Agricultural Sensors'}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 flex flex-col justify-between hover:border-emerald-400 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center text-xl mb-3">
                <Droplet className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Soil Moisture Sensor</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                মাটিতে থাকা আর্দ্রতা পরিমাপ করে। রেজিস্টিভ অপেক্ষা ক্যাপাসিটিভ (Capacitive) সেন্সর দীর্ঘস্থায়ী হয়, কারণ এতে জং (Corrosion) ধরে না।
              </p>
            </div>
            <span className="text-[11px] font-semibold text-emerald-700 mt-3 pt-2 border-t border-slate-200 block">
              কাজে লাগে: সেচ অটোমেশন
            </span>
          </div>

          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 flex flex-col justify-between hover:border-emerald-400 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center text-xl mb-3">
                <Thermometer className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">DHT11 / DHT22 Sensor</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                গ্রিনহাউস বা মাঠের পরিবেশের তাপমাত্রা ও বাতাসের আর্দ্রতা মাপে। DHT22 সেন্সরের নির্ভুলতা (Accuracy) DHT11-এর চেয়ে বেশি।
              </p>
            </div>
            <span className="text-[11px] font-semibold text-emerald-700 mt-3 pt-2 border-t border-slate-200 block">
              কাজে লাগে: ওয়েদার মনিটরিং
            </span>
          </div>

          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 flex flex-col justify-between hover:border-emerald-400 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center text-xl mb-3">
                <Sun className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">LDR (Light Sensor)</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                সূর্যের আলোর তীব্রতা পরিমাপ করে। তীব্র রোদে স্বয়ংক্রিয়ভাবে গ্রিনহাউসের শেড-নেট নামাতে বা কৃত্রিম লাইটিং বন্ধ রাখতে ব্যবহৃত হয়।
              </p>
            </div>
            <span className="text-[11px] font-semibold text-emerald-700 mt-3 pt-2 border-t border-slate-200 block">
              কাজে লাগে: গ্রিনহাউস শেডিং
            </span>
          </div>

          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 flex flex-col justify-between hover:border-emerald-400 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center text-xl mb-3">
                <FlaskConical className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Soil pH Sensor</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                মাটির অম্লত্ব বা ক্ষারত্ব (pH ভ্যালু) নির্ণয় করে। এটি উদ্ভিদের পুষ্টি গ্রহণ ক্ষমতা ও সঠিক মাত্রায় সার প্রয়োগে অপরিহার্য।
              </p>
            </div>
            <span className="text-[11px] font-semibold text-emerald-700 mt-3 pt-2 border-t border-slate-200 block">
              কাজে লাগে: মাটির স্বাস্থ্য পরীক্ষা
            </span>
          </div>
        </div>
      </div>

      {/* Smart Irrigation Flow Architecture */}
      <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm space-y-4">
        <h2 className="text-xl font-bold text-slate-900">
          {language === 'bn' ? '০২. স্মার্ট সেচ ব্যবস্থার সম্পূর্ণ ফ্লো' : '02. Smart Irrigation Pipeline'}
        </h2>
        <div className="bg-emerald-950 text-white rounded-xl p-5 border border-emerald-800">
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-mono py-2">
            <span className="bg-emerald-800 px-3 py-1.5 rounded-lg text-emerald-200">🌱 Soil Moisture</span>
            <span className="text-emerald-400 font-bold">──►</span>
            <span className="bg-teal-800 px-3 py-1.5 rounded-lg text-teal-200">🧠 ESP32 Controller</span>
            <span className="text-emerald-400 font-bold">──►</span>
            <span className="bg-amber-800 px-3 py-1.5 rounded-lg text-amber-200">⚡ 5V Relay Module</span>
            <span className="text-emerald-400 font-bold">──►</span>
            <span className="bg-blue-800 px-3 py-1.5 rounded-lg text-blue-200">💧 220V Water Pump</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-600 mt-2">
          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
            <b className="text-slate-900 block mb-1">লজিক ফাংশন (Decision Logic):</b>
            মাটির আর্দ্রতা যখন ৩০%-এর নিচে নামে (Dry Condition), ESP32 রিলের কন্ট্রোল পিনে সিগন্যাল পাঠিয়ে রিলে অন করে এবং পাম্প পানি দিতে শুরু করে। আর্দ্রতা ৬০% এ পৌঁছালে পাম্প বন্ধ হয়ে যায়।
          </div>
          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
            <b className="text-slate-900 block mb-1">রিলে কেন প্রয়োজন?</b>
            ESP32 কেবল ৩.৩V বা ৫V-এ কাজ করে, যা দিয়ে সরাসরি ২২০V এর বড় পানির মোটর চালানো অসম্ভব। রিলে একটি ইলেকট্রনিক সুইচ হিসেবে কম ভোল্টেজ দিয়ে উচ্চ ভোল্টেজকে নিরাপদভাবে অন-অফ করে।
          </div>
        </div>
      </div>

      {/* 90-Minute Interactive Lesson Plan Timeline */}
      <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <span className="text-xs uppercase tracking-wider text-emerald-700 font-bold">Classroom Flow</span>
            <h2 className="text-xl font-bold text-slate-900">
              {language === 'bn' ? '০৩. ৯০ মিনিটের ক্লাস ফ্লো (Interactive Timeline)' : '03. 90-Minute Class Flow'}
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={markNext}
              className="text-xs bg-emerald-600 text-white font-semibold px-3 py-1.5 rounded-lg hover:bg-emerald-700 transition flex items-center gap-1.5 cursor-pointer"
            >
              <Check className="w-3.5 h-3.5" /> Mark Next Block
            </button>
            <button
              onClick={resetTimeline}
              className="text-xs bg-slate-100 text-slate-700 font-semibold px-3 py-1.5 rounded-lg hover:bg-slate-200 transition flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
          <div
            className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 transition-all duration-300"
            style={{ width: `${((completedSteps.length) / steps.length) * 100}%` }}
          />
        </div>

        {/* Timeline step items */}
        <div className="space-y-2.5 pt-2">
          {steps.map((st, idx) => {
            const isCompleted = completedSteps.includes(idx);
            const isActive = activeStep === idx;
            return (
              <div
                key={idx}
                onClick={() => toggleStepDone(idx)}
                className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                  isActive
                    ? 'border-emerald-500 bg-emerald-50/70 shadow-sm'
                    : isCompleted
                    ? 'border-slate-200 bg-slate-50/70'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-100/70 px-2 py-1 rounded">
                      {st.time}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        {language === 'bn' ? st.titleBn : st.titleEn}
                      </h4>
                      <span className="text-[11px] text-slate-500 font-medium">Tag: {st.tag}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {isCompleted && (
                      <span className="text-xs bg-emerald-600 text-white font-bold px-2 py-0.5 rounded-full">
                        Done ✓
                      </span>
                    )}
                  </div>
                </div>

                {/* Teacher cue expansion */}
                <div className="mt-2.5 pt-2.5 border-t border-slate-200/80 text-xs text-slate-700 leading-relaxed bg-white/70 p-2 rounded-lg">
                  <b className="text-emerald-900 font-semibold">Teacher Cue: </b>
                  {language === 'bn' ? st.cueBn : st.cueEn}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Real-life Troubleshooting Scenarios */}
      <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm space-y-4">
        <h2 className="text-xl font-bold text-slate-900">
          {language === 'bn' ? '০৪. রিয়েল-লাইফ ট্রাবলশুটিং ও ফল্ট ডায়াগনসিস' : '04. Real-World Field Troubleshooting'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span>দৃশ্যপট ১: বৃষ্টি হলেও পাম্প চালু হয়ে আছে</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              <b>কারণ:</b> সেন্সরের অ্যানালগ তার ছিঁড়ে যাওয়া, সেন্সরে জং ধরায় সংযোগ না পাওয়া, অথবা কোডে <code>map()</code> ফাংশনে ০ ও ১০২৩-এর ভ্যালু উল্টো কনভার্ট করা।<br />
              <b>সমাধান:</b> মাল্টিমিটার দিয়ে ভোল্টেজ পরীক্ষা করা এবং ক্যাপাসিটিভ সেন্সর ব্যবহার করা।
            </p>
          </div>

          <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>দৃশ্যপট ২: ইন্টারনেট না থাকলে কী হবে (Offline Fallback)?</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              <b>সমাধান:</b> সিস্টেমকে শতভাগ ক্লাউড-নির্ভর করা যাবে না। কোডে অফলাইন লজিক থাকতে হবে যেন ইন্টারনেট সংযোগ কেটে গেলেও ESP32 লোকালভাবে সেন্সর রিড করে পাম্প চালু/বন্ধ করতে পারে।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
