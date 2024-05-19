import { Component, OnInit } from '@angular/core';

import { DataService } from '../../Services/data.service';
import { ValidateService } from '../../Services/validate.service';
import { StoryService } from '../../Services/story.service';

import * as CryptoJS from 'crypto-js';
import { GeminiService } from 'src/app/Services/gemini.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {
  header: string =
    'write a short story of 30-50 words. keep the vibe positive. do not use newline. only use full stops, commas, and qustion marks. you must include following words:';
  prompt: string = '';

  lastMessage: { message: string; key: string } = { message: '', key: '' };

  matrix_g: { [key: string]: number[] } = {};
  matrix_g2: { [key: string]: number[] } = {};

  text1: string = '';
  text2: string = '';
  text3: string = '';

  allWordsText1: string[] = [];
  allWordsText2: string[] = [];

  uniqueWordsText1: string[] = [];
  uniqueWordsText2: string[] = [];

  formattedMessageText1: string = '';
  formattedMessageText2: string = '';

  encryptedMessageText1: string = '';
  encryptedMessageText2: string = '';

  uniqueWordsText1String: string = '';
  uniqueWordsText2String: string = '';

  constructor(
    private dataService: DataService,
    private validateService: ValidateService,
    private geminiService: GeminiService
  ) {}

  async ngOnInit() {
    await this.generateText1();
    this.uniqueWordsText1String = this.getUniqueWordsString(
      this.uniqueWordsText1
    );

    this.prompt = this.header + this.uniqueWordsText1String;
    await this.generateText();

    await this.generateText2();

    this.initializeMatrixes();
    this.generateFormattedMessage();
    this.encryptMessage();

    this.uniqueWordsText2String = this.getUniqueWordsString(
      this.uniqueWordsText2
    );
    this.setData();
  }

  async generateText1() {
    this.lastMessage = this.dataService.getLastMessage();
    this.text1 = this.lastMessage.message;

    const messageWithoutPunctuation1 = this.text1.replace(/[^\w\s]/g, '');
    const words1 = messageWithoutPunctuation1.split(/[\W_]+/);
    this.allWordsText1 = words1.map((word) => word.toLowerCase());
    this.uniqueWordsText1 = Array.from(new Set(this.allWordsText1));
  }

  async generateText2() {
    this.text2 = this.text2.replace(/[^\w\s]/g, '');
    this.text3 = this.text1 + ' ' + this.text2;

    console.log(' text2', this.text2);
    console.log(' text3', this.text3);

    const messageWithoutPunctuation2 = this.text3.replace(/[^\w\s]/g, '');
    const words2 = messageWithoutPunctuation2.split(/[\W_]+/);
    this.allWordsText2 = words2.map((word) => word.toLowerCase());
    this.uniqueWordsText2 = Array.from(new Set(this.allWordsText2));
  }

  initializeMatrixes() {
    for (let w of this.uniqueWordsText1) this.matrix_g[w] = [];

    for (let w of this.uniqueWordsText1) {
      for (let wi of this.allWordsText1) {
        if (w === wi) this.matrix_g[w].push(1);
        else this.matrix_g[w].push(0);
      }
    }

    for (let w of this.uniqueWordsText2) this.matrix_g2[w] = [];

    for (let w of this.uniqueWordsText2) {
      for (let wi of this.allWordsText2) {
        if (w === wi) this.matrix_g2[w].push(1);
        else this.matrix_g2[w].push(0);
      }
    }
  }

  generateFormattedMessage() {
    let formattedText1 = '';
    for (let w of this.uniqueWordsText1) {
      formattedText1 += w + ' ';
      for (let wi of this.matrix_g[w]) formattedText1 += wi + ' ';
      formattedText1 += '\n';
    }
    this.formattedMessageText1 = formattedText1;

    let formattedText2 = '';
    for (let w of this.uniqueWordsText2) {
      formattedText2 += w + ' ';
      for (let wi of this.matrix_g2[w]) formattedText2 += wi + ' ';
      formattedText2 += '\n';
    }
    this.formattedMessageText2 = formattedText2;
  }

  encryptMessage() {
    this.encryptedMessageText1 = CryptoJS.AES.encrypt(
      this.text1,
      this.lastMessage.key
    ).toString();
    this.encryptedMessageText2 = CryptoJS.AES.encrypt(
      this.text2,
      this.lastMessage.key
    ).toString();
  }

  setData() {
    if (this.text2.length == 0) {
      this.text2 = 'invalid text';
    }
    const dataSet = {
      text1: this.text1,
      key: this.lastMessage.key,
      encrypted1: this.encryptedMessageText1,
      text2: this.text2,
      encrypted2: this.encryptedMessageText2,
      uniqueString1: this.uniqueWordsText1String,
      uniqueString2: this.uniqueWordsText2String,
    };
    console.log(dataSet);
    this.validateService.addDataSet(dataSet);
  }

  getUniqueWordsString(uniqueWords: string[]): string {
    return uniqueWords.join(', ');
  }

  async generateText() {
    try {
      this.text2 = await this.geminiService.generateText(this.prompt);
      console.log(this.prompt);
      // console.log(this.text1);
      // console.log(this.text2);
      // console.log(this.text3);
    } catch (error) {
      console.error('Error generating text:', error);
    }
  }
}
