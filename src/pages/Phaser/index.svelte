<script lang="ts">
  import { CharacterEnum } from '$components/Character'
  import Character from '$components/Character.svelte'

  import { Game, Scene } from 'svelte-phaser'
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
  <div id="testingPhaser">
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
  </div>
</div>
