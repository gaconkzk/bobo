<script>
  export let top = false, bottom = false, data = false, right = false, 
    left = false, space = false, command = false, arrow = false,
    up = false, down = false, backspace = false, tab = false,
    enter = false, capslck = false, homekey = false, shift = false;
</script>

<style lang="scss">
$key-radius: 4px;
$key-size: 64px;
$key-spacing-horizontal: 9px;
$key-spacing-vertical: 5px;
$key-gutter: 4px;

$color-black: #000;
$color-white: #fff;

$color-key: mix($color-black, $color-white, 87%);

.key__bottom,
.key__top{
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.key__bottom{
  flex-grow: 1;
}
.key{
  align-items: center;
  background-color: $color-key;
  border-radius: $key-radius;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  grid-column-end: span 4;
  grid-row-end: span 2;
  grid-template-columns: repeat(2, $key-size / 2);
  grid-template-rows: repeat(2, $key-size / 2);
  justify-content: center;
  padding: $key-spacing-vertical $key-spacing-horizontal;
  margin: $key-gutter / 2;

  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
  &:hover {
    background-color: green;
  }
  &.is-home {
    text-decoration: none;
    position: relative;
    &:after {
      content: '';
      width: 20%;
      position: absolute;
      left: 40%;
      bottom: 5px;
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
  &.is-arrow-down{
    border-radius: 0 0 $key-radius $key-radius;
    grid-row-start: 10;
    margin-top: $key-gutter / 4;
  }
  &.is-arrow-up{
    border-radius: $key-radius $key-radius 0 0;
    grid-row-start: 9;
    margin-bottom: $key-gutter / 4;
  }
  &.is-backspace,
  &.is-tab{
    grid-column-end: span 6;
  }
  &.is-backspace{
    align-items: flex-end;
  }
  &.is-capslock{
    grid-column-end: span 7;
  }
  &.is-command {
    grid-column-end: span 4;
  }
  &.is-shift-left{
    grid-column-end: span 9;
  }
  &.is-enter{
    border-radius: 0 $key-radius $key-radius $key-radius;
    grid-column-start: 56;
    grid-column-end: span 3;
    grid-row-end: span 4;
    position: relative;
    &::before,
    &::after{
      content: '';
      position: absolute;
    }
    &::before{
      background-color: $color-key;
      border-radius: $key-radius 0 0 $key-radius;
      height: $key-size;
      left: - $key-size / 4;
      top: 0;
      width: $key-size / 4;
    }
    &::after{
      border-top-right-radius: $key-radius;
      box-shadow: - $key-gutter $key-gutter 0 0 $color-key inset;
      cursor: default;
      height: $key-gutter * 2;
      left: - $key-gutter;
      top: $key-size - $key-gutter;
      width: $key-gutter * 2;
    }
    .key__top{
      height: $key-size - ($key-spacing-vertical * 2);
    }
  }
  &.is-left,
  &.is-right{
    font-size: 12px;
    justify-content: space-between;
    line-height: 20px;
  }
  &.is-left{
    align-items: flex-start;
  }
  &.is-right{
    align-items: flex-end;
  }
  &.is-shift-right{
    grid-column-end: span 9;
  }
  &.is-space{
    grid-column-end: span 24;
  }
  &.is-tab{
    align-items: flex-start;
  }
}
</style>

<div class="key" class:is-right={right && !arrow} class:is-left={left && !arrow} class:is-space={space} class:is-command={command}
  class:is-arrow={arrow && (left || right || up || down)}
  class:is-arrow-left={arrow && left}
  class:is-arrow-right={arrow && right}
  class:is-arrow-up={arrow && up}
  class:is-arrow-down={arrow && down}
  class:is-backspace={backspace}
  class:is-tab={tab}
  class:is-enter={enter}
  class:is-capslock={capslck}
  class:is-home={homekey}
  class:is-shift-left={shift && left}
  class:is-shift-right={shift && right}
>
  {@html data || ''}
  {#if top}
    <div class="key__top">{@html top}</div>
  {/if}
  {#if bottom}
    <div class="key__bottom">{@html bottom}</div>
  {/if}
</div>