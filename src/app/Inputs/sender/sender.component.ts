// sender.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent {
  messageInput: string = '';
  messageKey: string = '';

  constructor(private dataService: DataService, private router: Router) {}

  submitMessage() {
    // Check if both message and key are provided
    if (this.messageInput && this.messageKey) {
      // Store the message and key in the data service
      this.dataService.addMessage(this.messageInput, this.messageKey);

      // Clear the input fields
      this.messageInput = '';
      this.messageKey = '';
      
      // Navigate to the DisplayComponent
      this.router.navigate(['/display']);
    } else {
      alert('Please enter both message and key.');
    }
  }
}
