<template>
  <v-app-bar flat color="teal-darken-4" image="@/assets/many-many-flags.png">
    <template v-slot:image>
      <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
    </template>

    <v-container class="fill-height d-flex align-center py-0">
      <v-avatar class="me-10 ms-4" color="grey-darken-1">
        <v-img src="@/assets/vue-i18n-logo.svg" alt="John"></v-img>
      </v-avatar>

      <v-btn v-for="link in links" :key="link.name" variant="text" :to="link.to">
        {{ link.name }}
      </v-btn>

      <v-spacer></v-spacer>

      <v-responsive max-width="260">
        <ChooseLanguage />
      </v-responsive>
    </v-container>
  </v-app-bar>

  <nav>
    <ul>
      <li>
        <!-- <RouterLink to="/">{{ $t("nav.home") }}</RouterLink> -->
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        <!-- <RouterLink to="/about">{{ $t("nav.about") }}</RouterLink> -->
        <RouterLink to="/about">About</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">

import ChooseLanguage from '@/components/ChooseLanguage.vue';
import { useI18n } from 'vue-i18n';
import { reactive, watch } from 'vue';

const { t, locale } = useI18n({ useScope: 'global' });
console.log('locale', locale)

watch(
  () => locale.value ,
  ( newVal, oldVal) => {
      console.log('New locale in anvigation', newVal)
      links[0].name = t('nav.home')
      links[1].name = t('nav.about') //TODO: find a better solution
  }
);

const links = reactive([
  {name: t('nav.home'), to: '/'},
  {name: t('nav.about'), to: '/about'},
])


</script>