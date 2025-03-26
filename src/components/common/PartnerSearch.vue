<script setup>
const props = ["title", "description", "author", "imageUrl", "url"];
</script>

<template>
  <div class="flex flex-col">
    <img
      alt="{title}"
      class="mb-2"
      height="100"
      src="https://storage.googleapis.com/a1aa/image/IkX0U3RsqPGMbQq__lrlDW9wPzBPNzsoVaBAni89Waw.jpg"
      width="200"
    />
    <p class="text-gray-600 text-sm">{{ title || "-" }}</p>
    <p class="text-gray-600 text-sm">
      {{ description || "-" }}
    </p>
    <a href="{url}" class="bg-blue-500 text-white px-4 py-2 rounded w-full">
      Join This Program
    </a>
  </div>
</template>
