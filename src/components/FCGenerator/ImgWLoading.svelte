<script lang="ts">
  let imgUrl: string = ''
  export { imgUrl as src }

  let image = null
  $: image

  const preload = async () => {
    const resp = await fetch(imgUrl)
    const blob = await resp.blob()

    return new Promise<string>(function (resolve, reject) {
      let reader = new FileReader()
      reader.readAsDataURL(blob)
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = reject
    })
  }
</script>

{#await preload()}
  Image is loading!
{:then base64}
  <img src={base64} alt="Alright Buddy!" />
{/await}
