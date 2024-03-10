import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SenderComponent } from './Inputs/sender/sender.component';
import { ReceiverComponent } from './Outputs/receiver/receiver.component';
import { ShowComponent } from './Outputs/show/show.component'; // Import DecoderDisplayComponent

const routes: Routes = [
  { path: 'sender', component: SenderComponent },
  { path: 'receiver', component: ReceiverComponent },
  { path: 'show', component: ShowComponent }, // Add route for component
  { path: '', redirectTo: '/sender', pathMatch: 'full' },
  { path: '**', redirectTo: '/sender' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
