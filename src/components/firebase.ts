import { initializeApp } from 'firebase/app'
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.BOBO_API_KEY,
  authDomain: import.meta.env.BOBO_AUTH_DOMAIN,
  databaseURL: import.meta.env.BOBO_DATABASE_URL,
  projectId: import.meta.env.BOBO_PROJECT_ID,
  storageBucket: import.meta.env.BOBO_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.BOBO_MESSAGING_SENDER_ID,
  appId: import.meta.env.BOBO_APP_ID,
}

initializeApp(firebaseConfig)

export const auth = getAuth()
export const googleProvider = new GoogleAuthProvider()
export { signInWithPopup, signOut }
export const db = getFirestore()
