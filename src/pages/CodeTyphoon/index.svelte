<script>
  import { Router, Route } from 'yrv'

  import Navbar from './components/Navbar.svelte'

  import Typhoons from './Typhoons.svelte'
  import Typhoon from './Typhoon.svelte'

  export let router
  console.log('Stupid unuse and warning on svelte, ', router)
</script>

<main class="flex flex-col h-screen max-h-full space-y-6">
  <Navbar />
  <Router path="/">
    <Route exact component={Typhoons} />
    <Route exact path="/:name" component={Typhoon} let:router />
  </Router>
</main>
