<script>
  import { Link } from 'yrv'

  let atTopOfPage = true

  const handleScroll = () => {
    if (window.pageYOffset > 346) {
      if (atTopOfPage) atTopOfPage = false
    } else {
      if (!atTopOfPage) atTopOfPage = true
    }
  }
</script>

<style lang="scss">
  nav {
    @apply fixed top-0 w-screen bg-white mx-auto px-6 mt-0;
    &.scrolled {
      @apply shadow-2xl;
      border-bottom: 0px;
    }
  }
</style>

<svelte:window on:scroll={handleScroll}/>

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