<template>
  <v-app>
    <v-main>
      <select v-model="$i18n.locale">
      <option
        v-for="(o, i) in LOCALES"
        :key="i"
        :value="o.value"
        :selected="o.value === defaultLocale"
        >{{ o.caption }}</option
      >
    </select>

    <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
  import BaseLayout from '@/layouts/BaseLayout.vue'
  import { LOCALES } from "@/i18n";
  import { defaultLocale } from "@/i18n";

</script>
