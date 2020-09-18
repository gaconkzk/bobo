<script>
  import { Link, navigateTo } from 'yrv'

  import Card from 'components/Card'

  // should be top 3
  let trend = [1,2,3]
  // should be top 10
  let fighting = [1, 2, 3, 4, 5]
  // should be top 10
  let data = [1,2,3,4,5,6,7,8,9]
</script>

<style lang="scss">
  .cat {
    @apply border-b border-gray-300 border-dotted text-blue-300 font-bold px-2 italic bg-gray-200 bg-opacity-25;
  }
</style>

<section>
  <h3 class="cat">Hot trending</h3>

  <div class="flex px-2 items-center">
    {#each trend as item}
      <Card data={item}/>
    {/each}
  </div>
</section>

<section>
  <h3 class="cat">Fighting</h3>

  <div class="grid grid-flow-row md_grid-cols-4 lg_grid-cols-4 gap-4 sm_grid-cols-2 px-2">
    {#each fighting as item}
      <Card data={item}/>
    {/each}
  </div>
</section>

<section>
  <h3 class="cat">Practice</h3>

  <div class="grid grid-flow-row md_grid-cols-4 lg_grid-cols-4 gap-4 sm_grid-cols-2 px-2">
    {#each data as item}
      <Card data={item}/>
    {/each}
  </div>
</section>
