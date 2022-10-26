<script lang="ts">
  import { animations } from '$components/FCGenerator/sprites/common/animation'
  import * as PIXI from 'pixi.js'
  import Dropdown from '$components/Dropdown.svelte'
  import Back2HomeBtn from '../common/Back2HomeBtn.svelte'
  import Application from '$components/PIXI/Application.svelte'
  import Assets, { getResource } from '$components/PIXI/Assets.svelte'

  import Character from '$components/FCGenerator/CharacterRender.svelte'

  import { data, sprites } from '$components/FCGenerator/sprites'
  import AnimatedCharacter from '$components/FCGenerator/AnimatedCharacterRender.svelte'
  import Sprite from '$components/PIXI/Sprite.svelte'
  import Container from '$components/PIXI/Container.svelte'

  let chars = data
  let currentFrame = 0
  let currentAction = 'walk'
  let currentChar = data[0]
  let currentHeadIdx = 0
  let currentBodyIdx = 0
  let currentHandIdx = 0

  export let router = undefined
  console.log('this for remove stupid svelte warning router', router)

  // pixelalbe - no blurred
  PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST

  let spriteColumn = animations.reduce((acc, item) => {
    if (item.length > acc) {
      return item.length
    }
    return acc
  }, 0)

  let spriteRow = animations.length
  let spriteWidth = 64
  let spriteHeight = 64

  let spriteSheetApp
  let characterSprite
  const exportSprite = async () => {
    const extract: PIXI.Extract = spriteSheetApp?.renderer?.extract
    if (extract) {
      const imgHtml = await extract.image(characterSprite)
      const link = document.createElement('a')
      link.download = `${currentChar.name}_sprite.png`
      link.href = imgHtml.src
      link.click()
    }
  }
</script>

<div class="flex flex-col w-full h-full justify-center">
  <Back2HomeBtn />
  <Assets resources={sprites}>
    <slot slot="loading">
      <div>Loading ...</div>
    </slot>
    <div class="border-1 rounded border-red-200 flex flex-row p-2">
      <div class="w-370px left-panel flex flex-col gap-y-2">
        <div
          class="w-128px h-128px border-1 border-blue-200 m-4 relative bg-chessboard-transparent"
        >
          <Application width={128} height={128} backgroundAlpha={0.4}>
            <AnimatedCharacter
              width={128}
              height={128}
              partIdx={[currentHeadIdx, currentBodyIdx, currentHandIdx]}
              character={currentChar}
              action={currentChar.animation.find(
                (a) => a.name === currentAction
              )}
              x={0}
              y={0}
            />
            <!-- </Assets> -->
          </Application>
        </div>
        <div class="flex flex-row">
          Select head
          {#each chars as character}
            <div
              role="presentation"
              class="w-40px h-40px overflow-hidden border-1 border-blue rounded m-2"
              class:selected={character.name === currentChar.name}
              on:click={() => {
                currentFrame = 0
                currentChar = character
                currentAction = currentChar.animation.some(
                  (a) => a.name === currentAction
                )
                  ? currentAction
                  : currentChar.animation[0].name
                currentHeadIdx = 0
                currentBodyIdx = 0
                currentHandIdx = 0
              }}
            >
              <Application width={40} height={40} backgroundColor={0xffffff}>
                <Sprite
                  texture={getResource(character.name + '_head')}
                  x={-45}
                  y={-24}
                  width={128}
                  height={128}
                />
              </Application>
            </div>
          {/each}
        </div>
        <div class="flex flex-row">
          Select hands
          {#each currentChar.hand as hand, i}
            <div
              role="presentation"
              class="w-40px h-40px overflow-hidden border-1 border-blue rounded m-2"
              class:selected={i === currentHandIdx}
              on:click={() => {
                currentHandIdx = i
              }}
            >
              <Application width={40} height={40} backgroundColor={0xffffff}>
                <Sprite
                  texture={getResource(`${hand}_hand`)}
                  x={-45}
                  y={-44}
                  width={128}
                  height={128}
                />
              </Application>
            </div>
          {/each}
        </div>
        <div class="flex flex-row">
          Select body
          {#each currentChar.body as body, i}
            <div
              role="presentation"
              class="w-40px h-60px overflow-hidden border-1 border-blue rounded m-2"
              class:selected={i === currentBodyIdx}
              on:click={() => {
                currentBodyIdx = i
              }}
            >
              <Application width={40} height={60} backgroundColor={0xffffff}>
                <Sprite
                  texture={getResource(`${body}_body`)}
                  x={-45}
                  y={-44}
                  width={128}
                  height={128}
                />
              </Application>
            </div>
          {/each}
        </div>
        <div class="">
          <div class="mb-1">Select animation</div>
          <Dropdown
            bind:selectedValue={currentAction}
            options={currentChar.animation.map((a) => a.name)}
          />
        </div>
      </div>
      <div class="h-full overflow-auto">
        <button on:click={exportSprite}>export</button>
        <div class="bg-chessboard-transparent">
          <Application
            bind:instance={spriteSheetApp}
            width={spriteColumn * spriteWidth}
            height={spriteRow * spriteHeight}
            backgroundAlpha={0}
          >
            <Container bind:instance={characterSprite}>
              {#each animations as animation, row}
                {#each Array(animation.length) as _, col}
                  <Character
                    partIdx={[currentHeadIdx, currentBodyIdx, currentHandIdx]}
                    character={currentChar}
                    action={animation.name}
                    frame={col}
                    x={col * 64}
                    y={row * 64}
                    width={64}
                    height={64}
                  />
                {/each}
              {/each}
            </Container>
          </Application>
        </div>
      </div>
    </div>
  </Assets>
</div>

<style>
  .selected {
    @apply border-2 border-red-400;
  }
</style>
