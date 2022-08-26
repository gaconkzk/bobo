import { writable } from 'svelte-local-storage-store'

export const auth = writable('auth', {
  user: null
})

export const logout = () => {
  auth.set({ user: null })
}