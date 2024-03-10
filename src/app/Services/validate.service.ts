// validate.service.ts

import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {
  dataSets: {
    text1: string[];
    key: string[];
    encrypted1: string[];
    text2: string[];
    encrypted2: string[];
  }[] = [];

  constructor() { }

  setDataSets(dataSets: any[]) {
    this.dataSets = dataSets;
  }

  getDataSets(): any[] {
    return this.dataSets;
  }

  addDataSet(dataSet: any) {
    this.dataSets.push(dataSet);
  }

  encryptText(text: string, key: string): string {
    return CryptoJS.AES.encrypt(text, key).toString();
  }

  decryptText(text: string, key: string): string {
    const bytes = CryptoJS.AES.decrypt(text, key);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
}
