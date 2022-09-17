<script lang="ts">
  import { onMount } from 'svelte'

  export let frames: any[][] = []
  let cls = ''
  export { cls as class }

  let testsrc

  onMount(async () => {
    if (frames.length > 0) {
      const xframes = await Promise.all(
        frames[0].map(async (f) => await Promise.all(f))
      )

      testsrc = xframes[0][0]

      console.log('frames', xframes)
    }
  })
</script>

<div>
  <img src={testsrc} alt="x" class={cls} />
</div>
