function takeUsername(email) {
  return email.split('@')[0]
}

export const makeUser = (google_u) => {
  return {
    avatar: google_u.photoURL,
    name: google_u.displayName,
    email: google_u.email,
    username: takeUsername(google_u.email),
  }
}