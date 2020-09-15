<script>
  import { get } from 'svelte/store'
  import { redirect } from 'components/pager';

  import StatusBar from './components/StatusBar'

  // Testing split
  // let CodeLive
  // import('./components/CodeLive')
  //   .then(module => module.default)
  //   .then(cl => CodeLive = cl)
  //   .catch(err => console.error(err))
  import CodeLive from './components/CodeLive'

  import { auth, logout } from 'services/auth'

  import { auth as fauth } from 'components/firebase'

  import Slug, { rndInt } from 'components/Slug'

  let user = get(auth)
  let status = { error: 0, accuracy: 0.00 }

  const handleMessage = (e) => {
    status = e.detail
  }

  const logoutClicked = () => {
    fauth.signOut().then(() => {
      logout()
      redirect('/')
    })
  }

  let race;
  function createSlug() {
    let hue = rndInt(360)
    let z = rndInt(15)
    let speed = Math.random() * 3 + 0.25
    let bottom = `${264 * (25 - z) / 100}px`
    // TODO size of the slug

    return { hue, z, speed, bottom }
  }

  let slugs = [createSlug(), createSlug()]
</script>

<style lang="scss">
  .race {
    @apply absolute w-full overflow-hidden bg-gradient-to-b from-white via-gray-100 to-black;
    height: 264px;
    bottom: 0;
    z-index: -10;
  }
</style>

<main class="flex flex-col h-screen max-h-full space-y-6">
  <nav class="flex-initial flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <svg class="fill-current h-8 w-8 mr-2" width="128" height="128" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <path d="M91.07,25.31l0.02-0.02c-1.51-1.1-1.46-2.1-0.73-2.79c0.64-0.61,1.89-0.99,1.89-0.99 c19.6-4.47,35.41,5.59,35.41,5.59c-16.41-21.5-47.46-27.14-77.2-12.08c-19.48,9.48-26.62,24.09-26.62,24.09l0.06-0.01 c-4.51,7.24-7.15,15.76-7.15,24.9c0,16.02,7.99,30.15,20.18,38.7l-0.02,0.02c1.51,1.09,1.46,2.1,0.73,2.79 c-0.64,0.61-1.89,0.99-1.89,0.99c-19.61,4.47-35.41-5.59-35.41-5.59c16.41,21.51,47.46,27.14,77.2,12.08 c19.48-9.48,26.63-24.1,26.63-24.1l-0.07,0.01c4.51-7.24,7.15-15.76,7.15-24.91C111.25,47.98,103.26,33.85,91.07,25.31z M44.51,63.99c0-10.76,8.73-19.49,19.49-19.49c10.76,0,19.49,8.73,19.49,19.49c0,10.77-8.73,19.5-19.49,19.5 C53.23,83.49,44.51,74.77,44.51,63.99z" style="fill:#FFFFFF;"/>
      </svg>
      <a href="/" class="font-semibold text-xl tracking-tight">Code Typhoon</a>
    </div>
  {#if user}
    <div>
      <button on:click={logoutClicked}>Logout</button>
    </div>
  {/if}
  </nav>
  <div class="flex-1 flex flex-col w-full items-center pt-2">
    <StatusBar {...status}/>
    <svelte:component this={CodeLive} on:message={handleMessage}/>
  </div>
</main>
<div class="race">
  {#each slugs as slug}
    <Slug {...slug} />
  {/each}
</div>