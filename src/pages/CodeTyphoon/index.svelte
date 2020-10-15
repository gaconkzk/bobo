<script>
  import { Router, Route } from 'yrv'

  import Navbar from './components/Navbar'

  import Typhoons from './Typhoons'
  import Typhoon from './Typhoon'

  export let router
  console.log('Stupid unuse and warning on svelte, ', router)
</script>

<main class="flex flex-col h-screen max-h-full space-y-6 font-sans">
  <Navbar />
  <Router path="/">
    <Route exact component={Typhoons} />
    <Route exact path="/:name" component={Typhoon} let:router />
  </Router>
</main>