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

import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent {
  events = EVENTS;
  currentEvents = CURRENTEVENTS;
  date_arr = Array.from({length: this.currentEvents.length}, () => new Date(Math.random()*100000000));
  date_str = Array.from({length: this.currentEvents.length}, () => "aa");
  items = [
    { name: 'infrastructure', checked: true },
    { name: 'education', checked: true },
    { name: 'campaign', checked: true },
    { name: 'funding', checked: true },
    { name: 'protest', checked: true },
  ];

  selectedItems: string[] = [
    'infrastructure',
    'education',
    'campaign',
    'funding',
    'protest',
  ];
  updateSelected(item: { checked: any; name: string }) {
    if (item.checked) {
      this.selectedItems.push(item.name);
    } else {
      this.selectedItems = this.selectedItems.filter((i) => i !== item.name);
    }
  }
	closeResult = '';

  constructor(private router: Router, private modalService: NgbModal) {
    this.listEvents([]);
    console.log(userData.data);
  }
  
  open(content:any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}
  private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}
  listEvents(preferences: string[]) {
    this.getEvents(preferences).then((res) => {
      // res is the list of events
      // display the below..
      // IF SORT BY EVENT IS CAUSED YOU CAN PASS IN PREFERENCES,
      // IF NO SORT STUFF, PASS IN EMPTY ARRAY
      this.events = res;
      console.log(res);
    });
  }

  listIntEvents(preferences: string[], interested: number[]) {
    this.getEvents(preferences).then((res) => {
      res = res.filter((e) => {
        e.ID in interested;
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
    this.date_arr = Array.from({length: tmp.length}, () => new Date(Math.random()*500000000000));
    for(let i = 0; i<this.date_arr.length; i++){
      this.date_arr[i].setFullYear(2023)
      this.date_str[i]= this.date_arr[i].toLocaleString()
    }

    return tmp;
  }

  // Call this when the user clicks add interested
  addInterested(eventId: string) {
    // if userData.data is empty redirect to login
    // console.log(userData.data);
    if (Object.keys(userData.data).length === 0) {
      this.router.navigate(['/first-component']);
    } else {
      //@ts-ignore
      const docRef = doc(db, 'user', userData.data['ID']);
      console.log('ggg');

      //@ts-ignore
      userData.data['participatingEvents'].push(eventId);
      const res = updateDoc(docRef, userData.data);
    }
  }

  eventTypeArray = Object.values(EventType);
}
