import firebase from 'firebase/app';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBwPHEuwc_jJJLE0c66h61h4ugRZSU5M4o',
  authDomain: 'birthday-app-18480.firebaseapp.com',
  databaseURL: 'https://birthday-app-18480.firebaseio.com',
  projectId: 'birthday-app-18480',
  storageBucket: 'birthday-app-18480.appspot.com',
  messagingSenderId: '1084250787030',
  appId: '1:1084250787030:web:95a937800516c9b3424d77',
};

//Initialize firebase
export default firebase.initializeApp(firebaseConfig);
