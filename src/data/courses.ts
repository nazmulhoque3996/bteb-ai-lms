import { Course } from '../types';

export const COURSES: Course[] = [
  {
    id: 'sensor-iot-28563',
    code: '28563',
    titleBn: 'সেন্সর ও আইওটি সিস্টেম',
    titleEn: 'Sensor & IoT Systems',
    deptBn: 'কম্পিউটার সায়েন্স অ্যান্ড টেকনোলজি (CST)',
    deptEn: 'Computer Science & Technology (CST)',
    semesterBn: 'ষষ্ঠ পর্ব',
    semesterEn: '6th Semester',
    credits: 3,
    probidhan: 'Probidhan 2022',
    coverGradient: 'from-emerald-800 via-teal-900 to-slate-950',
    icon: 'Radio',
    chapters: [
      {
        id: 'iot-architecture',
        courseId: 'sensor-iot-28563',
        titleBn: 'অধ্যায় ১: আইওটি ও আইওটি আর্কিটেকচার',
        titleEn: 'Chapter 1: IoT & IoT Architecture',
        descriptionBn: 'আইওটির মৌলিক সংজ্ঞা, বৈশিষ্ট্য, ৪-স্তরের আর্কিটেকচার (Perception, Network, Processing, Application) এবং ডেটা ফ্লো।',
        descriptionEn: 'Fundamental concepts of IoT, core characteristics, 4-layer architecture, and physical-to-application data journeys.',
        status: 'done',
        durationMins: 90,
        hasLecture: true,
        hasLessonPlan: true,
        hasQuiz: true,
        keyTopicsBn: [
          'IoT-এর সংজ্ঞা ও গুরুত্ব',
          '৮টি মূল বৈশিষ্ট্য (Connectivity, Sensing, Automation...)',
          '৪-স্তরের আর্কিটেকচার (P-N-P-A)',
          'রিয়েল-লাইফ তাপমাত্রা মনিটরিং ফ্লো'
        ],
        keyTopicsEn: [
          'Definition & Core Principles',
          '8 Core Characteristics (Connectivity, Sensing, Interoperability...)',
          '4-Layer Architecture (P-N-P-A)',
          'Real-World Temperature Data Journey'
        ],
        quizQuestions: [
          {
            id: 1,
            questionBn: '১. IoT-এর পূর্ণরূপ কোনটি?',
            questionEn: '1. What is the full form of IoT?',
            type: 'mcq',
            optionsBn: ['Internet of Technology', 'Internet of Things', 'Information of Things', 'Integration of Technology'],
            optionsEn: ['Internet of Technology', 'Internet of Things', 'Information of Things', 'Integration of Technology'],
            correctAnswer: 1,
            marks: 1,
            explanationBn: 'IoT stands for "Internet of Things" (বস্তুসমূহের ইন্টারনেট)।',
            explanationEn: 'IoT stands for "Internet of Things".'
          },
          {
            id: 2,
            questionBn: '২. Physical world থেকে data collection কোন layer-এর মূল কাজ?',
            questionEn: '2. Collecting data from the physical world is the core role of which layer?',
            type: 'mcq',
            optionsBn: ['Application Layer', 'Processing Layer', 'Network Layer', 'Perception / Sensing Layer'],
            optionsEn: ['Application Layer', 'Processing Layer', 'Network Layer', 'Perception / Sensing Layer'],
            correctAnswer: 3,
            marks: 1,
            explanationBn: 'Perception Layer পরিবেশ থেকে বিভিন্ন Sensor ও RFID-এর মাধ্যমে ডেটা গ্রহণ করে।',
            explanationEn: 'Perception Layer gathers data from the physical world via sensors and actuators.'
          },
          {
            id: 3,
            questionBn: '৩. Network Layer-এর প্রধান কাজ কোনটি?',
            questionEn: '3. What is the primary function of the Network Layer?',
            type: 'mcq',
            optionsBn: ['Data sensing', 'Data transmission ও যোগাযোগ', 'User interface design', 'Physical measurement'],
            optionsEn: ['Data sensing', 'Data transmission & communication', 'User interface design', 'Physical measurement'],
            correctAnswer: 1,
            marks: 1,
            explanationBn: 'Network Layer ওয়াই-ফাই, ব্লুটুথ, ইথারনেট বা ইন্টারনেটের মাধ্যমে ডেটা আদান-প্রদান করে।',
            explanationEn: 'The Network Layer transmits and forwards data across nodes and gateways.'
          },
          {
            id: 4,
            questionBn: '৪. Mobile App-এ IoT ডেটা প্রদর্শন কোন layer-এর সাথে সবচেয়ে সরাসরি সম্পর্কিত?',
            questionEn: '4. Displaying IoT data on a mobile app is directly related to which layer?',
            type: 'mcq',
            optionsBn: ['Perception Layer', 'Network Layer', 'Processing Layer', 'Application Layer'],
            optionsEn: ['Perception Layer', 'Network Layer', 'Processing Layer', 'Application Layer'],
            correctAnswer: 3,
            marks: 1,
            explanationBn: 'Application Layer ইউজার ইন্টারফেস, মোবাইল অ্যাপ ও ড্যাশবোর্ডের মাধ্যমে সেবা প্রদান করে।',
            explanationEn: 'The Application Layer delivers human-facing services and dashboard visualizers.'
          },
          {
            id: 5,
            questionBn: '৫. IoT Architecture-এর সঠিক লজিক্যাল ক্রম কোনটি?',
            questionEn: '5. Which is the correct logical sequence of IoT Architecture?',
            type: 'mcq',
            optionsBn: [
              'Application → Network → Perception → Processing',
              'Processing → Perception → Network → Application',
              'Perception → Network → Processing → Application',
              'Network → Application → Processing → Perception'
            ],
            optionsEn: [
              'Application → Network → Perception → Processing',
              'Processing → Perception → Network → Application',
              'Perception → Network → Processing → Application',
              'Network → Application → Processing → Perception'
            ],
            correctAnswer: 2,
            marks: 1,
            explanationBn: 'সঠিক ফ্লো: Perception (Sense) → Network (Send) → Processing (Compute) → Application (Show/Control)। সংক্ষেপে P-N-P-A।',
            explanationEn: 'The correct flow is Perception -> Network -> Processing -> Application (P-N-P-A).'
          },
          {
            id: 6,
            questionBn: '৬. Interoperability বলতে IoT-তে কী বোঝায়?',
            questionEn: '6. What does Interoperability mean in IoT systems?',
            type: 'mcq',
            optionsBn: [
              'শুধুমাত্র একটি নির্দিষ্ট কোম্পানির হার্ডওয়্যার ব্যবহার করা',
              'ভিন্ন ভিন্ন ব্র্যান্ড ও প্রযুক্তির ডিভাইসের একসাথে সমন্বিতভাবে কাজ করার সক্ষমতা',
              'ইন্টারনেট ছাড়া ডিভাইস বন্ধ থাকা',
              'শুধুমাত্র ব্যাটারি চালিত হওয়া'
            ],
            optionsEn: [
              'Using hardware from only a single company',
              'Ability of heterogeneous devices and ecosystems to seamlessly collaborate',
              'Devices stopping when internet is disconnected',
              'Running exclusively on battery power'
            ],
            correctAnswer: 1,
            marks: 1,
            explanationBn: 'ভিন্ন ভিন্ন হার্ডওয়্যার ও সফটওয়্যার প্রোটোকলের ডিভাইস একে অপরের সাথে কাজ করতে পারাকে Interoperability বলে।',
            explanationEn: 'Interoperability refers to the capability of varied hardware/software ecosystems to intercommunicate.'
          },
          {
            id: 7,
            questionBn: '৭. একটি স্মার্ট টেম্পারেচার IoT সিস্টেমে ESP32 কোন কাজটির জন্য মূলত ব্যবহৃত হয়?',
            questionEn: '7. In a smart temperature IoT system, what is the ESP32 mainly used for?',
            type: 'mcq',
            optionsBn: [
              'শুধুমাত্র ডিসপ্লে স্ক্রিন হিসেবে',
              'সেন্সর থেকে অ্যানালগ/ডিজিটাল রিডিং গ্রহণ ও ওয়াই-ফাই দিয়ে সার্ভারে প্রেরণ',
              'সরাসরি ২২০ ভোল্ট এসি বিদ্যুৎ উৎপাদন করা',
              'ব্যাটারি চার্জার হিসেবে'
            ],
            optionsEn: [
              'Solely as a display screen',
              'Reading sensor values, processing logic, and streaming data over Wi-Fi',
              'Directly generating 220V AC electricity',
              'Acting as a standalone battery charger'
            ],
            correctAnswer: 1,
            marks: 1,
            explanationBn: 'ESP32 একটি মাইক্রোকন্ট্রোলার যা সেন্সর থেকে ডেটা পড়ে এবং ইনবিল্ট ওয়াই-ফাই দিয়ে ক্লাউডে পাঠায়।',
            explanationEn: 'ESP32 acts as the edge controller that ingests sensor telemetry and communicates over Wi-Fi.'
          },
          {
            id: 8,
            questionBn: '৮. IoT-এর Dynamic Nature বৈশিষ্ট্য দ্বারা কী বোঝানো হয়েছে?',
            questionEn: '8. What does the "Dynamic Nature" characteristic of IoT describe?',
            type: 'mcq',
            optionsBn: [
              'ডিভাইস সবসময় স্থির থাকবে',
              'পরিবেশের পরিবর্তন অনুযায়ী ডিভাইসের স্টেট ও ডেটা ক্রমাগত পরিবর্তিত হওয়া',
              'ইন্টারনেট স্পিড সবসময় একই থাকা',
              'কোড পরিবর্তন করা অসম্ভব হওয়া'
            ],
            optionsEn: [
              'Devices remain completely static',
              'States and sensor readings dynamically change according to environmental variations',
              'Internet speeds remain permanently constant',
              'Source code cannot be adjusted'
            ],
            correctAnswer: 1,
            marks: 1,
            explanationBn: 'পরিবেশের তাপমাত্রা, আলো ও আর্দ্রতা যেমন বদলায়, সিস্টেমের ডেটাও সময়ের সাথে সাথে পরিবর্তিত হয়।',
            explanationEn: 'Environmental parameters and device operational states fluctuate dynamically.'
          },
          {
            id: 9,
            questionBn: '৯. Perception Layer-এ নিচের কোনটি ইনপুট ডিভাইসের উদাহরণ নয়?',
            questionEn: '9. Which of the following is NOT an input sensing device in the Perception Layer?',
            type: 'mcq',
            optionsBn: ['DHT11 Sensor', 'Soil Moisture Sensor', 'Relay Module (Actuator)', 'LDR Sensor'],
            optionsEn: ['DHT11 Sensor', 'Soil Moisture Sensor', 'Relay Module (Actuator)', 'LDR Sensor'],
            correctAnswer: 2,
            marks: 1,
            explanationBn: 'Relay Module একটি অ্যাকচুয়েটর (Actuator/Output), এটি পরিবেশ থেকে ডেটা ইনপুট নেয় না বরং সুইচ অন-অফ করে।',
            explanationEn: 'A Relay Module is an actuator that triggers an action, not an input sensor.'
          },
          {
            id: 10,
            questionBn: '১০. IoT Architecture-এ Processing Layer-এর মূল দায়িত্ব কোনটি?',
            questionEn: '10. What is the core responsibility of the Processing Layer in IoT Architecture?',
            type: 'mcq',
            optionsBn: [
              'শুধুমাত্র তারের সংযোগ দেওয়া',
              'ডেটা প্রসেস, স্টোরেজ, অ্যানালাইটিক্স এবং সিদ্ধান্ত তৈরি করা',
              'মনিটরে ছবি প্রিন্ট করা',
              'বিদ্যুৎ বিল পরিমাপ করা'
            ],
            optionsEn: [
              'Only providing physical wire joints',
              'Data computation, storage, analytical processing, and decision support',
              'Printing images on a monitor',
              'Calculating utility electric bills'
            ],
            correctAnswer: 1,
            marks: 1,
            explanationBn: 'Processing Layer-এ ক্লাউড বা এজ সার্ভার ডেটা সঞ্চয় ও বিশ্লেষণ করে স্বয়ংক্রিয় সিদ্ধান্তের নির্দেশ পাঠায়।',
            explanationEn: 'The Processing Layer stores, analyzes, and evaluates telemetry for automated action.'
          },
          {
            id: 11,
            questionBn: '১১. [চিন্তামূলক প্রশ্ন - ৫ নম্বর]: স্মার্ট রুমে সেন্সর ও ওয়াই-ফাই ঠিক থাকলেও মোবাইল অ্যাপে ডেটা আসছে না। ট্রাবলশুটিংয়ের ৫টি যৌক্তিক ধাপ ব্যাখ্যা কর।',
            questionEn: '11. [Analytical Scenario - 5 Marks]: A smart room has working sensors and Wi-Fi, but no data reaches the mobile app. Explain the 5 troubleshooting steps across the IoT layers.',
            type: 'analytical',
            correctAnswer: 'Troubleshooting: ১. সেন্সর ওয়্যারিং ও পাওয়ার যাচাই (Perception Layer), ২. এজ ডিভাইসের কোড ও সিরিয়াল মনিটর আউটপুট পরীক্ষা, ৩. ওয়াই-ফাই গেটওয়ে/রাউটার কানেকশন ও আইপি ঠিক আছে কিনা পরীক্ষা (Network Layer), ৪. ক্লাউড বা ব্রোকার সার্ভার স্ট্যাটাস ও অথেন্টিকেশন কি (API Key) যাচাই (Processing Layer), ৫. মোবাইল অ্যাপের ডেটাবেস সিঙ্ক ও ইন্টারনেট অ্যাক্সেস পরীক্ষা (Application Layer)।',
            marks: 5,
            explanationBn: '৫টি লেয়ারভিত্তিক ধাপ: হার্ডওয়্যার পাওয়ার → মাইক্রোকন্ট্রোলার কোড → নেটওয়ার্ক ক্রেডেনশিয়ালস → ক্লাউড API টোকেন → অ্যাপ রিফ্রেশ।',
            explanationEn: '5-step layer audit: Hardware power -> MCU serial debug -> Gateway Wi-Fi -> Cloud API key -> App network sync.'
          }
        ]
      },
      {
        id: 'iot-in-agriculture',
        courseId: 'sensor-iot-28563',
        titleBn: 'অধ্যায় ২: কৃষিক্ষেত্রে আইওটি (IoT in Agriculture)',
        titleEn: 'Chapter 2: IoT in Agriculture',
        descriptionBn: 'স্মার্ট সেচ ব্যবস্থা (Smart Irrigation), মাটির আর্দ্রতা সেন্সর, DHT11/22, LDR, pH সেন্সর, রিলে মডিউল ও পাম্প অটোমেশন।',
        descriptionEn: 'Smart irrigation automation, capacitive soil moisture sensing, environmental sensors, relay pump control, and offline resilience.',
        status: 'done',
        durationMins: 90,
        hasLecture: true,
        hasLessonPlan: true,
        hasQuiz: true,
        keyTopicsBn: [
          'স্মার্ট এগ্রিকালচার ও প্রিসিশন ফার্মিং',
          'মূল সেন্সরসমূহ (Soil Moisture, DHT22, LDR, pH)',
          'স্মার্ট সেচের ডেটা ফ্লো (Sensor → ESP32 → Relay → Pump)',
          'বৃষ্টিতে সেন্সর ফল্ট ও অফলাইন ফলব্যাক লজিক'
        ],
        keyTopicsEn: [
          'Smart Agriculture & Precision Farming',
          'Key Sensors (Soil Moisture, DHT22, LDR, pH)',
          'Smart Irrigation Pipeline (Sensor → ESP32 → Relay → Pump)',
          'Sensor Fault Diagnosis & Offline Resilient Fallbacks'
        ],
        quizQuestions: [
          {
            id: 1,
            questionBn: '১. Smart Agriculture-এর প্রধান বৈশিষ্ট্য কোনটি?',
            questionEn: '1. What is the primary characteristic of Smart Agriculture?',
            type: 'mcq',
            optionsBn: ['শুধু Manual farming', 'Sensor ও automation ব্যবহার করে data-driven farming', 'শুধু Internet browsing', 'শুধু mobile phone ব্যবহার'],
            optionsEn: ['Manual farming only', 'Data-driven farming utilizing sensors and automation', 'Browsing the web only', 'Using cellular phones only'],
            correctAnswer: 1,
            marks: 1,
            explanationBn: 'Sensor এবং কন্ট্রোলারের সাহায্যে রিয়েল-টাইম ডেটার ভিত্তিতে চাষাবাদ করাই স্মার্ট এগ্রিকালচার।',
            explanationEn: 'Smart agriculture relies on sensor data and automation rather than manual guesswork.'
          },
          {
            id: 2,
            questionBn: '২. মাটির আর্দ্রতা পরিমাপের জন্য কোন Sensor ব্যবহার করা হয়?',
            questionEn: '2. Which sensor is utilized to measure soil moisture level?',
            type: 'mcq',
            optionsBn: ['LDR', 'DHT22', 'Soil Moisture Sensor', 'pH Sensor'],
            optionsEn: ['LDR', 'DHT22', 'Soil Moisture Sensor', 'pH Sensor'],
            correctAnswer: 2,
            marks: 1,
            explanationBn: 'Soil Moisture Sensor মাটির আর্দ্রতা পরিমাপ করে পানির ঘাটতি শনাক্ত করে।',
            explanationEn: 'The Soil Moisture Sensor measures volumetric water content in soil.'
          },
          {
            id: 3,
            questionBn: '৩. DHT11/DHT22 সাধারণত কী পরিমাপ করে?',
            questionEn: '3. What parameters do DHT11/DHT22 sensors generally measure?',
            type: 'mcq',
            optionsBn: ['Temperature ও Humidity', 'pH ও Light', 'Soil Moisture ও pH', 'Pressure ও Voltage'],
            optionsEn: ['Temperature & Humidity', 'pH & Light', 'Soil Moisture & pH', 'Pressure & Voltage'],
            correctAnswer: 0,
            marks: 1,
            explanationBn: 'DHT মানে Digital Humidity and Temperature sensor; এটি তাপমাত্রা ও বাতাসের আর্দ্রতা মাপে।',
            explanationEn: 'DHT11 and DHT22 sense ambient temperature and relative humidity.'
          },
          {
            id: 4,
            questionBn: '৪. LDR প্রধানত কোন parameter শনাক্ত করে?',
            questionEn: '4. What environmental parameter does an LDR primarily detect?',
            type: 'mcq',
            optionsBn: ['Humidity', 'Soil pH', 'Temperature', 'Light Intensity (আলোর তীব্রতা)'],
            optionsEn: ['Humidity', 'Soil pH', 'Temperature', 'Light Intensity'],
            correctAnswer: 3,
            marks: 1,
            explanationBn: 'LDR (Light Dependent Resistor) আলোর তীব্রতার ওপর ভিত্তি করে রোধের মান পরিবর্তন করে।',
            explanationEn: 'LDR modulates electrical resistance in proportion to ambient light intensity.'
          },
          {
            id: 5,
            questionBn: '৫. কৃষিক্ষেত্রে pH Sensor-এর প্রধান কাজ কী?',
            questionEn: '5. What is the primary function of a soil pH sensor in agriculture?',
            type: 'mcq',
            optionsBn: ['পানি পাম্প করা', 'Acidity/Alkalinity পরিমাপ করা', 'আলো পরিমাপ করা', 'Wi-Fi signal বাড়ানো'],
            optionsEn: ['Pumping water', 'Measuring soil acidity or alkalinity', 'Measuring sunlight', 'Amplifying Wi-Fi range'],
            correctAnswer: 1,
            marks: 1,
            explanationBn: 'মাটির অম্লত্ব বা ক্ষারত্ব (pH) নির্ধারণ করে সঠিক মাত্রায় সার ও চুন প্রয়োগ করা যায়।',
            explanationEn: 'pH sensors gauge soil acidity or alkalinity to guide optimal fertilizer treatments.'
          },
          {
            id: 6,
            questionBn: '৬. Smart Irrigation-এ Sensor-এর data কোন device process/control করতে পারে?',
            questionEn: '6. Which device processes and controls sensor telemetry in Smart Irrigation?',
            type: 'mcq',
            optionsBn: ['Monitor only', 'Speaker', 'ESP32 / NodeMCU', 'Keyboard'],
            optionsEn: ['Monitor only', 'Speaker', 'ESP32 / NodeMCU', 'Keyboard'],
            correctAnswer: 2,
            marks: 1,
            explanationBn: 'ESP32 বা NodeMCU মাইক্রোকন্ট্রোলার সেন্সরের রিডিং পড়ে লজিক অনুযায়ী আউটপুট নিয়ন্ত্রণ করে।',
            explanationEn: 'Microcontrollers such as ESP32 and NodeMCU process sensor logic.'
          },
          {
            id: 7,
            questionBn: '৭. Relay-এর সাহায্যে Smart Irrigation System-এ কী নিয়ন্ত্রণ করা যায়?',
            questionEn: '7. What does a Relay module control in a Smart Irrigation system?',
            type: 'mcq',
            optionsBn: ['Water Pump ON/OFF', 'Soil pH সরাসরি মাপা', 'Temperature সরাসরি মাপা', 'Light intensity মাপা'],
            optionsEn: ['Water Pump ON/OFF', 'Directly measuring soil pH', 'Directly measuring temperature', 'Measuring light intensity'],
            correctAnswer: 0,
            marks: 1,
            explanationBn: 'রিলে মডিউল ৫ ভোল্টের ডিজিটাল সিগন্যাল দিয়ে ২২০ ভোল্ট এসি পানির মোটর নিরাপদভাবে অন-অফ করে।',
            explanationEn: 'The relay enables low-voltage logic (5V) to safely toggle high-voltage loads like water pumps.'
          },
          {
            id: 8,
            questionBn: '৮. নিচের কোনটি Smart Irrigation-এর সবচেয়ে যৌক্তিক data flow?',
            questionEn: '8. Which represents the most logical data flow in Smart Irrigation?',
            type: 'mcq',
            optionsBn: [
              'Pump → Sensor → ESP32',
              'Wi-Fi → Soil → Pump',
              'Relay → Sensor → Wi-Fi',
              'Sensor → ESP32/NodeMCU → Relay → Pump'
            ],
            optionsEn: [
              'Pump → Sensor → ESP32',
              'Wi-Fi → Soil → Pump',
              'Relay → Sensor → Wi-Fi',
              'Sensor → ESP32/NodeMCU → Relay → Pump'
            ],
            correctAnswer: 3,
            marks: 1,
            explanationBn: 'প্রথমে মাটি সেন্সর করে → ESP32 রিড করে → লজিক অনুযায়ী রিলে অন করে → পাম্প পানি সরবরাহ করে।',
            explanationEn: 'The pipeline flows from Sensor to ESP32 MCU, triggering the Relay to drive the Pump.'
          },
          {
            id: 9,
            questionBn: '৯. Weather Monitoring-এর জন্য কোন Sensor সবচেয়ে উপযোগী?',
            questionEn: '9. Which sensor is best suited for atmospheric weather monitoring?',
            type: 'mcq',
            optionsBn: [
              'LDR + pH Sensor',
              'DHT11/DHT22 + অন্যান্য environmental sensors',
              'Relay + Pump',
              'Keyboard + Mouse'
            ],
            optionsEn: [
              'LDR + pH Sensor',
              'DHT11/DHT22 + environmental sensors',
              'Relay + Pump',
              'Keyboard + Mouse'
            ],
            correctAnswer: 1,
            marks: 1,
            explanationBn: 'আবহাওয়ার প্রধান দুই উপাদান তাপমাত্রা ও আর্দ্রতা পরিমাপে DHT সেন্সর আদর্শ।',
            explanationEn: 'DHT series sensors provide both temperature and relative humidity metrics.'
          },
          {
            id: 10,
            questionBn: '১০. Agricultural IoT-এর একটি প্রধান সুবিধা কোনটি?',
            questionEn: '10. What is a key operational benefit of Agricultural IoT?',
            type: 'mcq',
            optionsBn: [
              'সবসময় বেশি পানি ব্যবহার করা',
              'Manual work বাধ্যতামূলক করা',
              'Resource efficiency ও real-time monitoring',
              'Sensor-এর প্রয়োজন দূর করা'
            ],
            optionsEn: [
              'Always expending excess irrigation water',
              'Mandating manual field interventions',
              'Resource efficiency, water conservation & real-time monitoring',
              'Eliminating sensors entirely'
            ],
            correctAnswer: 2,
            marks: 1,
            explanationBn: 'স্মার্ট কৃষির মূল সুবিধা হলো পানিসম্পদ ও সারের সাশ্রয় এবং দূর থেকে সার্বক্ষণিক নজরদারি।',
            explanationEn: 'Key benefits include significant resource efficiency, reduced water waste, and real-time oversight.'
          },
          {
            id: 11,
            questionBn: '১১. [চিন্তামূলক প্রশ্ন - ৫ নম্বর]: প্রচণ্ড বৃষ্টি হচ্ছে। কিন্তু একটি Smart Irrigation System-এ Soil Moisture Sensor সবসময় “Dry” রিডিং দিচ্ছে এবং Water Pump বন্ধ হচ্ছে না। সম্ভাব্য কারণগুলো লিখে সমস্যা শনাক্ত করার ধাপগুলো ব্যাখ্যা কর।',
            questionEn: '11. [Scenario Question - 5 Marks]: During heavy rainfall, a soil moisture sensor continuously reads "Dry", keeping the water pump running non-stop. Explain the underlying causes and step-by-step diagnostic workflow.',
            type: 'analytical',
            correctAnswer: 'সম্ভাব্য কারণ: ১. সেন্সর প্রব মাটিতে ঢুকানো নেই বা সংযোগ তার ছিঁড়ে গেছে/লুজ হয়েছে। ২. অ্যানালগ পিনের রেফারেন্স বা ম্যাপিং কোডে উল্টো করা (0 = Wet এর জায়গায় Dry ধরা হয়েছে)। ৩. রেজিস্টিভ সেন্সরে মারাত্মক জং (Corrosion) ধরায় কারেন্ট পাস হচ্ছে না। ৪. রিলে স্টাক (Stuck ON) হয়ে থাকা। শনাক্তকরণ ধাপ: মাল্টিমিটার দিয়ে ৫V ও গ্রাউন্ড ভোল্টেজ চেক করা → সেন্সরের এনালগ পিনে আর্দ্র মাটিতে ভোল্টেজ পরিবর্তন হচ্ছে কিনা দেখা → কোডে থ্রেশহোল্ড চেক করা → রিলে সিগন্যাল ডিসকানেক্ট করে পাম্প বন্ধ হয় কিনা দেখা।',
            marks: 5,
            explanationBn: 'মূল কারণ হতে পারে তার ছেঁড়া, সেন্সরে জং (Corrosion), কোডিংয়ে ম্যাপিং ভুল বা রিলে শর্ট।',
            explanationEn: 'Potential root causes include loose wiring, galvanic corrosion on resistive probes, inverted analog map logic, or locked relay contacts.'
          }
        ]
      },
      {
        id: 'industrial-iot-grid',
        courseId: 'sensor-iot-28563',
        titleBn: 'অধ্যায় ৩: ইন্ডাস্ট্রিয়াল আইওটি ও স্মার্ট গ্রিড',
        titleEn: 'Chapter 3: Industrial IoT & Smart Grid',
        descriptionBn: 'কারখানায় অটোমেশন, SCADA সিস্টেম, স্মার্ট এনার্জি মিটার ও স্মার্ট গ্রিড ডিস্ট্রিবিউশন।',
        descriptionEn: 'Industrial automation, SCADA interoperability, smart metering, and electrical grid telemetry.',
        status: 'coming-soon',
        durationMins: 90,
        hasLecture: false,
        hasLessonPlan: false,
        hasQuiz: false,
        keyTopicsBn: ['IIoT Architecture', 'Smart Grid Monitoring', 'Industrial Sensors'],
        keyTopicsEn: ['IIoT Architecture', 'Smart Grid Monitoring', 'Industrial Sensors']
      }
    ]
  },
  {
    id: 'computer-fundamentals',
    code: '66611',
    titleBn: 'কম্পিউটার টেকনোলজি ফান্ডামেন্টালস',
    titleEn: 'Computer Technology Fundamentals',
    deptBn: 'কম্পিউটার সায়েন্স অ্যান্ড টেকনোলজি (CST)',
    deptEn: 'Computer Science & Technology (CST)',
    semesterBn: 'প্রথম পর্ব',
    semesterEn: '1st Semester',
    credits: 3,
    probidhan: 'Probidhan 2022',
    coverGradient: 'from-blue-900 via-indigo-950 to-slate-950',
    icon: 'Cpu',
    chapters: [
      {
        id: 'basic-structure-generations',
        courseId: 'computer-fundamentals',
        titleBn: 'অধ্যায় ১: ডিজিটাল কম্পিউটারের মৌলিক গঠন ও প্রজন্ম',
        titleEn: 'Chapter 1: Basic Structure & Computer Generations',
        descriptionBn: 'ভন নিউম্যান আর্কিটেকচার, সেন্ট্রাল প্রসেসিং ইউনিট (ALU, CU, Registers), মেমরি হায়ারার্কি ও কম্পিউটার প্রজন্ম।',
        descriptionEn: 'Von Neumann architecture, Central Processing Unit (ALU, CU, Registers), memory hierarchies, and computer generations.',
        status: 'done',
        durationMins: 60,
        hasLecture: true,
        hasLessonPlan: true,
        hasQuiz: true,
        keyTopicsBn: [
          'কম্পিউটারের বেসিক ব্লক ডায়াগ্রাম',
          'CPU-এর অংশসমূহ (ALU, CU, Registers)',
          'প্রাইমারি (RAM/ROM) বনাম সেকেন্ডারি মেমরি',
          'ডেটা ফ্লো প্রসেস (৫+৩ = ৮ উদাহরণ)'
        ],
        keyTopicsEn: [
          'Basic Block Diagram & Von Neumann Model',
          'CPU Core Components (ALU, CU, Registers)',
          'Primary (RAM/ROM) vs Secondary Memory',
          'Step-by-step arithmetic data flow pipeline'
        ],
        quizQuestions: [
          {
            id: 1,
            questionBn: '১. কম্পিউটারের "ব্রেইন" বা মস্তিষ্ক কাকে বলা হয়?',
            questionEn: '1. What is regarded as the "Brain" of a computer system?',
            type: 'mcq',
            optionsBn: ['মেমরি ইউনিট', 'সেন্ট্রাল প্রসেসিং ইউনিট (CPU)', 'ইনপুট ইউনিট', 'মাদারবোর্ড'],
            optionsEn: ['Memory Unit', 'Central Processing Unit (CPU)', 'Input Unit', 'Motherboard'],
            correctAnswer: 1,
            marks: 1,
            explanationBn: 'CPU সব ধরনের নির্দেশনা নির্বাহ করে বিধায় একে কম্পিউটারের মস্তিষ্ক বলা হয়।',
            explanationEn: 'The CPU orchestrates all computational commands and execution routines.'
          },
          {
            id: 2,
            questionBn: '২. কম্পিউটারের যাবতীয় গাণিতিক ও যুক্তিমূলক কাজ কোথায় সম্পন্ন হয়?',
            questionEn: '2. Where are all arithmetic and logic calculations conducted in a computer?',
            type: 'mcq',
            optionsBn: ['Control Unit', 'Registers', 'Arithmetic Logic Unit (ALU)', 'RAM'],
            optionsEn: ['Control Unit', 'Registers', 'Arithmetic Logic Unit (ALU)', 'RAM'],
            correctAnswer: 2,
            marks: 1,
            explanationBn: 'ALU-এর পূর্ণরূপ Arithmetic Logic Unit; এটি যোগ, বিয়োগ, গুণ, ভাগ এবং লজিক্যাল তুলনা করে।',
            explanationEn: 'The ALU executes mathematical operations (+, -, *, /) and comparison tests.'
          },
          {
            id: 3,
            questionBn: '৩. কম্পিউটারের সকল ডিভাইস ও অংশের কার্যাবলি নিয়ন্ত্রণ ও সমন্বয় করে কে?',
            questionEn: '3. What coordinates and controls all system components and peripheral devices?',
            type: 'mcq',
            optionsBn: ['Output Unit', 'RAM', 'ALU', 'Control Unit (CU)'],
            optionsEn: ['Output Unit', 'RAM', 'ALU', 'Control Unit (CU)'],
            correctAnswer: 3,
            marks: 1,
            explanationBn: 'Control Unit (CU) মেমরি থেকে ইনস্ট্রাকশন রিড করে অন্যান্য ইউনিটকে সিগন্যাল পাঠিয়ে কাজ নিয়ন্ত্রণ করে।',
            explanationEn: 'The Control Unit decodes instructions and regulates control signals across sub-systems.'
          },
          {
            id: 4,
            questionBn: '৪. প্রসেসিংয়ের সময় ডেটা সাময়িকভাবে ধরে রাখার জন্য CPU-এর ভেতরে থাকা সবচেয়ে দ্রুতগতির মেমরি কোনটি?',
            questionEn: '4. What is the fastest memory located directly inside the CPU to hold working data?',
            type: 'mcq',
            optionsBn: ['RAM', 'ROM', 'Registers', 'Hard Disk'],
            optionsEn: ['RAM', 'ROM', 'Registers', 'Hard Disk'],
            correctAnswer: 2,
            marks: 1,
            explanationBn: 'Registers হলো CPU-এর অভ্যন্তরীণ সবচেয়ে ক্ষুদ্র ও দ্রুতগতির মেমরি স্টোরেজ।',
            explanationEn: 'Internal CPU registers boast the lowest latency and fastest access times.'
          },
          {
            id: 5,
            questionBn: '৫. হার্ডডিস্ক (HDD) বা এসএসডি (SSD) কোন ধরনের মেমরির উদাহরণ?',
            questionEn: '5. Hard Disk Drives (HDD) or SSDs are examples of which memory classification?',
            type: 'mcq',
            optionsBn: ['প্রাইমারি মেমরি', 'সেকেন্ডারি মেমরি', 'ক্যাশ মেমরি (Cache)', 'ভার্চুয়াল মেমরি'],
            optionsEn: ['Primary Memory', 'Secondary Memory', 'Cache Memory', 'Virtual Memory'],
            correctAnswer: 1,
            marks: 1,
            explanationBn: 'HDD ও SSD হলো সেকেন্ডারি স্থায়ী মেমরি; বিদ্যুৎ চলে গেলেও এদের ডেটা অক্ষুণ্ণ থাকে।',
            explanationEn: 'Storage drives (HDD/SSD) are non-volatile secondary auxiliary memory devices.'
          },
          {
            id: 6,
            questionBn: '৬. নিচের কোনটি আউটপুট ডিভাইসের (Output Unit) উদাহরণ?',
            questionEn: '6. Which of the following is an example of an Output Unit?',
            type: 'mcq',
            optionsBn: ['মনিটর (Monitor)', 'কীবোর্ড (Keyboard)', 'মাউস (Mouse)', 'স্ক্যানার (Scanner)'],
            optionsEn: ['Monitor', 'Keyboard', 'Mouse', 'Scanner'],
            correctAnswer: 0,
            marks: 1,
            explanationBn: 'মনিটর প্রসেস হওয়া ডেটাকে মানুষের দৃশ্যমান রূপ দেয়, তাই এটি আউটপুট ডিভাইস।',
            explanationEn: 'Monitors render processed digital outputs visually for users.'
          },
          {
            id: 7,
            questionBn: '৭. আধুনিক ডিজিটাল কম্পিউটারের মৌলিক আর্কিটেকচারটি কার নামানুসারে পরিচিত?',
            questionEn: '7. Modern digital computer architecture is named after which pioneer?',
            type: 'mcq',
            optionsBn: ['চার্লস ব্যাবেজ', 'অ্যালান টুরিং', 'জন ভন নিউম্যান (John Von Neumann)', 'বিল গেটস'],
            optionsEn: ['Charles Babbage', 'Alan Turing', 'John Von Neumann', 'Bill Gates'],
            correctAnswer: 2,
            marks: 1,
            explanationBn: 'ভন নিউম্যান আর্কিটেকচার (Von Neumann Architecture) আধুনিক স্টোর্ড-প্রোগ্রাম কম্পিউটারের ভিত্তি।',
            explanationEn: 'The universal stored-program structure is the Von Neumann Architecture.'
          },
          {
            id: 8,
            questionBn: '৮. কীবোর্ড থেকে টাইপ করা ডেটা প্রসেসিং শুরু করার জন্য প্রাথমিকভাবে কোথায় গিয়ে জমা হয়?',
            questionEn: '8. Where is keyboard input data loaded immediately prior to CPU processing?',
            type: 'mcq',
            optionsBn: ['Secondary Memory (HDD)', 'Primary Memory (RAM)', 'Monitor', 'ROM'],
            optionsEn: ['Secondary Memory (HDD)', 'Primary Memory (RAM)', 'Monitor', 'ROM'],
            correctAnswer: 1,
            marks: 1,
            explanationBn: 'ইনপুট নেওয়া ডেটা সবার আগে র‍্যাম (RAM)-এ জমা হয়, যেখান থেকে CPU একে প্রসেস করে।',
            explanationEn: 'Input telemetry is transferred into primary volatile memory (RAM) first.'
          },
          {
            id: 9,
            questionBn: '৯. ডেটা ও ইনস্ট্রাকশন গ্রহণ করে কম্পিউটারের বোধগম্য ভাষায় (০ ও ১) রূপান্তর করে কে?',
            questionEn: '9. What accepts external data and translates it into binary machine language (0s and 1s)?',
            type: 'mcq',
            optionsBn: ['মেমরি ইউনিট', 'আউটপুট ইউনিট', 'ইনপুট ইউনিট (Input Unit)', 'ALU'],
            optionsEn: ['Memory Unit', 'Output Unit', 'Input Unit', 'ALU'],
            correctAnswer: 2,
            marks: 1,
            explanationBn: 'ইনপুট ইউনিট মানুষের দেওয়া ক্যারেক্টার বা সিগন্যালকে বাইনারি ডেটায় রূপান্তর করে পাঠায়।',
            explanationEn: 'The Input Unit encodes human signals into machine-readable binary code.'
          },
          {
            id: 10,
            questionBn: '১০. কম্পিউটার পাওয়ার অন হচ্ছে কিন্তু ডিসপ্লে আসছে না - কোন ইউনিটে সমস্যা থাকার সম্ভাবনা সবচেয়ে কম?',
            questionEn: '10. The PC powers on with fans spinning, but No Display appears. Which unit is least likely at fault?',
            type: 'mcq',
            optionsBn: ['Output Unit (Monitor/Cable)', 'CPU / Motherboard', 'Memory Unit (RAM)', 'Input Unit (Keyboard)'],
            optionsEn: ['Output Unit (Monitor/Cable)', 'CPU / Motherboard', 'Memory Unit (RAM)', 'Input Unit (Keyboard)'],
            correctAnswer: 3,
            marks: 1,
            explanationBn: 'কীবোর্ড না থাকলেও কম্পিউটারের মনিটরে ডিসপ্লে (BIOS বা নো কীবোর্ড ওয়ার্নিং) আসার কথা।',
            explanationEn: 'A malfunctioning keyboard does not obstruct initial BIOS or display signal rendering.'
          },
          {
            id: 11,
            questionBn: '১১. [সত্য/মিথ্যা]: RAM একটি স্থায়ী মেমরি, বিদ্যুৎ চলে গেলেও এর ভেতরের রানিং ডেটা মুছে যায় না।',
            questionEn: '11. [True/False]: RAM is non-volatile; its active contents persist even when power is turned off.',
            type: 'true-false',
            optionsBn: ['সত্য (True)', 'মিথ্যা (False)'],
            optionsEn: ['True', 'False'],
            correctAnswer: 1,
            marks: 1,
            explanationBn: 'মিথ্যা। RAM একটি ভোলাটাইল (অস্থায়ী) মেমরি; বিদ্যুৎ সরবরাহ বন্ধ হলে এর ডেটা মুছে যায়।',
            explanationEn: 'False. RAM is volatile memory and loses its contents when power is cut.'
          },
          {
            id: 12,
            questionBn: '১২. [সত্য/মিথ্যা]: কন্ট্রোল ইউনিট (CU) নিজে কোনো গাণিতিক ডেটা প্রসেস করে না, এটি শুধু নির্দেশ দেয়।',
            questionEn: '12. [True/False]: The Control Unit (CU) does not process math directly; it decodes instructions and directs signals.',
            type: 'true-false',
            optionsBn: ['সত্য (True)', 'মিথ্যা (False)'],
            optionsEn: ['True', 'False'],
            correctAnswer: 0,
            marks: 1,
            explanationBn: 'সত্য। CU হলো নার্ভাস সিস্টেম, এটি নিজে হিসাব করে না বরং ALU ও মেমরিকে কাজের নির্দেশ দেয়।',
            explanationEn: 'True. The CU issues timing and control signals rather than computing arithmetic.'
          },
          {
            id: 13,
            questionBn: '১৩. [সত্য/মিথ্যা]: ইনপুট ইউনিট এবং আউটপুট ইউনিট সরাসরি প্রসেসরের (CPU) ভেতরের অংশ।',
            questionEn: '13. [True/False]: Input and output units are physically located inside the CPU silicon die.',
            type: 'true-false',
            optionsBn: ['সত্য (True)', 'মিথ্যা (False)'],
            optionsEn: ['True', 'False'],
            correctAnswer: 1,
            marks: 1,
            explanationBn: 'মিথ্যা। ইনপুট ও আউটপুট পেরিফেরাল ইউনিটগুলো বাইরে থাকে, CPU-এর ভেতরের অংশ হলো ALU, CU ও Registers।',
            explanationEn: 'False. Input/Output are external peripheral sub-systems.'
          },
          {
            id: 14,
            questionBn: '১৪. [সত্য/মিথ্যা]: অ্যারিথমেটিক লজিক ইউনিট (ALU) ছোট-বড় তুলনা করার মতো যুক্তিমূলক কাজও করতে পারে।',
            questionEn: '14. [True/False]: The Arithmetic Logic Unit (ALU) can perform relational comparisons like greater than or less than.',
            type: 'true-false',
            optionsBn: ['সত্য (True)', 'মিথ্যা (False)'],
            optionsEn: ['True', 'False'],
            correctAnswer: 0,
            marks: 1,
            explanationBn: 'সত্য। ALU-এর লজিক অংশ AND, OR, NOT এবং শর্তভিত্তিক তুলনামূলক কাজ সম্পন্ন করে।',
            explanationEn: 'True. The logic unit within the ALU handles logical AND, OR, and comparative tests.'
          },
          {
            id: 15,
            questionBn: '১৫. [সত্য/মিথ্যা]: সেকেন্ডারি মেমরির (HDD/SSD) ধারণক্ষমতা বেশি হলেও এর গতি RAM-এর চেয়ে অনেক কম।',
            questionEn: '15. [True/False]: Secondary memory provides higher storage capacity, but operates slower than RAM.',
            type: 'true-false',
            optionsBn: ['সত্য (True)', 'মিথ্যা (False)'],
            optionsEn: ['True', 'False'],
            correctAnswer: 0,
            marks: 1,
            explanationBn: 'সত্য। মেমরি হায়ারার্কিতে রেজিস্টার সবচেয়ে দ্রুত, তারপর ক্যাশ ও র‍্যাম; সেকেন্ডারি মেমরির গতি তুলনামূলক ধীর।',
            explanationEn: 'True. Secondary mass storage is orders of magnitude slower than primary RAM.'
          }
        ]
      },
      {
        id: 'microprocessor-interfacing',
        courseId: 'computer-fundamentals',
        titleBn: 'অধ্যায় ২: মাইক্রোপ্রসেসর ও ইন্টারফেসিং',
        titleEn: 'Chapter 2: Microprocessor & Interfacing',
        descriptionBn: '৮০৮৬ মাইক্রোপ্রসেসর আর্কিটেকচার, পিন ডায়াগ্রাম, বাস অর্গানাইজেশন ও মেমরি ম্যাপিং।',
        descriptionEn: '8086 microprocessor architecture, pin configurations, bus structures, and memory interfacing.',
        status: 'coming-soon',
        durationMins: 90,
        hasLecture: false,
        hasLessonPlan: false,
        hasQuiz: false,
        keyTopicsBn: ['8086 Pinout', 'Bus Organization', 'Interrupts'],
        keyTopicsEn: ['8086 Pinout', 'Bus Organization', 'Interrupts']
      }
    ]
  },
  {
    id: 'ai-for-teachers',
    code: 'AIT-101',
    titleBn: 'শিক্ষকদের জন্য কৃত্রিম বুদ্ধিমত্তা (AI for Teachers)',
    titleEn: 'AI for Teachers & Academic Automation',
    deptBn: 'পলিটেকনিক টিচার্স ট্রেনিং মডিউল',
    deptEn: 'Polytechnic Teachers Training Module',
    semesterBn: 'বিশেষ প্রশিক্ষণ',
    semesterEn: 'Special Professional Training',
    credits: 2,
    probidhan: 'BTEB 2026 Innovation',
    coverGradient: 'from-emerald-900 via-teal-950 to-slate-950',
    icon: 'Sparkles',
    chapters: [
      {
        id: 'ai-prompt-lesson-plans',
        courseId: 'ai-for-teachers',
        titleBn: 'মডিউল ১: ৯০-মিনিটের লেসন প্ল্যানের জন্য AI প্রম্পট ইঞ্জিনিয়ারিং',
        titleEn: 'Module 1: AI Prompt Engineering for Lesson Plans',
        descriptionBn: 'Bloom-এর ট্যাক্সোনমি অনুযায়ী লার্নিং আউটকাম নির্ধারণ ও কাঠামোবদ্ধ লেসন প্ল্যান তৈরির ফ্রেমওয়ার্ক।',
        descriptionEn: 'Structuring 90-minute classroom lesson plans aligned with Bloom Taxonomy outcomes using advanced prompt engineering.',
        status: 'coming-soon',
        durationMins: 60,
        hasLecture: false,
        hasLessonPlan: false,
        hasQuiz: false,
        keyTopicsBn: ['Prompt Structure', 'Bloom Taxonomy Outcomes', 'Classroom Cues'],
        keyTopicsEn: ['Prompt Structure', 'Bloom Taxonomy Outcomes', 'Classroom Cues']
      },
      {
        id: 'automated-assessment-rubrics',
        courseId: 'ai-for-teachers',
        titleBn: 'মডিউল ২: স্বয়ংক্রিয় ১৫-মার্ক মূল্যায়ন ও রুব্রিক তৈরি',
        titleEn: 'Module 2: Automated Assessment & Rubric Generation',
        descriptionBn: 'বিটিইবি বোর্ড স্ট্যান্ডার্ড MCQ, অতি সংক্ষিপ্ত ও চিন্তামূলক প্রশ্ন তৈরির গাইডলাইন।',
        descriptionEn: 'Generating board-standard 15-mark quiz items, answer keys, and grading rubrics with AI assistance.',
        status: 'coming-soon',
        durationMins: 60,
        hasLecture: false,
        hasLessonPlan: false,
        hasQuiz: false,
        keyTopicsBn: ['15-Mark Quiz Matrix', 'Rubric Evaluation', 'Scenario Questions'],
        keyTopicsEn: ['15-Mark Quiz Matrix', 'Rubric Evaluation', 'Scenario Questions']
      }
    ]
  }
];

export const BTEB_FAQS = [
  {
    qBn: 'BTEB ডিপ্লোমা ইন ইঞ্জিনিয়ারিং-এর সেমিস্টার ফাইনাল পরীক্ষার মানবণ্টন কেমন হয়?',
    qEn: 'What is the marks distribution for BTEB Diploma in Engineering semester finals?',
    aBn: 'বিটিইবি প্রবিধান ২০২২ অনুযায়ী তাত্ত্বিক বিষয়ে সাধারণত ধারাবাহিক মূল্যায়ন (TC) ৪০% এবং সমাপনী পরীক্ষা (TF) ৬০% থাকে। পরীক্ষায় অতি সংক্ষিপ্ত (ক-বিভাগ), সংক্ষিপ্ত (খ-বিভাগ) এবং রচনামূলক (গ-বিভাগ) প্রশ্ন থাকে।',
    aEn: 'Under BTEB Probidhan 2022, theory subjects generally allocate 40% to continuous assessment (TC) and 60% to the semester final exam (TF), divided into Brief, Short, and Broad question sections.'
  },
  {
    qBn: 'এই এলএমএস-এর কুইজ কি পুনরায় দেওয়া যায় (Retake Quiz)?',
    qEn: 'Can I retake quizzes on this LMS?',
    aBn: 'হ্যাঁ, যেকোনো চ্যাপ্টারের ১৫ নম্বরের কুইজ যতবার ইচ্ছা পুনরায় দেওয়া যায়। রিসেট বাটনে ক্লিক করলে টাইমার ও প্রশ্নগুলো পুনরায় শুরু হবে এবং আপনার সেরা স্কোর লোকাল স্টোরেজে সেভ থাকবে।',
    aEn: 'Yes! You can retake any 15-mark quiz as many times as you like. Clicking Reset restarts the timer and questions, while your best performance is stored locally.'
  },
  {
    qBn: 'Sensor & IoT System (28563) বিষয়ের জন্য কোন প্র্যাকটিক্যাল ল্যাবগুলো বাধ্যতামূলক?',
    qEn: 'What are the core practical lab experiments for Sensor & IoT Systems (28563)?',
    aBn: 'প্রধান ল্যাব পরীক্ষাগুলো হলো: ১. অ্যানালগ ও ডিজিটাল সেন্সরের রিডিং নেওয়া, ২. DHT11/22 দিয়ে তাপমাত্রা ও আর্দ্রতা মাপা, ৩. Soil Moisture Sensor ও 5V Relay দিয়ে ওয়াটার পাম্প অটোমেশন, ৪. ESP32 ওয়াই-ফাই দিয়ে ক্লাউড প্ল্যাটফর্মে ডেটা প্রেরণ।',
    aEn: 'Essential lab experiments include: 1. Interfacing analog/digital sensors, 2. Environmental sensing with DHT11/22, 3. Smart irrigation with soil moisture sensors and relays, 4. Telemetry transmission using ESP32 Wi-Fi to cloud dashboards.'
  },
  {
    qBn: 'অফলাইনে বা দুর্বল ইন্টারনেটে কি লেকচারগুলো পড়া যাবে?',
    qEn: 'Can I access the lectures with weak internet or offline?',
    aBn: 'হ্যাঁ! এই অ্যাপ্লিকেশনের সব লেকচার নোটস ও লেসন প্ল্যান ব্রাউজারে ক্যাশ করা থাকে। এছাড়া প্রতিটি চ্যাপ্টারের উপরে থাকা "Print" বাটনে ক্লিক করে পুরো লেকচারটি PDF আকারে অফলাইনে পড়ার জন্য সেভ করে রাখতে পারেন।',
    aEn: 'Yes! Lecture notes and lesson plans are cached locally in your browser. Additionally, you can use the Print button to download complete offline PDF handouts.'
  },
  {
    qBn: 'BTEB Teacher Assistant চ্যাটবট কি সিলেবাসের বাইরের প্রশ্নের উত্তর দিতে পারে?',
    qEn: 'Can the BTEB Teacher Assistant answer questions beyond the curriculum?',
    aBn: 'আমাদের এআই শিক্ষক সহকারীটি বিশেষ করে বিটিইবি ডিপ্লোমা সিলেবাস ও আপলোডকৃত লেকচার শিটসমূহের ওপর কঠোরভাবে গ্রাউন্ডেড (Grounded)। এটি সিলেবাসের কঠিন বিষয়গুলো সহজ বাংলা ও উদাহরণ দিয়ে বুঝিয়ে দেওয়ার জন্য অপ্টিমাইজড।',
    aEn: 'The assistant is specifically grounded in the BTEB Diploma syllabus and uploaded lecture materials, optimized to explain complex polytechnic engineering concepts in accessible language.'
  }
];

export const TEACHER_PROFILE = {
  nameBn: 'মুহাম্মদ নাজমুল হক শাওন',
  nameEn: 'Mohammed Nazmul Hoque Shawon',
  titleBn: 'ইন্সট্রাক্টর, কম্পিউটার সায়েন্স অ্যান্ড টেকনোলজি (CST)',
  titleEn: 'Instructor, Computer Science & Technology (CST)',
  institutionBn: 'ড্যাফোডিল ইনস্টিটিউট অব ইঞ্জিনিয়ারিং অ্যান্ড টেকনোলজি (DIET)',
  institutionEn: 'Daffodil Institute of Engineering and Technology (DIET)',
  email: 'hoqueway@gmail.com',
  deptBn: 'কম্পিউটার বিভাগ',
  deptEn: 'Department of Computer Science & Engineering',
  locationBn: 'ঢাকা, বাংলাদেশ',
  locationEn: 'Dhaka, Bangladesh',
  experienceYears: 8,
  bioBn: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ডের অধীনে ডিপ্লোমা ইন ইঞ্জিনিয়ারিং শিক্ষার্থীদের আইওটি, মাইক্রোপ্রসেসর ও কম্পিউটার টেকনোলজিতে দক্ষ মানবসম্পদ হিসেবে গড়ে তুলতে নিবেদিতপ্রাণ শিক্ষক ও প্রযুক্তিবিদ।',
  bioEn: 'Dedicated polytechnic educator and technologist specializing in IoT, microprocessors, and computer systems under the Bangladesh Technical Education Board (BTEB).'
};
