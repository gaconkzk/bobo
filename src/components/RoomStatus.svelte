<script>
  import { Eye, UserGroup } from 'svelte-hero-icons'

  export let players = 0
  export let maxPlayers = 8
  export let views = '0'
</script>

<div class="inline self-center text-sm mr-2 bg-green-200 bg-opacity-25 space-x-3 shadow">
  <div class="inline">
    <UserGroup solid size="14" class="inline mb-1"/>
    <span class="italic text-gray-600">{players}/{maxPlayers}</span>
  </div>
  <div class="inline self-center text-sm mr-2">
    <Eye solid size="14" class="inline mb-1"/>
    <span class="italic text-gray-600">{views}</span>
  </div>
</div>