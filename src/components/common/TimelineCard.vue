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
// const {
//   embedMedia,
//   embedTitle,
//   embedMention,
//   embedDescription,
//   embedUrl,
//   embedVoteCounters,
//   embedCommentCounters,
//   embedRepostCounters,
// } = props.embed;
</script>

<template>
  <div class="flex items-start w-full space-x-4">
    <img
      :alt="user"
      class="rounded-full"
      height="50"
      src="https://storage.googleapis.com/a1aa/image/sA3_WEHzmroMl6xHAXprdRjWYyVLGWPojX7fovmpOR4.jpg"
      width="50"
    />
    <div class="w-full">
      <div class="flex items-center space-x-2">
        <span class="font-bold">{{ user }}</span>
        <span
          v-for="tag in tags"
          :key="tag"
          class="bg-gray-200 text-xs text-gray-700 px-2.5 py-1 rounded-full"
          >{{ tag }}</span
        >
      </div>
      <p>
        {{ activities }}
        <a :href="url" v-if="url !== null" class="text-blue-500">{{ urlText }} </a>
      </p>
      <div v-if="embed" class="">
        <div class="flex gap-1.5">
          <div>
            <img
              :alt="embed.embedTitle"
              class="mb-2 h-20 object-cover"
              :src="embed.embedMedia"
            />
          </div>
          <p class="text-gray-600 text-sm">
            {{ embed.embedDescription }}...
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
        <div class="flex items-center space-x-4 mt-2">
          <button class="text-blue-500 bg-gray-100 flex items-center rounded px-2 py-1 gap-1.5">
            <span class="text-gray-600 text-sm">{{
              embed.embedVoteCounters
            }}</span>
            <div class="flex gap-2 items-center text-blue-500">Vote <ArrowUpIcon class="h-3 text-blue-500" /></div>
          </button>
          <button class="text-blue-500 bg-gray-100 flex items-center rounded px-2 py-1 gap-1.5">
            <span class="text-gray-600 text-sm">{{
              embed.embedVoteCounters
            }}</span>
            <div class="flex gap-2 items-center text-blue-500">Comment <ChatBubbleLeftIcon class="h-3 text-blue-500" /></div>
          </button>
          <button class="text-blue-500 bg-gray-100 flex items-center rounded px-2 py-1 gap-1.5">
            <span class="text-gray-600 text-sm">{{
              embed.embedVoteCounters
            }}</span>
            <div class="flex gap-2 items-center text-blue-500">Repost <ArrowPathRoundedSquareIcon class="h-3 text-blue-500" /></div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
