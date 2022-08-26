<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  export let top = '',
    bottom = '',
    data = '',
    right = false,
    left = false,
    space = false,
    command = false,
    arrow = false,
    up = false,
    down = false,
    backspace = false,
    tab = false,
    enter = false,
    capslck = false,
    capson = false,
    homekey = false,
    shift = false

  export let keyCode: number | string = undefined

  let actived = false

  export const pressed = (up = false) => {
    if (keyCode) {
      // useless, but I need get rid of vscode warning
      actived = !up
    }
  }

  export const led = (on = false) => {
    if (capslck && on) {
      capson = true
    } else {
      capson = false
    }
  }

  const updateEvent = () => {
    if (typeof keyCode === 'string') {
      let [lr, kc] = keyCode.split('_')

      event.keyCode = parseInt(kc)
      event.location = lr === 'l' ? 1 : lr === 'r' ? 2 : 0
    } else {
      event.keyCode = keyCode
    }
  }

  const event: TypingEvent = {
    ctrlKey: bottom === 'ctrl',
    altKey: bottom === 'alt',
    shiftKey: bottom === 'shift',
    metaKey: bottom === 'W',
  }

  updateEvent()

  function mousedown() {
    dispatch('keydown', event)
  }

  function mouseup() {
    // let e = new KeyboardEvent('keyup', event)

    dispatch('keyup', event)
  }
</script>

<div
  class="key"
  class:is-right={right && !arrow}
  class:is-left={left && !arrow}
  class:is-space={space}
  class:is-command={command}
  class:is-arrow={arrow && (left || right || up || down)}
  class:is-arrow-left={arrow && left}
  class:is-arrow-right={arrow && right}
  class:is-arrow-up={arrow && up}
  class:is-arrow-down={arrow && down}
  class:is-backspace={backspace}
  class:is-tab={tab}
  class:is-enter={enter}
  class:is-capslock={capslck}
  class:is-capson={capslck && capson}
  class:is-home={homekey}
  class:is-shift-left={shift && left}
  class:is-shift-right={shift && right}
  class:is-down={actived}
  on:mousedown={mousedown}
  on:mouseup={mouseup}
>
  {@html data || ''}
  {#if top}
    <div class="key__top">{@html top}</div>
  {/if}
  {#if bottom}
    <div class="key__bottom">{@html bottom}</div>
  {/if}
</div>

<style lang="scss">
  $key-radius: 4px;
  $key-size: 48px;
  $key-spacing-horizontal: 9px;
  $key-spacing-vertical: 5px;
  $key-gutter: 4px;

  $color-black: #000;
  $color-white: #fff;

  $color-key: mix($color-black, $color-white, 87%);

  .key__bottom,
  .key__top {
    @apply flex flex-col justify-end;
  }
  .key__bottom {
    @apply flex-grow-1;
  }
  .key {
    @apply items-center cursor-pointer flex flex-col justify-center select-none;
    background-color: $color-key;
    border-radius: $key-radius;
    grid-column-end: span 4;
    grid-row-end: span 2;
    grid-template-columns: repeat(2, calc($key-size / 2));
    grid-template-rows: repeat(2, calc($key-size / 2));
    padding: $key-spacing-vertical $key-spacing-horizontal;
    margin: calc($key-gutter / 2);

    &.is-home {
      @apply decoration-none relative;
      &:after {
        @apply content-empty w-1/5 absolute left-2/5 bottom-5px;
        border-width: 0 0 3px;
        border-style: solid;
        border-color: green;
      }
    }
    &.is-arrow {
      &.is-arrow-left {
        grid-column-start: 50;
      }
      &.is-arrow-right {
        grid-column-start: 56;
      }
      grid-column-end: span 3;
      grid-row-end: span 2;
      &.is-arrow-down,
      &.is-arrow-up {
        grid-column-start: 53;
        grid-row-end: span 1;
      }
    }
    &.is-arrow-down {
      border-radius: 0 0 $key-radius $key-radius;
      grid-row-start: 10;
      margin-top: calc($key-gutter / 4);
    }
    &.is-arrow-up {
      border-radius: $key-radius $key-radius 0 0;
      grid-row-start: 9;
      margin-bottom: calc($key-gutter / 4);
    }
    &.is-backspace,
    &.is-tab {
      grid-column-end: span 6;
    }
    &.is-backspace {
      @apply items-end;
    }
    &.is-capslock {
      grid-column-end: span 7;
      &.is-capson {
        @apply text-blue-400;
      }
    }
    &.is-command {
      grid-column-end: span 4;
    }
    &.is-shift-left {
      grid-column-end: span 10;
    }
    &.is-enter {
      grid-column-end: span 7;
      // well no special enter - :D
      // border-radius: 0 $key-radius $key-radius $key-radius;
      // grid-column-start: 56;
      // grid-column-end: span 3;
      // grid-row-end: span 4;
      // position: relative;
      // &::before,
      // &::after{
      //   content: '';
      //   position: absolute;
      // }
      // &::before {
      //   background-color: $color-key;
      //   border-radius: $key-radius 0 0 $key-radius;
      //   height: $key-size;
      //   left: - $key-size / 4;
      //   top: 0;
      //   width: $key-size / 4;
      // }
      // &.is-down::before {
      //   @apply bg-blue-400
      // }
      // &.is-down:hover::before,
      // &:hover::before {
      //   background-color: green;
      // }
      // &::after{
      //   border-top-right-radius: $key-radius;
      //   box-shadow: - $key-gutter $key-gutter 0 0 $color-key inset;
      //   cursor: default;
      //   height: $key-gutter * 2;
      //   left: - $key-gutter;
      //   top: $key-size - $key-gutter;
      //   width: $key-gutter * 2;
      // }
      // &.is-down::after {
      //   box-shadow: - $key-gutter $key-gutter 0 0 #63b3ed inset;
      // }
      // &.is-down:hover::after,
      // &:hover::after{
      //   box-shadow: - $key-gutter $key-gutter 0 0 green inset;
      // }
      // .key__top{
      //   height: $key-size - ($key-spacing-vertical * 2);
      // }
    }
    &.is-left,
    &.is-right {
      font-size: 12px;
      justify-content: space-between;
      line-height: 20px;
    }
    &.is-left {
      align-items: flex-start;
    }
    &.is-right {
      align-items: flex-end;
    }
    &.is-shift-right {
      grid-column-end: span 8;
    }
    &.is-space {
      grid-column-end: span 24;
    }
    &.is-tab {
      @apply items-start;
    }
    &.is-down {
      @apply bg-blue-400;
    }
    &:hover {
      @apply bg-green-600;
    }
  }
</style>
