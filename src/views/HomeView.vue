<template>
   <v-container>
    <v-row>
      <v-col
        cols="12"
      >
        <v-sheet
          class="pa-12"
          color="grey-lighten-3"
        >
          <v-sheet
            :elevation="6"
            class="mx-auto ma-6 pa-10 text-center"
           
          >
          <HelloWorld />
          <p>{{ t("home.header") }}</p>
          <p>{{ t("home.change_language_hint")}}</p>
          <p>This page was accessed 30 times.</p>
        
        </v-sheet>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>

</template>

<script lang="ts" setup>
  import HelloWorld from '@/components/HelloWorld.vue'
  import { useI18n } from 'vue-i18n';
  const { t } = useI18n();


</script>
