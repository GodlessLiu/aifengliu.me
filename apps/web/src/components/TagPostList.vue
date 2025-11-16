<script setup lang="ts">
import { SITE_NAME } from '@repo/constant'

const router = useRouter()
const route = useRoute<'/tags/[tag]'>()

const posts = router.getRoutes().filter(route => (route.path.startsWith('/posts/'))).map(r => ({
  title: r.meta.frontmatter?.title,
  date: r.meta.frontmatter?.date,
  tags: r.meta.frontmatter?.tags,
  description: r.meta.frontmatter?.description,
  path: r.path,
}))

const filteredPosts = computed(() => {
  return posts.filter(post => post.tags?.includes(route.params.tag as string))
})

useTitle(() => `${SITE_NAME} | ${route.params.tag} tag`)
</script>

<template>
  <h1 class="text-2xl font-bold mb-2">
    # {{ route.params.tag }}
  </h1>
  <PostItem v-for="post in filteredPosts" :key="post.title" :post="post" />
</template>
