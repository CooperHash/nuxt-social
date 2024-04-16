<template>
  <div class=" flex-1 flex flex-col space-y-5">
    <NuxtLink :to="'/posts/1'" @click.prevent="handleClick(item.content)" v-for="(item, index) in timelineData"
      :key="index" class="w-full mx-auto hover:bg-gray-100">
      <HomeTimeLinkBlock :content="item.content" />
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import type { Post } from '~/types';
import { useMyHomeStore } from '~/store/home';
const store = useMyHomeStore();
const timelineData = ref<Post[]>([])

const handleClick = (content: string) => {
  if (content) {
    store.$patch((state) => {
      state.post = content
    })
  }
}

type PostArr = Post[]

onMounted(async () => {
  const fetchLibrary = async () => {
    const { timeline } = await $fetch('/api/timeline')
    return timeline as PostArr
  }
  timelineData.value = await fetchLibrary()
})

</script>

<style></style>
