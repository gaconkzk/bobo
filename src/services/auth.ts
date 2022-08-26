import { writable } from 'svelte-local-storage-store'
import { auth as fbAuth, signOut } from '$components/firebase'

export const auth = writable('auth', {
  user: null,
})

export const logout = async () => {
  await signOut(fbAuth)
  auth.set({ user: null })
}
