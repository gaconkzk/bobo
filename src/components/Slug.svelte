<script>
  function rndInt(max) {
    return Math.floor(Math.random() * max);
  }

  export let radius
  export let hue
  export let z
  // this will be calculate and set dynamically
  export let speed
  export let bottom
</script>

<style>
.slug {
  font-family: monospace;
  position: absolute;
  border: 2px solid;
  width: 170px;
  height: 95px;
  text-align: right;
  padding: 5px 15px;

  border-color: hsl(var(--slug-border-color),100%,50%);
  color: hsl(var(--slug-color),100%,50%);
  background: hsla(var(--slug-border-color),100%,50%,0.5);
  border-radius: var(--slug-border-radius);
  z-index: var(--slug-z-index);
  bottom: var(--slug-bottom);
}
</style>

<div class="slug" style="--slug-border-color: {hue}; --slug-color: {hue + 180}; --slug-border-radius: {radius}; --slug-z-index: {z}; --slug-bottom: {bottom}" data={speed}></div>