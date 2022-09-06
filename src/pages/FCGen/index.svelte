<script>
  import Back2HomeBtn from '../common/Back2HomeBtn.svelte'
  import head from './walk/head_1.png?url'
  import body from './walk/body_1.png?url'
  import hand from './walk/hand_1.png?url'
</script>

<div class="flex flex-col w-full h-full justify-center">
  <Back2HomeBtn />
  <div class="border-1 rounded border-red-200 flex flex-row p-2">
    <div class="w-170px left-panel flex flex-col">
      <div
        class="w-120px h-120px border-1 border-blue-200 m-4 relative bg-gray-200"
      >
        <img alt="" src={head} class="w-120px h-120px absolute top-0 left-0" />
        <img alt="" src={body} class="w-120px h-120px absolute top-0 left-0" />
        <img alt="" src={hand} class="w-120px h-120px absolute top-0 left-0" />
      </div>
      <div class="">
        Select head
        <div class="w-40px h-40px overflow-hidden border-1 border-blue rounded">
          <img
            src={head}
            alt="broken"
            width="120"
            height="120"
            class="-ml-40px -mt-23px"
          />
        </div>
      </div>
      <div class="">
        Select hands
        <div class="w-40px h-40px overflow-hidden border-1 border-blue rounded">
          <img
            src={hand}
            alt="broken"
            width="120"
            height="120"
            class="-ml-40px -mt-40px"
          />
        </div>
      </div>
      <div class="">
        Select body
        <div class="w-40px h-40px overflow-hidden border-1 border-blue rounded">
          <img
            src={body}
            alt="broken"
            width="120"
            height="120"
            class="-ml-40px -mt-52px"
          />
        </div>
      </div>
    </div>
    <div class="right">
      <div class="">Select animation</div>
    </div>
  </div>
</div>
