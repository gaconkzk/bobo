<script lang="ts">
  import { onDestroy, onMount, setContext } from 'svelte'
  import type { Readable } from 'svelte/store'
  import { Game } from '@phaserjs/phaser'
  import {
    WebGL,
    Parent,
    GlobalVar,
    Size,
    BackgroundColor,
  } from '@phaserjs/phaser/config'

  let game: Game

  export let containerId: string
  export let globalVars: string
  export let width: number = 800
  export let height: number = 600
  export let backgroundColor: number = 0x000000

  let parent: HTMLDivElement

  setContext('game', {
    getGame: () => game,
  })

  onMount(() => {
    if (parent) {
      game = new Game(
        WebGL(),
        Parent(containerId),
        GlobalVar(globalVars),
        Size(width, height),
        BackgroundColor(backgroundColor)
      )
    }
  })

  onDestroy(() => {
    game?.destroy()
  })
</script>

<div id={containerId} bind:this={parent}>
  {#if game}
    <slot />
  {:else}
    <span>initializing ...</span>
  {/if}
</div>
