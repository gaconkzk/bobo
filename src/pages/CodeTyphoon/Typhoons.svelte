<script>
  import { Link, navigateTo } from 'yrv'

  import Card from 'components/Card'

  import Carousel from 'components/Carousel'

  export let router = null
  console.log('Stupid unuse and warning on svelte, ', router)

  // should be top 10
  let fighting = [1, 2, 3, 4]
  // should be top 10
  let data = [1,2,3,4,5,6,7,8]
</script>

<style lang="scss">
  .cat {
    @apply mt-4 text-2xl text-blue-500 font-bold px-2 italic bg-gray-200 bg-opacity-25;
  }

  // .hero {
  //   background-color: #ffffff;
  //   background-position: 0 0;
  //   background-repeat: repeat;

  //   /* Fallback */
  //   // background-image: url('/imgs/floating-cogs.svg');

  //   /* CSS gradients */
  //   // background-image: url('/imgs/floating-cogs.svg'), 
  //   //                   -moz-linear-gradient(top, #ADB2B6 0%, #ABAEB3 100%);
  //   background-image: url('/imgs/floating-cogs.svg'), 
  //                     -webkit-gradient(linear, left top, left bottom, color-stop(0%, #228080), color-stop(65%, #aaaaaa), color-stop(100%, #ffffff));
  //   // background-image: url('/imgs/floating-cogs.svg'), 
  //   //                   linear-gradient(to bottom, #ADB2B6, #ABAEB3);

  //   /* IE */
  //   filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ADB2B6', endColorstr='#ABAEB3', GradientType=0);
  // }
</style>
<!-- 
<section >
  <div class="flex flex-col h-64 -mt-6 items-center align-center justify-center hero">
      <h2 class="text-4xl font-bold mb-2 text-white">
        Join and fight
      </h2>
      <p class="text-xl italic text-white">
        Choose a fighting room to challenge others.
      <p/>
      <p class="text-xl italic text-white">
        Or you can choose to practice in single mode
      </p>
  </div>
</section> -->

<div class="px-6">
<Carousel />
</div>

<div class="container mx-auto border-none">

<!-- <section class="shadow"> -->
  
  <!-- <div class="h-full">
    <h3 class="cat">Hot trending</h3>

    <div class="flex px-2 items-center grid grid-flow-row sm_grid-cols-1 md_grid-cols-2 lg_grid-cols-3">
      {#each trend as item}
        <Card data={item}/>
      {/each}
    </div>
  </div> -->
<!-- </section> -->

<section class="shadow mb-6">
  <h3 class="cat">Fighting</h3>

  <div class="grid grid-flow-row md_grid-cols-3 lg_grid-cols-4 gap-4 sm_grid-cols-1 px-2">
    {#each fighting as item}
      <Card data={item}/>
    {/each}
  </div>
</section>

<section class="shadow mb-6">
  <h3 class="cat">Practice</h3>

  <div class="grid grid-flow-row md_grid-cols-3 lg_grid-cols-4 gap-4 sm_grid-cols-1 px-2">
    {#each data as item}
      <Card data={item}/>
    {/each}
  </div>
</section>
</div>


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
          <li class="mt-2">
            <a href="#" class="hover_underline text-gray-600 hover_text-orange-500">Terms</a>
          </li>
          <li class="mt-2">
            <a href="#" class="hover_underline text-gray-600 hover_text-orange-500">Privacy</a>
          </li>
        </ul>
      </div>
      <div class="w-full md_w-1/4 text-center md_text-left">
        <h5 class="uppercase mb-6 font-bold">Social</h5>
        <ul class="mb-4">
          <li class="mt-2">
            <a href="#" class="hover_underline text-gray-600 hover_text-orange-500">Facebook</a>
          </li>
          <li class="mt-2">
            <a href="#" class="hover_underline text-gray-600 hover_text-orange-500">Linkedin</a>
          </li>
          <li class="mt-2">
            <a href="#" class="hover_underline text-gray-600 hover_text-orange-500">Twitter</a>
          </li>
        </ul>
      </div>
      <div class="w-full md_w-1/4 text-center md_text-left">
        <h5 class="uppercase mb-6 font-bold">Company</h5>
        <ul class="mb-4">
          <li class="mt-2">
            <a href="#" class="hover_underline text-gray-600 hover_text-orange-500">Official Blog</a>
          </li>
          <li class="mt-2">
            <a href="#" class="hover_underline text-gray-600 hover_text-orange-500">About Us</a>
          </li>
          <li class="mt-2">
            <a href="#" class="hover_underline text-gray-600 hover_text-orange-500">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>