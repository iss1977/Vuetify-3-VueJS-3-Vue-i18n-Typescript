<template>
  <v-container>
    <h1>This is about Page</h1>
    <p>Locale here is: </p>
    <div>
      {{ locale }}
    </div>
    <h2>{{ t("hello") }} = does not exists.</h2>
  </v-container>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

   const { t, n, locale } = useI18n({
    locale:'qa',
    inheritLocale: false,
    messages :{
      qa: {
        hello: "Hello in qa Language"
      }
    }
  });
  
</script>
