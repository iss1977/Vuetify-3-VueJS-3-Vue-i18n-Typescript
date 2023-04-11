<template>
  <nav>
    <v-navigation-drawer
       v-model="drawer"
       app
       temporary
       src="@/assets/bgDrawer.jpg"
       id="navigation-drawer"
     >
       <v-list>
         <v-list-item
            prepend-avatar="@/assets/logo.png"
         >
             <v-list-item-title class="title">{{ $t('landing.navigation.app-title')}}</v-list-item-title>
             <v-list-item-subtitle>{{ $t('landing.navigation.app-subtitle')}}</v-list-item-subtitle>
         </v-list-item>
       </v-list>
 
       <v-divider />
 
       <v-list dense>
         <v-list-item
           v-for="(link, index) in links"
           :key="index"
           link
           :to="link.to"
         >
           <v-list-item-title class="subtitile-1">
             {{link.name}}
           </v-list-item-title>
         </v-list-item>
       </v-list>
       <v-responsive max-width="250" class="text-white mx-3">
         <ChooseLanguage @language-choosen="languageChange()"/>
       </v-responsive>
     </v-navigation-drawer>
 
 
   <v-app-bar flat color="teal-darken-4" image="@/assets/many-many-flags.png">
     <template v-slot:image>
       <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
     </template>
 
     <v-container class="fill-height d-flex align-center py-0"
       v-if="!display.smAndDown.value"
     >
       <v-avatar class="me-10 ms-4" color="grey-darken-1">
         <v-img src="@/assets/vue-i18n-logo.svg" alt="John"></v-img>
       </v-avatar>
 
       <v-btn v-for="link in links" :key="link.name" variant="text" :to="link.to">
         {{ link.name }}
       </v-btn>
 
       <v-spacer></v-spacer>
 
       <v-responsive max-width="200">
         <ChooseLanguage @language-choosen="languageChange()"/>
       </v-responsive>
     </v-container>
 
     <v-container class="fill-height d-flex align-center py-0"
       v-if="display.smAndDown.value"
     >
     <v-toolbar-title>
         <v-img src="@/assets/logo.png" max-width="50px" />
     </v-toolbar-title>
       <v-spacer />
       <v-app-bar-nav-icon
         @click.stop="drawer = !drawer"
         class="mr-4"
         color="white"
       />
     </v-container>
 
     
   </v-app-bar>
 
  </nav>
</template>

<script setup lang="ts">

import ChooseLanguage from '@/components/shared/ChooseLanguage.vue';
import { useI18n } from 'vue-i18n';
import { ref, reactive, watch } from 'vue';
import { DisplayInstance, useDisplay } from 'vuetify';

const drawer = ref(false); // sidemenu on/off

const { t, locale } = useI18n({ useScope: 'global' });

const languageChange = () => {
  setTimeout(() => {
    drawer.value = false
  }, 300);
}


watch(
  () => locale.value ,
  ( newVal, oldVal) => {
      console.log('New locale in anvigation', newVal)
      links[0].name = t('nav.examples.home')
      links[1].name = t('nav.examples.about') //TODO: find a better solution
      links[2].name = t('nav.examples.landing') //TODO: find a better solution
  }
);

const links = reactive([
  { name: t('nav.examples.home'), to: { name: 'Home'} },
  { name: t('nav.examples.about'), to: {name: 'About'} },
  { name: t('nav.examples.landing'), to: { name: 'LandingPage'}},
])

const display: DisplayInstance = useDisplay();

watch(
  () => display.name.value,
  () => {
    console.log('display watch:', display.smAndDown.value)
  }
);

</script>


<style scoped >

nav :deep(#navigation-drawer) {
  color: white;
  background: rgba(44, 71, 68,.8);
}
</style>