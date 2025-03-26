<script setup>
import {
  ArrowPathRoundedSquareIcon,
  ArrowUpIcon,
  ChatBubbleLeftIcon,
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
  "url",
  "urlText",
  "date",
  "embed",
  "voteCounters",
  "commentCounters",
  "repostCounters",
]);
</script>

<template>
  <div class="flex flex-col sm:flex-row w-full gap-x-4 gap-y-2">
    <div class="flex flex-row items-center sm:items-start gap-2">
      <img
        :alt="user"
        class="rounded-full h-10"
        src="https://storage.googleapis.com/a1aa/image/sA3_WEHzmroMl6xHAXprdRjWYyVLGWPojX7fovmpOR4.jpg"
      />
      <span class="block sm:hidden font-bold">{{ user }}</span>
    </div>
    <div class="flex flex-col gap-2 w-full">
      <div class="flex items-center space-x-2">
        <span class="hidden sm:block font-bold">{{ user }}</span>
        <span
          v-for="tag in tags"
          :key="tag"
          class="bg-gray-200 text-xs text-gray-700 px-2.5 py-1 rounded-full whitespace-nowrap"
          >{{ tag }}</span
        >
      </div>
      <p>
        {{ activities }}
        <a :href="url" v-if="url !== null" class="text-blue-500">{{ urlText }} </a>
      </p>
      <div v-if="embed" class="w-full ">
        <div class="flex gap-1.5">
          <img
            :alt="embed.embedTitle"
            class="mb-2 h-20 object-cover"
            :src="embed.embedMedia"
          />
          <p class="text-gray-600 text-sm">
            <span class="line-clamp-2">
              {{ embed.embedDescription }}

            </span>
            <a class="text-blue-500" :href="embed.embedUrl">Read more </a>
            <div class="flex gap-2">
              <div class="flex items-center gap-1">
                <ArrowUpIcon class="h-3 text-gray-500" />
                <span class="text-black text-sm">{{
                  embed.embedVoteCounters
                }}</span>
              </div>
              <div class="flex items-center gap-1">
                <ChatBubbleLeftIcon class="h-3 text-gray-500" />
                <span class="text-black text-sm">{{
                  embed.embedVoteCounters
                }}</span>
              </div>
            </div>
          </p>
        </div>
        <div class="flex items-center gap-4 mt-2">
          <button class="text-blue-500 bg-gray-100 flex items-center rounded px-2 py-1 gap-1.5 hover:bg-gray-200 hover:cursor-pointer">
            <span class="text-gray-600 text-sm w-full">{{
              embed.embedVoteCounters
            }}</span>
            <div class="flex gap-2 items-center text-blue-500"><span class="hidden sm:block">Vote</span> <ArrowUpIcon class="h-3 text-blue-500" /></div>
          </button>
          <button class="text-blue-500 bg-gray-100 flex items-center rounded px-2 py-1 gap-1.5 hover:bg-gray-200 hover:cursor-pointer">
            <span class="text-gray-600 text-sm">{{
              embed.embedVoteCounters
            }}</span>
            <div class="flex gap-2 items-center text-blue-500"><span class="hidden sm:block">Comment</span> <ChatBubbleLeftIcon class="h-3 text-blue-500" /></div>
          </button>
          <button class="text-blue-500 bg-gray-100 flex items-center rounded px-2 py-1 gap-1.5 hover:bg-gray-200 hover:cursor-pointer">
            <span class="text-gray-600 text-sm">{{
              embed.embedVoteCounters
            }}</span>
            <div class="flex gap-2 items-center text-blue-500"><span class="hidden sm:block">Repost</span> <ArrowPathRoundedSquareIcon class="h-3 text-blue-500" /></div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
