<template>
  <header
    class="home-navbar w-[250px] flex flex-col items-start pt-12 h-screen border-r-[1px] border-gray-100">
    <NuxtLink to="/" class="flex flex-row space-x-3 items-center px-4 py-3 hover:bg-gray-100 text-gray-600 hover:text-gray-800 rounded-3xl">
      <Icon name="material-symbols:home" size="40px" class=""/>
      <span class=" font-semibold text-xl">Home</span>
    </NuxtLink to="/">
    <NuxtLink class="flex flex-row space-x-3 items-center px-4 py-3 hover:bg-gray-100 text-gray-600 hover:text-gray-800 rounded-3xl" to="/search">
      <Icon name="ic:baseline-search" size="40px" />
      <span class=" font-semibold text-xl">Search</span>
    </NuxtLink>
    <div class="flex flex-row space-x-3 items-center px-4 py-3 hover:bg-gray-100 text-gray-600 hover:text-gray-800 rounded-3xl">
      <Icon name="material-symbols:notifications-outline-sharp" size="40px" />
      <span class=" font-semibold text-xl">Notification</span>
    </div>
    <div class="flex flex-row space-x-3 items-center px-4 py-3 hover:bg-gray-100 text-gray-600 hover:text-gray-800  rounded-3xl">
      <Icon name="material-symbols:bookmark-outline-sharp" size="40px" />
      <span class=" font-semibold text-xl">BookMarks</span>
    </div>
    <div class="flex flex-row space-x-3 items-center px-4 py-3 hover:bg-gray-100 text-gray-600 hover:text-gray-800  rounded-3xl">
      <Icon name="material-symbols:person-2-rounded" size="40px" />
      <span class=" font-semibold text-xl">Profile</span>
    </div>
  </header>
</template>
<script lang="ts" setup>
</script>
<style></style>
