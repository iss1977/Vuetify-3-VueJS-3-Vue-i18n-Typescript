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
          <p>{{ t("home.change_language_hint", { app_name: "Vue-i18n"})}}</p>
          <p>This text: "{{ myTranslatedText }}" was translated in the script section.</p>
          <v-btn class="my-10" color="primary" @click="count++">Click me</v-btn>
          <v-btn class="my-10 ml-3" color="secondary" @click="count=0">Reset</v-btn>
          <p>{{ $t("home.button_clicks",  { count: count}) }}</p>
        
        </v-sheet>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>

</template>

<script lang="ts" setup>
  import { ref, watch } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { TranslateResult } from "vue-i18n";
  
  import HelloWorld from '@/components/HelloWorld.vue'
  const { t } = useI18n();

  const count = ref(0);

  const myTranslatedText = t("home.change_language_hint") as TranslateResult


</script>
