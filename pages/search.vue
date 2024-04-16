<template>
  <div class="w-2/3 mx-auto mt-4">
    <UInput v-model="input" icon="i-heroicons-magnifying-glass-20-solid" size="lg" color="white" :trailing="false"
      placeholder="Search..." />
      <div v-for="(post, index) in searchList" :key="index">
      <!-- Replace with your actual layout -->
      <!-- <p>{{ post.id }}</p> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Post } from '~/types'
import { throttleFilter, watchWithFilter } from '@vueuse/core'
const input = ref('')
const searchList = ref<Post[]>([])
watchWithFilter(
  input,
  async () => {
    console.log('changed!');
    const { searchData } = await $fetch(`/api/search?search=${input.value}`)
    console.log('searchdata',searchData);
    searchList.value = searchData as Post[]
  },
  {
    eventFilter: throttleFilter(500),
  },
)
</script>

<style></style>
