<template>
  <div class="flex flex-col space-y-3 px-8">
    <article class="flex flex-row space-x-4">
      <div class="w-[44px] h-auto flex-shrink-0">
        <NuxtImg width="44" height="44" class=" rounded-full"
          src="https://avatars.githubusercontent.com/u/73218815?v=4" />
      </div>
      <div class="flex flex-col flex-1 space-y-2">
        <span class=" break-all text-base font-normal">{{ content }}</span>
        <div class="flex flex-row justify-between">
          <Icon name="material-symbols:chat-bubble-outline-rounded" size="18px" />
          <Icon name="zondicons:repost" size="18px" />
          <Icon name="icon-park-outline:like" size="18px" />
          <Icon name="mingcute:voice-2-line" size="18px" />
        </div>
      </div>
    </article>
    <UDivider />
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps({
  content: String
})
</script>

<style></style>
