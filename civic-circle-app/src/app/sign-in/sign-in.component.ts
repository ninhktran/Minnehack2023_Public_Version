import { Component } from '@angular/core';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { db, auth, userData } from 'src/globals';
import { collection, getDocs, query } from 'firebase/firestore';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  constructor(private router: Router) {}

  onSubmit(myForm: NgForm) {
    console.log('Submit');
    console.log(myForm.value);
    console.log(myForm.valid);
    this.signin(myForm.value.email, myForm.value.password);
    //
  }

  signin(email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed into user account, redirect here
        const ref = collection(db, 'user');
        let q = query(ref);
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          if (doc.id == userCredential.user.email) {
            userData.data = {
              ID: doc.id,
              isCoordinator: doc.data()['isCoordinator'],
              participatingEvents: doc.data()['participatingEvents'],
              name: doc.data()['name'],
              location: doc.data()['location'],
            };
          }
          this.router.navigate(['/events']);
        });
      })
      .catch((error) => {
        //error
      });
  }
}
