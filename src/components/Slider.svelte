<script>
import { tns } from 'tiny-slider/src/tiny-slider'
import faker from 'faker'
import { onMount } from 'svelte'
import CarouselItem from './CarouselItem'

let random_seed = () => Math.random() * 5
  let me
  onMount(() => {
    tns({
      mode: 'gallery',
      container: me,
      slideBy: 'page',
      mouseDrag: true,
      autoplay: false,
      controls: true,
      nav: false,
      speed: 500,
    })
  })

  export let data = [{
    name: 1,
    title: faker.commerce.product(),
    // logoImg: faker.image.image(),
    img: faker.image.image(),
    desc: faker.lorem.text(),
  },{
    name: 2,
    title: faker.commerce.product(),
    // logoImg: faker.image.image(),
    img: faker.image.image(),
    desc: faker.lorem.text(),
  },{
    name: 3,
    title: faker.commerce.product(),
    // logoImg: faker.image.image(),
    img: faker.image.image(),
    desc: faker.lorem.text(),
  }]
</script>

<style global lang="scss">
.tns-outer {
  @apply relative;
  .tns-nav {
    margin-bottom: -1.8rem;
    @apply w-full absolute bottom-0 z-10 flex justify-center;
    button {
      @apply bg-gray-300 w-3 h-3 rounded-full mx-1 outline-none;
      &.tns-nav-active {
        @apply bg-gray-500;
      }
    }
  }
  .tns-controls button {
    background: #71809647;
    @apply w-5 h-5 text-transparent rounded-full absolute inset-y-0 my-auto z-10 outline-none;
    &:hover {
      @apply bg-gray-500;
    }
    &[data-controls="prev"] {
      @apply left-0 -ml-6;
      &:before {
        content: "";
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='rgb(102 113 132)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
        background-size: 80%;
        @apply w-full h-full bg-center transform rotate-90 absolute top-0 left-0;
      }
    }
    &[data-controls="next"] {
      @apply right-0 -mr-6;
      &:before {
        content: "";
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='rgb(102 113 132)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
        background-size: 80%;
        @apply w-full h-full bg-center transform -rotate-90 absolute top-0 left-0;
      }
    }
  }
  button[data-action] {
    @apply hidden;
  }
  .tns-visually-hidden {
    @apply hidden;
  }
}
</style>

<div class="mx-6 animate__animated animate__fadeIn animate__slow">
  <div bind:this={me} class="single-item h-64">
    {#each data as item}
    <CarouselItem>
      <div class="relative rounded-lg block md_flex items-center h-full bg-gray-100 shadow-xl overflow-hidden">
        <!-- <div class="relative w-full h-full overflow-hidden rounded-t-lg md_rounded-t-none md_rounded-l-lg"> -->
          <img class="absolute inset-0 w-full h-full object-cover object-center opacity-50" src={item.img} alt="">
          <!-- <div class="absolute inset-0 w-full h-full bg-indigo-900 opacity-75"></div>
          <div class="absolute inset-0 w-full h-full flex items-center justify-center fill-current text-white">
            {#if item.logoImg}
              <img class="w-full h-24 text-white" src="{item.logoImg}" alt="">
            {:else}
              <svg width="239" height="120" viewBox="0 0 239 120" class="h-24 w-full font-xl">
                <text x="0" y="80" font-size="300%" font-weight="800">{item.title}</text>
              </svg>
            {/if}
          </div> -->
        <!-- </div> -->
        <!-- <div class="w-full md_w-3/5 h-full flex items-center bg-gray-100 rounded-lg">
          <div class="p-12 md_pr-24 md_pl-16 md_py-12">
            {@html item.desc}
          </div>
          <svg class="hidden md_block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
        </div> -->
      </div>
    </CarouselItem>
    {/each}
      <!-- <div class="h-full px-2">
          <div class="h-full bg-gray-200 rounded-md">
              <h3 class="h-full font-medium flex items-center justify-center text-2xl">
                  2
              </h3>
          </div>
      </div>
      <div class="h-full px-2">
          <div class="h-full bg-gray-200 rounded-md">
              <h3 class="h-full font-medium flex items-center justify-center text-2xl">
                  3
              </h3>
          </div>
      </div>
      <div class="h-full px-2">
          <div class="h-full bg-gray-200 rounded-md">
              <h3 class="h-full font-medium flex items-center justify-center text-2xl">
                  4
              </h3>
          </div>
      </div>
      <div class="h-full px-2">
          <div class="h-full bg-gray-200 rounded-md">
              <h3 class="h-full font-medium flex items-center justify-center text-2xl">
                  5
              </h3>
          </div>
      </div>
      <div class="h-full px-2">
          <div class="h-full bg-gray-200 rounded-md">
              <h3 class="h-full font-medium flex items-center justify-center text-2xl">
                  6
              </h3>
          </div>
      </div> -->
  </div>
</div>