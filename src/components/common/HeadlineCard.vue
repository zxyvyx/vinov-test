<script setup>
import { HandThumbUpIcon } from "@heroicons/vue/24/solid";

const props = defineProps([
  "title",
  "description",
  "author",
  "date",
  "tags",
  "counterLike",
  "url",
]);
</script>

<template>
  <div class="bg-white p-4 rounded border border-gray-200 flex flex-col gap-2">
    <div class="relative">
      <img
        :alt="title"
        class="mb-2 w-full"
        src="https://storage.googleapis.com/a1aa/image/fUoKgTH6thjg9bUWe5yeZi62JZBpgeXT3IFT9H1GiK4.jpg"
      />
      <div
        class="flex flex-row flex-wrap gap-1 mb-2 absolute top-0 left-0 w-full m-2"
      >
        <span
          v-for="tag in tags"
          :key="tag"
          class="bg-orange-200 text-sm text-black px-2 py-0.5 rounded"
          >{{ tag }}</span
        >
      </div>
    </div>
    <div class="flex flex-col gap-0.5">
      <div class="flex items-center gap-1">
        <span class="text-gray-600 text-sm"> {{ counterLike || 0 }} </span>
        <HandThumbUpIcon class="h-5 text-gray-400" />
      </div>
      <p class="text-gray-500 italic text-sm">
        {{ author || "Unknown Author" }} - {{ date || "DD/MM/YYYY" }}
      </p>
    </div>
    <div class="flex flex-col gap-1">
      <h3 class="text-lg text-blue-500 font-bold">{{ title || "-" }}</h3>
      <p class="text-gray-600 text-sm truncate">
        {{ description || "-" }}
      </p>
    </div>
    <div class="flex flex-0 justify-between items-center">
      <a :href="url" class="text-blue-500"> Read More</a>
      <button
        class="hover:cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        <HandThumbUpIcon class="h-5 text-white" />
      </button>
    </div>
  </div>
</template>
