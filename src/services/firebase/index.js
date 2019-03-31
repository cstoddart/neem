/* global localStorage */
import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBRwkSnbOQaHgAf4hFgxXo0Jee1fAKKtuI",
  authDomain: "leeif-222702.firebaseapp.com",
  databaseURL: "https://leeif-222702.firebaseio.com",
  projectId: "leeif-222702",
  storageBucket: "leeif-222702.appspot.com",
  messagingSenderId: "28670286697",
};

export const firebaseApp = firebase.initializeApp(config);
export const db = firebase.firestore();

export {
  login,
  logout,
  createUser,
  updateUser,
  getUser,
} from './users';
// export function createJob() {
//   db.collection('jobs').add({});
// }

