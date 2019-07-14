<!-- /imports/ui/AppLayout.vue -->
<template>
<div class="app-layout">
  <!-- Menu -->
  <app-menu></app-menu>

  <!-- Route content -->
  <router-view></router-view>
</div>
</template>

<script>

import AppMenu from '../components/AppMenu.vue';

export default {
  components: {
    AppMenu
  }
}
</script>