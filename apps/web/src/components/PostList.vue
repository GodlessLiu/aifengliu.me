<script setup lang="ts">
const router = useRouter()

const posts = router.getRoutes().filter(route => (route.path.startsWith('/posts/'))).map(r => ({
  title: r.meta.frontmatter?.title,
  date: r.meta.frontmatter?.date,
  tags: r.meta.frontmatter?.tags,
  description: r.meta.frontmatter?.description,
  path: r.path,
}))
</script>

<template>
  <div>
    <PostItem v-for="post in posts" :key="post.title" :post="post" />
  </div>
</template>
