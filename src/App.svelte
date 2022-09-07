<script>
  import '@unocss/reset/eric-meyer.css'
  import 'uno.css'

  import '$assets/styles.css'
  import { Router, Route } from 'yrv'

  import Home from './pages/Home.svelte'
  import About from './pages/About.svelte'
  import Login from './pages/Login.svelte'
  import CodeTyphoon from './pages/CodeTyphoon/index.svelte'

  import NotSupport from './pages/NotSupport.svelte'
  import NotFound from './pages/NotFound.svelte'

  import Profile from './pages/Profile.svelte'
  import Phaser from './pages/Phaser/index.svelte'
  import FCGen from './pages/FCGen/index.svelte'

  const desktop = () => {
    return !window.isMobileOrTablet()
  }
</script>

<Router>
  <Route path="/" exact component={Home} />
  <Route path="/login" component={Login} />
  <Route path="/about" exact component={About} />
  <Route
    path="/ct"
    component={CodeTyphoon}
    redirect="/mobile"
    condition={desktop}
  />
  <Route path="/profile" exact component={Profile} />
  <Route path="/phaser" exact component={Phaser} />
  <Route path="/fcgen" exact component={FCGen} />
  <Route path="/mobile" exact component={NotSupport} />
  <Route fallback component={NotFound} />
</Router>
