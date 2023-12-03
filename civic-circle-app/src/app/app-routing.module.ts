import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {EventComponent} from './event/event.component'
import {EventFormComponent} from './event-form/event-form.component'
import { InterestedEventsComponent } from './interested-events/interested-events.component';

const routes: Routes = [
    { path: 'first-component', component: SignInComponent },
    { path: 'second-component', component: SignUpComponent },
    { path: 'events', component: EventComponent},
    { path: 'event-form', component: EventFormComponent},
    { path: 'interested-events', component: InterestedEventsComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
