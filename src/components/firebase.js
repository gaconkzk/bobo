import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: process.env.API_KEY || __bobo.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN || __bobo.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL || __bobo.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID || __bobo.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET || __bobo.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID || __bobo.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID || __bobo.env.APP_ID,
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider()

export const db = firebase.firestore()
