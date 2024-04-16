<script setup lang="ts">
import type { Post } from '~/types';
import { useMyHomeStore } from '~/store/home';
const supabase = useSupabaseClient()
const store = useMyHomeStore();
const timelineData = ref<Post[]>([])
const session = supabase.auth.getSession()
const pendingFloag = ref(true)

const handleClick = (content: string) => {
  if (content) {
    store.$patch((state) => {
      state.post = content
    })
  }
}

type PostArr = Post[]


onMounted(async () => {
  const token = (await session).data.session?.access_token
  const { pending, data: result, error } = await useFetch('/api/timeline', {
    //lazy: true,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    onResponse({ request, response, options }) {
      console.log(response);
      //do other stuff
      console.log('response data', response.status);
    },

    onResponseError({ request, response, options }) {
      console.log(response);
      //do other stuff
      console.log('response data', response.status);
    },
  })
  timelineData.value = result.value?.timeline as PostArr
})


</script>
<template>
  <div class=" flex-1 flex flex-col space-y-5">
    <NuxtLink :to="'/posts/1'" @click.prevent="handleClick(item.content)" v-for="(item, index) in timelineData"
      :key="index" class="w-full mx-auto hover:bg-gray-100">
      <HomeTimeLinkBlock :content="item.content" />
    </NuxtLink>
  </div>
</template>
