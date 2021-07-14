import firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "gdocsclone.firebaseapp.com",
  projectId: "gdocsclone",
  storageBucket: "gdocsclone.appspot.com",
  messagingSenderId: "531727213919",
  appId: process.env.APP_ID
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

export default db;