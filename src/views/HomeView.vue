<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-sheet class="pa-xs-0 pa-sm-12" color="grey-lighten-3">
          <v-sheet :elevation="6" class="mx-auto ma-6 pa-10 pt-2 text-center">
            <LocalizationInfo class="text-right"/>
            <VSheetTitle :title="t('sheet_title.translations')"/>
            <p>{{ $t("home.change_language_hint", { app_name: "Vue-i18n" }) }}</p>
            <p>{{ $t("home.translation_via_script", { translated: myTranslatedText.value}) }} </p>
            <p>Literal interpolation: {{ $t('home.multiple_local_messages', { msg1: 'Exemple 1', msg2: 'Exemple 2' }) }}</p>
            <v-btn class="my-10" color="primary" @click="count++">Click me</v-btn>
            <v-btn class="my-10 ml-3" color="secondary" @click="count = 0">Reset</v-btn>
            <p>{{ $t("home.button_description") }} {{ $t("home.button_clicks", { count: count }) }}</p>
          </v-sheet>
        </v-sheet>
      </v-col>

      <!-- numbers, currencies -->

      <v-col cols="12">
        <v-sheet class="pa-xs-0 pa-sm-12" color="grey-lighten-3">
          <v-sheet :elevation="6" class="mx-auto ma-6 pa-10 text-center">
            <VSheetTitle :title="t('sheet_title.numbers')"/>
            <p>{{ $n(10000, 'currency') }}</p>
            <p>{{ $n(10000, 'currency', 'ro') }}</p>
            <p>{{ $n(10000, 'currency', 'en', { useGrouping: false }) }}</p>
            <p>{{ $n(987654321, 'currency', { notation: 'compact' }) }}</p>
            <p>{{ $n(0.99123, 'percent') }}</p>
            <p>{{ $n(0.99123, 'percent', { minimumFractionDigits: 2 }) }}</p>
            <p>{{ $n(12.11612345, 'decimal') }}</p>
            <p>{{ $n(12145281111, 'decimal', 'ro') }}</p>
            <p>Translation with interpolation:</p>
            <p>{{ $t("donations.raised_amount", { donations: $n(36000, "currency") }) }}</p>

            <!-- "i18n-t" tag is only needed to prevent console warning : 
              [intlify] Not found parent scope. use the global scope. -->
            <i18n-t scope="global" keypath="home.change_language_hint"> 
              <i18n-n tag="span" :value="1234" :format="{ key: 'currency', currency: 'EUR' }">
                <template #currency="slotProps">
                  <span style="color: green">{{ slotProps.currency }}</span>
                </template>
                <template #integer="slotProps">
                  <span style="font-weight: bold">{{ slotProps.integer }}</span>
                </template>
                <template #group="slotProps">
                  <span style="font-weight: bold">{{ slotProps.group }}</span>
                </template>
                <template #fraction="slotProps">
                  <span style="font-size: small">{{ slotProps.fraction }}</span>
                </template>
              </i18n-n>
            </i18n-t>

          </v-sheet>
        </v-sheet>
      </v-col>


    </v-row>

    <v-row>
      <v-col cols="12">
        <DateTimeViewComponent />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { TranslateResult } from "vue-i18n";

import VSheetTitle from '@/components/VSheetTitle.vue'
import DateTimeViewComponent from '@/components/DateTimeViewComponent.vue';
import LocalizationInfo from '@/components/info.containers/LocalizationInfo.vue';

const { t, n, locale } = useI18n({ useScope: 'global' });

const count = ref(0);

const myTranslatedText = { value: (t("home.change_language_hint") as TranslateResult)}

watch(
  () => t("home.change_language_hint") ,
  ( newVal, oldVal) => {
    myTranslatedText.value = newVal
  }
);

console.log(myTranslatedText)

</script>
