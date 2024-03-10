import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js'; // Import CryptoJS for encryption

import { ValidateService } from './../../Services/validate.service';
import { StatusService } from './../../Services/status.service';

@Component({
  selector: 'app-decoder',
  templateUrl: './decoder.component.html',
  styleUrls: ['./decoder.component.css']
})
export class DecoderComponent {
  decoderInput: string = '';
  decoderKey: string = '';
  encryptedMessage: string = '';


  constructor(private router: Router, private validateService: ValidateService, private statusService: StatusService) {}
  submitMessage() {
    // Check if both message and key are provided
    if (this.decoderInput && this.decoderKey) {
      // Encrypt the decoder input
      this.encryptedMessage = this.encryptText(this.decoderInput, this.decoderKey);

      // Get datasets from the ValidateService
      const datasets = this.validateService.getDataSets();

      // Check if decoder input, key, and encrypted message are present
      let found: any; // Define a variable to store the found item

      for (let i = 0; i < datasets.length; i++) {
        console.log(datasets[i]);
        if (datasets[i].text2 ==this.decoderInput && datasets[i].key == this.decoderKey) {
          found = datasets[i];
          break; // Exit the loop once a match is found
        }
      }

      if (found) {
        this.statusService.setCurrentText1(found.text1);
        this.statusService.setCurrentText2(this.decoderInput);
        this.statusService.setCurrentKey(this.decoderKey);
        this.router.navigate(['/show']);
      } else {
        // Handle the case where no match is found
        this.router.navigate(['/error']);
      }


      

      // Clear the input fields
      this.decoderInput = '';
      this.decoderKey = '';
      
    } else {
      alert('Please enter both message and key.');
    }
  }

  encryptText(text: string, key: string): string {
    return CryptoJS.AES.encrypt(text, key).toString();
  }

}
