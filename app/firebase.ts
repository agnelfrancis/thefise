import { getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAWG_pWxeIgb7dhkUpMfdDc6iiXmKJsy3A",
  authDomain: "agnel-portfolio.firebaseapp.com",
  projectId: "agnel-portfolio",
  storageBucket: "agnel-portfolio.appspot.com",
  messagingSenderId: "37118407869",
  appId: "1:37118407869:web:b5dd596424d2a8fdcf73d4",
  measurementId: "G-9PPYWD7FE4"
}

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
const db = getFirestore(app)

export { db }

