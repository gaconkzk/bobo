<script lang="ts">
  export let selectedValue = 'Dropdown button'
  export let options = []

  let dropdownMenu: HTMLDivElement

  function toggleDropdown() {
    const mnu = dropdownMenu
    const ls = mnu.classList
    ls.toggle('invisible')
  }
</script>

<div class="relative">
  <button
    id="dropdownDefault"
    data-dropdown-toggle="dropdown"
    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    type="button"
    on:click={toggleDropdown}
    >{selectedValue}
    <svg
      class="ml-2 w-4 h-4"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </button>
  <!-- Dropdown menu -->
  <div
    bind:this={dropdownMenu}
    class="invisible z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 absolute bottom-10 left-0"
  >
    <ul
      class="py-1 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="dropdownDefault"
    >
      {#each options as item}
        <li
          role="presentation"
          on:click={(_) => {
            selectedValue = item
            toggleDropdown()
          }}
        >
          <span
            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            {item}
          </span>
        </li>
      {/each}
    </ul>
  </div>
</div>
