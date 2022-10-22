<script>
  import Dropdown from './../../components/Dropdown.svelte'
  import ImgsProvider, {
    getCharacters,
  } from './../../components/FCGenerator/ImgsProvider.svelte'
  import AnimationRender from '$components/FCGenerator/AnimationRender.svelte'
  import Back2HomeBtn from '../common/Back2HomeBtn.svelte'

  let chars
  let currentFrame
  let currentAction = 'walk'
  let currentChar
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
        <div class="w-170px left-panel flex flex-col">
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
                class="w-40px h-40px overflow-hidden border-1 border-blue rounded"
                on:click={() => {
                  currentFrame = 0
                  currentChar = character
                  currentAction = currentAction ?? currentChar.animation[0]
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
        </div>
        <div class="right">
          <div class="">Select animation</div>
          <Dropdown
            bind:selectedValue={currentAction}
            options={['walk', 'idle']}
          />
        </div>
      </div>
    {/if}
  </ImgsProvider>
</div>
