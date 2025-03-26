<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/common/Navbar.vue";
</script>

<template>
  <Navbar />
  <div>
    <RouterView />
  </div>
</template>
