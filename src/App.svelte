<script>
  import GlobalStyle from 'components/GlobalStyle'
  import { Router, Route } from 'yrv'

  import Home from './pages/Home'
  import About from './pages/About'
  import Login from './pages/Login'
  import CodeTyphoon from './pages/CodeTyphoon'

  import NotSupport from './pages/NotSupport'
  import NotFound from './pages/NotFound'

  const desktop = () => {
    return !window.isMobileOrTablet()
  }
</script>

<Router>
  <Route path="/" exact component={Home} />
  <Route path="/login" exact component={Login} />
  <Route path="/about" exact component={About} />
  <!-- <Route path="/codetypoon" exact component={CodeTyphoon} condition={() => guard()} redirect='/login'/> -->
  <Route path="/ct" component={CodeTyphoon} redirect='/mobile' condition={desktop} />
  <Route path="/mobile" exact component={NotSupport}/>
  <Route fallback component={NotFound} />
</Router>
<!-- </main> -->
