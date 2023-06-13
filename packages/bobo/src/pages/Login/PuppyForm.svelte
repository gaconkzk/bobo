<div class="center">
  <div class="ear ear--left" />
  <div class="ear ear--right" />
</div>

<style lang="scss">
  $darkblue: #243946;

  @keyframes breath {
    0% {
    }
    100% {
      transform: rotateX(0deg);
    }
    50% {
      transform: rotateX(60deg);
    }
  }

  .center {
    @apply relative top-1/2 left-1/2 w-275px h-490px bg-blue inline-block;
    @apply transform -translate-1/2 rounded-3px overflow-hidden;
    @apply bg-gradient-to-r from-orange-400 to-orange-200;
  }
</style>
