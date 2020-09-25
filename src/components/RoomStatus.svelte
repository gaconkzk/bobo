<script>
  import { Eye, UserGroup } from 'svelte-hero-icons'

  export let players = 0
  export let maxPlayers = 8
  export let views = '0'
</script>

<div class="inline self-center text-sm bg-green-200 bg-opacity-25 space-x-3 shadow text-blue-400 h-8 py-1 px-2">
  <div class="inline mx-2">
    <UserGroup solid size="14" class="inline mb-1"/>
    <span class="italic text-gray-600">{players}/{maxPlayers}</span>
  </div>
  <div class="inline mx-2 self-center text-sm">
    <Eye solid size="14" class="inline mb-1"/>
    <span class="italic text-gray-600">{views}</span>
  </div>
</div>