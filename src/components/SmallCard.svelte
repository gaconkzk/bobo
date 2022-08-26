<script>
  export let title
  export let data
  export let dataStyle = 'normal'
</script>

<div class="small-card self-auto">
  <span class="title">{title}</span>
  <span class={dataStyle}>{data}</span>
</div>

<style lang="scss">
  .small-card {
    @apply flex flex-col items-center py-2 px-4 rounded shadow mx-1 w-25 h-15;
    .title {
      @apply font-bold text-blue-400 uppercase;
    }
    .error {
      @apply text-red-400 text-3xl;
    }
    .normal {
      @apply text-3xl;
    }
  }
</style>
