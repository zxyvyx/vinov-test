<script setup>
import {
  Bars3Icon,
  BellIcon,
  CalendarDateRangeIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/vue/24/solid";

import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
} from "@headlessui/vue";

const isOpen = ref(false);

function openModal(value) {
  isOpen.value = value;
}
</script>

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
      <div class="hidden sm:flex items-center space-x-4">
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
      <button class="hover:cursor-pointer sm:hidden" @click="openModal">
        <Bars3Icon class="h-6 text-gray-600 sm:hidden" />
      </button>
    </div>
  </header>
  <TransitionRoot appear @close="closeModal" :show="isOpen" as="template">
    <Dialog as="div" :open="isOpen" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
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
                <button class="hover:cursor-pointer" @click="openModal(false)">
                  <XMarkIcon class="h-6 text-gray-600" />
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
