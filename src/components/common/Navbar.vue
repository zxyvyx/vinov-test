<template>
  <header
    class="flex items-center justify-between sticky top-0 bg-white p-2 shadow-md z-10"
  >
    <div class="flex items-center">
      <!-- <img
        alt="Vinov logo"
        class="mr-2 h-full"
        height="50"
        src="/src/assets/vinov.svg"
      /> -->
    </div>
    <div class="flex items-center space-x-4">
      <input
        class="border border-gray-200 rounded p-2 w-64"
        placeholder="search product, invention, problem"
        type="text"
      />
      <CalendarDateRangeIcon class="h-6 text-gray-600" />
      <BellIcon class="h-6 text-gray-600" />
      <UserCircleIcon class="h-6 text-gray-600" />
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
