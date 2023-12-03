import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCR-IGq2XLtmQG3EDPRv_FkJ0IoLMzNV1Y',
  authDomain: 'civic-circle.firebaseapp.com',
  projectId: 'civic-circle',
  storageBucket: 'civic-circle.appspot.com',
  messagingSenderId: '1094235226299',
  appId: '1:1094235226299:web:3d3c78984beb1399dee99e',
};

// Initialize Firebase
export const fireApp = initializeApp(firebaseConfig);
export const auth = getAuth(fireApp);
export const db = getFirestore(fireApp);

export let userData = { data: {} };
