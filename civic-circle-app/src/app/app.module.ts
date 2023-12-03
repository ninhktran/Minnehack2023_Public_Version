import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { EventFormComponent } from './event-form/event-form.component';
import { FormsModule } from '@angular/forms';
import { EventModalComponent } from './event-modal/event-modal.component';
import { InterestedEventsComponent } from './interested-events/interested-events.component';


@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    NavbarComponent,
    SignInComponent,
    SignUpComponent,
    EventFormComponent,
    EventModalComponent,
    InterestedEventsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
