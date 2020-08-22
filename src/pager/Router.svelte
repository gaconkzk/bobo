<script context="module">
  import { writable } from 'svelte/store'

  export const activeRoute = writable({})
  const routes = {}
  
  export function register(route) {
    routes[route.path] = route
  }
</script>

<script>
  import { onMount, onDestroy } from 'svelte'
  import page from 'page'

  const last = (route) => {
    return (ctx) => {
      $activeRoute = {...route, params: ctx.params}
    }
  }

  const registerRoutes = () => {
    Object.keys(routes).forEach((path) => {
      const route = routes[path]
      page(path, ...route.middleware, last(route))
    })

    page.start()
  }
  
  onMount(registerRoutes)

  onDestroy(page.stop)
</script>

<slot />