import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCE7madQP0Z_ILmlOc5SfxjeQAro658xAA",
  authDomain: "chamados-9dbaf.firebaseapp.com",
  projectId: "chamados-9dbaf",
  storageBucket: "chamados-9dbaf.firebasestorage.app",
  messagingSenderId: "647392434773",
  appId: "1:647392434773:web:e5b16e0f217ddcd17512dc"
}

const app = initializeApp(firebaseConfig)
const auth=getAuth(app)
const db=getFirestore(app)

export {auth,db}