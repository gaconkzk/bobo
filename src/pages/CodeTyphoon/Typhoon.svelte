<script>
import StatusBar from './components/StatusBar'

// Testing split
// let CodeLive
// import('./components/CodeLive')
//   .then(module => module.default)
//   .then(cl => CodeLive = cl)
//   .catch(err => console.error(err))
import CodeLive from './components/CodeLive'

import Slug, { rndInt } from 'components/Slug'

let status = { error: 0, accuracy: 0.00, typed: 0 }

let statusBar
const handleMessage = (e) => {
  status = e.detail
}

const handleStart = (e) => {
  status = e.detail
  statusBar.start()
}

const handleStop = (e) => {
  statusBar.stop()
}

let race;
function createSlug() {
  let hue = rndInt(360)
  let z = rndInt(15)
  let speed = Math.random() * 3 + 0.25
  let bottom = `${264 * (25 - z) / 100}px`
  // TODO size of the slug

  return { hue, z, speed, bottom }
}

let slugs = [createSlug(), createSlug()]
</script>

<style lang="scss">
  .race {
    @apply absolute w-full overflow-hidden bg-gradient-to-b from-white via-gray-100 to-black;
    height: 264px;
    bottom: 0;
    z-index: -10;
  }
</style>

<div class="flex-1 flex flex-col w-full items-center pt-2">
  <StatusBar bind:this={statusBar} {...status}/>
  <svelte:component this={CodeLive} on:message={handleMessage} on:start={handleStart} on:stop={handleStop}/>
</div>

<div class="race">
  {#each slugs as slug}
    <Slug {...slug} />
  {/each}
</div>