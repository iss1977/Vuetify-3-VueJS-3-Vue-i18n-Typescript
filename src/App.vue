<template>
  <v-app>
    

    <v-main class="bg-grey-lighten-5">
      <v-container>
        <v-row>
          <v-col>
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
          </v-col>
        </v-row>
      </v-container>

    <h1>App.vue</h1>
    <h2>Global locale:</h2>
    <p>{{ locale }}</p>
    <hr>
    <h5>Home view with router:</h5>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
  import BaseLayout from '@/layouts/BaseLayout.vue'
  import HomeView from './views/HomeView.vue';
  import ChooseLanguage from './components/ChooseLanguage.vue';
  import { LOCALES } from "@/i18n";
  import { defaultLocale } from "@/i18n";
import { useI18n } from 'vue-i18n';

  const { locale } = useI18n();


</script>
