<template>
    <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'

try {
  localStorage.getItem('loggedIn')
} catch (error) {
  localStorage.setItem('loggedIn', 'false')
}

</script>

<style scoped>

</style>
