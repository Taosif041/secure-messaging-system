import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UnIndexingService {
  constructor() {}
  allWordsText2: string[] = [];

  convertIndexToArray(text2: string, index: string): string[] {
    // Split the index string by commas to create an array of strings
    const indexArray: string[] = index.split(',');

    // Convert each string in the array to a number
    const numberArray: number[] = indexArray.map((item: string) =>
      Number(item)
    );

    let stringArray: string[] = [];
    console.log('text2', text2);
    const wordsAndPunctuations = text2.match(/[\w]+|[^\s\w]+/g) || [];
    // Convert all to lower case
    this.allWordsText2 = wordsAndPunctuations;

    for (let i = 0; i < numberArray.length; i++) {
      // Ensure the index is within the bounds of text2
      const wordIndex = numberArray[i] - 1;
      if (wordIndex >= 0 && wordIndex < this.allWordsText2.length) {
        const word = this.allWordsText2[wordIndex];
        console.log(word);
        stringArray.push(word);
      } else {
        console.error(`Index ${wordIndex} out of bounds for text2`);
        stringArray.push(''); // or handle the out of bounds case as needed
      }
    }

    // Return the resulting array of characters
    console.log('stringArray ---> ', stringArray);
    return stringArray;
  }
}
