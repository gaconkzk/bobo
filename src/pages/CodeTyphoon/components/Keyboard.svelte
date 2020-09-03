<script>
  import { createEventDispatcher } from 'svelte'

  import Key from 'components/Key'
  import keysmap from 'components/keymaps'

  import codekey from 'components/codekey'

  const dispatch = createEventDispatcher()

  let is_shift = false;
  let is_capslck = false;
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

  const dispatchdown = (e) => {
    let data = e.detail
    
    if (data.keyCode >= 32 && data.keyCode <= 90 ) {
      data.key = is_shift || is_capslck ? String.fromCharCode([data.keyCode]) : String.fromCharCode([data.keyCode]).toLowerCase()
    } else {
      data.key = codekey[data.keyCode]
    }
    let event = new KeyboardEvent('keydown', data)
    console.log(event)
    window.dispatchEvent(event)
  }

  const dispatchup = (e) => {
    let data = e.detail
    if (data.keyCode >= 32) {
      data.key = is_shift || is_capslck ? String.fromCharCode([data.keyCode]) : String.fromCharCode([data.keyCode]).toLowerCase()
    } else {
      data.key = codekey[data.keyCode]
    }
    let event = new KeyboardEvent('keyup', data)
    window.dispatchEvent(event)
  }

  let keyboard = {}
</script>

<style lang="scss">
$color-black: #000;
$color-white: #fff;

$color-key: mix($color-black, $color-white, 87%);
$color-keyboard: mix($color-black, $color-white, 12%);

$color-text: $color-white;

$key-size: 48px;
$key-gutter: 4px;
$keyboard-spacing: 16px;

.keyboard-container{
  display: flex;
}
.keyboard{
  background-color: $color-keyboard;
  color: $color-text;
  display: grid;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 300;
  grid-template-columns: repeat(58, ($key-size + $key-gutter) / 4);
  grid-template-rows: repeat(10, ($key-size + $key-gutter) / 2);
  justify-content: center;
  letter-spacing: 1px;
  line-height: 24px;
  padding: $keyboard-spacing;
  transform-origin: top left;
}
</style>

<div class="keyboard-container">
  <div class="keyboard">
    {#each keysmap as rows}
      {#each rows as key}
        <Key {...key} bind:this={keyboard[key.keyCode]} on:keydown={dispatchdown} on:keyup={dispatchup}/>
      {/each}
    {/each}
  </div>
</div>