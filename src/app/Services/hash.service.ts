import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class HashService {
  constructor() {}

  async encrypt(text: string, key: string): Promise<string> {
    return CryptoJS.AES.encrypt(text, key).toString();
  }

  async decrypt(encryptedText: string, key: string): Promise<string> {
    const bytes = CryptoJS.AES.decrypt(encryptedText, key);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
}
