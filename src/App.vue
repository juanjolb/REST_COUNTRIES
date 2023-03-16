<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Navigator from "./components/Navigator.vue";
</script>

<template>
  <Navigator />
  <body class="app-container-light">
    <RouterView />
  </body>
</template>

<style scoped></style>
