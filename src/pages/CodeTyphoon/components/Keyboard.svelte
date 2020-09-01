<script>
  import Key from 'components/Key'

  import keysmap from "components/keymaps"
</script>

<style lang="scss">
$color-black: #000;
$color-white: #fff;

$color-key: mix($color-black, $color-white, 87%);
$color-keyboard: mix($color-black, $color-white, 12%);

$color-text: $color-white;

$key-size: 64px;
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
        <Key {...key} />
      {/each}
    {/each}
  </div>
</div>