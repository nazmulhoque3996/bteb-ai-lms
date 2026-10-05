import React, { useState } from 'react';
import { useLms } from '../../context/LmsContext';
import { Cpu, Wifi, Smartphone, Radio, CheckCircle, HelpCircle, Layers, ArrowRight } from 'lucide-react';

export const IotArchitectureContent: React.FC = () => {
  const { language } = useLms();
  const [activeLayer, setActiveLayer] = useState<string>('application');
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  const layerInfo: Record<string, { titleBn: string; titleEn: string; descBn: string; descEn: string; items: string[] }> = {
    application: {
      titleBn: 'L4 • অ্যাপ্লিকেশন লেয়ার (Application Layer)',
      titleEn: 'L4 • Application Layer',
      descBn: 'ইউজারের সাথে সরাসরি ইন্টারঅ্যাকশন হয়। মোবাইল অ্যাপ, ওয়েব ড্যাশবোর্ড, মনিটরিং এবং সিস্টেম কন্ট্রোল ইন্টারফেস এখানে থাকে।',
      descEn: 'Direct user-facing interface. Hosts mobile apps, web dashboards, real-time alerts, and automation controls.',
      items: ['Mobile Apps (Android/iOS)', 'Blynk Dashboard', 'Web Visualizers', 'SMS/Push Notifications']
    },
    processing: {
      titleBn: 'L3 • প্রসেসিং লেয়ার (Processing Layer)',
      titleEn: 'L3 • Processing Layer',
      descBn: 'ডেটা প্রক্রিয়াকরণ, সংরক্ষণ, অ্যানালিটিক্স এবং ডিসিশন লজিক। ক্লাউড সার্ভার (ThingSpeak, AWS, Firebase) ও ডাটাবেস এখানে অন্তর্ভুক্ত।',
      descEn: 'Data processing, storage, analytics, and business logic. Includes cloud servers (ThingSpeak, AWS) and databases.',
      items: ['ThingSpeak Server', 'Blynk Cloud', 'MySQL / NoSQL Storage', 'Data Analytics Engine']
    },
    network: {
      titleBn: 'L2 • নেটওয়ার্ক লেয়ার (Network Layer)',
      titleEn: 'L2 • Network Layer',
      descBn: 'ডিভাইস বা এজ গেটওয়ের মধ্যে ডেটা কমিউনিকেশন ও ট্রান্সমিশন করে। Wi-Fi, Bluetooth, LoRaWAN, Cellular ও Internet প্রোটোকল।',
      descEn: 'Enables data communication and packet transmission across nodes. Utilizes Wi-Fi, Bluetooth, LoRaWAN, and Cellular.',
      items: ['Wi-Fi (802.11 b/g/n)', 'Bluetooth / BLE', 'LoRaWAN Long Range', 'HTTP / MQTT Protocols']
    },
    perception: {
      titleBn: 'L1 • পারসেপশন / সেন্সিং লেয়ার (Perception Layer)',
      titleEn: 'L1 • Perception / Sensing Layer',
      descBn: 'বাস্তব পরিবেশ (Physical World) থেকে ডেটা গ্রহণ বা একচুয়েটরের মাধ্যমে ফিজিক্যাল কাজ করা। সেন্সর, RFID ও রিলে এখানে থাকে।',
      descEn: 'Gathers raw physical telemetry or actuates physical hardware. Features temperature sensors, soil probes, RFID, and relays.',
      items: ['Soil Moisture Sensor', 'DHT11 / DHT22', 'LDR Light Sensor', '5V Relay Module (Actuator)']
    }
  };

  return (
    <div className="space-y-8 text-slate-800 printable-content">
      {/* Hero Badge */}
      <div className="bg-gradient-to-r from-emerald-900 to-teal-900 text-white rounded-2xl p-6 sm:p-8 shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-wider bg-white/10 border border-white/20 px-3 py-1 rounded-full text-emerald-200 font-semibold font-mono">
              BTEB Diploma • CST Code: 28563 • Probidhan 2022
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-3 leading-tight">
              {language === 'bn' ? 'আইওটি ও IoT Architecture' : 'IoT & IoT Architecture'}
            </h1>
            <p className="text-emerald-100/90 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              {language === 'bn'
                ? 'একটি IoT সিস্টেম কীভাবে বাস্তব পরিবেশ থেকে ডেটা সংগ্রহ করে নেটওয়ার্ক, প্রসেসিং ও অ্যাপ্লিকেশনের মধ্য দিয়ে ইউজারের কাছে পৌঁছে দেয় তা জানা।'
                : 'Understanding how an IoT ecosystem ingests real-world data, transmits it across networks, processes it, and renders actionable services.'}
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-4 text-center min-w-[140px]">
            <div className="text-2xl font-bold text-amber-300 font-mono">P → N → P → A</div>
            <div className="text-xs text-emerald-100 mt-1">4-Layer Formula</div>
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mt-6 pt-6 border-t border-white/15 text-xs font-medium">
          <div className="bg-white/10 rounded-lg p-2.5 text-center">📡 1. Sense (অনুভব করা)</div>
          <div className="bg-white/10 rounded-lg p-2.5 text-center">📨 2. Send (প্রেরণ করা)</div>
          <div className="bg-white/10 rounded-lg p-2.5 text-center">⚙️ 3. Process (প্রক্রিয়াকরণ)</div>
          <div className="bg-white/10 rounded-lg p-2.5 text-center">📱 4. Show (প্রদর্শন ও নিয়ন্ত্রণ)</div>
        </div>
      </div>

      {/* 01. IoT Definition */}
      <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-emerald-700 font-semibold text-sm">
          <Layers className="w-5 h-5" />
          <span>০১. আইওটি (Internet of Things) কী?</span>
        </div>
        <blockquote className="border-l-4 border-emerald-600 bg-emerald-50/60 p-4 rounded-r-xl text-slate-800 font-medium text-base sm:text-lg leading-relaxed">
          {language === 'bn'
            ? '“IoT হলো physical world-এর ডিভাইসগুলোকে সেন্সর, মাইক্রোকন্ট্রোলার ও ইন্টারনেটের মাধ্যমে যুক্ত করে ডেটা সংগ্রহ, প্রসেসিং এবং স্বয়ংক্রিয় সেবা নিশ্চিত করার ব্যবস্থা।”'
            : '"IoT connects physical entities through sensors, microcontrollers, and communication networks to achieve data-driven monitoring, processing, and automation."'}
        </blockquote>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 pt-2">
          {[
            { title: 'ফিজিক্যাল ওয়ার্ল্ড', sub: 'Real Environment', icon: '🌍' },
            { title: 'সেন্সর', sub: 'Collect Data', icon: '🌡️' },
            { title: 'মাইক্রোকন্ট্রোলার', sub: 'ESP32 / MCU', icon: '🧠' },
            { title: 'যোগাযোগ', sub: 'Wi-Fi / LoRa', icon: '📶' },
            { title: 'অ্যাপ্লিকেশন', sub: 'Mobile / Dashboard', icon: '📱' },
          ].map((step, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/70 rounded-xl p-3.5 text-center relative flex flex-col items-center justify-center">
              <span className="text-2xl mb-1">{step.icon}</span>
              <span className="font-bold text-xs text-slate-800">{step.title}</span>
              <span className="text-[11px] text-slate-500">{step.sub}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 02. Core Characteristics of IoT */}
      <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">
            {language === 'bn' ? '০২. IoT-এর ৮টি মূল বৈশিষ্ট্য' : '02. 8 Core Characteristics of IoT'}
          </h2>
          <span className="text-xs font-semibold text-slate-500">BTEB Board Standard</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {[
            {
              title: 'Connectivity (সংযুক্ততা)',
              desc: 'নেটওয়ার্কের মাধ্যমে প্রতিটি ডিভাইস অন্য ডিভাইসের সাথে বা ক্লাউড ইন্টারনেটের সাথে যুক্ত থাকে।'
            },
            {
              title: 'Sensing (অনুভব করা)',
              desc: 'তাপমাত্রা, আর্দ্রতা, আলো বা গতির মতো অ্যানালগ/ডিজিটাল প্যারামিটার সেন্সরের মাধ্যমে পরিমাপ করা হয়।'
            },
            {
              title: 'Data Communication',
              desc: 'সংগৃহীত ডেটা ওয়াই-ফাই বা ব্লুটুথের মাধ্যমে গেটওয়ে বা ক্লাউড সার্ভারে প্রেরণ করা হয়।'
            },
            {
              title: 'Interoperability',
              desc: 'ভিন্ন ভিন্ন ব্র্যান্ড, হার্ডওয়্যার প্ল্যাটফর্ম এবং সফটওয়্যার প্রোটোকলের ডিভাইস একে অপরের সাথে কাজ করতে পারে।'
            },
            {
              title: 'Dynamic Nature',
              desc: 'পরিবেশের পরিবর্তনের ওপর নির্ভর করে ডিভাইসের স্টেট এবং সেন্সর ভ্যালু সময়ের সাথে পরিবর্তনশীল থাকে।'
            },
            {
              title: 'Automation (স্বয়ংক্রিয়তা)',
              desc: 'মানুষের সরাসরি হস্তক্ষেপ ছাড়াই পূর্বনির্ধারিত লজিক ও থ্রেশহোল্ড অনুযায়ী স্বয়ংক্রিয় ডিসিশন গ্রহণ করে।'
            },
            {
              title: 'Scalability (সম্প্রসারণযোগ্যতা)',
              desc: 'প্রয়োজন অনুযায়ী হাজার হাজার নতুন সেন্সর বা ডিভাইস নেটওয়ার্কে সহজে যুক্ত করা যায়।'
            },
            {
              title: 'Security (নিরাপত্তা)',
              desc: 'অননুমোদিত প্রবেশ রোধে ডিভাইস অথেন্টিকেশন এবং এনক্রিপ্টেড ডেটা ট্রান্সমিশন অপরিহার্য।'
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-50/80 hover:bg-emerald-50/40 transition-colors p-4 rounded-xl border border-slate-200/70">
              <span className="text-xs font-bold text-emerald-700 block mb-1">০{idx + 1}. {item.title}</span>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 03. 4-Layer Architecture Interactive Explorer */}
      <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm space-y-6">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            {language === 'bn' ? '০৩. ৪-স্তরের IoT আর্কিটেকচার (Interactive)' : '03. 4-Layer IoT Architecture'}
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            {language === 'bn' ? 'যেকোনো স্তরে ক্লিক করে সেই স্তরের বিস্তারিত কাজ ও উদাহরণ দেখুন:' : 'Click on any layer to inspect detailed roles and hardware examples:'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Layer Stacks */}
          <div className="lg:col-span-6 space-y-3">
            {[
              { id: 'application', level: 'L4', label: 'APPLICATION LAYER', sub: 'User Service • Monitoring • Control', color: 'border-pink-500 bg-pink-50/60 text-pink-950', icon: '📱' },
              { id: 'processing', level: 'L3', label: 'PROCESSING LAYER', sub: 'Storage • Analytics • Decisions', color: 'border-purple-500 bg-purple-50/60 text-purple-950', icon: '☁️' },
              { id: 'network', level: 'L2', label: 'NETWORK LAYER', sub: 'Transmission • Routing • Wi-Fi', color: 'border-sky-500 bg-sky-50/60 text-sky-950', icon: '📶' },
              { id: 'perception', level: 'L1', label: 'PERCEPTION / SENSING', sub: 'Physical Sense • Measure • Actuate', color: 'border-emerald-500 bg-emerald-50/60 text-emerald-950', icon: '🌱' }
            ].map(l => (
              <button
                key={l.id}
                onClick={() => setActiveLayer(l.id)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all cursor-pointer flex items-center justify-between ${
                  activeLayer === l.id
                    ? `${l.color} shadow-sm ring-2 ring-emerald-500/20`
                    : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold px-2 py-1 bg-slate-200/70 rounded text-slate-800">{l.level}</span>
                  <div>
                    <h3 className="font-bold text-sm tracking-wide">{l.label}</h3>
                    <p className="text-xs text-slate-500">{l.sub}</p>
                  </div>
                </div>
                <span className="text-xl">{l.icon}</span>
              </button>
            ))}
          </div>

          {/* Active Layer Details */}
          <div className="lg:col-span-6 bg-slate-50 rounded-2xl p-5 border border-slate-200 flex flex-col justify-between min-h-[280px]">
            <div>
              <span className="text-[11px] font-bold tracking-wider uppercase text-emerald-700 bg-emerald-100/70 px-2.5 py-1 rounded-full">
                Active Inspector
              </span>
              <h3 className="text-lg font-bold text-slate-900 mt-2">
                {language === 'bn' ? layerInfo[activeLayer].titleBn : layerInfo[activeLayer].titleEn}
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                {language === 'bn' ? layerInfo[activeLayer].descBn : layerInfo[activeLayer].descEn}
              </p>

              <div className="mt-4 pt-4 border-t border-slate-200">
                <span className="text-xs font-bold text-slate-700 block mb-2">
                  {language === 'bn' ? 'ব্যবহারিক উদাহরণ ও ডিভাইসসমূহ:' : 'Practical Examples & Hardware:'}
                </span>
                <div className="flex flex-wrap gap-2">
                  {layerInfo[activeLayer].items.map((it, i) => (
                    <span key={i} className="text-xs bg-white border border-slate-200 px-2.5 py-1 rounded-md text-slate-700 font-medium">
                      ✓ {it}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200/70 rounded-xl text-xs text-emerald-900 flex items-center gap-2">
              <span className="text-lg">💡</span>
              <span>
                {language === 'bn'
                  ? 'মনে রাখার সহজ শর্টকাট: P → N → P → A (Sense → Send → Process → Show)'
                  : 'Quick mnemonic: P → N → P → A (Sense → Send → Process → Show)'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 04. Temperature System Example */}
      <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm space-y-4">
        <h2 className="text-xl font-bold text-slate-900">
          {language === 'bn' ? '০৪. বাস্তব দৃশ্যপট: তাপমাত্রা মনিটরিং সিস্টেম' : '04. Real-World Case: Temperature IoT Pipeline'}
        </h2>
        <p className="text-xs text-slate-500 leading-relaxed">
          {language === 'bn'
            ? 'একটি ডিজিটাল তাপমাত্রা সেন্সর থেকে কীভাবে মোবাইল অ্যাপে ডেটা প্রদর্শিত হয়, তার ধাপে ধাপে ভ্রমণ:'
            : 'Step-by-step telemetry transmission from a DHT temperature probe to a smartphone dashboard:'}
        </p>

        <div className="p-4 bg-slate-900 text-white rounded-xl font-mono text-xs sm:text-sm overflow-x-auto">
          <div className="flex items-center gap-3 min-w-[600px] py-2">
            <span className="text-amber-300 font-bold">🌡️ DHT22 Sensor</span>
            <span className="text-slate-400">──(Analog/I2C)──►</span>
            <span className="text-emerald-400 font-bold">🧠 ESP32 Controller</span>
            <span className="text-slate-400">──(Wi-Fi MQTT)──►</span>
            <span className="text-sky-300 font-bold">☁️ ThingSpeak / Cloud</span>
            <span className="text-slate-400">──(REST API)──►</span>
            <span className="text-pink-300 font-bold">📱 Mobile App (28°C)</span>
          </div>
        </div>
      </div>

      {/* 05. Board Questions (Brief & Tricky) */}
      <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm space-y-4">
        <h2 className="text-xl font-bold text-slate-900">
          {language === 'bn' ? '০৫. বোর্ড পরীক্ষার সম্ভাব্য সংক্ষিপ্ত ও ট্রিকি প্রশ্ন' : '05. High-Yield Board Exam Questions'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <h3 className="font-bold text-sm text-slate-900">প্রশ্ন ১: Perception Layer-এর কাজ কী?</h3>
            <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
              উত্তর: ফিজিক্যাল পরিবেশ থেকে বিভিন্ন সেন্সর দিয়ে অ্যানালগ বা ডিজিটাল ডেটা গ্রহণ করা এবং সিগন্যাল কন্ডিশনিং করে মাইক্রোকন্ট্রোলারে পাঠানো।
            </p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <h3 className="font-bold text-sm text-slate-900">প্রশ্ন ২: Network Layer ও Processing Layer-এর মূল পার্থক্য কী?</h3>
            <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
              উত্তর: Network Layer কেবল এক প্রান্ত থেকে অন্য প্রান্তে ডেটা প্যাকেট ট্রান্সফার করে; আর Processing Layer সেই ডেটা সেভ করে, প্রসেস করে ও ডিসিশন নেয়।
            </p>
          </div>
          <div className="p-4 bg-amber-50/60 rounded-xl border border-amber-200 md:col-span-2">
            <h3 className="font-bold text-sm text-amber-950">
              💡 ট্রিকি দৃশ্যপট প্রশ্ন: স্মার্ট রুমে সেন্সর ও ওয়াই-ফাই থাকার পরও অ্যাপে ডেটা আসছে না। কোন কোন অংশ পরীক্ষা করবে?
            </h3>
            <p className="text-xs text-amber-900 mt-1.5 leading-relaxed">
              ১. <b>সেন্সর কানেকশন:</b> তার ঠিকমতো লাগানো আছে কি না এবং পাওয়ার (VCC/GND) পাচ্ছে কি না।<br />
              ২. <b>এজ কন্ট্রোলার:</b> ESP32 কি চালু আছে এবং ওয়াই-ফাই রাউটারে কানেক্টেড হয়েছে কি না (সিরিয়াল মনিটরে চেক)।<br />
              ৩. <b>ক্লাউড টোকেন:</b> Blynk বা ThingSpeak-এর API Key কোডে সঠিক দেওয়া আছে কি না।<br />
              ৪. <b>মোবাইল নেটওয়ার্ক:</b> ইউজারের মোবাইলে ইন্টারনেট সংযোগ চালু আছে কি না।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
