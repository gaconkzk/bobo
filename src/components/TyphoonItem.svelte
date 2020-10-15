<script>
  // TODO remove this later
  import faker from 'faker'
  import dayjs from 'dayjs'
  import relativeTime from 'dayjs/plugin/relativeTime'

  import { SyncLoader } from 'svelte-loading-spinners'

  import Image from './Image'

  export let introDelay = 0
  let className = ''
  export { className as class }

  dayjs.extend(relativeTime)
  // TODO remove default
  const ran = Math.round(Math.random() * 30)

  const category = ['Learn & Practice', 'Solo Challenge', 'Dual Fighting']

  export let data = {
    name: faker.name.findName(),
    avatar: faker.image.avatar(),
    category: category[faker.random.number({ min: 0, max: 2 })],
    time: dayjs(faker.date.past()).fromNow(),
    img: faker.image.image(640, 480, true),
    title: faker.lorem.sentence(),
    desc: faker.lorem.paragraph(),
  }
</script>

<style>
.box {
  box-shadow: 0px 3px 20px #0000000b;
  @apply bg-white rounded-md relative;
}

.animate__animated.animate__slideInUp {
  --animate-duration: 400ms;
  --animate-delay: var(--intro-delay);
}
</style>

<div class="intro-y col-span-12 md_col-span-6 xl_col-span-4 box animate__animated animate__slideInUp" style="--intro-delay: {introDelay}s">
  <div class="flex items-center border-b border-gray-200 px-5 py-4">
    <div class="w-10 h-10 flex-none image-fit">
      <img alt="noimg" class="rounded-full" src={data.avatar} />
    </div>
    <div class="ml-3 mr-auto">
      <a href="/user/angie" class="font-medium">{data.name}</a>
      <div class="flex text-gray-600 truncate text-xs mt-1">
        <a
          class="text-theme-1 inline-block truncate"
          href="">
          {data.category}
        </a>
        <span class="mx-1">•</span>
        {data.time}
      </div>
    </div>
    <!-- This should be a hidden tag for owner to edit his <div class="dropdown ml-3">
      <a
        href="javascript:;"
        class="dropdown-toggle w-5 h-5 text-gray-500">
        <DotsVertical class="w-4 h-4" />
      </a>
      <div class="dropdown-box w-40">
        <div class="dropdown-box__content box p-2">
          <a
            href=""
            class="flex items-center block p-2 transition duration-300
            ease-in-out bg-white hover_bg-gray-200
            rounded-md">
            <i data-feather="edit-2" class="w-4 h-4 mr-2" />
            Edit Post
          </a>
          <a
            href=""
            class="flex items-center block p-2 transition duration-300
            ease-in-out bg-white hover_bg-gray-200
            rounded-md">
            <i data-feather="trash" class="w-4 h-4 mr-2" />
            Delete Post
          </a>
        </div>
      </div>
    </div> -->
  </div>
  <div class="p-5">
      <div class="h-40 xxl:h-56 image-fit">
          <Image alt="noimg" class="rounded-md" src={data.img} loading={SyncLoader}/>
      </div>
      <a href="" class="block font-medium text-base mt-5">{data.title}</a> 
      <div class="text-gray-700 dark:text-gray-600 mt-2">{data.desc}</div>
  </div>
</div>
