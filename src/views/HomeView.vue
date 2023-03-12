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
          <p>This paragraph is translated to your preffered language using VueI18n</p>
          <p>You cand also change the language while app is running.</p>
          <p>This page was accessed 30 times.</p>
        
        </v-sheet>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>

</template>

<script lang="ts" setup>
  import HelloWorld from '@/components/HelloWorld.vue'
</script>
