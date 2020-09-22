<script>
  import GlobalStyle from 'components/GlobalStyle'
  import { Router, Route } from 'yrv'

  import Home from './pages/Home'
  import About from './pages/About'
  import Login from './pages/Login'
  import CodeTyphoon from './pages/CodeTyphoon'

  import NotSupport from './pages/NotSupport'
  import NotFound from './pages/NotFound'

  import Profile from './pages/Profile'

  const desktop = () => {
    return !window.isMobileOrTablet()
  }
</script>

<Router>
  <Route path="/" exact component={Home} />
  <Route path="/login" exact component={Login} />
  <Route path="/about" exact component={About} />
  <Route path="/ct" component={CodeTyphoon} redirect='/mobile' condition={desktop} />
  <Route path="/profile" exact component={Profile} />
  <Route path="/mobile" exact component={NotSupport} />
  <Route fallback component={NotFound} />
</Router>

