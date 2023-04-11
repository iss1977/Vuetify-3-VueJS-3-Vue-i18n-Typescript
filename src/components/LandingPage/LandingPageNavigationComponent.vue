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
            <v-list-item-title class="title">{{ $t('landing.navigation.app-title')}}</v-list-item-title>
            <v-list-item-subtitle>{{ $t('landing.navigation.app-subtitle')}}</v-list-item-subtitle>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list dense>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          link
          :to="item.toLink"
          @click="scrollTo(item.scrollToId)"
        >
          <template v-slot:prepend>
            <v-icon>{{ item.icon }}</v-icon>
          </template>
            <v-list-item-title class="subtitile-1">
              {{item.displayText}}
            </v-list-item-title>
        </v-list-item>
      </v-list>
      <v-responsive max-width="250" class="text-white mx-3">
        <ChooseLanguage @language-choosen="languageChange"/>
      </v-responsive>
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
      <div class="text-white d-flex align-center"
        v-else
        v-for="(item, index) in items"
        :key="index"
      >
        <v-btn variant="text" 
          :to="item.toLink"
          @click="scrollTo(item.scrollToId)"
        >
          <v-icon :icon="item.icon"></v-icon>
          <span class="mx-2">{{ item.displayText}}</span>
        </v-btn>
      </div>
      <v-responsive v-if="!isXs" max-width="250" class="text-white mx-3">
        <ChooseLanguage  @language-choosen="languageChange"/>
      </v-responsive>

      
    </v-app-bar>


    
  </div>
</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ChooseLanguage from '@/components/shared/ChooseLanguage.vue';

const props = defineProps({
  scrolled: {
    type: Boolean,
    required: true,
    default: false
  }
});

const languageChange = () => {
  setTimeout(() => {
    drawer.value = false
  }, 300);
}

const isWindowScrolled = ref(props.scrolled); // used for app bar color

console.log('props.scrolled', props)

const drawer = ref(false);
const isXs = ref(false);

interface Items {
  icon: string;
  displayText: string;
  toLink: string;
  scrollToId: string
}
const items: Items[]=  [
  {icon: "mdi-home-outline", displayText: "Home", toLink:"/", scrollToId: ""},
  {icon: "mdi-information-outline", displayText: "About", toLink:"", scrollToId: "features"},
  {icon: "mdi-download-box-outline", displayText: "Download", toLink:"", scrollToId: "download"},
  {icon: "mdi-currency-usd", displayText: "Priceing", toLink:"", scrollToId: "pricing"},
  {icon: "mdi-email-outline", displayText: "Contact", toLink:"", scrollToId: "contact"},
];

  const link = '/';


const color = "transparent"
const flat = false;

function onResize(){
  isXs.value = window.innerWidth < 950;
};

onMounted( () => {
  onResize();
  window.addEventListener("resize", onResize, { passive: true });
});

function scrollTo(elementID: string){
  if (!elementID) return;
  document?.getElementById(elementID)?.scrollIntoView({block: "start", behavior: "smooth"});
  drawer.value = false;
}


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

