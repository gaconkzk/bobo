<script>
  import { currentUser, shortName } from 'services/users'
  import { logout } from 'services/auth'

  import { auth as fauth } from 'components/firebase'

  import { Router, Route, Link, navigateTo } from 'yrv'

  import Typhoons from './Typhoons'
  import Typhoon from './Typhoon'

  export let router = null

  let showProfile = false
  let userMenu

  const avatarClick = (e) => {
    showProfile = !showProfile
    e.stopPropagation()
  }

  $: avatarClass = showProfile ? 'transition ease-out duration-100 transform opacity-100 scale-100' :
      'transition ease-in duration-75 transform opacity-0 scale-95'

  // we might show anonymous/guest user or logged in user
  let user = currentUser()

  const logoutClicked = () => {
    if (user.isguest) {
      navigateTo('/login?redirect=' + router.path)
      return
    }
    fauth.signOut().then(() => {
      logout()
      navigateTo(router.path, { replace: true })
    })
  }

  const handleClick = (e) => {
    let isMenu = 'menuitem' === e.target.getAttribute('role')
    if (!isMenu && showProfile){
      showProfile = false
    }
  }
</script>

<svelte:window on:click={handleClick}/>

<main class="flex flex-col h-screen max-h-full space-y-6">
  <nav class="flex-initial flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <svg class="fill-current h-8 w-8 mr-2" width="128" height="128" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <path d="M91.07,25.31l0.02-0.02c-1.51-1.1-1.46-2.1-0.73-2.79c0.64-0.61,1.89-0.99,1.89-0.99 c19.6-4.47,35.41,5.59,35.41,5.59c-16.41-21.5-47.46-27.14-77.2-12.08c-19.48,9.48-26.62,24.09-26.62,24.09l0.06-0.01 c-4.51,7.24-7.15,15.76-7.15,24.9c0,16.02,7.99,30.15,20.18,38.7l-0.02,0.02c1.51,1.09,1.46,2.1,0.73,2.79 c-0.64,0.61-1.89,0.99-1.89,0.99c-19.61,4.47-35.41-5.59-35.41-5.59c16.41,21.51,47.46,27.14,77.2,12.08 c19.48-9.48,26.63-24.1,26.63-24.1l-0.07,0.01c4.51-7.24,7.15-15.76,7.15-24.91C111.25,47.98,103.26,33.85,91.07,25.31z M44.51,63.99c0-10.76,8.73-19.49,19.49-19.49c10.76,0,19.49,8.73,19.49,19.49c0,10.77-8.73,19.5-19.49,19.5 C53.23,83.49,44.51,74.77,44.51,63.99z" style="fill:#FFFFFF;"/>
      </svg>
      <Link href="/ct" class="font-semibold text-xl tracking-tight">Code Typhoon</Link>
    </div>
    
    <div class="w-8 h-8 relative mb" on:click={avatarClick} bind:this={userMenu}>
      <div class="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
        <span class="hidden group-hover_table-cell rounded-full text-white font-bold align-middle bg-gray-400">{shortName(user.name)}</span>
        <img src={user.avatar} alt="lovely avatar"
          class="object-cover object-center w-full h-full visible group-hover_hidden" />
      </div>
      <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg {avatarClass}">
        <div class="py-1 rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
          <a href="/profile" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover_bg-gray-100 focus_outline-none focus_bg-gray-100 transition duration-150 ease-in-out" role="menuitem">Your Profile</a>
          <a href="/settings" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover_bg-gray-100 focus_outline-none focus_bg-gray-100 transition duration-150 ease-in-out" role="menuitem">Settings</a>
{#if !user.isguest}
          <Link class="block px-4 py-2 text-sm leading-5 text-gray-700 hover_bg-gray-100 focus_outline-none focus_bg-gray-100 transition duration-150 ease-in-out" role="menuitem" on:click={logoutClicked}>Sign out</Link>
{:else}
          <Link href="/login?redirect={router.path}" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover_bg-gray-100 focus_outline-none focus_bg-gray-100 transition duration-150 ease-in-out" role="menuitem">Signin</Link>
{/if}
        </div>
      </div>
    </div>
    <!-- <div>
      <button on:click={logoutClicked}>Logout</button>
    </div> -->
  <!-- {/if} -->
  </nav>
  <Router path="/">
    <Route exact component={Typhoons} />
    <Route exact path="/:name" component={Typhoon} let:router />
  </Router>
</main>