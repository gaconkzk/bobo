<script>
  import { Link, navigateTo } from 'yrv'
  import { onMount, onDestroy } from 'svelte'

  import Navbar from '$layouts/Navbar.svelte'
  import Footer from '$layouts/Footer.svelte'

  export let router
  console.log('Stupid unuse and warning on svelte, ', router)

  const star =
    '<svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-yellow-600 inline -ml-1 -mt-1" width="15px" height="15px" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>'

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

<div id="homepage" class="text-gray-700 bg-white font-sans">
  <Navbar actived={router.path} />

  <div
    class="py-20 mt-10"
    style="background: linear-gradient(90deg, #667eea 0%, #764ba2 100%)"
  >
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold mb-2 text-white">Smart But Bored!</h2>
      <h3 class="text-2xl mb-8 text-gray-200">
        Slow or fast! Fast slug might not good, but slow slug don't make a good
        coder.
      </h3>

      <button
        class="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider flex flex-row items-center"
        on:click={() => navigateTo('/ct')}
      >
        <img
          class="float-left mr-2"
          width="24px"
          height="24px"
          src="/imgs/slug.png"
          alt="slug"
        />
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
        <p class="text-gray-600 mb-8">Build ur muscles... Yay.</p>
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
        <p class="text-gray-600 mb-8">
          Did u improve? or you are just fall flat 4ever.
        </p>
      </div>
    </div>

    <div class="flex items-center flex-wrap mb-20">
      <div class="w-full md:w-1/2">
        <h4 class="text-3xl text-gray-800 font-bold mb-3">
          Certificates or leave
        </h4>
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
            <p class="text-gray-800 text-base px-6 mb-5">
              OMG It's suck. Should be <code>-5</code>
              {@html star}
            </p>
            <p class="text-gray-500 text-xs md:text-sm px-6">John Doe</p>
          </div>
        </div>
        <div class="w-full md:w-1/3 px-2 mb-4">
          <div class="bg-white rounded shadow py-2">
            <p class="text-gray-800 text-base px-6 mb-5">
              Cmon, leave this page.
            </p>
            <p class="text-gray-500 text-xs md:text-sm px-6">Jane Doe</p>
          </div>
        </div>
        <div class="w-full md:w-1/3 px-2 mb-4">
          <div class="bg-white rounded shadow py-2">
            <p class="text-gray-800 text-base px-6 mb-5">
              I don't regret, I have no regret. At least I'm the owner.
            </p>
            <p class="text-gray-500 text-xs md:text-sm px-6">vto</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section style="background-color: #667eea">
    <div class="container mx-auto px-6 text-center py-20">
      <h2 class="mb-6 text-4xl font-bold text-center text-white">
        Limited in THIS Winter
      </h2>
      <h3 class="my-4 text-2xl text-white">Get yourself a shitty shiny slug</h3>
      <button
        class="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider flex flex-row items-center"
        on:click={() => navigateTo('/ct')}
      >
        <img
          class="float-left mr-2"
          width="24px"
          height="24px"
          src="/imgs/slug.png"
          alt="slug"
        />
        <span>Try</span>
      </button>
    </div>
  </section>

  <Footer />
</div>

<style lang="scss">
  #homepage {
    font-family: 'Source Sans Pro', sans-serif;
  }
</style>
