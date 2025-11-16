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
    <div v-for="post in posts" :key="post.title" class="pb-2 border-b border-dashed mb-2">
      <h2 class="text-2xl font-bold">
        {{ post.title }}
      </h2>
      <div class="my-2 flex gap-1 items-center flex-wrap">
        <time class="text-sm text-gray-500 mr-2">
          Posted on {{ post.date }}
        </time>
        <div>
          <router-link v-for="tag in post.tags" :key="tag" :to="`/tags/${tag}`" class="mx-0! mr-1!">
            #{{ tag }}
          </router-link>
        </div>
      </div>
      <p class="mb-1">
        {{ post.description }}
      </p>
      <div class="text-right">
        <router-link :to="post.path" class="text-xs">
          READ MORE →
        </router-link>
      </div>
    </div>
  </div>
</template>
