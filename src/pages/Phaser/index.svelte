<script lang="ts">
  import { onMount } from 'svelte'
  import { CharacterEnum } from '$components/Character'
  import Character from '$components/Character.svelte'

  import { Game, Scene } from 'svelte-phaser'
  import Back2HomeBtn from '../common/Back2HomeBtn.svelte'
  import Background from './components/Background.svelte'
  import Brain from './components/Brain.svelte'
  import Cat from './components/Cat.svelte'

  let phaserContainer

  let booting = false
  onMount(() => {})
</script>

<div>
  <div>
    <Character model={CharacterEnum.CAT} direction="right" />
    <Back2HomeBtn />
  </div>
  <div id="testingPhaser" bind:this={phaserContainer}>
    {#if booting}
      <span>Waiting</span>
    {:else}
      <Game parent="testingPhaser" backgroundColor={0xffffff}>
        <Scene
          key="testScene"
          preload={() => ({ key: 'splash', url: 'imgs/phaser4.png' })}
        >
          <!-- <Background key="background" /> -->
          <Brain />
          <Cat />
        </Scene>
      </Game>
    {/if}
  </div>
</div>
