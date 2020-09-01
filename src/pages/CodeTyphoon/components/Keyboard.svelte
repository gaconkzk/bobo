<style lang="scss">
$color-black: #000;
$color-white: #fff;

$color-key: mix($color-black, $color-white, 87%);
$color-keyboard: mix($color-black, $color-white, 12%);
$color-text: $color-white;

$key-radius: 4px;
$key-size: 64px;
$key-gutter: 4px;
$key-spacing-horizontal: 9px;
$key-spacing-vertical: 5px;
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
      grid-column-start: 53;
    }
    &.is-arrow-right {
      grid-column-start: 57;
    }
    grid-column-end: span 2;
    grid-row-end: span 2;
    &.is-arrow-down,
    &.is-arrow-up {
      grid-column-start: 55;
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

<div class="keyboard-container">
  <div class="keyboard">
    <!-- First row -->
    <div class="key">
      <div class="key__top">~</div>
      <div class="key__bottom">&#96;</div>
    </div>
    <div class="key">
      <div class="key__top">!</div>
      <div class="key__bottom">1</div>
    </div>
    <div class="key">
      <div class="key__top">@</div>
      <div class="key__bottom">2</div>
    </div>
    <div class="key">
      <div class="key__top">#</div>
      <div class="key__bottom">3</div>
    </div>
    <div class="key">
      <div class="key__top">$</div>
      <div class="key__bottom">4</div>
    </div>
    <div class="key">
      <div class="key__top">%</div>
      <div class="key__bottom">5</div>
    </div>
    <div class="key">
      <div class="key__top">^</div>
      <div class="key__bottom">6</div>
    </div>
    <div class="key">
      <div class="key__top">&amp;</div>
      <div class="key__bottom">7</div>
    </div>
    <div class="key">
      <div class="key__top">*</div>
      <div class="key__bottom">8</div>
    </div>
    <div class="key">
      <div class="key__top">(</div>
      <div class="key__bottom">9</div>
    </div>
    <div class="key">
      <div class="key__top">)</div>
      <div class="key__bottom">0</div>
    </div>
    <div class="key">
      <div class="key__top">_</div>
      <div class="key__bottom">-</div>
    </div>
    <div class="key">
      <div class="key__top">+</div>
      <div class="key__bottom">=</div>
    </div>
    <div class="key is-backspace">
      <div class="key__bottom">&larr;</div>
    </div>
    <!-- Second row -->
    <div class="key is-tab">
      <div class="key__bottom">&rarrb;</div>
    </div>
    <div class="key">Q</div>
    <div class="key">W</div>
    <div class="key">E</div>
    <div class="key">R</div>
    <div class="key">T</div>
    <div class="key">Y</div>
    <div class="key">U</div>
    <div class="key">I</div>
    <div class="key">O</div>
    <div class="key">P</div>
    <div class="key">
      <div class="key__top">&#123;</div>
      <div class="key__bottom">[</div>
    </div>
    <div class="key">
      <div class="key__top">&#125;</div>
      <div class="key__bottom">]</div>
    </div>
    <div class="key is-enter">
      <div class="key__top">&larrhk;</div>
      <div class="key__bottom"></div>
    </div>
    <!-- Third row -->
    <div class="key is-capslock is-left">
      <div class="key__top">&Omicron;</div>
      <div class="key__bottom">capslck</div>
    </div>
    <div class="key">A</div>
    <div class="key">S</div>
    <div class="key">D</div>
    <div class="key is-home">F</div>
    <div class="key">G</div>
    <div class="key">H</div>
    <div class="key is-home">J</div>
    <div class="key">K</div>
    <div class="key">L</div>
    <div class="key">
      <div class="key__top">:</div>
      <div class="key__bottom">;</div>
    </div>
    <div class="key">
      <div class="key__top">"</div>
      <div class="key__bottom">'</div>
    </div>
    <div class="key">
      <div class="key__top">|</div>
      <div class="key__bottom">\</div>
    </div>
    <!-- Fourth row -->
    <div class="key is-left is-shift-left">
      <div class="key__bottom">shift</div>
    </div>
    <div class="key">Z</div>
    <div class="key">X</div>
    <div class="key">C</div>
    <div class="key">V</div>
    <div class="key">B</div>
    <div class="key">N</div>
    <div class="key">M</div>
    <div class="key">
      <div class="key__top">&lt;</div>
      <div class="key__bottom">,</div>
    </div>
    <div class="key">
      <div class="key__top">&gt;</div>
      <div class="key__bottom">.</div>
    </div>
    <div class="key">
      <div class="key__top">?</div>
      <div class="key__bottom">/</div>
    </div>
    <div class="key is-right is-shift-right">
      <div class="key__bottom">shift</div>
    </div>
    <!-- Fifth row -->
    <div class="key is-left">
      <div class="key__bottom">fn</div>
    </div>
    <div class="key is-right">
      <div class="key__bottom">control</div>
    </div>
    <div class="key is-command is-right">
      <div class="key__bottom">W</div>
    </div>
    <div class="key is-right">
      <div class="key__top">alt</div>
      <div class="key__bottom">option</div>
    </div>
    <div class="key is-space"></div>
    <div class="key is-left">
      <div class="key__top">alt</div>
      <div class="key__bottom">option</div>
    </div>
    <div class="key is-command is-left">
      <div class="key__bottom">W</div>
    </div>
    <div class="key is-left">
      <div class="key__bottom">control</div>
    </div>
    <div class="key is-arrow is-arrow-left">&ltrif;</div>
    <div class="key is-arrow is-arrow-up">&utrif;</div>
    <div class="key is-arrow is-arrow-down">&dtrif;</div>
    <div class="key is-arrow is-arrow-right">&rtrif;</div>
  </div>
</div>