<script>
  import GlobalStyle from 'components/GlobalStyle'
  import { Router, Route, NotFound, redirect } from 'components/pager'

  import Home from './pages/Home'
  import About from './pages/About'
  import Profile from './pages/Profile'
  import Login from './pages/Login'
  import CodeTyphoon from './pages/CodeTyphoon'

  import NotSupport from './pages/NotSupport'

  import { get }   from 'svelte/store'

  import { auth } from 'services/auth'

  const guard = (ctx, next) => {
    let { user } = get(auth)
    if (user) {
      next()
    } else {
      redirect('/login')
    }
  }

  const desktop = (ctx, next) => {
    let isDesktop = !window.isMobileOrTablet()
    if (isDesktop) {
      next()
    } else {
      redirect('/mobile')
    }
  }
</script>

<Router>
  <Route path="/" component={Home} />
  <Route path="/login" component={Login} />
  <Route path="/about" component={About} />
  <Route path="/codetypoon" component={CodeTyphoon} middleware={[desktop]}/>
  <Route path="/ct" component={CodeTyphoon}  middleware={[desktop]}/>
  <Route path="/mobile" component={NotSupport}/>
  <!-- <Route path="/profile/:username" let:params>
    <h2>Hello {params.username}!</h2>
    <p>Profile page</p>
  </Route>
  <Route path="/news" middleware={[guard]}>
    <h2>Latest News</h2>
    <p>Finally some good news!</p>
  </Route> -->
  <NotFound>
    <h2>Sorry. Page not found.</h2>
  </NotFound>
</Router>
<!-- </main> -->
