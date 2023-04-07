<template>
  <v-select v-model="selected" :items="items" outlined label="Select language" density="comfortable" return-object
    :hide-details="true" :menu-props="{ closeOnContentClick: true }" light>
    <template v-slot:item="{ item, props }">
      <v-list-item :title="item.title" @click="updateLanguage(item.value)" lines="one" density="compact" :item="item">
        <template v-slot:prepend="{ }">
          <!-- <v-avatar :image="item.value.img" size="x-small"></v-avatar> -->
          <!-- <DeIconSVG height="15px"/> -->
          <component v-bind:is="item.value.component" height="15px"></component>    
        </template>
        <template v-slot:title="{title}">
          <p class="text-body-2">{{ title }}</p>
        </template>
      </v-list-item>
    </template>

    <template v-slot:selection=" {item}">
      <!-- <v-img class="bg-white align-self-center mr-3" width="20" height="15" aspect-ratio="4 / 3"
        :src="selected.img" cover 
      ></v-img> -->
      <!-- <component v-bind:is="item.component"></component> -->
      <span>
        <component v-bind:is="item.value.component" height="15px"></component>  
        {{ selected.title }}
      </span>
    </template>
  </v-select>

</template>


<script setup lang="ts">

import { savedLocale } from '@/tools/storageLocale';
import { ComponentPublicInstance, Ref, onUpdated, ref } from 'vue';
import  DeIconSVG  from '@/components/icons/DeIconSVG.vue';
import  EnIconSVG  from '@/components/icons/EnIconSVG.vue';
import  RoIconSVG  from '@/components/icons/RoIconSVG.vue';

import { useI18n } from 'vue-i18n';
const t = useI18n();

type ItemType = {
  title: string,
  value: string,
  component: typeof DeIconSVG
}

const component = DeIconSVG;

const items: ItemType[] = [
  {
    title: "English",
    value: "en",
    component: EnIconSVG,
  },
  {
    title: "Deutsch",
    value: "de",
    component: DeIconSVG,
  },
  {
    title: "Româna",
    value: "ro",
    component: RoIconSVG,
  },
]
const selected:  Ref<ItemType> = ref<ItemType>(items[0])

const updateLanguage = (event: ItemType) => {
  selected.value = event
  t.locale.value = event.value;
  savedLocale.language = event.value; // save to localStorage
}

// set the v-select to the current langguage
onUpdated(() => {
  console.log(t.locale.value)
  const found = items.find( (item) => item.value===t.locale.value)
  selected.value = found ? found : selected.value;
});


</script>

<style>
#flag-lang-selector:hover {
  background-color: rgb(102, 148, 179);
}
</style>