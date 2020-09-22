import { get } from 'svelte/store'
import { auth, logout } from 'services/auth'

function takeUsername(email) {
  return email.split('@')[0]
}

export const makeUser = (google_u) => {
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
  const words = name.split(' ') 
  if (words.length >= 2) {
    const {0: first, [words.length - 1]: last} = words
    return first[0] + last[0]
  } else {
    return name.substr(0, 2)
  }
}