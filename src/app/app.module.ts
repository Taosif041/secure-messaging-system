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
import { MatGridListModule } from '@angular/material/grid-list';

import { CdkAccordionModule } from '@angular/cdk/accordion';
import { ShowComponent } from './Outputs/show/show.component';
import { ErrorComponent } from './Outputs/error/error.component';
import { Showg1Component } from './Outputs/showg1/showg1.component';
import { ExpComponent } from './exp/exp/exp.component';
// import { environment } from 'src/environments/environment';

const routes: Routes = [
  { path: 'sender', component: SenderComponent },
  { path: 'receiver', component: ReceiverComponent },
  { path: 'decoder', component: DecoderComponent },
  { path: 'display', component: DisplayComponent },
  { path: 'show', component: ShowComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'showg1', component: Showg1Component },
  { path: 'exp', component: ExpComponent },
  { path: '', redirectTo: '/sender', pathMatch: 'full' },
  { path: '**', redirectTo: '/sender', pathMatch: 'full' },
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
    ErrorComponent,
    Showg1Component,
    ExpComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserAnimationsModule,
    CdkAccordionModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
