<style global>
  @import 'tiny-slider/dist/tiny-slider.css';
  @import '../assets/global.pcss';
  @import 'animate.css';

  body {
    @apply w-full;
    min-width: 400px;
  }

  .zoom-in {
    @apply transition duration-300 ease-in-out transform cursor-pointer;
  }

  .zoom-in:hover {
    @apply scale-105 shadow-xl;
  }

  .image-fit {
    @apply relative;
  }

  .image-fit > img {
    @apply absolute object-cover w-full h-full;
  }
</style>
