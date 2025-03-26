<script setup>
const props = defineProps(["title", "isActive"]);
</script>

<template>
  <button
    class="bg-white px-4 pt-2 pb-10 rounded-lg border border-gray-200 hover:cursor-pointer"
  >
    <span :class="isActive ? 'font-bold text-blue-500' : 'text-black'">{{
      title
    }}</span>
  </button>
</template>
