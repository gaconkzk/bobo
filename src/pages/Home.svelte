<script>
  import { Link, navigateTo } from 'yrv'
  import { onMount, onDestroy } from 'svelte'

  export let router = null
  console.log('Stupid unuse and warning on svelte notfound, ', router)

  const star = '<svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-yellow-600 inline -ml-1 -mt-1" width="15px" height="15px" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>'

  let atTopOfPage = true

  const handleScroll = (e) => {
    if (window.pageYOffset > 346) {
      if (atTopOfPage) atTopOfPage = false
    } else {
      if (!atTopOfPage) atTopOfPage = true
    }
  }

  onMount(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onDestroy(() => {
    window.removeEventListener('scroll', handleScroll)
  })
</script>

<style lang="scss">
  #homepage {
    font-family: 'Source Sans Pro', sans-serif;

    nav {
      @apply fixed top-0 w-screen bg-white mx-auto px-6 mt-0;
      &.scrolled {
        @apply shadow-2xl;
        border-bottom: 0px;
      }
    }
  }
</style>

<div id="homepage" class="text-gray-700 bg-white font-sans">  
  <nav class:scrolled={!atTopOfPage}>
    <div class="mx-auto px-6 py-2 flex justify-between items-center">
      <span class="font-bold text-2xl lg_text-4xl">
        BOBO
      </span>
      <div class="block lg_hidden">
        <button class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover_text-gray-800 hover_border-teal-500 appearance-none focus_outline-none">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="hidden lg_block">
        <ul class="inline-flex">
          <li><a class="px-4 font-bold" href="/">Home</a></li>
          <li><Link class="px-4 hover_text-gray-800" href="/ct">Code Typhoon</Link>
        </ul>
      </div>
    </div>
  </nav>

  <div class="py-20 mt-10" style="background: linear-gradient(90deg, #667eea 0%, #764ba2 100%)">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold mb-2 text-white">
        Slow or fast!
      </h2>
      <h3 class="text-3xl font-mono italic font-bold mb-2 text-white">
        It's just a matter between two and nine fingers.
      </h3>
      <h4 class="text-xl mb-8 text-gray-200">
        Good typing speed! It doesn't make you a good coder, but a good coder should be fast!
      </h4>
      <button class="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider" on:click={() => navigateTo('/ct')}>
        <img class="float-left mr-2" width="24px" height="24px" src="/imgs/slug.png" alt="slug"/>
        <span>Try</span>
      </button>
    </div>
  </div>
  <section class="container mx-auto px-6 p-10">
    <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">
      What we should do?
    </h2>
    <div class="flex items-center flex-wrap mb-20">
      <div class="w-full md:w-1/2">
        <h4 class="text-3xl text-gray-800 font-bold mb-3">Exercise Metric</h4>
        <p class="text-gray-600 mb-8">Build ur muscles... Yay. Daily practices make strong fingers and sharp eyes</p>
      </div>
      <div class="w-full md:w-1/2">
        <img src="imgs/health.svg" alt="Monitoring" />
      </div>
    </div>
  
    <div class="flex items-center flex-wrap mb-20">
      <div class="w-full md:w-1/2">
        <img src="imgs/report.svg" alt="Reporting" />
      </div>
      <div class="w-full md:w-1/2 pl-10">
        <h4 class="text-3xl text-gray-800 font-bold mb-3">Check ur progress</h4>
        <p class="text-gray-600 mb-8">Did u improve? or you are just fall flat 4ever.</p>
      </div>
    </div>
  
    <div class="flex items-center flex-wrap mb-20">
      <div class="w-full md:w-1/2">
        <h4 class="text-3xl text-gray-800 font-bold mb-3">Certificates or leave</h4>
        <p class="text-gray-600 mb-8">U are passed, or u are false, up 2 ya.</p>
      </div>
      <div class="w-full md:w-1/2">
        <img src="imgs/sync.svg" alt="Syncing" />
      </div>
    </div>
  </section>

  <section class="bg-gray-100">
    <div class="container mx-auto px-6 py-20">
      <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">
        What gals thinks?
      </h2>
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/3 px-2 mb-4">
          <div class="bg-white rounded shadow py-2">
            <p class="text-gray-800 text-base px-6 mb-5">OMG It's suck. Should be <code>-5</code> {@html star}</p>
            <p class="text-gray-500 text-xs md:text-sm px-6">John Doe</p>
          </div>
        </div>
        <div class="w-full md:w-1/3 px-2 mb-4">
          <div class="bg-white rounded shadow py-2">
            <p class="text-gray-800 text-base px-6 mb-5">Cmon, leave this page.</p>
            <p class="text-gray-500 text-xs md:text-sm px-6">Jane Doe</p>
          </div>
        </div>
        <div class="w-full md:w-1/3 px-2 mb-4">
          <div class="bg-white rounded shadow py-2">
            <p class="text-gray-800 text-base px-6 mb-5">I don't regret, I have no regret. At least I'm the owner.</p>
            <p class="text-gray-500 text-xs md:text-sm px-6">vto</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section style="background-color: #667eea">
    <div class="container mx-auto px-6 text-center py-20">
      <h2 class="mb-6 text-4xl font-bold text-center text-white">
        Limited in THIS WINTER
      </h2>
      <h3 class="my-4 text-2xl text-white">
        Get your fingers dirty!
      </h3>
      <button class="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider" on:click={() => navigateTo('/ct')}>
        <img class="float-left mr-2" width="24px" height="24px" src="/imgs/slug.png" alt="slug"/>
        <span>Try</span>
      </button>
    </div>
  </section>

  <footer class="bg-gray-100">
    <div class="container mx-auto px-6 pt-10 pb-6">
      <div class="flex flex-wrap">
        <div class="w-full md_w-1/4 text-center md_text-left">
          <h5 class="uppercase mb-6 font-bold">Links</h5>
          <ul class="mb-4">
            <li class="mt-2">
              <a href="https://github.com/gaconkzk/bobo/blob/master/TODO.md" class="hover_underline text-gray-600 hover_text-orange-500">TODO</a>
            </li>
            <li class="mt-2">
              <a href="https://github.com/gaconkzk/bobo/wiki" class="hover_underline text-gray-600 hover_text-orange-500">Wiki</a>
            </li>
            <li class="mt-2">
              <a href="https://github.com/gaconkzk/bobo/issues" class="hover_underline text-gray-600 hover_text-orange-500">Issues</a>
            </li>
          </ul>
        </div>
        <div class="w-full md_w-1/4 text-center md_text-left">
          <h5 class="uppercase mb-6 font-bold">Legal</h5>
          <ul class="mb-4">
            <!-- <li class="mt-2">
              <a href="#" class="hover_underline text-gray-600 hover_text-orange-500">Terms</a>
            </li>
            <li class="mt-2">
              <a href="#" class="hover_underline text-gray-600 hover_text-orange-500">Privacy</a>
            </li> -->
          </ul>
        </div>
        <div class="w-full md_w-1/4 text-center md_text-left">
          <h5 class="uppercase mb-6 font-bold">Social</h5>
          <ul class="mb-4">
            <!-- <li class="mt-2">
              <a href="#" class="hover_underline text-gray-600 hover_text-orange-500">Facebook</a>
            </li>
            <li class="mt-2">
              <a href="#" class="hover_underline text-gray-600 hover_text-orange-500">Linkedin</a>
            </li>
            <li class="mt-2">
              <a href="#" class="hover_underline text-gray-600 hover_text-orange-500">Twitter</a>
            </li> -->
          </ul>
        </div>
        <div class="w-full md_w-1/4 text-center md_text-left">
          <h5 class="uppercase mb-6 font-bold">Company</h5>
          <ul class="mb-4">
            <!-- <li class="mt-2">
              <a href="#" class="hover_underline text-gray-600 hover_text-orange-500">Official Blog</a>
            </li>
            <li class="mt-2">
              <a href="#" class="hover_underline text-gray-600 hover_text-orange-500">About Us</a>
            </li>
            <li class="mt-2">
              <a href="#" class="hover_underline text-gray-600 hover_text-orange-500">Contact</a>
            </li> -->
          </ul>
        </div>
      </div>
    </div>
  </footer>
</div>