import { Component, OnInit } from '@angular/core';
import { StatusService } from './../../Services/status.service';
import { Router } from '@angular/router';
import { HashService } from 'src/app/Services/hash.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
})
export class ShowComponent implements OnInit {
  text2: string = '';
  Index: string = '';
  words: string = '';
  curkey: string = '';
  encryptedIndex: string = '';

  constructor(
    private statusService: StatusService,
    private hashService: HashService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getData();
    this.handleDecrypt();
    console.log('Decrypted Index: ', this.Index);
  }

  getData(): void {
    this.text2 = this.statusService.getCurrentText2();
    this.curkey = this.statusService.getCurrentKey();
    this.encryptedIndex = this.statusService.getCurrentEncryptedIndex();
    this.words = this.statusService.getCurrentWords();

    // Log the retrieved values
    console.log('Text2: ', this.Index);
    console.log('Current Key: ', this.curkey);
    console.log('Encrypted Index: ', this.encryptedIndex);
  }

  handleDecrypt(): void {
    if (this.encryptedIndex && this.curkey) {
      try {
        this.Index = this.hashService.decrypt(this.encryptedIndex, this.curkey);
        console.log('Decryption succeeded:', this.Index);
      } catch (error) {
        console.error('Decryption failed:', error);
        this.Index = 'Error decrypting text';
      }
    } else {
      console.error('Decryption key or encrypted text is missing.');
      this.Index = 'Missing key or encrypted text';
    }
  }

  navigateToShowG1() {
    this.router.navigate(['/showg1']);
  }
}
