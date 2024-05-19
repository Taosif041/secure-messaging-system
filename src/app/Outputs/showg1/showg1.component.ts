import { Component, OnInit } from '@angular/core';
import { StatusService } from './../../Services/status.service';
import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';



@Component({
  selector: 'app-showg1',
  templateUrl: './showg1.component.html',
  styleUrls: ['./showg1.component.css']
})
export class Showg1Component implements OnInit {
  text1: string = '';
  curkey: string = '';

  allWordsText1: string[] = [];
  uniqueWordsText1: string[] = [];

  formattedMessageText1: string = '';
  encryptedMessageText1: string = '';

  matrix_g: { [key: string]: number[] } = {};

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
    this.curkey = this.statusService.getCurrentKey();
  }

  generateUniqueWords(){
    const messageWithoutPunctuation1 = this.text1.replace(/[^\w\s]/g, '');
    const words1 = messageWithoutPunctuation1.split(/[\W_]+/);
    this.allWordsText1 = words1.map(word => word.toLowerCase());
    this.uniqueWordsText1 = Array.from(new Set(this.allWordsText1));  
  }
  
  initializeMatrixes() {
    for (let w of this.uniqueWordsText1) this.matrix_g[w] = []; 
  
    for (let w of this.uniqueWordsText1) {
      for (let wi of this.allWordsText1) {
        if (w === wi) this.matrix_g[w].push(1);
        else this.matrix_g[w].push(0);
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
  }
  
  encryptMessage() {
    this.encryptedMessageText1 = CryptoJS.AES.encrypt(this.text1, this.curkey).toString();
  }
  navigateToShowG1() {
    this.router.navigate(['/showg1']);
  }


}

