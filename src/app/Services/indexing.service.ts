import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IndexingService {
  constructor() {}

  generateIndex(allWordsText1: string[], allWordsText2: string[]): string {
    let index = '';
    for (let i = 0; i < allWordsText1.length; i++) {
      const text1 = allWordsText1[i];
      for (let j = 0; j < allWordsText2.length; j++) {
        const text2 = allWordsText2[j];
        if (text1 === text2) {
          index += `${j + 1},`; // Append the index followed by a comma
          break; // Break out of the inner loop after finding the first match
        }
      }
    }
    return index.slice(0, -1); // Remove the trailing comma before returning
  }
}
