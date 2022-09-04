<script lang="ts">
  import { CharacterEnum } from '$components/Character'
  import Character from '$components/Character.svelte'
  import Sprite from '$components/Phaser/Sprite.svelte'

  import Game from '$components/Phaser/Game.svelte'
  import Scene from '$components/Phaser/Scene.svelte'
</script>

<Character model={CharacterEnum.CAT} direction="right" />

<Game
  containerId="testingPhaser"
  globalVars="Phaser4"
  backgroundColor={0x0a0a0a}
>
  <Scene
    key="testScene"
    preload={{ key: 'splash', url: 'imgs/phaser4.png' }}
    resources={[{ key: 'background', url: 'imgs/farm-background.png' }]}
  >
    <Sprite width={400} height={300} key="background" />
  </Scene>
</Game>
