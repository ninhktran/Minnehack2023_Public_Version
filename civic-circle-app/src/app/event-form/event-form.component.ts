import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventType, Event } from '../../entities/event_entity';
import { collection, addDoc } from 'firebase/firestore';
import { db } from 'src/globals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css'],
})
export class EventFormComponent {
  constructor(private router: Router) {}
  type: string = '';
  eventTypeArray = Object.values(EventType);
  onSubmit(myForm: NgForm) {
    console.log('Submit');
    console.log(this.type);
    console.log(myForm.value);
    console.log(myForm.valid);
    console.log(myForm.value.text);
    let event: Event = {
      ID: '',
      Name: myForm.value.name,
      EventType: this.type as EventType,
      Date: myForm.value.date,
      Location: myForm.value.location,
      Description: myForm.value.text,
    };
    console.log(event);

    this.createEvent(event);
  }

  async createEvent(event: Event) {
    const ref = collection(db, 'event');
    await addDoc(ref, event).then((dooc) => {
      const newcol = collection(db, 'event', dooc.id, 'Comments');
      const rreedd = addDoc(newcol, { ID: -111 });
      this.router.navigate(['/events']);
    });
  }

  setDefault(myForm: NgForm) {
    myForm.resetForm({
      name: 'Hardik',
      email: 'savanihd@gmail.com',
    });
  }

  resetFormValue(myForm: NgForm) {
    myForm.resetForm();
  }
}
