<script setup>
const props = defineProps([
  "title",
  "description",
  "image",
  "author",
  "imageUrl",
  "url",
]);
</script>

<template>
  <div class="flex flex-col gap-1">
    <img :alt="title" class="mb-2 h-50 object-cover" :src="image" />
    <p class="text-black text-md font-bold">{{ title || "-" }}</p>
    <p class="text-gray-600 text-sm truncate">
      {{ description || "-" }}
    </p>
    <a
      class="bg-blue-500 text-white text-center px-4 py-2 rounded w-full"
      :href="url"
    >
      Join This Program
    </a>
  </div>
</template>
