import { Component } from '@angular/core';

import { SenderComponent } from './Inputs/sender/sender.component';
import { ReceiverComponent } from './Outputs/receiver/receiver.component';
import { DecoderComponent } from './Outputs/decoder/decoder.component';
import { NavbarComponent } from './navbar/navbar.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'security';
}
