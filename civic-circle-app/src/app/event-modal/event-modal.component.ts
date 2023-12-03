import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  collection,
  query,
  getDocs,
  doc,
  updateDoc,
  getDoc,
  setDoc,
  addDoc,
} from 'firebase/firestore';
import { db, userData } from 'src/globals';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.css'],
})
export class EventModalComponent {
  @Input() description = '';
  @Input() location = '';
  @Input() ID = '';
  showForm = false;
  comments: any = [];
  constructor() {}
  ngOnInit() {
    this.getComments();
  }

  async addComment(text: string, name: string) {
    await addDoc(collection(db, 'event', this.ID, 'Comments'), {
      likes: 0,
      content: text,
      parentId: -1,
      name: name,
      ID: 12313,
    }).then((dooc) => {
      console.log(dooc.id);
      let tmp = {
        likes: 0,
        content: text,
        parentId: -1,
        name: name,
        //@ts-ignore
        ID: dooc.id,
      };
      this.comments.push(tmp);
      console.log(this.comments);
    });
  }

  async getComments() {
    let commentList: any = [];
    console.log(this.ID);
    const querySnapshot = await getDocs(
      query(collection(db, 'event', this.ID, 'Comments'))
    );
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, ' => ', doc.data());
      if (doc.data()['ID'] !== -111) {
        let tmp = {
          ID: doc.id,
          content: doc.data()['content'],
          likes: doc.data()['likes'],
          parentId: doc.data()['parentId'],
          name: doc.data()['name'],
        };
        commentList.push(tmp);
      }
    });

    // then you'd just turn that comment list into html!!!
    this.comments = commentList;
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }
  onSubmit(myForm: NgForm) {
    //@ts-ignore
    this.addComment(myForm.value.comment, userData.data['name']);

    console.log(myForm.value.comment);
    this.toggleForm();
  }
}
