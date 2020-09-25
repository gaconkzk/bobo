import { get } from 'svelte/store'
import { auth, logout } from 'services/auth'

import { db } from 'components/firebase'

const extractUser = (google_u) => ({
  avatar: google_u.photoURL,
  name: google_u.displayName,
  email: google_u.email,
  username: takeUsername(google_u.email),
  isguest: false,
})

function takeUsername(email) {
  return email.split('@')[0]
}

// Get user in db, if can't try created a new one - I don't care about error, so
// u guys might got some weird errors if it not worked on your machine
export const makeUser = async (google_u) => {
  let userRef = db.collection('users').doc(google_u.email)
  let user

  try {
    // user already in db?
    let userDoc = await userRef.get()
    user = userDoc.data()
  } catch(err) {
    // well, trying making a new one
    user = extractUser(google_u)
    await userRef.set(user)
  }
  
  // if this error - u r unlucky
  return user || extractUser(google_u)
}

export const currentUser = () => {
  let current = get(auth)
  let user = current.user || {
    isguest: true,
    username: 'slug',
    avatar: 'https://source.unsplash.com/MP0IUfwrn0A',
    // avatar: '/imgs/naruto_right.gif',
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