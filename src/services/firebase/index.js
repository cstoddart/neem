/* global localStorage */
import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/auth';

import { initialState } from 'src/AppContext';

const config = {
  apiKey: "AIzaSyBRwkSnbOQaHgAf4hFgxXo0Jee1fAKKtuI",
  authDomain: "leeif-222702.firebaseapp.com",
  databaseURL: "https://leeif-222702.firebaseio.com",
  projectId: "leeif-222702",
  storageBucket: "leeif-222702.appspot.com",
  messagingSenderId: "28670286697",
};

const firebaseApp = firebase.initializeApp(config);
const db = firebase.firestore();

export function login({ email, password, context, redirect }) {
  firebaseApp.auth().onAuthStateChanged(function (user) {
    if (user) {
      context.updateUser({
        loggedIn: true,
        id: user.uid,
      });
      localStorage.setItem('loggedIn', user.uid);
      redirect();
    }
  });
  return firebaseApp.auth().signInWithEmailAndPassword(email, password)
    .catch(console.error);
}

export function logout({ context, redirect }) {
  context.updateUser(initialState.user);
  localStorage.removeItem('loggedIn');
  firebaseApp.auth().signOut();
  redirect();
}

export function createUser({ email, password, name, context, stripeCustomerId }) {
  firebaseApp.auth().createUserWithEmailAndPassword(email, password)
    .then(({ user }) => {
      db.collection('users').doc(user.uid).set({
        name,
        currentSubscription: {
          frequency: context.order.frequency,
          address: context.order.address,
        },
        stripeCustomerId,
      })
        .then(function (docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });
    })
    .catch(console.error);
}

export async function updateUser({ id, name, context }) {
  db.collection('users').doc(id).set({
    name,
    currentSubscription: {
      frequency: context.order.frequency,
      address: context.order.address,
    },
  });
}

export function getUser(context) {
  return db.collection('users').doc(context.user.id || localStorage.getItem('loggedIn')).get().then(function (doc) {
    if (doc.exists) {
      const user = doc.data();
      context.updateUser(user);
      return user;
    } else {
      console.log("No such document!");
    }
  }).catch(function (error) {
    console.log("Error getting document:", error);
  });
}

// export function createJob() {
//   db.collection('jobs').add({});
// }

