<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  import Key from '$components/Key.svelte'
  import keysmap from '$components/keymaps'

  import codekey from '$components/codekey'

  import Palms from '$components/Palms/index.svelte'

  const dispatch = createEventDispatcher()

  let is_shift = false
  let is_capslck = false

  let palms

  // TODO - I dup lupp passing prop down
  export const fingerAt = (key) => {
    palms.fingerAt(key)
  }

  export const keydown = (code, up = false) => {
    let key = keyboard[code]
    if (key) {
      key.pressed(up)

      // enable
      if (code === 'l_16' || code === 'r_16') {
        is_shift = !up
      }

      if (up && code === 20) {
        is_capslck = !is_capslck
        // caps_led update
        key.led(is_capslck)
      }
    }
  }

  const dispatchdown = (e: Event & { detail: KeyboardEventInit }) => {
    let data = e.detail

    if (data.keyCode >= 32 && data.keyCode <= 90) {
      data.key =
        is_shift || is_capslck
          ? codekey[data.keyCode]
          : codekey[data.keyCode].toLowerCase()
    } else {
      data.key = codekey[data.keyCode]
    }

    console.log(data)
    let event = new KeyboardEvent('keydown', data)
    window.dispatchEvent(event)
  }

  const dispatchup = (e: Event & { detail: KeyboardEventInit }) => {
    let data = e.detail
    if (data.keyCode >= 32) {
      data.key =
        is_shift || is_capslck
          ? String.fromCharCode(data.keyCode)
          : String.fromCharCode(data.keyCode).toLowerCase()
    } else {
      data.key = codekey[data.keyCode]
    }
    let event = new KeyboardEvent('keyup', data)
    window.dispatchEvent(event)
  }

  let keyboard = {}
</script>

<div class="keyboard-container relative">
  <div class="keyboard">
    {#each keysmap as rows}
      {#each rows as key}
        <Key
          {...key}
          bind:this={keyboard[key.keyCode]}
          on:keydown={dispatchdown}
          on:keyup={dispatchup}
        />
      {/each}
    {/each}
  </div>
  <Palms bind:this={palms} />
</div>

<style lang="scss">
  $color-black: #000;
  $color-white: #fff;

  $color-key: mix($color-black, $color-white, 87%);
  $color-keyboard: mix($color-black, $color-white, 12%);

  $color-text: $color-white;

  $key-size: 48px;
  $key-gutter: 4px;
  $keyboard-spacing: 16px;

  .keyboard-container {
    @apply flex;
  }
  .keyboard {
    @apply rounded text-base antialiased font-light grid justify-center tracking-1px origin-top-left;
    background-color: $color-keyboard;
    color: $color-text;
    grid-template-columns: repeat(58, calc(($key-size + $key-gutter) / 4));
    grid-template-rows: repeat(10, calc(($key-size + $key-gutter) / 2));
    padding: $keyboard-spacing;
    font-family: 'Roboto', sans-serif;
  }
</style>
