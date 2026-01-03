
import { GoogleGenAI, Type, Chat } from "@google/genai";
import { ClarityCard } from "./types.ts";
import { ESSENTIALS_PACK, BUSINESS_INFO } from "./constants.ts";

const API_KEY = process.env.API_KEY;

const getAI = () => new GoogleGenAI({ apiKey: API_KEY! });

export const generateClarityCard = async (userMood: string): Promise<ClarityCard> => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `The user says they feel: "${userMood}". Generate a Calont Living "Clarity Card" practice for them. Select one of the 5 Calont Pillars (Settle, Soften, Steady, Seek, Shine).`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          pillar: { type: Type.STRING, description: "One of: Settle, Soften, Steady, Seek, Shine" },
          title: { type: Type.STRING, description: "A poetic and calming title for the practice" },
          instruction: { type: Type.STRING, description: "A simple, 2-step physical or mental instruction for a 5-minute practice" },
          reflection: { type: Type.STRING, description: "A single sentence reflection to carry through the day" }
        },
        required: ["pillar", "title", "instruction", "reflection"]
      },
      systemInstruction: "You are a calm, minimalist mindfulness guide for Calont Living. Your tone is premium, soothing, and direct. You never use emojis. You help users find steadiness."
    }
  });

  const text = response.text;
  if (!text) throw new Error("No response from AI");
  return JSON.parse(text) as ClarityCard;
};

export const startShoppingChat = (): Chat => {
  const ai = getAI();
  return ai.chats.create({
    model: "gemini-3-flash-preview",
    config: {
      systemInstruction: `You are the Calont Shopping Guide. You help users understand the Calont Living system, products, and philosophy. 
      
      TONE: Premium, minimalist, soothing, and direct. NEVER use emojis. Be brief but helpful.
      
      CORE KNOWLEDGE:
      - The main product is the 'Essentials Pack' priced at $285 USD.
      - It includes 4 Anchors: The Meditation Cushion (Seat), The Practice Mat (Space), The Sand Timer (Time), and Clarity Cards (Guidance).
      - Philosophy: Screen-free, daily rhythm, returning to calm, steadiness over performance.
      - Location: Based in Calgary, Alberta, Canada.
      - Shipping: Complimentary shipping on the Essentials Pack.
      
      If asked about technical details:
      - Cushion: Buckwheat-filled Zafu.
      - Mat: Flax-lined Zabuton.
      - Timer: 10-minute borosilicate glass.
      - Cards: 52 gold-foil guidance cards.
      
      Refer to the system as a 'container for your daily rhythm'.`
    }
  });
};
