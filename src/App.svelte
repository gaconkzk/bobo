<script>
  import GlobalStyle from './components/GlobalStyle'

  import { Router, Route, NotFound, redirect } from './pager'

  import Home from './pages/Home'
  import About from './pages/About'
  import Profile from './pages/Profile'
  import Login from './pages/Login'
  import CodeTyphoon from './pages/CodeTyphoon'

  const guard = (ctx, next) => {
    if (true) {
      redirect('/login')
    } else {
      next()
    }
  }
</script>

<main>
  <Router>
    <Route path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/about" component={About} />
    <Route path="/codetypoon" component={CodeTyphoon} />
    <Route path="/ct" component={CodeTyphoon} />
    <Route path="/profile/:username" let:params>
      <h2>Hello {params.username}!</h2>
      <p>Profile page</p>
    </Route>
    <Route path="/news" middleware={[guard]}>
      <h2>Latest News</h2>
      <p>Finally some good news!</p>
    </Route>
    <NotFound>
      <h2>Sorry. Page not found.</h2>
    </NotFound>
  </Router>
</main>
