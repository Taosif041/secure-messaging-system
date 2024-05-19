import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StatusService {
  private currentText1: string = '';
  private currentText2: string = '';
  private currentKey: string = '';
  private currentUniqueWords: string[] = [];
  private currentIndex: string = '';
  private currentEncryptedIndex: string = '';

  constructor() {}

  setCurrentText2(text: string): void {
    this.currentText2 = text;
  }

  getCurrentText2(): string {
    return this.currentText2;
  }

  setCurrentText1(text: string): void {
    // New method
    this.currentText1 = text;
  }

  getCurrentText1(): string {
    // New method
    return this.currentText1;
  }

  setCurrentKey(key: string): void {
    this.currentKey = key;
  }

  getCurrentKey(): string {
    return this.currentKey;
  }
  setCurrentIndex(key: string): void {
    this.currentIndex = key;
  }

  getCurrentWords(): string {
    return this.currentIndex;
  }
  getCurrentIndex(): string {
    return this.currentIndex;
  }

  setCurrentEncryptedIndex(key: string): void {
    this.currentEncryptedIndex = key;
  }

  getCurrentEncryptedIndex(): string {
    return this.currentEncryptedIndex;
  }

  setUniqueWords(uniqueWords: string[]): void {
    this.currentUniqueWords = uniqueWords;
  }

  getUniqueWords(): string[] {
    return this.currentUniqueWords;
  }
}
