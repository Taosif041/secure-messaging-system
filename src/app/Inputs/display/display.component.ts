import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { ValidateService } from '../../Services/validate.service';
import { HashService } from '../../Services/hash.service';
import { MatrixService } from '../../Services/matrix.service';
import { PromptService } from 'src/app/Services/prompt.service';
import { IndexingService } from 'src/app/Services/indexing.service';
import { TextUtilityService } from 'src/app/Services/text-utility-service.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {
  lastMessage: { message: string; key: string } = { message: '', key: '' };

  matrix_g: { [key: string]: number[] } = {};

  text1: string = '';
  text2: string = '';

  allWordsText1: string[] = [];
  allWordsText2: string[] = [];
  uniqueWordsText1: string[] = [];

  formattedMessageText1: string = '';

  encryptedIndex: string = '';

  uniqueWordsText1String: string = '';

  index: string = '';

  constructor(
    private dataService: DataService,
    private validateService: ValidateService,
    private hashService: HashService,
    private textUtilityService: TextUtilityService,
    private matrixService: MatrixService,
    private promptService: PromptService,
    private indexingService: IndexingService
  ) {}

  async ngOnInit() {
    await this.initializeText1();
    await this.fetchGeneratedText();
    await this.initializeText2();
    await this.initializeMatricesAndMessages();
    await this.encryptMessages();
    await this.generateIndex();
    await this.prepareData();
  }

  async initializeText1() {
    this.lastMessage = await this.dataService.getLastMessage();
    this.text1 = this.lastMessage.message;
    // Split the text into words and punctuations
    const wordsAndPunctuations = this.text1.match(/[\w]+|[^\s\w]+/g) || [];
    // Convert all to lower case
    this.allWordsText1 = wordsAndPunctuations;
    // Get unique words and punctuations
    this.uniqueWordsText1 = Array.from(new Set(this.allWordsText1));
    // Generate unique words string
  }

  async initializeText2() {
    // Split the combined text into words and punctuations
    const wordsAndPunctuations = this.text2.match(/[\w]+|[^\s\w]+/g) || [];
    // Convert all to lower case
    this.allWordsText2 = wordsAndPunctuations;
    // console.log('allWordsText2 ----> ', this.allWordsText2);
  }

  async fetchGeneratedText() {
    try {
      this.text2 = await this.promptService.fetchGeneratedText(
        this.uniqueWordsText1
      );
      // console.log('text2 -------------->      ', this.text2);
      // console.log(this.text2);
    } catch (error) {
      console.error('Error generating text:', error);
    }
  }

  async initializeMatricesAndMessages() {
    this.matrix_g = await this.matrixService.initializeMatrix(
      this.uniqueWordsText1,
      this.allWordsText1
    );
    this.formattedMessageText1 =
      await this.matrixService.generateFormattedMessage(
        this.uniqueWordsText1,
        this.matrix_g
      );
  }

  async encryptMessages() {
    // Encrypt text1 and text2 using HashService
    this.encryptedIndex = await this.hashService.encrypt(
      this.index,
      this.lastMessage.key
    );
  }

  async prepareData() {
    if (this.text2.length === 0) {
      this.text2 = 'invalid text';
    }

    const dataSet = {
      text1: this.text1,
      key: this.lastMessage.key,
      unique1: this.uniqueWordsText1,
      encryptedIndex: this.encryptedIndex,
      text2: this.text2,
      index: this.index,
    };

    console.log(dataSet);
    this.validateService.addDataSet(dataSet);
  }

  async generateIndex() {
    // Generate index string using IndexingService
    this.index = await this.indexingService.generateIndex(
      this.allWordsText1,
      this.allWordsText2
    );
  }

  countWords(text: string): number {
    return text.trim().split(/\s+/).length;
  }
}
