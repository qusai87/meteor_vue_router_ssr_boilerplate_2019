<!-- /imports/ui/AppMenu.vue -->
<template>
<div class="app-menu">
  <router-link :to="{ name:'home', exact: true }">Home</router-link>
  <router-link :to="{ name:'login' }">Login</router-link>
</div>
</template>

<style scoped>
.app-menu {
  margin: 32px 0;
}

.app-menu a {
  display: inline-block;
  padding: 6px;
  margin: 0 6px;
  border-radius: 3px;
}
.app-menu a.v-link-active {
  color: white;
}
</style>