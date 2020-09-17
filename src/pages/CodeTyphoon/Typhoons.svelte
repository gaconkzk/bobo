<script>
  import { Link } from 'yrv'
  let data = [1,2,3,4,5,6,7,8,9]
</script>

<div class="grid grid-flow-row md_grid-cols-4 lg_grid-cols-5 gap-4 sm_grid-cols-2 px-2">
  {#each data as item}
    <div class="rounded border-2 px-2 py-4"><a class="text-2xl" href="/ct/{item}">a hi {item}</a></div>
  {/each}
</div>