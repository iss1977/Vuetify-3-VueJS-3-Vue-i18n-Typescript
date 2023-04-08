<template>
  <div>
    <span v-for="langCaption in availableLanguages" :key="langCaption">
      {{ langCaption }}
    </span>
    <span class="text-primary" v-for="locale in availableLocales" :key="`locale-${locale}`">
      {{ locale }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const LOCALES = [
  { value: 'en', caption: 'English' },
  { value: 'de', caption: 'Deutsch' },
  { value: 'ro', caption: 'Romanian' }
]



const availableLanguages = LOCALES.map( (lang) => lang.caption);
const {availableLocales} = useI18n()

</script>