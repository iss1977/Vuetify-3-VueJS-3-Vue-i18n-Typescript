<template>
  <v-container class="fill-height">
    <h1 class="w-100 text-center">{{ props.title }}</h1>

    
  </v-container>
</template>

<script setup lang="ts">
const props = defineProps(['title'])
</script>
