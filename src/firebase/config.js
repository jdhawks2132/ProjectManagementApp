import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyC6sk2mxwcqs6D0Ckhtf6twzxcWnRpIjAI",
    authDomain: "hawksnest-c3df1.firebaseapp.com",
    projectId: "hawksnest-c3df1",
    storageBucket: "hawksnest-c3df1.appspot.com",
    messagingSenderId: "493383658218",
    appId: "1:493383658218:web:03e240183445b26c158593"
  };

  firebase.initializeApp(firebaseConfig)

  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()
  const projectStorage = firebase.storage()

  const timestamp = firebase.firestore.Timestamp

  export { projectFirestore, projectAuth, timestamp, projectStorage }