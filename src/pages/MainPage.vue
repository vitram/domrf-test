<script setup lang="ts">
  import {RouterView} from 'vue-router';
  import HeaderComponent from '../shared/ui/TheHeader/index';
</script>

<template>
  <div class="container">
    <HeaderComponent />
    <RouterView />
  </div>
</template>