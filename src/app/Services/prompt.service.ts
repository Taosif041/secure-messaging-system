import { Injectable } from '@angular/core';
import { GeminiService } from './gemini.service';
import { ThemeService } from './theme.service';

@Injectable({
  providedIn: 'root',
})
export class PromptService {
  sortedUniqueWords: string[] = [];
  randomTheme: string;

  prompt1: string =
    'I will give you a word. You need to write a sentence using the word. The sentence should be on the following theme: ';
  prompt2: string = 'The word is:';
  prompt3: string = 'Use the following punctuation in the sentence: ';

  constructor(
    private geminiService: GeminiService,
    private themeService: ThemeService
  ) {
    this.randomTheme = this.themeService.getRandomTheme();
  }

  currentPrompt: string = '';
  async fetchGeneratedText(uniqueWords: string[]): Promise<string> {
    this.sortedUniqueWords = uniqueWords.sort();
    // console.log('sortedUniqueWords --------> ', this.sortedUniqueWords);
    let response = '';
    try {
      for (let word of uniqueWords) {
        if (/^[^\w\s]$/.test(word)) {
          this.currentPrompt = `${this.prompt1} ${this.randomTheme}. ${this.prompt3} ${word}`;
        } else {
          this.currentPrompt = `${this.prompt1} ${this.randomTheme}. ${this.prompt2} ${word}`;
        }

        const currentResponse = await this.geminiService.generateText(
          this.currentPrompt
        );
        response += currentResponse; // Ensure responses are separated by a newline
      }

      return response.trim(); // Remove any trailing newline
    } catch (error) {
      console.error('Error generating text:', error);
      return 'Error generating text';
    }
  }
}
