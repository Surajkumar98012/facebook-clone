import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBndrU8Os0uXMGW9wH63gV39lUGTzSMIoY",
  authDomain: "facebook-clone-a99df.firebaseapp.com",
  projectId: "facebook-clone-a99df",
  storageBucket: "facebook-clone-a99df.appspot.com",
  messagingSenderId: "213536490456",
  appId: "1:213536490456:web:e2e9510b17955510b868ad",
  measurementId: "G-Q4WN862N2R"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export{auth,provider}
export default db