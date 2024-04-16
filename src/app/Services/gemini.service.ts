import { Injectable } from '@angular/core';
import {
  GoogleGenerativeAI,
  HarmBlockThreshold,
  HarmCategory,
} from '@google/generative-ai';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GeminiService {
  private generativeAi: GoogleGenerativeAI;
  constructor() {
    this.generativeAi = new GoogleGenerativeAI(environment.geminiApiKey);
  }

  async generateText(prompt: string): Promise<string> {
    // Get the Generative Model instance
    const model = this.generativeAi.getGenerativeModel({ model: 'gemini-pro' });

    // // Generate text from text-only input
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    return text;
  }
}
