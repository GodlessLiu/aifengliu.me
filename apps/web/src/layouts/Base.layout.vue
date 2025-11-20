<script setup lang="ts">
const navs = [
  {
    label: 'Blog',
    to: '/posts',
  },
  {
    label: 'About',
    to: '/about',
  },
  {
    label: 'Tags',
    to: '/tags',
  },
]
</script>

<template>
  <div class="mx-auto">
    <header class="mb-2 px-4">
      <nav class="py-4">
        <ul class="flex">
          <li v-for="nav in navs" :key="nav.to">
            <router-link :to="nav.to" class="nav-link">
              {{ nav.label }}
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
    <div class="mx-auto max-w-3xl mb-16 px-2">
      <router-view />
    </div>
    <Footer />
  </div>
</template>
