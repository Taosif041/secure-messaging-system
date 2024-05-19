import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MatrixService {
  initializeMatrix(
    words: string[] = [],
    allWords: string[] = []
  ): { [key: string]: number[] } {
    if (!Array.isArray(words) || !Array.isArray(allWords)) {
      console.error('Invalid input: words and allWords must be arrays');
      return {};
    }

    let matrix: { [key: string]: number[] } = {};
    for (let w of words) {
      matrix[w] = allWords.map((wi) => (wi === w ? 1 : 0));
    }
    return matrix;
  }

  generateFormattedMessage(
    words: string[],
    matrix: { [key: string]: number[] }
  ): string {
    return words.map((w) => `${w} ${matrix[w].join(' ')}\n`).join('');
  }
}
