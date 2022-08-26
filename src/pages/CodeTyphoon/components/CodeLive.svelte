<script lang="ts">
  import TypingBoard from './TypingBoard'
  import { createEventDispatcher } from 'svelte'
  import keymaps from '$components/keymaps'
  import Keyboard from './Keyboard.svelte'
  let keyboard

  const dispatch = createEventDispatcher()

  const flatkeys = keymaps.flat()

  // TODO current should be external prop and load by a mechanism (user allow to chose any thing they want to challenge or practice)
  // future welcome meee yo yo yo
  let current = `function getOffset( el ) {
  var _x = 0;
  var _y = 0;
  while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
    _x += el.offsetLeft - el.scrollLeft;
    _y += el.offsetTop - el.scrollTop;
    el = el.offsetParent;
  }
  return { top: _y, left: _x };
}
var x = getOffset( document.getElementById('yourElId') ).left;`

  // this keep all typed entries - for calculate wpm
  let totalTyped = 0
  let isStarted = false

  let err = 0
  let acc = 0.0
  let time = 60

  let board = new TypingBoard(current)
  let total_lines = current.split('\n').length

  $: {
    if (codelive) {
      let bottom = codelive.getBoundingClientRect().bottom
      let scrollTo = 24 * board.line()
      scrollTo = scrollTo > bottom ? bottom : scrollTo
      codelive.scrollTop = scrollTo
    }
  }

  let codelive

  const keyCode = (char) => {
    // shift top row
    let specShift = '~!@#$%^&*()_+{}|:"<>?"'
    let charShift = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let shiftArr = specShift + charShift
    // should return two, 1 for left, 1 for right, 0 for neutral

    let needShift = false

    if (shiftArr.includes(char)) {
      needShift = true
    }

    let key: any = flatkeys.find(
      (k) =>
        k.top === char || k.bottom === char || k.data === char.toUpperCase()
    )
    if (!key) {
      switch (char) {
        case '\n':
          key = flatkeys.find((k) => !!k.enter)
          break
        case ' ':
          key = flatkeys.find((k) => !!k.space)
          break
        default:
          key = { keyCode: 0 }
      }
    }

    return { code: key.keyCode, shift: needShift }
  }

  let next = keyCode(current[0])
  keyboard && keyboard.fingerAt(next)

  const PressedState = {
    NORMALKEY: 1,
    BACKSPACE: 2,
    TABKEY: 9,
    ENTERKEY: 13,
  }

  const checkKey = (e) => {
    let possible_char_regex =
      /^[`~!@#$%^&*()-_=+[{\]}\\|;:'",<.>/?a-z0-9A-Z\s]$/
    if (possible_char_regex.test(e.key)) {
      return PressedState.NORMALKEY
    } else {
      if (e.key === 'Backspace') {
        return PressedState.BACKSPACE
      }
      if (e.key === 'Enter') {
        return PressedState.ENTERKEY
      }
      if (e.key === 'Tab') {
        return PressedState.TABKEY
      }
    }

    return 0
  }

  const mapLeftRight = (e) => {
    let featureLeft = ['ShiftLeft', 'ControlLeft', 'MetaLeft', 'AltLeft']
    let featureRight = ['ShiftRight', 'ControlRight', 'MetaRight', 'AltRight']
    let mapkc = e.keyCode

    if (featureLeft.indexOf(e.code) >= 0) {
      mapkc = 'l_' + mapkc
    } else if (featureRight.indexOf(e.code) >= 0) {
      mapkc = 'r_' + mapkc
    }

    return mapkc
  }

  const handleKeyup = (e) => {
    if (isStarted) {
      let keyCode = mapLeftRight(e)
      keyboard.keydown(keyCode, true)
    }
  }

  const handleKeydown = (e) => {
    if (isStarted) {
      let code = mapLeftRight(e)
      keyboard.keydown(code)

      let shouldRender = checkKey(e)
      if (shouldRender) {
        switch (shouldRender) {
          case PressedState.NORMALKEY:
            totalTyped++
            board.type(e.key)
            break
          case PressedState.BACKSPACE:
            board.backspace()
            break
          case PressedState.ENTERKEY:
            totalTyped = totalTyped++
            board.type('\n')
            break
          case PressedState.TABKEY:
            totalTyped = totalTyped++
            board.tab()

            break
          default:
        }

        let current_char = board.char()
        if (current_char) {
          next = keyCode(current_char)
          keyboard.fingerAt(next)
        } else {
          keyboard.fingerAt({ code: 0 })
        }
        render()

        dispatch('message', {
          error: board.errors(),
          accuracy: board.accuracy(),
          typed: totalTyped,
        })
      }

      // TODO should stop this when ???
      e.preventDefault()
    }
  }

  const handleStart = () => {
    isStarted = !isStarted

    if (isStarted) {
      err = 0
      acc = 0.0
      totalTyped = 0

      board.reset()
      board.blinking = true

      next = keyCode(board.char())
      keyboard.fingerAt(next)
      codelive.innerHTML = board.html()

      dispatch('start', {
        error: board.errors(),
        accuracy: board.accuracy(),
        typed: totalTyped,
        time,
      })
    } else {
      board.blinking = false
      keyboard.fingerAt({ code: 0 })
      codelive.innerHTML = board.html()

      dispatch('stop')
    }
  }

  const render = () => {
    let html = board.html()
    codelive.innerHTML = html
  }
</script>

<svelte:window on:keydown={handleKeydown} on:keyup={handleKeyup} />

<div class="flex flex-col overflow-hidden h-full items-center">
  <!-- <div id="codelive" class="h-32 min-h-0  overflow-auto font-mono rounded border-2 border-black-400 px-2 py-2 shadow my-10" bind:this={codelive}>{@html current.replace(/\n/g, '&larrhk;<br/>').replace(/\s/g, '&nbsp;')}</div> -->
  <div
    id="codelive"
    class="h-32 min-h-0  overflow-auto font-mono rounded border-2 border-black-400 px-2 py-2 shadow my-10"
    bind:this={codelive}
  >
    {@html board.html()}
  </div>

  <button
    class="transition duration-500 ease-in-out bg-green-500 hover_bg-red-500 transform hover_-translate-y-1 hover_scale-110 rounded-lg w-24 h-12 text-white text-2xl antialiased font-bold"
    on:click={handleStart}>{isStarted ? 'Stop' : 'Start'}</button
  >

  <!-- <div>{typed}</div> -->
  <!-- <div>{next}</div> -->
  <br />

  <Keyboard bind:this={keyboard} />
</div>

<style lang="scss">
  #codelive {
    :global(span) {
      @apply text-green-500;
    }
    :global(mark) {
      @apply text-red-500 bg-red-200 bg-opacity-50;
    }
    :global(em) {
      @apply text-black bg-green-200 bg-opacity-75 not-italic;
      animation: blink-animation 1.5s steps(5, start) infinite;
      -webkit-animation: blink-animation 1.5s steps(5, start) infinite;
    }

    @keyframes blink-animation {
      to {
        visibility: hidden;
      }
    }
    @-webkit-keyframes blink-animation {
      to {
        visibility: hidden;
      }
    }
  }
</style>
