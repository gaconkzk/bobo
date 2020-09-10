import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

console.log(__bobo)

var firebaseConfig = {
  apiKey: __bobo.env.API_KEY,
  authDomain: __bobo.env.AUTH_DOMAIN,
  databaseURL: __bobo.env.DATABASE_URL,
  projectId: __bobo.env.PROJECT_ID,
  storageBucket: __bobo.env.STORAGE_BUCKET,
  messagingSenderId: __bobo.env.MESSAGING_SENDER_ID,
  appId: __bobo.env.APP_ID,
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider()

export const db = firebase.firestore()
