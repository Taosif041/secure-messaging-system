import { Component, OnInit } from '@angular/core';
import { GeminiService } from 'src/app/Services/gemini.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.css'],
})
export class ExpComponent implements OnInit {
  prompt: string = '';
  generatedText: string | undefined;
  constructor(private geminiService: GeminiService) {}
  ngOnInit(): void {
    this.generateText();
  }

  async generateText() {
    try {
      this.generatedText = await this.geminiService.generateText(this.prompt);
    } catch (error) {
      console.error('Error generating text:', error);
    }
  }
}
