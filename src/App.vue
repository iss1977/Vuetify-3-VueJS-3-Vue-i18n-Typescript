<template>
  <v-app>
    <v-main class="bg-grey-lighten-5 pt-0 overflow-hidden">
        <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { onMounted, nextTick } from 'vue';
import BaseLayout from '@/layouts/BaseLayout.vue'
import HomeView from './views/HomeView.vue';
import ChooseLanguage from './components/shared/ChooseLanguage.vue';
import { defaultLocale } from "@/i18n";
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

// TODO: Repair this
onMounted(() => nextTick().then(() => {
  requestAnimationFrame(() => {
    console.log('animation frame1')
    requestAnimationFrame(() => {
      console.log('animation frame2')
      const loaderDomElement = document.getElementById('loader')
      loaderDomElement?.parentElement?.removeChild(loaderDomElement);
    });
  })
}));

</script>
