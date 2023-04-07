<template>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-ro" viewBox="0 0 640 480" preserveAspectRatio="1"
      v-bind="$attrs">
      <g fill-rule="evenodd" stroke-width="1pt">
        <path fill="#00319c" d="M0 0h213.3v480H0z" />
        <path fill="#ffde00" d="M213.3 0h213.4v480H213.3z" />
        <path fill="#de2110" d="M426.7 0H640v480H426.7z" />
      </g>
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

div {
  display: inline-block;
}
</style>