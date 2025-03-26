<template>
  <header class="sticky top-0 bg-white shadow-md z-10">
    <div class="flex items-center justify-between container mx-auto px-4 py-2">
      <div class="flex items-center">
        <img
          alt="Vinov logo"
          class="h-10 object-contain"
          src="/src/assets/vue.svg"
        />
      </div>
      <div class="flex items-center space-x-4">
        <input
          class="border border-gray-200 rounded p-2 w-64"
          placeholder="search product, invention, problem"
          type="text"
        />
        <button class="hover:cursor-pointer">
          <CalendarDateRangeIcon class="h-6 text-gray-600" />
        </button>
        <button class="hover:cursor-pointer">
          <BellIcon class="h-6 text-gray-600" />
        </button>
        <button class="hover:cursor-pointer">
          <UserCircleIcon class="h-6 text-gray-600" />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import {
  BellIcon,
  CalendarDateRangeIcon,
  UserCircleIcon,
} from "@heroicons/vue/24/solid";
</script>
