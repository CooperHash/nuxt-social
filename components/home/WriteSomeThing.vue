<template>
  <div class="flex flex-1 flex-col">
    <UInput size="xl" color="white" variant="none" :trailing="false"
      placeholder="What is happneing!" class="w-2/3 mx-auto text-xl" />
    <div class="w-2/3 mx-auto flex flex-row">
      <div class="w-[60px] ml-auto">
        <UButton color="blue" size="xs" :ui="{ rounded: 'rounded-full' }">Post</UButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>
