<script lang="ts">
  import { CharacterEnum } from '$components/Character'
  import Character from '$components/Character.svelte'

  import Game from '$components/Phaser/Game.svelte'
  import Scene from '$components/Phaser/Scene.svelte'
  import { LeftKey, RightKey } from '@phaserjs/phaser/input/keyboard/keys'
  import Background from './components/Background.svelte'
  import Player from './components/Player.svelte'
</script>

<!-- <Character model={CharacterEnum.CAT} direction="right" /> -->

<Game
  containerId="testingPhaser"
  globalVars="Phaser4"
  backgroundColor={0x0a0a0a}
>
  <Scene
    key="testScene"
    preload={{ key: 'splash', url: 'imgs/phaser4.png' }}
    resources={[
      { key: 'background', url: 'imgs/farm-background.png' },
      { key: 'brain', url: 'imgs/brain.png' },
    ]}
  >
    <Background />
    <Player />
  </Scene>
</Game>
