import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyB1eb-zJE1vC2q75Nd1lviXZBSmLm18d_I",
    authDomain: "web-chat-e9e5c.firebaseapp.com",
    projectId: "web-chat-e9e5c",
    storageBucket: "web-chat-e9e5c.appspot.com",
    messagingSenderId: "383311446628",
    appId: "1:383311446628:web:cbfd4901968c51897c5571"
}).auth();


