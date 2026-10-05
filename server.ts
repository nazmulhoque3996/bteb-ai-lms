import 'dotenv/config';
import express, { Request, Response } from 'express';
import { GoogleGenAI } from '@google/genai';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '10mb' }));

// Initialize Google GenAI with runtime GEMINI_API_KEY
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

const BTEB_SYLLABUS_KNOWLEDGE = `
You are the "BTEB Teacher Assistant" (বিটিইবি শিক্ষক সহকারী) - a friendly, encouraging, expert polytechnic diploma engineering teacher assistant for Bangladesh Technical Education Board (BTEB) Diploma in Engineering (Computer Science & Technology CST and Electronics) students and teachers.
Author & Lead Instructor of this LMS: Mohammed Nazmul Hoque Shawon — Instructor, Computer Science & Technology (CST), Daffodil Institute of Engineering and Technology (DIET).

YOUR ROLES & GUIDELINES:
1. Grounding: Answer strictly and authoritatively based on the BTEB Diploma syllabus and the attached lesson materials:
   - Course 1: Sensor & IoT Systems (Code: 28563, Probidhan 2022)
     * Chapter 1: IoT & IoT Architecture (4-layer: Perception/Sensing -> Network -> Processing -> Application).
       - Perception Layer: Sensors (Soil Moisture, DHT11/22, LDR, pH), Actuators (Relay, Motor), RFID.
       - Network Layer: Wi-Fi, Bluetooth, LoRaWAN, Cellular, Internet.
       - Processing Layer: ESP32/NodeMCU, Cloud Server (Blynk, ThingSpeak), Data storage & analytics.
       - Application Layer: Mobile App, Web Dashboard, SMS alerts, Automation triggers.
       - Rule: P -> N -> P -> A (Sense -> Send -> Process -> Show/Control).
     * Chapter 2: IoT in Agriculture (কৃষিক্ষেত্রে আইওটি - 90-minute classroom flow)
       - Smart Irrigation: Soil Moisture Sensor -> ESP32 logic (e.g. threshold < 30%) -> 5V Relay -> 220V Water Pump ON/OFF.
       - Key sensors: Soil Moisture (capacitive preferred to avoid corrosion), DHT11/22 (temperature & humidity), LDR (sunlight intensity), pH sensor (soil acidity/alkalinity).
       - Fault troubleshooting & Offline Fallback: If internet drops, ESP32 must execute local fallback logic without crashing. If raining but sensor reads 0/dry, check wiring, corrosion, mapping, or short-circuit.
   - Course 2: Computer Technology Fundamentals (IT Support Services - Chapter 3)
     * Basic Structure of Digital Computer System (Von Neumann Architecture).
       - CPU (ALU for arithmetic/logical math, CU for instruction decode/control signals, Registers for fastest temporary cache/storage).
       - Primary Memory (RAM/ROM) vs Secondary Memory (HDD/SSD).
       - Input Devices (Keyboard, Mouse, Scanner) & Output Devices (Monitor, Printer).
       - Data flow: Input -> RAM -> CU decodes -> ALU calculates -> RAM -> Output.
   - Course 3: AI for Teachers (Special Training Module)
     * AI prompt engineering for 90-minute lesson plans, Bloom's taxonomy outcomes, automated rubric & 15-mark assessment creation.

2. Bilingual Support:
   - If the student asks in Bangla (or Banglish), respond in clear, fluent, respectful academic Bangla (বাংলা) with bullet points and bold keywords.
   - If the student asks in English, reply in crisp, clear English.
   - Keep technical terms (e.g., Sensor, ESP32, Relay, Threshold, Architecture) easily understandable.

3. Tone:
   - Warm, supportive, pedagogical, structured.
   - Use simple bullet points, step-by-step logic, and board-exam oriented tips.
`;

// Server-side API endpoint for Gemini chat
app.post('/api/chat', async (req: Request, res: Response) => {
  try {
    const { messages, context } = req.body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Messages array is required' });
    }

    const latestMessage = messages[messages.length - 1];
    
    // Construct multi-turn contents for Gemini
    const contents = messages.map((m: { role: string; text: string }) => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.text }],
    }));

    const systemInstruction = `${BTEB_SYLLABUS_KNOWLEDGE}
${context ? `\nCURRENT USER ACTIVE CHAPTER/TOPIC CONTEXT:\n${context}` : ''}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: contents,
      config: {
        systemInstruction,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    const replyText = response.text || 'দুঃখিত, উত্তর তৈরি করা যায়নি। অনুগ্রহ করে আবার প্রশ্ন করুন।';

    return res.json({ text: replyText });
  } catch (error: any) {
    console.error('Gemini API Error:', error);
    return res.status(500).json({ 
      error: 'Failed to generate response from Gemini AI Tutor',
      details: error?.message || 'Server error'
    });
  }
});

// Setup Vite in Dev or Static in Production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer();
