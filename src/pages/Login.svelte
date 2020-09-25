<script>
  import { onDestroy } from 'svelte'
  import { auth, googleProvider } from 'components/firebase'
  import { authState } from 'rxfire/auth'

  import { Login, Home } from 'svelte-hero-icons'

  import { auth as astore } from 'services/auth'

  import { navigateTo } from 'yrv'

  import { getParams } from 'utils/common'

  import { makeUser } from 'services/users'

  export let router = null
  console.log('Stupid unuse and warning on svelte, ', router)

  let unsubscribe
  let unsub = astore.subscribe((auth) => {
    if (auth.user) {
      let redirect = getParams().get('redirect')
      if (redirect) {
        navigateTo(redirect)
      } else {
        navigateTo('/')
      }
    }
  })

  async function login() {
    await auth.signInWithPopup(googleProvider)
    unsubscribe = authState(auth).subscribe(async u => astore.set({ user: await makeUser(u) }))
  }

  onDestroy(() => {
    if (unsubscribe) {
      unsubscribe.unsubscribe();
      unsubscribe = null
    }
    unsub()
    unsub = null
  })

</script>

<div class="flex w-full h-screen">
  <div class=" container flex flex-col mx-auto max-w-xs self-center inline-flex items-center">
    <div class="flex flex-row items-center">
      <button class=" rounded inline-flex items-center bg-red-700 hover_bg-red-800 text-white font-bold py-2 px-4 my-2 mx-2 focus_outline-none focus_shadow-outline"
      type="button" on:click="{login}">
        <Login class="mr-2" size="24" />
        <span>Google</span>
      </button>
      <button class="bg-blue-500 hover_bg-blue-400 text-white font-bold py-2 px-4 my-2 mx-2 rounded w-16" on:click="{() => navigateTo('/')}">
        <Home class="mx-1" size="24" />
      </button>
    </div>

    <p class=" text-center text-gray-500 text-xs mt-2">
      &copy;2020 The Flies.  Built with
      <span class="inline-block h-3 w-3 ml-1 -mt-1">
        <span class="animate-ping absolute inline-flex self-center h-3 w-3 text-base text-red-400 opacity-75">&#10084;</span>
        <span class="relative inline-flex self-center h-3 w-3 text-lg text-red-500 ">&#10084;</span>
      </span>
    </p>
  </div>
</div>
