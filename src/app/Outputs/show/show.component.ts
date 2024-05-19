import { Component, OnInit } from '@angular/core';
import { StatusService } from './../../Services/status.service';
import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})

export class ShowComponent implements OnInit {
  text1: string = '';
  text2: string = '';
  text3: string = '';
  curkey: string = '';

  allWordsText1: string[] = [];
  allWordsText2: string[] = [];

  uniqueWordsText1: string[] = [];
  uniqueWordsText2: string[] = [];

  formattedMessageText1: string = '';
  formattedMessageText2: string = '';
  
  encryptedMessageText1: string = '';
  encryptedMessageText2: string = '';

  matrix_g: { [key: string]: number[] } = {};
  matrix_g2: { [key: string]: number[] } = {};

  constructor(private statusService: StatusService, private router: Router) { }

  ngOnInit(): void {
    // Retrieve the data from the StatusService
    this.getData();
    this.generateUniqueWords();
    this.initializeMatrixes();
    this.generateFormattedMessage();
    this.encryptMessage();
  }
  getData(){
    this.text1 = this.statusService.getCurrentText1();
    this.text2 = this.statusService.getCurrentText2();
    this.text3 = this.text1 +' ' + this.text2;
    this.curkey = this.statusService.getCurrentKey();
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
    this.encryptedMessageText1 = CryptoJS.AES.encrypt(this.text1, this.curkey).toString();
    this.encryptedMessageText2 = CryptoJS.AES.encrypt(this.text2, this.curkey).toString();
  }
  navigateToShowG1() {
    this.router.navigate(['/showg1']);
  }


}
