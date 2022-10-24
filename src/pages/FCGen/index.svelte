<script>
  import * as PIXI from 'pixi.js'
  import Dropdown from './../../components/Dropdown.svelte'
  import ImgsProvider, {
    getCharacters,
  } from './../../components/FCGenerator/ImgsProvider.svelte'
  import AnimationRender from '$components/FCGenerator/AnimationRender.svelte'
  import Back2HomeBtn from '../common/Back2HomeBtn.svelte'

  // Replacing with pixi
  import Application from '$components/PIXI/Application.svelte'
  import Assets from '$components/PIXI/Assets.svelte'
  import Text from '$components/PIXI/Text.svelte'
  import { getFramesLength } from '$components/FCGenerator'

  import PixiCharacter from './components/PixiCharacter.svelte'

  import { sprites } from './sprites'
  import { CharacterAction } from '$components/FCGenerator/types'

  let chars
  let currentFrame
  let currentAction = 'walk'
  let currentChar

  // pixelalbe - no blurred
  PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST
</script>

<div class="flex flex-col w-full h-full justify-center">
  <Back2HomeBtn />
  <ImgsProvider
    on:loaded={() => {
      chars = getCharacters()

      currentChar = chars[0]
      currentAction = currentAction ?? currentChar.animation[0]
    }}
  >
    {#if chars.length > 0}
      <div class="border-1 rounded border-red-200 flex flex-row p-2">
        <div class="w-370px left-panel flex flex-col gap-y-2">
          <div
            class="w-120px h-120px border-1 border-blue-200 m-4 relative bg-gray-200"
          >
            <AnimationRender
              char={currentChar?.name}
              action={currentAction}
              class="w-128px h-128px"
            />
          </div>
          <div class="flex flex-row">
            Select head
            {#each chars as character}
              <div
                role="presentation"
                class="w-40px h-40px overflow-hidden border-1 border-blue rounded m-2"
                on:click={() => {
                  currentFrame = 0
                  currentChar = character
                  currentAction = currentChar.animation[0]

                  console.log('change name', currentChar.name)
                }}
              >
                <img
                  src={character.head}
                  alt="broken"
                  width="120"
                  height="120"
                  class="-ml-40px -mt-23px"
                />
              </div>
            {/each}
          </div>
          <div class="">Select hands</div>
          <div class="">Select body</div>
          <div class="">
            <div class="mb-1">Select animation</div>
            <Dropdown
              bind:selectedValue={currentAction}
              options={currentChar.animation}
            />
          </div>
        </div>
        <div class="bg-chessboard-transparent">
          <Application width={400} height={400} antialias backgroundAlpha={0}>
            <Assets resources={sprites}>
              <slot slot="loading">
                <Text text={`Loading... `} x={200} y={200} anchor={0.5} />
              </slot>
              {#each Array(getFramesLength(CharacterAction.WALK)) as _, i}
                <PixiCharacter
                  name={currentChar.name}
                  action={CharacterAction.WALK}
                  frame={i}
                  x={i * 64}
                  y="0"
                  width="64"
                  height="64"
                />
              {/each}
              {#each Array(getFramesLength(CharacterAction.IDLE)) as _, i}
                <PixiCharacter
                  name={currentChar?.name ?? 'kunio'}
                  action={CharacterAction.IDLE}
                  frame={i}
                  x={i * 64}
                  y="64"
                  width="64"
                  height="64"
                />
              {/each}
            </Assets>
          </Application>
        </div>
      </div>
    {/if}
  </ImgsProvider>
</div>
