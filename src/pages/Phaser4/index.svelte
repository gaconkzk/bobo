<script lang="ts">
  import { CharacterEnum } from '$components/Character'
  import Character from '$components/Character.svelte'

  import Game from '$components/Phaser/Game.svelte'
  import Scene from '$components/Phaser/Scene.svelte'
  import Back2HomeBtn from '../common/Back2HomeBtn.svelte'
  import Background from './components/Background.svelte'
  import Brain from './components/Brain.svelte'
  import Cat from './components/Cat.svelte'
</script>

<div>
  <div>
    <Character model={CharacterEnum.CAT} direction="right" />
    <Back2HomeBtn />
  </div>
  <Game
    containerId="testingPhaser"
    globalVars="Phaser4"
    backgroundColor={0xffffff}
  >
    <Scene
      key="testScene"
      preload={{ key: 'splash', url: 'imgs/phaser4.png' }}
      resources={[
        { key: 'background', url: 'imgs/farm-background.png' },
        { key: 'brain', url: 'imgs/brain.png' },
        {
          key: 'cat01',
          url: 'imgs/sprites/cat-001.png',
          atlas: 'imgs/sprites/cat-001.json',
        },
      ]}
    >
      <!-- <Background key="background" /> -->
      <Brain />
      <Cat />
    </Scene>
  </Game>
</div>
