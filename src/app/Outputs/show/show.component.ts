import { Component, OnInit } from '@angular/core';
import { StatusService } from './../../Services/status.service';
import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
})
export class ShowComponent implements OnInit {
  text2: string = '';
  Index: string = '';
  curkey: string = '';
  encryptedIndex: string = '';

  constructor(private statusService: StatusService, private router: Router) {}

  ngOnInit(): void {
    // Retrieve the data from the StatusService
    this.getData();
  }
  getData() {
    this.text2 = this.statusService.getCurrentText2();
    this.Index = this.statusService.getCurrentIndex();
    this.curkey = this.statusService.getCurrentKey();
    this.encryptedIndex = this.statusService.getCurrentEncryptedIndex();
  }

  navigateToShowG1() {
    this.router.navigate(['/showg1']);
  }
}
