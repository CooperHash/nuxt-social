<template>
  <div class="flex flex-col space-y-4 flex-1">
    <HomeWriteSomeThing/>
    <HomeTimeLine />
  </div>
</template>
<script setup lang="ts">
useHead({
  title: 'nuxt-twitter',
  meta: [
    { name: 'description', content: 'best nuxt social all the world' }
  ]
})

useSeoMeta({
  title: 'nuxt / twitter',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>
