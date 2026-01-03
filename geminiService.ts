
import { GoogleGenAI, Type, Chat } from "@google/genai";
import { ClarityCard } from "./types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateClarityCard = async (userMood: string): Promise<ClarityCard> => {
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
  return ai.chats.create({
    model: "gemini-3-flash-preview",
    config: {
      systemInstruction: `You are the official Calont Living Guide. You are the digital embodiment of a premium, screen-free lifestyle brand.
      
      TONE & VOICE:
      - Sophisticated, minimalist, and deeply calm.
      - No emojis. Use brief, thoughtful sentences.
      - Avoid "salesy" language. Focus on steadiness and clarity.
      
      CORE PRODUCT KNOWLEDGE:
      - MAIN PRODUCT: 'The Essentials Pack' ($285 USD).
      - WHAT IS IT ABOUT? It is a complete physical practice system. We believe in physical anchors over digital apps.
      - INCLUDES: 
          1. The Seat: A premium buckwheat-filled Zafu cushion.
          2. The Space: A flax-lined Zabuton mat.
          3. The Time: A 10-minute borosilicate glass sand timer (no screens!).
          4. The Guidance: 52 gold-foil Clarity guidance cards for daily rhythm.
      - PHILOSOPHY: Most people don't need more apps or noise. They need steadiness. Calont is a physical container for your daily rhythm.
      
      PRACTICE DETAILS:
      - PILLARS: Settle, Soften, Steady, Seek, Shine.
      - DURATION: We suggest 5-10 minutes a day. Consistency over perfection.
      
      LOGISTICS:
      - LOCATION: Designed in Calgary, Alberta, Canada.
      - SHIPPING: Complimentary shipping on the Essentials Pack ($285+).
      - CONTACT: calontliving@gmail.com.
      
      If a user asks "what is this product about?", describe the Essentials Pack as the physical foundation for a calmer life. Always guide them toward the screen-free experience.`
    }
  });
};
