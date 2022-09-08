<script>
  import Back2HomeBtn from '../common/Back2HomeBtn.svelte'

  import { onDestroy, onMount } from 'svelte'
  import { makeWalk, walk } from './walk/index'
  import { heads } from './head'
  import { bodies } from './body'
  import { hands } from './hand'

  const actions = {
    walk: () => makeWalk(currentHead, currentHand),
    // run,
    // pass,
    // stop,
  }

  let currentFrame = 0
  let currentAction = 'walk'
  let currentHead = heads.yoritsune
  let currentBody = bodies.default
  let currentHand = hands.default

  let interv
  onMount(() => {
    interv = setInterval(() => {
      currentFrame = currentFrame === 3 ? 0 : currentFrame + 1
    }, 1000 / 4)
  })
  onDestroy(() => {
    clearInterval(interv)
  })
</script>

<div class="flex flex-col w-full h-full justify-center">
  <Back2HomeBtn />
  <div class="border-1 rounded border-red-200 flex flex-row p-2">
    <div class="w-170px left-panel flex flex-col">
      <div
        class="w-120px h-120px border-1 border-blue-200 m-4 relative bg-gray-200"
      >
        <img
          alt=""
          src={actions[currentAction]()[0][currentFrame]}
          class="w-120px h-120px absolute top-0 left-0"
        />
        <img
          alt=""
          src={actions[currentAction]()[1][currentFrame]}
          class="w-120px h-120px absolute top-0 left-0"
        />
        <img
          alt=""
          src={actions[currentAction]()[2][currentFrame]}
          class="w-120px h-120px absolute top-0 left-0"
        />
      </div>
      <div class="flex flex-row">
        Select head
        <div
          class="w-40px h-40px overflow-hidden border-1 border-blue rounded"
          on:click={() => (currentHead = heads.kunio)}
        >
          <img
            src={heads.kunio}
            alt="broken"
            width="120"
            height="120"
            class="-ml-40px -mt-23px"
          />
        </div>
        <div
          class="w-40px h-40px overflow-hidden border-1 border-blue rounded"
          on:click={() => (currentHead = heads.yoritsune)}
        >
          <img
            src={heads.yoritsune}
            alt="broken"
            width="120"
            height="120"
            class="-ml-40px -mt-23px"
          />
        </div>
        <div
          class="w-40px h-40px overflow-hidden border-1 border-blue rounded"
          on:click={() => (currentHead = heads.horibata)}
        >
          <img
            src={heads.horibata}
            alt="broken"
            width="120"
            height="120"
            class="-ml-40px -mt-23px"
          />
        </div>
      </div>
      <div class="">
        Select hands
        <div class="w-40px h-40px overflow-hidden border-1 border-blue rounded">
          <img
            src={currentHand}
            alt="broken"
            width="120"
            height="120"
            class="-ml-40px -mt-40px"
          />
        </div>
      </div>
      <div class="">
        Select body
        <div class="w-40px h-40px overflow-hidden border-1 border-blue rounded">
          <img
            src={currentBody}
            alt="broken"
            width="120"
            height="120"
            class="-ml-40px -mt-52px"
          />
        </div>
      </div>
    </div>
    <div class="right">
      <div class="">Select animation</div>
    </div>
  </div>
</div>
