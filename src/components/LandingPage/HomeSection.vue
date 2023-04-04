<template>
  <section id="hero">
    <v-parallax dark src="@/assets/bgHero.jpg" height="750" scale="0.8">

        <div class="h-100"> <!-- needed for correct display on v-parallax with multiple children -->
          <v-row justify="center" class="h-100">
            <v-col cols="10" class="d-flex align-center">
              <v-row justify="center">
                <v-col cols="12" md="6" xl="8" class="text-white">
                  <h1 class="text-h3 font-weight-bold mb-14">{{ $t('landing.home-section.title') }}</h1>
                  <h1 class="font-weight-light">
                    {{ $t('landing.home-section.description') }}
                  </h1>
                  <v-btn rounded="lg" color="transparent" size="large" elevation="16" variant="flat" class="mt-15"
                    id="btn-hero"
                    @click="scrollTo('features')">
                    {{ $t('landing.home-section.action-button') }}
                    <v-icon class="ml-2">mdi-arrow-down</v-icon>
                  </v-btn>
  
                </v-col>
                <v-col cols="12" md="6" xl="4" class="hidden-sm-and-down"> </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <div class="svg-border-waves text-white" id="border-waves-01">
                <v-img src="@/assets/borderWaves.svg" id="img-wave-1" />
              </div>
            </v-col>
          </v-row>
        </div>
    </v-parallax>

    <!-- FEATURES -->

    <v-container fluid id="features" class="pt-12 pb-12 position-relative">
      <v-row class="justify-center">
        <v-col cols="12" sm="10">
          <v-row class="d-flex justify-center align-stretch">
            <v-col v-for="(feature, index) in features" :key="index" cols="12" md="6" lg="4">
              <v-hover v-slot="{ isHovering, props }" open-delay="100">

                <v-card v-bind="props"  class="card mx-3 pa-3 h-100" :class ="{up : isHovering}" :elevation="isHovering? 10: 5" :id="'card'.concat(index.toString())">

                  <div class="d-flex align-center justify-space-around">
                    <v-avatar size="100">
                      <v-img :src="feature.img" alt="John"></v-img>
                    </v-avatar>
                  </div>

                  <v-card-title class="text-h5 text-center">
                    {{ feature.title }}
                  </v-card-title>
                  <v-card-subtitle>
                    {{ feature.subTitle }}
                  </v-card-subtitle>
                  <v-card-text>
                    {{ feature.text }}
                  </v-card-text>
                </v-card>
              </v-hover>

            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <div class="svg-border-waves2 text-white">
        <v-img src="@/assets/wave2.svg"/>
      </div>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n({ useScope: 'global' });

const features = [
  {
    img: (new URL("@/assets/icon1.png", import.meta.url).href),
    title: t('landing.features-section.feature1.title'),
    subTitle: t('landing.features-section.feature1.sub-title'),
    text: t('landing.features-section.feature1.description'),
  },
  {
    img: (new URL("@/assets/icon2.png", import.meta.url).href),
    title: t('landing.features-section.feature2.title'),
    subTitle: t('landing.features-section.feature2.sub-title'),
    text: t('landing.features-section.feature2.description'),
  },
  {
    img: (new URL("@/assets/icon3.png", import.meta.url).href),
    title: t('landing.features-section.feature3.title'),
    subTitle: t('landing.features-section.feature3.sub-title'),
    text: t('landing.features-section.feature3.description'),
  },
];

function scrollTo(elementID: string){
  document?.getElementById(elementID)?.scrollIntoView({block: "start", behavior: "smooth"});
}

</script>  


<style lang="scss">
#btn-hero {
  border-color: gray;
  border-bottom-width: thin;
  border-top-width: thin;
}

.svg-border-waves .v-img {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}

#features {
  z-index: 0;
  background-image: url("@/assets/features-pattern.svg");
  // background-attachment: fixed;
   background-position: center;
   background-size: cover;
   background-color: #ffffff;
   background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='60' height='60' patternTransform='scale(14) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0,0%,100%,1)'/><path d='M0 40.438c3.235 0 6.096 1.79 6.992 4.48 1.035 3.104.483 6.002-1.586 8.209C3.476 55.194 2.53 57.605 2.527 60M0 19.562c3.22 0 5.766-1.241 7.008-4.828 1.034-3.103.417-5.793-1.653-8C3.337 4.716 2.495 2.313 2.527 0m54.946 0c-.001 2.395-.95 4.806-2.88 6.873-2.068 2.207-2.62 5.105-1.585 8.209.896 2.69 3.757 4.48 6.992 4.48m-30-9.125c-3.235 0-6.096 1.791-6.992 4.481-1.035 3.104-.483 6.002 1.586 8.209 1.93 2.067 2.877 4.478 2.879 6.873-.001 2.395-.95 4.806-2.88 6.873-2.068 2.207-2.62 5.105-1.585 8.209.896 2.69 3.757 4.48 6.992 4.48 3.22 0 5.766-1.241 7.008-4.828 1.034-3.103.417-5.793-1.653-8-2.018-2.018-2.86-4.421-2.828-6.734-.033-2.313.81-4.716 2.828-6.734 1.294-1.38 2.019-2.948 2.13-4.688.066-1.044-.09-2.15-.477-3.314-1.242-3.587-3.787-4.827-7.008-4.827zm30 30c-3.235 0-6.096 1.791-6.992 4.481-1.035 3.104-.483 6.002 1.586 8.209 1.93 2.067 2.877 4.478 2.879 6.873'  stroke-width='1' stroke='hsla(232, 39%, 15%, 0.03)' fill='none'/><path d='M59.985 32.527c-2.313-.033-4.716.81-6.735 2.828-1.379 1.294-2.947 2.019-4.687 2.13-1.044.066-2.15-.09-3.314-.477-3.587-1.242-4.827-3.787-4.827-7.008 0-3.235 1.791-6.096 4.48-6.992 1.165-.388 2.3-.553 3.38-.498 1.8.09 3.45.79 4.83 2.084 2.067 1.93 4.478 2.877 6.873 2.879M10.438 0c0 3.22 1.241 5.766 4.828 7.008 3.103 1.034 5.793.417 8-1.653 2.018-2.018 4.421-2.86 6.734-2.828 2.313-.033 4.716.81 6.734 2.828 1.38 1.294 2.948 2.019 4.688 2.13 1.044.066 2.15-.09 3.314-.477C48.323 5.766 49.563 3.22 49.563 0M0 32.527c2.313-.033 4.716.81 6.734 2.828 1.38 1.294 2.948 2.019 4.688 2.13 1.044.066 2.15-.09 3.314-.477 3.587-1.242 4.827-3.787 4.827-7.008 0-3.235-1.791-6.096-4.481-6.992-1.164-.388-2.298-.553-3.379-.498-1.8.09-3.45.79-4.83 2.084C4.806 26.524 2.395 27.47 0 27.473M49.563 60c0-3.235-1.791-6.096-4.481-6.992-3.104-1.035-6.002-.483-8.209 1.586-2.067 1.93-4.478 2.877-6.873 2.879-2.395-.001-4.806-.95-6.873-2.88-1.38-1.292-3.027-1.992-4.828-2.083a8.191 8.191 0 00-.82 0h0a9.62 9.62 0 00-2.561.498c-2.69.896-4.48 3.757-4.48 6.992'  stroke-width='1' stroke='hsla(232, 39%, 15%, 0.07)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");

   scroll-margin-top: 50px; // used by programatic scrolling
}

.svg-border-waves img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-bottom: -2px;
  z-index: 10;
}

#features {
  background-color: transparent;
  isolation: isolate;
}

.svg-border-waves2{
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index:-1;
  background-color: transparent;

}

#img-wave-1> {
  img {
    object-fit: fill;
  }
}

.card {
  min-height: 300px;
  
  padding: 10px;
  border-radius: 35px 5px 30px 5px !important;

  transition-property: all !important;
  transition-duration: 0.2s !important;
  transition-timing-function: ease-in-out !important;
  transition-delay: 0.1s !important;
  &.up {
    transform: translateY(-20px);
  }
  
  &.up .v-img{
  margin-bottom: 15px;
  transform: scale(1.1) !important;
  }  
}

.v-img {
    transition: transform 0.2s ease-in-out !important;
  }

.card h1 {
  margin-bottom: 10px;
}



</style>