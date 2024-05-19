import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class HashService {
  constructor() {}

  encrypt(text: string, key: string): string {
    return CryptoJS.AES.encrypt(text, key).toString();
  }

  decrypt(encryptedText: string, key: string): string {
    const bytes = CryptoJS.AES.decrypt(encryptedText, key);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
}
