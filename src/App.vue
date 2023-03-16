<template>
  <v-app>
    <v-app-bar flat 
      color="teal-darken-4"
      image="https://picsum.photos/1920/1080?random"
    >
      <template v-slot:image>
        <v-img
          gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-container class="fill-height d-flex align-center py-0">
        <v-avatar
          class="me-10 ms-4"
          color="grey-darken-1"
          
          
        >
        <v-img
          src="@/assets/vue-i18n-logo.svg"
          alt="John"
        ></v-img>
        </v-avatar>

        <v-btn
          v-for="link in links"
          :key="link"
          variant="text"
        >
          {{ link }}
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <ChooseLanguage />
        </v-responsive>
      </v-container>
    </v-app-bar>

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

  const links= [
        'Dashboard',
        'Messages',
        'Profile',
        'Updates',
      ]

</script>
