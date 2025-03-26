<script setup>
const props = defineProps(["progress"]);
</script>

<template>
  <div class="w-full bg-gray-200 rounded">
    <div
      class="bg-blue-500 text-xs leading-none py-1 text-center text-white rounded"
      :style="{ width: `${progress}%` }"
    >
      {{ progress }}%
    </div>
  </div>
</template>
