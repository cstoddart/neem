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

const firebaseApp = firebase.initializeApp(config);
const db = firebase.firestore();

export function login({ email, password, context, redirect }) {
  firebaseApp.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log('USER', user);
      context.updateUser({
        loggedIn: true,
        id: user.uid,
      });
      localStorage.setItem('loggedIn', user.uid);
      redirect();
    } else {
      context.logout();
    }
  });
  return firebaseApp.auth().signInWithEmailAndPassword(email, password)
    .catch(console.error);
}

export function logout({ context }) {
  context.logout();
  localStorage.removeItem('loggedIn');
  return firebaseApp.auth().signOut();
}

export async function createUser({ email, password, name, context }) {
  const user = await firebaseApp.auth().createUserWithEmailAndPassword(email, password)
    .catch(console.error);
  db.collection('users').doc(user.uid).set({
    name,
    currentSubscription: {
      frequency: context.order.frequency,
      address: context.order.address,
    },
  })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
  return firebaseApp;
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

export async function getUser(context) {
  db.collection('users').doc(context.user.id || localStorage.getItem('loggedIn')).get().then(function (doc) {
    if (doc.exists) {
      const user = doc.data();
      console.log('USER', user);
      context.updateUser(user);
      return user;
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }).catch(function (error) {
    console.log("Error getting document:", error);
  });
}

// export function createJob() {
//   db.collection('jobs').add({});
// }

