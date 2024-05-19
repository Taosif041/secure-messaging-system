import { Component, OnInit } from '@angular/core';
import { DataService } from './../../Services/data.service';
import { MatrixService } from './../../Services/matrix.service';
import { StatusService } from './../../Services/status.service';
import { Router } from '@angular/router';
import { UnIndexingService } from 'src/app/Services/un-indexing.service';

@Component({
  selector: 'app-showg1',
  templateUrl: './showg1.component.html',
  styleUrls: ['./showg1.component.css'],
})
export class Showg1Component implements OnInit {
  text1: string = '';
  text2: string = '';
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
    private router: Router,
    private unIndexingService: UnIndexingService
  ) {}

  ngOnInit(): void {
    // Retrieve the data from the StatusService
    this.getData();
    this.handleConvertIndex();
    this.generateUniqueWords();
    this.initializeMatricesAndMessages();
    this.generateText1();
  }

  getData(): void {
    this.text2 = this.statusService.getCurrentText2();
    this.curkey = this.statusService.getCurrentKey();
    this.uniqueWordsText1 = this.statusService.getUniqueWords();
  }

  handleConvertIndex(): void {
    const indexString = this.statusService.getCurrentIndex(); // Assuming it returns a string like "125,20,81,103,25"
    if (indexString) {
      this.allWordsText1 = this.unIndexingService.convertIndexToArray(
        this.text2,
        indexString
      );
    } else {
      console.error('Index string is missing.');
    }
  }

  generateUniqueWords(): void {
    const wordsAndPunctuations = this.text1.match(/[\w]+|[^\s\w]+/g) || [];
    // Convert all to lower case
    // this.allWordsText1 = wordsAndPunctuations.map((word) => word.toLowerCase());
    this.uniqueWordsText1 = Array.from(new Set(this.allWordsText1));
    console.log('allWordsText1 ------->', this.allWordsText1);
    console.log('uniqueWordsText1 ------->', this.uniqueWordsText1);
  }

  initializeMatricesAndMessages(): void {
    this.matrix_g = this.matrixService.initializeMatrix(
      this.uniqueWordsText1,
      this.allWordsText1
    );
  }
  generateText1() {
    for (let j = 0; j < this.allWordsText1.length; j++) {
      this.text1 += this.allWordsText1[j];
      if (j + 2 < this.allWordsText1.length) this.text1 += ' ';
    }
  }

  navigateToShowG1(): void {
    this.router.navigate(['/showg1']);
  }
}
