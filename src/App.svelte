<script>
  import 'uno.css'
  import { Router, Route } from 'yrv'

  import Home from './pages/Home.svelte'
  import About from './pages/About.svelte'
  import Login from './pages/Login.svelte'
  import CodeTyphoon from './pages/CodeTyphoon/index.svelte'

  import NotSupport from './pages/NotSupport.svelte'
  import NotFound from './pages/NotFound.svelte'

  import Profile from './pages/Profile.svelte'

  const desktop = () => {
    return !window.isMobileOrTablet()
  }
</script>

<Router>
  <Route path="/" exact component={Home} />
  <Route path="/login" exact component={Login} />
  <Route path="/about" exact component={About} />
  <Route
    path="/ct"
    component={CodeTyphoon}
    redirect="/mobile"
    condition={desktop}
  />
  <Route path="/profile" exact component={Profile} />
  <Route path="/mobile" exact component={NotSupport} />
  <Route fallback component={NotFound} />
</Router>
