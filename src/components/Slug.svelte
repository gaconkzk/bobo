<script context="module">
  export function rndInt(max) {
    return Math.floor(Math.random() * max)
  }
</script>

<script lang="ts">
  // import { onDestroy, onMount } from 'svelte'

  function getBorder(step?: number) {
    var px = radius + 'px '
    return px + px + (step ? px + ' 0px' : '0px ' + px)
  }

  // for slug - i'll move it out later
  let radius = 40
  export let hue
  export let z
  // this will be calculate and set dynamically
  export let speed
  export let bottom

  // for controlling timeline
  let tl

  let me

  let eyes = '()<>[]',
    pupils = "oO*.°´`'+x"

  function jump() {
    console.log('jump jump')
    // let tl = new TimelineMax()
    // tl.to(me, 0.25, {
    //   y: -50,
    //   ease: Quad.easeOut,
    // })
    //   .to(me, 0.75, {
    //     y: 0,
    //     ease: Bounce.easeOut,
    //   })
    //   .to(
    //     me,
    //     1,
    //     {
    //       x: '+=50',
    //       ease: Linear.easeNone,
    //     },
    //     0
    //   )
  }

  // function getEyes() {
  //   var idx = rndInt(eyes.length * 0.5) * 2
  //   var pupil = pupils.charAt(rndInt(pupils.length))
  //   var inner = Math.random() > 0.5 ? ' ' + pupil : pupil + ' '
  //   var eye = eyes.charAt(idx) + inner + eyes.charAt(idx + 1)
  //   return eye + ' ' + eye
  // }

  // function blinkSlug(close) {
  //   if (me) {
  //     if (close) me.innerText = '---- ----'
  //     else me.innerText = getEyes()
  //     TweenMax.delayedCall(close ? 0.25 : Math.random() * 20, blinkSlug, [
  //       !close,
  //     ])
  //   }
  // }

  // function animateSlug() {
  //   let gsTransform = me && me['_gsTransform']

  //   if (gsTransform && gsTransform.x > screen.width) {
  //     TweenMax.set(me, {
  //       x: -170,
  //     })
  //   }

  //   if (me) {
  //     tl = new TimelineMax()
  //     tl.to(me, speed, {
  //       x: '+=' + radius,
  //       borderRadius: getBorder(true),
  //     })
  //       .to(me, speed * 0.25, {
  //         rotation: -5,
  //         ease: Quad.easeOut,
  //       })
  //       .to(me, speed * 0.25, {
  //         rotation: 0,
  //         ease: Quad.easeIn,
  //       })
  //       .to(
  //         me,
  //         speed * 0.5,
  //         {
  //           borderRadius: getBorder(false),
  //         },
  //         speed
  //       )
  //       .addCallback(animateSlug, speed * 1.5, [])
  //   }
  // }

  // onMount(() => {
  //   blinkSlug()
  //   animateSlug()
  // })

  // onDestroy(() => {
  //   if (me) {
  //     TweenMax.set(me, { clearProps: 'all' })
  //   }
  // })
</script>

<div
  bind:this={me}
  on:mouseenter={jump}
  class="slug"
  style="--slug-border-color: {hue}; --slug-color: {hue +
    180}; --slug-z-index: {z}; --slug-bottom: {bottom}; border-radius: {getBorder()}"
/>

<style>
  .slug {
    font-family: monospace;
    position: absolute;
    border: 2px solid;
    width: 170px;
    height: 95px;
    text-align: right;
    padding: 5px 15px;

    border-color: hsl(var(--slug-border-color), 100%, 50%);
    color: hsl(var(--slug-color), 100%, 50%);
    background: hsla(var(--slug-border-color), 100%, 50%, 0.5);
    border-radius: var(--slug-border-radius);
    z-index: var(--slug-z-index);
    bottom: var(--slug-bottom);
  }
</style>
