<script>
  import { tweened } from 'svelte/motion'
  import SmallCard from 'components/SmallCard'

  export let error = 0, accuracy = 0.00, typed = 0
  let timer = tweened(0)

  $: minutes = Math.floor($timer / 60);
  $: minname = minutes > 1 ? "mins" : "min";
  $: seconds = Math.floor($timer - minutes * 60)

  $: fmins = $timer / 60
  // We dont need this
  // $: grossWpm = (typed / 5) / fmins
  $: wpm = Math.floor(((typed / 5) - error) / fmins)

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
  <SmallCard title="Errors" data={error} dataStyle="error"/>
  <SmallCard title="Times(s)" data={seconds}/>
  <SmallCard title="Accuracy(%)" data={(accuracy * 100).toFixed(2)} />
  <SmallCard title="WPM" data={wpm || 0} />
</div>