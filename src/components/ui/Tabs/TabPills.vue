<script setup>
const props = defineProps(["title", "isActive"]);
</script>

<template>
  <div class="bg-white px-4 pt-2 pb-10 rounded-lg border border-gray-200">
    <span :class="isActive ? 'text-blue-500' : 'text-black'">{{ title }}</span>
  </div>
</template>
