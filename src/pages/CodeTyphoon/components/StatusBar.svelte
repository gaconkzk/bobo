<script>
  import { tweened } from 'svelte/motion'
  import SmallCard from '$components/SmallCard.svelte'

  export let error = 0,
    accuracy = 0.0,
    typed = 0
  let timer = tweened(0)

  $: minutes = Math.floor($timer / 60)
  $: minname = minutes > 1 ? 'mins' : 'min'
  $: seconds = Math.floor($timer - minutes * 60)

  $: fmins = $timer / 60
  // We dont need this
  // $: grossWpm = (typed / 5) / fmins
  $: wpm = Math.floor((typed / 5 - error) / fmins)

  let intv

  export function start() {
    stop()
    timer = tweened(0)

    intv = setInterval(() => {
      $timer++
    }, 1000)
  }

  export function stop() {
    if (intv) {
      clearInterval(intv)
      intv = null
    }
  }
</script>

<div class="flex flex-row items-center self-auto my-2">
  <SmallCard title="Times(s)" data={seconds} />
  <SmallCard title="Errors" data={error} dataStyle="error" />
  <SmallCard title="WPM" data={(wpm && wpm < 0) || !wpm ? 0 : wpm} />
  <SmallCard title="Accuracy(%)" data={accuracy.toFixed(2)} />
</div>
