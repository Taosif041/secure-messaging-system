// receiver.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { ValidateService } from './../../Services/validate.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})


export class ReceiverComponent implements OnInit {
  dataSet: any[] = [];

  constructor(private validateService: ValidateService) {}

  ngOnInit() {
    // Assuming you have a method in ValidateService to get all data sets
    this.dataSet = this.validateService.getDataSets();
  }

}
