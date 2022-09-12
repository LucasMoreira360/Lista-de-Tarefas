import {initializeApp} from'firebase/app'
import {getFirestore} from'firebase/firestore'
import {getAuth} from'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDHBkTq1D7WC7TtFLOyOZMU76ShqfWNisA",
  authDomain: "fireapp-b7344.firebaseapp.com",
  projectId: "fireapp-b7344",
  storageBucket: "fireapp-b7344.appspot.com",
  messagingSenderId: "19036949822",
  appId: "1:19036949822:web:cafbdfefd4ef3794f4706f",
  measurementId: "G-F3CKWMDQ7Q"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp)
export { db,auth };