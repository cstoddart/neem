/* global localStorage */
import firebase from 'firebase/app';
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

export function login({ email, password, context, redirect }) {
  firebaseApp.auth().onAuthStateChanged(function(user){
    if (user) {
      console.log('USER', user);
      context.login();
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

export function createUser({email, password}) {
  firebaseApp.auth().createUserWithEmailAndPassword(email, password)
    .catch(console.error);
}

