<template lang="pug">
.container.mx-auto.w-full.max-w-xs
  form.bg-white.shadow-md.rounded.px-8.pt-6.pb-8.mb-4
    .mb-4
      label.block.text-gray-700.text-sm.font-bold.mb-2(for="username") Username
      input#username.shadow.appearance-none.border.rounded.w-full.py-2.px-3.text-gray-700.leading-tight(class="focus:outline-none focus:shadow-outline" type="text" placeholder="Username")
    .mb-6
      label.block.text-gray-700.text-sm.font-bold.mb-2(for="password") Password
      input#password.shadow.appearance-none.border.border-red-500.rounded.w-full.py-2.px-3.text-gray-700.mb-3.leading-tight(class="focus:outline-none focus:shadow-outline" type="password" placeholder="******************")
      p.text-red-500.text-xs.italic Please choose a password.
    .flex.items-center.justify-between
      button.bg-blue-500.text-white.font-bold.py-2.px-4.rounded(class="hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="button") Sign In
      a.inline-block.align-baseline.font-bold.text-sm.text-blue-500(class="hover:text-blue-800" href="/#") Forgot Password?
  p.text-center.text-gray-500.text-xs &copy;2020 Acme Corp. All rights reserved.
</template>