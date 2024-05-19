import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private currentText1: string = '';
  private currentText2: string = '';
  private currentKey: string = '';

  constructor() { }

  setCurrentText2(text: string): void {
    this.currentText2 = text;
  }

  getCurrentText2(): string {
    return this.currentText2;
  }

  setCurrentText1(text: string): void { // New method
    this.currentText1 = text;
  }

  getCurrentText1(): string { // New method
    return this.currentText1;
  }

  setCurrentKey(key: string): void {
    this.currentKey = key;
  }

  getCurrentKey(): string {
    return this.currentKey;
  }
}
