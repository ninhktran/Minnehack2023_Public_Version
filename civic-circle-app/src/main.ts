/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCR-IGq2XLtmQG3EDPRv_FkJ0IoLMzNV1Y',
  authDomain: 'civic-circle.firebaseapp.com',
  projectId: 'civic-circle',
  storageBucket: 'civic-circle.appspot.com',
  messagingSenderId: '1094235226299',
  appId: '1:1094235226299:web:3d3c78984beb1399dee99e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
