import { Component, OnInit } from '@angular/core';
import { DataService } from './../../Services/data.service';
import { MatrixService } from './../../Services/matrix.service';
import { StatusService } from './../../Services/status.service';
import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showg1',
  templateUrl: './showg1.component.html',
  styleUrls: ['./showg1.component.css'],
})
export class Showg1Component implements OnInit {
  text1: string = '';
  curkey: string = '';

  allWordsText1: string[] = [];
  uniqueWordsText1: string[] = [];

  formattedMessageText1: string = '';
  encryptedMessageText1: string = '';

  matrix_g: { [key: string]: number[] } = {};

  constructor(
    private statusService: StatusService,
    private dataService: DataService,
    private matrixService: MatrixService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Retrieve the data from the StatusService
    this.getData();
    this.generateUniqueWords();
    this.initializeMatricesAndMessages();
  }

  getData() {
    this.text1 = this.dataService.getLastMessage().message;
    this.curkey = this.dataService.getLastMessage().key;
    this.uniqueWordsText1 = this.statusService.getUniqueWords();
  }

  generateUniqueWords() {
    const wordsAndPunctuations = this.text1.match(/[\w]+|[^\s\w]+/g) || [];
    // Convert all to lower case
    this.allWordsText1 = wordsAndPunctuations;
    this.uniqueWordsText1 = this.statusService.getUniqueWords();
    console.log('allWordsText1 ------->', this.allWordsText1);
    console.log('uniqueWordsText1 ------->', this.uniqueWordsText1);
    // this.uniqueWordsText1 = Array.from(new Set(this.allWordsText1));
  }

  initializeMatricesAndMessages() {
    this.matrix_g = this.matrixService.initializeMatrix(
      this.uniqueWordsText1,
      this.allWordsText1
    );
  }

  navigateToShowG1() {
    this.router.navigate(['/showg1']);
  }
}
