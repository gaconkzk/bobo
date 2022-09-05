<script lang="ts">
  export let items: { href: string; label: string; actived?: boolean }[] = []
</script>

<div class="hidden lg:block">
  <ul class="inline-flex list-none">
    {#each items as item}
      <li>
        <a class="px-4" href={item.href} class:actived={item.actived}
          >{item.label}</a
        >
      </li>
    {/each}
  </ul>
</div>

<style>
  .actived {
    @apply font-normal;
  }
  :not(.actived) {
    @apply font-bold cursor-pointer;
  }
  :not(.actived):hover {
    @apply text-orange-400;
  }
</style>
