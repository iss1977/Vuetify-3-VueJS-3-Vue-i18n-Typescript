<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      dark
      src="@/assets/bgDrawer.jpg"
      id="navigation-drawer"
    >
      <v-list>
        <v-list-item
           prepend-avatar="@/assets/logo.png"
        >
            <v-list-item-title class="title">Calango</v-list-item-title>
            <v-list-item-subtitle>WEB</v-list-item-subtitle>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list dense>
        <v-list-item
          v-for="([icon, text, link], i) in items"
          :key="i"
          link
          @click=""
        >
          <template v-slot:prepend>
            <v-icon>{{ icon }}</v-icon>
          </template>
            <v-list-item-title class="subtitile-1">
              {{text}}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>


    <v-app-bar
      id="app-bar"
      app
      :flat="!scrolled"
      class="px-5"
      :class="{ scrolled: scrolled }"
    >
      <v-toolbar-title>
        <v-img src="@/assets/logo.png" max-width="50px" />
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="mr-4"
        v-if="isXs"
        color="white"
      />
      <div v-else class="text-white">
        <v-btn text @click="">
          <span class="mr-2">Home</span>
        </v-btn>
        <v-btn text @click="">
          <span class="mr-2">Sobre</span>
        </v-btn>
        <v-btn text @click="">
          <span class="mr-2">Download</span>
        </v-btn>
        <v-btn text @click="">
          <span class="mr-2">Preços</span>
        </v-btn>
        <v-btn rounded outlined text @click="">
          <span class="mr-2">Contate-nos</span>
        </v-btn>
      </div>
    </v-app-bar>


    
  </div>
</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue';

const props = defineProps({
  scrolled: {
    type: Boolean,
    required: true,
    default: false
  }
});

const isWindowScrolled = ref(props.scrolled); // used for app bar color

console.log('props.scrolled', props)

const drawer = ref(false);
const isXs = ref(false);
    const items=  [
      ["mdi-home-outline", "Home", "#hero"],
      ["mdi-information-outline", "Sobre", "#features"],
      ["mdi-download-box-outline", "Download", "#download"],
      ["mdi-currency-usd", "Preços", "#pricing"],
      ["mdi-email-outline", "Contatos", "#contact"],
    ];



const color = "transparent"
const flat = false;

function onResize(){
  isXs.value = window.innerWidth < 850;
};

onMounted( () => {
  onResize();
  window.addEventListener("resize", onResize, { passive: true });
});

</script>


<style  lang="scss">

#app-bar::after{
  content: " ";
  position: absolute;
  top: 0; 
  left: 0;
  width: 100%; 
  height: 100px;  
  opacity: .6; 
  z-index: -1;
}

.v-toolbar {
  transition: 0.6s;
}


#app-bar{
  background: transparent;
  &.scrolled{
    background: rgb(var(--v-theme-secondary),0.8);
  }
}


#navigation-drawer {
  background: rgb(var(--v-theme-secondary), 0.85) !important;
  color: white;
}

</style>

