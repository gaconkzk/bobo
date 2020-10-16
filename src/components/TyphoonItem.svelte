<script>
  // TODO remove this later
  import faker from 'faker'
  import dayjs from 'dayjs'
  import relativeTime from 'dayjs/plugin/relativeTime'

  import { SyncLoader } from 'svelte-loading-spinners'

  import { UserGroup } from 'svelte-hero-icons'

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
    comments: [],
    watchers: [],
    participants: [
      {
        name: faker.name.findName(),
        avatar: faker.image.avatar(),
      },
      {
        name: faker.name.findName(),
        avatar: faker.image.avatar(),
      },
      {
        name: faker.name.findName(),
        avatar: faker.image.avatar(),
      },
    ],
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

<div
  class="intro-y col-span-12 md_col-span-6 lg_col-span-4 xl_col-span-3 animate__animated mx-3
  animate__slideInUp"
  style="--intro-delay: {introDelay}s">
  <div class="box zoom-in">
  <div class="flex items-center border-b border-gray-200 px-5 py-4">
    <div class="w-10 h-10 flex-none image-fit">
      <img alt="noimg" class="rounded-full" src={data.avatar} />
    </div>
    <div class="ml-3 mr-auto">
      <a href="/user/angie" class="font-medium">{data.name}</a>
      <div class="flex text-gray-600 truncate text-xs mt-1">
        <a class="text-purple-600 inline-block truncate" href="/ct/category/{data.category}">
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
      <Image
        alt="noimg"
        class="rounded-md"
        src={data.img}
        loading={SyncLoader} />
    </div>
    <a href="/ct/{data.id}" class="block font-medium text-base mt-5 select-none">
      {data.title}
    </a>
    <div class="text-gray-700 mt-2 select-none">{data.desc}</div>
  </div>
  <div
    class="flex items-center px-5 py-3 border-t border-gray-200">
    <a
      href=""
      class="intro-x w-8 h-8 flex items-center justify-center rounded-full
      border border-purple-500 text-gray-600 mr-2 tooltip"
      title={`${data.participants.length} participant(s)`}>
      <UserGroup class="w-3 h-3 text-purple-600" solid/>
    </a>
    <div class="intro-x flex mr-2">
    {#each data.participants as pt, i}
      <div class="intro-x w-8 h-8 image-fit {i > 0 ? '-ml-4' : ''}">
        <img
          alt="noimg"
          class="rounded-full border border-white zoom-in tooltip"
          src={pt.avatar}
          title={pt.name} />
      </div>
    {/each}
    </div>
    <a
      href=""
      class="intro-x w-8 h-8 flex items-center justify-center rounded-full
      bg-theme-14 dark:bg-dark-5 dark:text-gray-300 text-theme-10 ml-auto
      tooltip"
      title="Share">
      <i data-feather="share-2" class="w-3 h-3" />
    </a>
    <a
      href=""
      class="intro-x w-8 h-8 flex items-center justify-center rounded-full
      bg-theme-1 text-white ml-2 tooltip"
      title="Download PDF">
      <i data-feather="share" class="w-3 h-3" />
    </a>
  </div>
  <div class="px-5 pt-3 pb-5 border-t border-gray-200 dark:border-dark-5">
    <div class="w-full flex text-gray-600 text-xs sm:text-sm">
      <div class="mr-2">
        Comments:
        <span class="font-medium">40</span>
      </div>
      <div class="mr-2">
        Views:
        <span class="font-medium">66k</span>
      </div>
      <div class="ml-auto">
        Likes:
        <span class="font-medium">87k</span>
      </div>
    </div>
  </div>
</div>
</div>
