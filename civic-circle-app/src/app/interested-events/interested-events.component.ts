import { Component } from '@angular/core';
import { EVENTS, CURRENTEVENTS } from '../../data/events';
import {
  collection,
  query,
  getDocs,
  doc,
  updateDoc,
  getDoc,
} from 'firebase/firestore';
import { db, userData } from 'src/globals';
import { Event, EventType } from '../../entities/event_entity';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interested-events',
  templateUrl: './interested-events.component.html',
  styleUrls: ['./interested-events.component.css'],
})
export class InterestedEventsComponent {
  events = EVENTS;
  eventTypeArray = Object.values(EventType);

  constructor(private router: Router) {
    if (Object.keys(userData.data).length === 0) {
      this.router.navigate(['/first-component']);
    } else {
      //@ts-ignore

      console.log(userData.data['participatingEvents']);
      //@ts-ignore
      this.listIntEvents([], userData.data['participatingEvents']);
    }
  }

  listIntEvents(preferences: string[], interested: string[]) {
    this.getEvents(preferences).then((res) => {
      res = res.filter((e) => {
        //@ts-ignore

        interested.indexOf(e.ID) >= 0;
      });
      // res is the list of events
      // display the below..
      // IF SORT BY EVENT IS CAUSED YOU CAN PASS IN PREFERENCES,
      // IF NO SORT STUFF, PASS IN EMPTY ARRAY

      console.log(res);
    });
  }

  async getEvents(preferences: string[]) {
    const q = query(collection(db, 'event'));
    const querySnapshot = await getDocs(q);
    let tmp: Event[] = [];
    querySnapshot.forEach((doc) => {
      if (
        (preferences.toString() === [].toString() ||
          doc.data()['eventType'] in preferences) &&
        //@ts-ignore
        (doc.data()['Location'] === userData.data['location'] ||
          //@ts-ignore
          userData.data['location'] === undefined)
      ) {
        let ttt: string = doc.data()['EventType'];
        let tEvent: Event = {
          ID: doc.id,
          Name: doc.data()['Name'],
          EventType: ttt as EventType,
          Date: doc.data()['Date'],
          Location: doc.data()['Location'],
          Description: doc.data()['Description'],
        };
        tmp.push(tEvent);
      }
    });
    return tmp;
  }
}
