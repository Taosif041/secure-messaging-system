import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';


import { SenderComponent } from './Inputs/sender/sender.component';
import { ReceiverComponent } from './Outputs/receiver/receiver.component';
import { DecoderComponent } from './Outputs/decoder/decoder.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DisplayComponent } from './Inputs/display/display.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {CdkAccordionModule} from '@angular/cdk/accordion';
import { ShowComponent } from './Outputs/show/show.component';
import { ErrorComponent } from './Outputs/error/error.component';





const routes: Routes = [
  { path: 'sender', component: SenderComponent },
  { path: 'receiver', component: ReceiverComponent },
  { path: 'decoder', component: DecoderComponent },
  { path: 'display', component: DisplayComponent },
  { path: 'show', component: ShowComponent },
  { path: 'error', component: ErrorComponent },
  { path: '', redirectTo: '/sender', pathMatch: 'full' },
  { path: '**', redirectTo: '/sender', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    SenderComponent,
    ReceiverComponent,
    DecoderComponent,
    NavbarComponent,
    DisplayComponent,
    ShowComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserAnimationsModule,
    CdkAccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
