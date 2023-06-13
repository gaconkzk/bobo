<script lang="ts">
  import type { CharacterType } from './Character'
  export let model: CharacterType
  export let direction: 'left' | 'right' = 'right'
  let flip = false
  if (model.direction !== direction) {
    flip = true
  }
</script>

<img
  src={model.url}
  alt="no-img"
  class={flip ? 'transform -scale-x-100' : ''}
/>

<style lang="scss">
  img {
    @apply h-20;
  }
</style>
