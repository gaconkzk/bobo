<script>
  import { onDestroy } from 'svelte'
  import { get }   from 'svelte/store'
  import { auth, googleProvider } from 'components/firebase'
  import { authState } from 'rxfire/auth'

  import { Login } from 'svelte-hero-icons'

  import { auth as astore } from 'services/auth'
  import { redirect } from 'components/pager'

  let unsubscribe
  let unsub = astore.subscribe((auth) => {
    if (auth.user) {
      redirect('/')
    }
  })

  function login() {
    auth.signInWithPopup(googleProvider).then(() => {
      unsubscribe = authState(auth).subscribe(u => astore.set({ user: auth }))
    })
  }

  onDestroy(() => {
    if (unsubscribe) {
      unsubscribe.unsubscribe();
      unsubscribe = null
    }
    unsub()
    unsub = null
  })

</script>

<template lang="pug">
.flex.w-full.h-screen
  .container.mx-auto.max-w-xs.self-center.inline-flex.items-center
    //- form.bg-white.shadow-md.rounded.px-8.pt-6.pb-8.mb-4
    //-   .mb-4
    //-     label.block.text-gray-700.text-sm.font-bold.mb-2(for="username") Username
    //-     input#username.shadow.appearance-none.border.rounded.w-full.py-2.px-3.text-gray-700.leading-tight.focus_outline-none(type="text" placeholder="Username")
    //-   .mb-6
    //-     label.block.text-gray-700.text-sm.font-bold.mb-2(for="password") Password
    //-     input#password.shadow.appearance-none.border.border-red-500.rounded.w-full.py-2.px-3.text-gray-700.mb-3.leading-tight.focus_outline-none(type="password" placeholder="******************")
    //-     p.text-red-500.text-xs.italic Please choose a password.
    //-   .flex.items-center.justify-between
    //-     button.bg-blue-500.text-white.font-bold.py-2.px-4.rounded.hover_bg-blue-700.focus_outline-none(type="button") Sign In
    //-     a.inline-block.align-baseline.font-bold.text-sm.text-blue-500.hover_text-blue-800(href="/#") Forgot Password?
    button.rounded.inline-flex.items-center.bg-red-700.hover_bg-red-800.text-white.font-bold.py-2.px-4.my-2.focus_outline-none.focus_shadow-outline(type="button" "on:click"="{login}")
      Login.mr-2(size="24")
      span Google
    p.text-center.text-gray-500.text-xs &copy;2020 The Flies. All rights reserved.
</template>