<script>
  import { tweened } from 'svelte/motion'
  import SmallCard from 'components/SmallCard'

  export let error = 0, accuracy = 0.00, time = 1 * 60

  let timer = tweened(time)

  $: minutes = Math.floor($timer / 60);
  $: minname = minutes > 1 ? "mins" : "min";
  $: seconds = Math.floor($timer - minutes * 60)

  setInterval(() => {
    if ($timer > 0) $timer--
  }, 1000)
</script>

<div class="flex flex-row items-center self-auto my-2">
  <SmallCard title="Errors" data={error} dataStyle="error"/>
  <SmallCard title="Times(s)" data={seconds}/>
  <SmallCard title="Accuracy(%)" data={(accuracy * 100).toFixed(2)} />
</div>