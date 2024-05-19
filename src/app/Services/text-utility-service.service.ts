import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TextUtilityService {
  shuffleAndJoin(uniqueWords: string[]): string {
    const shuffledWords = this.shuffleArray([...uniqueWords]);
    return shuffledWords.join(', ');
  }

  shuffleArray(array: string[]): string[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  getUniqueWordsString(uniqueWords: string[]): string {
    return uniqueWords.join(', ');
  }
}
