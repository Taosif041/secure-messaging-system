import { Component, OnInit } from '@angular/core';

import { DataService } from '../../Services/data.service';
import { ValidateService } from '../../Services/validate.service';

import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})

export class DisplayComponent implements OnInit {
  lastMessage: { message: string; key: string; } = { message: '', key: '' };
  
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


  constructor(private dataService: DataService, private validateService: ValidateService) { }

  ngOnInit() {
    this.generateTexts();
    this.generateUniqueWords();
    this.initializeMatrixes();
    this.generateFormattedMessage();
    this.encryptMessage();

    this.setData();
  }
  generateTexts() {
    this.lastMessage = this.dataService.getLastMessage();
    this.text1=  this.lastMessage.message;
    this.text2=  this.text1.length+' 12345 '+ this.text1.length+this.text1.substring(0,this.text1.length/2)+this.text1.length+' 56789 '+this.text1.length+  + ' '+ this.text1.substring(this.text1.length/2, this.text1.length) +  + ' '+ this.text1.length;
    this.text3=  this.text1 + ' '+ this.text2;
  }

  generateUniqueWords(){
    const messageWithoutPunctuation1 = this.text1.replace(/[^\w\s]/g, '');
    const words1 = messageWithoutPunctuation1.split(/[\W_]+/);
    this.allWordsText1 = words1.map(word => word.toLowerCase());
    this.uniqueWordsText1 = Array.from(new Set(this.allWordsText1));
  
    const messageWithoutPunctuation2 = this.text3.replace(/[^\w\s]/g, '');
    const words2 = messageWithoutPunctuation2.split(/[\W_]+/);
    this.allWordsText2 = words2.map(word => word.toLowerCase());
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
      formattedText1 += w + " ";
      for (let wi of this.matrix_g[w]) formattedText1 += wi + " ";
      formattedText1 += '\n';
    }
    this.formattedMessageText1 = formattedText1;
  
  
    let formattedText2 = '';
    for (let w of this.uniqueWordsText2) {
      formattedText2 += w + " ";
      for (let wi of this.matrix_g2[w]) formattedText2 += wi + " ";
      formattedText2 += '\n';
    }
    this.formattedMessageText2 = formattedText2;
  }
  
  encryptMessage() {
    this.encryptedMessageText1 = CryptoJS.AES.encrypt(this.text1, this.lastMessage.key).toString();
    this.encryptedMessageText2 = CryptoJS.AES.encrypt(this.text2, this.lastMessage.key).toString();
  }

  setData(){
    const dataSet = {
      text1: this.text1,
      key: this.lastMessage.key,
      encrypted1: this.encryptedMessageText1,
      text2: this.text2,
      encrypted2: this.encryptedMessageText2
    };
    this.validateService.addDataSet(dataSet);

  }

}
