import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IndexingService {
  constructor() {}
  l: number = 0;

  generateIndex(allWordsText1: string[], allWordsText2: string[]): string {
    let index = '';
    for (let i = 0; i < allWordsText1.length; i++) {
      const text1 = allWordsText1[i].toLowerCase();
      for (let j = 0; j < allWordsText2.length; j++) {
        const text2 = allWordsText2[j].toLowerCase();
        if (text1 == text2) {
          index += `${j + 1},`;
          break;
        }
      }
    }
    return index.slice(0, -1);
  }
}
