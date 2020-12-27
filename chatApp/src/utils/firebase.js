import firebase from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBfvDPb2QArWVMBspy38aPxApLmf-zX0Tg',
  authDomain: 'chat-cb93f.firebaseapp.com',
  databaseURL: 'https://chat-cb93f-default-rtdb.firebaseio.com',
  projectId: 'chat-cb93f',
  storageBucket: 'chat-cb93f.appspot.com',
  messagingSenderId: '517738861736',
  appId: '1:517738861736:web:67bc7e91b0a4cb264b1e9d',
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);