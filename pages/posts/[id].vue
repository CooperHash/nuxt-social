<template>
  <div class="flex w-2/3 mx-auto mt-5 break-all text-base font-normal">
    {{ store.post }}
  </div>
</template>
<script setup lang="ts">
import { useMyHomeStore } from '~/store/home';
const store = useMyHomeStore();
const route = useRoute()
console.log(route.params.id)

</script>
<style></style>
