<script setup lang="ts">
const router = useRouter()

const tags = router.getRoutes().filter(route => (route.path.startsWith('/posts/'))).reduce((acc, route) => {
  route.meta.frontmatter?.tags?.forEach((tag) => {
    acc.add(tag)
  })
  return acc
}, new Set<string>())
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-2">
      Tags
    </h1>
    <div class="flex gap-2 flex-wrap">
      <div v-for="tag in Array.from(tags)" :key="tag">
        <router-link :to="`/tags/${tag}`" class="mx-0! mr-1!">
          #{{ tag }}
        </router-link>
      </div>
    </div>
  </div>
</template>
