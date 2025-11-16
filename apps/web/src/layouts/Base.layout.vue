<template>
  <div class="mx-auto">
    <header class="mb-2 px-4">
      <nav class="py-4">
        <ul class="flex">
          <li>
            <router-link to="/posts">
              Blog
            </router-link>
          </li>
          <li>
            <router-link to="/about">
              About
            </router-link>
          </li>
          <li>
            <router-link to="/tags">
              Tags
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
    <div class="mx-auto max-w-3xl mb-16 px-2">
      <router-view />
    </div>
    <footer class="flex justify-center text-sm flex-col sm:flex-row items-center">
      <div>
        2025 - Present © Aifeng Liu <span class="mx-2">|</span> Learn · Share · Tech
      </div>
      <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" class=" after:content-['↗']">CC BY-NC-SA 4.0</a>
    </footer>
  </div>
</template>
