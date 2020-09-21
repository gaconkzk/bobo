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
    @apply border-b border-gray-300 border-dotted text-blue-300 font-bold px-2 italic bg-gray-200 bg-opacity-25;
  }
</style>

<section>
  <h3 class="cat">Hot trending</h3>

  <div class="flex px-2 items-center grid grid-flow-row sm_grid-cols-1 md_grid-cols-2 lg_grid-cols-3">
    {#each trend as item}
      <Card data={item}/>
    {/each}
  </div>
</section>

<section>
  <h3 class="cat">Fighting</h3>

  <div class="grid grid-flow-row md_grid-cols-3 lg_grid-cols-4 gap-4 sm_grid-cols-1 px-2">
    {#each fighting as item}
      <Card data={item}/>
    {/each}
  </div>
</section>

<section>
  <h3 class="cat">Practice</h3>

  <div class="grid grid-flow-row md_grid-cols-3 lg_grid-cols-4 gap-4 sm_grid-cols-1 px-2">
    {#each data as item}
      <Card data={item}/>
    {/each}
  </div>
</section>
