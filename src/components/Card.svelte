<script>
  import { navigateTo } from "yrv";
  import langs from 'components/devicon'

  const lang = () => `devicon-${langs[Math.floor(Math.random() * 5)]}`;

  export let data
  let random_seed = Math.random() * 5
</script>

<style>
  .devicon {
    @apply text-pink-500;
  }
  .title-post {
    @apply font-mono text-lg font-medium tracking-wide;
  }
  .max-h-6 {
    max-height: 6rem;
  }
  .block-with-text {
    padding: 5px;
    display: block;
    display: -webkit-box;
    max-width: 400px;
    -webkit-line-clamp: 3; /* max line number */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>

<div class="p-4 md_mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto w-full">
  <div class="bg-gray-300 h-40 w-full rounded-lg shadow-md bg-cover bg-center" style="background-image: url(https://picsum.photos/seed/{random_seed}/352/160)"></div>

  <div class="bg-white -mt-20 shadow-lg rounded-lg overflow-hidden p-4 w-5/6">
    
    <div class="header-content inline-flex items-center">
      <!-- <div class="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-purple-100">
        <div class="h-2 w-2 rounded-full m-1 bg-purple-500 " ></div>
      </div> -->
      <div class="category-title flex-1 text-sm mr-2"><i class="devicon {lang()}"></i></div>
      <div class="title-post">title {data}</div>
    </div>
    

    <div class="summary-post text-base text-justify font-small max-h-6 pb-2 block-with-text">
      <span class="italic">Short description Short description Short description Short description Short description</span>
    </div>

    <button class="bg-green-500 text-white mt-4 block rounded py-1 px-2 text-sm " on:click={() => navigateTo(`/ct/${data}`)}>
      <span class="">Join</span>
    </button>
    
  </div>
</div>
