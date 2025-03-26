<template>
  <header
    class="flex items-center justify-between mb-4 sticky top-0 bg-white p-4 shadow-md z-10"
  >
    <div class="flex items-center">
      <img
        alt="Vinov logo"
        class="mr-2"
        height="50"
        src="/src/assets/vinov.svg"
        width="50"
      />
    </div>
    <div class="flex items-center space-x-4">
      <input
        class="border rounded p-2 w-64"
        placeholder="search product, invention, problem"
        type="text"
      />
      <CalendarDateRangeIcon class="text-gray-600" />
      <BellIcon class="text-gray-600" />
      <UserCircleIcon class="text-gray-600" />
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
