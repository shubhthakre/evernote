import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';



 
const firebaseConfig = {
  apiKey: "AIzaSyAYlbyx89bO8GVsVxCoGJbRgQvA2AKgNZs",
  authDomain: "evernote-557fc.firebaseapp.com",
  projectId: "evernote-557fc",
  storageBucket: "evernote-557fc.appspot.com",
  messagingSenderId: "208097379069",
  appId: "1:208097379069:web:970ca6bcf9bc224b68b494"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('evernote-container')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
