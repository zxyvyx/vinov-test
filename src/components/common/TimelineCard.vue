<script setup>
import {
  ExclamationCircleIcon,
  HandThumbUpIcon,
  LightBulbIcon,
} from "@heroicons/vue/24/solid";
const props = defineProps([
  "user",
  "userId",
  "activities",
  "timelineType",
  "tags",
  "date",
  "embedMedia",
  "embed Title",
  "embedDescription",
  "embedUrl",
  "voteCounters",
  "commentCounters",
  "repostCounters",
]);
</script>

<template>
  <div class="flex items-start space-x-4">
    <img
      alt="{user}"
      class="rounded-full"
      height="50"
      src="https://storage.googleapis.com/a1aa/image/sA3_WEHzmroMl6xHAXprdRjWYyVLGWPojX7fovmpOR4.jpg"
      width="50"
    />
    <div>
      <div class="flex items-center space-x-2">
        <span class="font-bold">{{ user }}</span>
        <span
          v-for="tag in tags"
          :key="tag"
          class="bg-gray-200 text-gray-700 px-2 py-1 rounded"
          >{{ tag }}</span
        >
      </div>
      <p>
        {{ activities }}
      </p>
      <!-- if timeline type embedded then show below -->
      <div v-if="timelineType === 'embedded'">
        <p class="text-gray-600 text-sm truncate">
          {{ embed }}
          <a class="text-blue-500" href="#"> read more </a>
        </p>
        <div class="flex items-center space-x-4 mt-2">
          <span class="text-gray-600 text-sm"> 12 </span>
          <button class="text-blue-500">Comment</button>
          <button class="text-blue-500">Vote</button>
          <button class="text-blue-500">Repost</button>
        </div>
      </div>
    </div>
  </div>
</template>
