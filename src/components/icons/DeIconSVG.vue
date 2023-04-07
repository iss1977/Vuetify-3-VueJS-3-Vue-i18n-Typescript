<template>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-de" viewBox="0 0 640 480" preserveAspectRatio="1" v-bind="$attrs">
      <path fill="#ffce00" d="M0 320h640v160H0z" />
      <path d="M0 0h640v160H0z" />
      <path fill="#d00" d="M0 160h640v160H0z" />
    </svg>
  </div>
</template>

<!-- Not mandatory, prevents height attr to be inherited by the "div" tag in the template -->
<script lang="ts">
  export default {
    inheritAttrs: false,
  }
</script>

<script setup lang="ts">
</script>

<style scoped lang="scss">
  svg {
    margin-inline: 5px;
  }
  div{
    display: inline-block;
  }
</style>