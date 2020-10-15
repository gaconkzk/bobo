<script>
  import Footer from 'layouts/Footer.svelte'

  import Carousel from 'components/Carousel'

  import TyphoonItem from 'components/TyphoonItem'

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
</style>

<div class="px-6">
  <Carousel />
</div>

<div class="intro-y grid grid-cols-12 gap-6 mt-5">
  {#each fighting as item, i}
    <TyphoonItem introDelay={i}/>
  {/each}
  <!-- <section class="mb-6">
    <h3 class="cat">Fighting</h3>

    <div class="grid grid-flow-row md_grid-cols-2 gap-2 sm_grid-cols-1 px-2">
      {#each fighting as item}
        <Card data={item}/>
      {/each}
    </div>
  </section>

  <section class="mb-6">
    <h3 class="cat">Practice</h3>

    <div class="grid grid-flow-row md_grid-cols-2 gap-2 sm_grid-cols-1 px-2">
      {#each data as item}
        <Card data={item}/>
      {/each}
    </div>
  </section> -->
</div>
<Footer />