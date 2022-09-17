<script>
  import ImgsProvider, {
    getCharacters,
  } from './../../components/FCGenerator/ImgsProvider.svelte'
  import AnimationRender from '$components/FCGenerator/AnimationRender.svelte'
  import Back2HomeBtn from '../common/Back2HomeBtn.svelte'

  import { onDestroy, onMount } from 'svelte'

  import { makeWalk, walk } from '$components/FCGenerator/walk'
  import { makeIdle } from '$components/FCGenerator/idle'

  let currentFrame
  let currentAction = 'walk'
  let currentChar
  let currentCharAnimation

  // const actions = {
  //   walk: () =>
  //     makeWalk(
  //       currentChar.name,
  //       currentChar.src,
  //       currentChar.hand[0],
  //       currentChar.body[0]
  //     ),
  //   idle: () =>
  //     makeIdle(
  //       currentChar.name,
  //       currentChar.src,
  //       currentChar.hand[0],
  //       currentChar.body[0]
  //     ),
  //   // run,
  //   // pass,
  //   // stop,
  // }

  let chars
  onMount(() => {
    // interv = setInterval(() => {
    //   currentFrame =
    //     currentFrame < actions[currentAction]()[1] - 1 ? currentFrame + 1 : 0
    // }, 1000 / 4)
  })
  onDestroy(() => {
    // clearInterval(interv)
  })
</script>

<div class="flex flex-col w-full h-full justify-center">
  <Back2HomeBtn />
  <ImgsProvider
    on:loaded={() => {
      chars = getCharacters()
    }}
  >
    {#if chars?.length > 0}
      <div class="border-1 rounded border-red-200 flex flex-row p-2">
        <div class="w-170px left-panel flex flex-col">
          <div
            class="w-120px h-120px border-1 border-blue-200 m-4 relative bg-gray-200"
          >
            <AnimationRender
              char={currentChar || chars[0].name}
              action={currentAction}
              class="w-128px h-128px"
            />
            <!--
          <img
          alt=""
          src={actions[currentAction]()[0][0][currentFrame]}
          class="w-120px h-120px absolute top-0 left-0"
        />
        <img
          alt=""
          src={actions[currentAction]()[0][1][currentFrame]}
          class="w-120px h-120px absolute top-0 left-0"
        />
        <img
          alt=""
          src={actions[currentAction]()[0][2][currentFrame]}
          class="w-120px h-120px absolute top-0 left-0"
        /> -->
          </div>
          <div class="flex flex-row">
            Select head
            {#each chars as character}
              <div
                class="w-40px h-40px overflow-hidden border-1 border-blue rounded"
                on:click={() => {
                  currentFrame = 0
                  currentChar = character
                  currentAction = currentAction ?? currentChar.animation[0]
                  // currentCharAnimation = actions[currentAction]()
                }}
              >
                <img
                  src={character.src}
                  alt="broken"
                  width="120"
                  height="120"
                  class="-ml-40px -mt-23px"
                />
              </div>
            {/each}
          </div>
          <div class="">
            Select hands
            <!-- {#each currentChar.hand as hand}
          <div
            class="w-40px h-40px overflow-hidden border-1 border-blue rounded"
          >
            <img
              src={hand}
              alt="broken"
              width="120"
              height="120"
              class="-ml-40px -mt-40px"
            />
          </div>
        {/each} -->
          </div>
          <div class="">
            Select body
            <!-- {#each currentChar.body as body}
          <div
            class="w-40px h-40px overflow-hidden border-1 border-blue rounded"
          >
            <img
              src={body}
              alt="broken"
              width="120"
              height="120"
              class="-ml-40px -mt-52px"
            />
          </div>
        {/each} -->
          </div>
        </div>
        <div class="right">
          <div class="">Select animation</div>
        </div>
      </div>
    {/if}
  </ImgsProvider>
</div>
