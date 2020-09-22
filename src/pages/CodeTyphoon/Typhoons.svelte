<script>
  import { Link, navigateTo } from 'yrv'

  import Card from 'components/Card'

  export let router = null
  console.log('Stupid unuse and warning on svelte, ', router)

  // should be top 3
  let trend = [1,2,3]
  // should be top 10
  let fighting = [1, 2, 3, 4]
  // should be top 10
  let data = [1,2,3,4,5,6,7,8]
</script>

<style lang="scss">
  .cat {
    @apply mt-4 text-2xl text-blue-500 font-bold px-2 italic bg-gray-200 bg-opacity-25;
  }

  .hero {
    background-color: #ffffff;
    background-position: 0 0;
    background-repeat: repeat;

    /* Fallback */
    // background-image: url('/imgs/floating-cogs.svg');

    /* CSS gradients */
    // background-image: url('/imgs/floating-cogs.svg'), 
    //                   -moz-linear-gradient(top, #ADB2B6 0%, #ABAEB3 100%);
    background-image: url('/imgs/floating-cogs.svg'), 
                      -webkit-gradient(linear, left top, left bottom, color-stop(0%, #228080), color-stop(65%, #aaaaaa), color-stop(100%, #ffffff));
    // background-image: url('/imgs/floating-cogs.svg'), 
    //                   linear-gradient(to bottom, #ADB2B6, #ABAEB3);

    /* IE */
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ADB2B6', endColorstr='#ABAEB3', GradientType=0);
  }
</style>

<section >
  <div class="flex flex-col h-64 -mt-6 items-center align-center justify-center hero">
      <h2 class="text-4xl font-bold mb-2 text-white">
        Find a room, join and fight
      </h2>
      <p class="text-xl italic text-white">
        Select a hot room, or a fighting room to challenge others.
      <p/>
      <p class="text-xl italic text-white">
        Or you can choose to practice in single mode
      </p>
  </div>
</section>

<div class="container mx-auto border-none">

<section class="shadow">
  <div class="h-full">
    <h3 class="cat">Hot trending</h3>

    <div class="flex px-2 items-center grid grid-flow-row sm_grid-cols-1 md_grid-cols-2 lg_grid-cols-3">
      {#each trend as item}
        <Card data={item}/>
      {/each}
    </div>
</div>
</section>

<section class="shadow">
  <h3 class="cat">Fighting</h3>

  <div class="grid grid-flow-row md_grid-cols-3 lg_grid-cols-4 gap-4 sm_grid-cols-1 px-2">
    {#each fighting as item}
      <Card data={item}/>
    {/each}
  </div>
</section>

<section class="shadow">
  <h3 class="cat">Practice</h3>

  <div class="grid grid-flow-row md_grid-cols-3 lg_grid-cols-4 gap-4 sm_grid-cols-1 px-2">
    {#each data as item}
      <Card data={item}/>
    {/each}
  </div>
</section>
</div>