import { get } from 'svelte/store'
import { auth, logout } from 'services/auth'

import { db } from 'components/firebase'

function takeUsername(email) {
  return email.split('@')[0]
}

export const makeUser = (google_u) => {
  // user already in db?
  let userRef = db.collection('users').doc(google_u.email)
  userRef.get().then((doc) => {
    console.log('user', user)
  }).catch(err => {
    console.log('err', err)
  })
  
  return {
    avatar: google_u.photoURL,
    name: google_u.displayName,
    email: google_u.email,
    username: takeUsername(google_u.email),
    isguest: false,
  }
}

export const currentUser = () => {
  let current = get(auth)
  let user = current.user || {
    isguest: true,
    username: 'slug',
    avatar: 'https://source.unsplash.com/MP0IUfwrn0A',
  }

  return user
}

export const shortName = (name) => {
  // split by ' '
  if (name) {
    const words = name.split(' ') 
    if (words.length >= 2) {
      const {0: first, [words.length - 1]: last} = words
      return first[0] + last[0]
    } else {
      return name.substr(0, 2)
    }
  }

  return 'G'
}