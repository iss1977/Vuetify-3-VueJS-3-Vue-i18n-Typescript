<template>
  
  <section id="pricing" class="pb-8">
    <v-container fluid>
      <v-row class="justify-center align-center">
        <v-col cols="10">
          <v-card style="width: 100%">
            <h1 class="text-center pt-6 font-weight-light text-h3">{{ $t('landing.pricing-section.title')}}</h1>
            <v-divider class="my-6"></v-divider>
            <v-row class="text-center justify-center">
              <v-col cols="12" md="6" lg="4">
                <div class="flex-center">
                  <v-card-text>
                    <div class="flex-center">
                      <div class="circle1">
                        <div class="circle2">
                          <v-img src="@/assets/paperplane.svg"></v-img>
                        </div>
                      </div>
                    </div>
                    <div class="text--disabled text-uppercase text-h5 my-2">{{ $t('landing.pricing-section.plan-1.plan-title')}}</div>
                    <v-divider class="my-2"/>
                    <div class="text-uppercase blue--text">{{ $t('landing.pricing-section.plan-1.plan-feature1')}}</div>
                    <v-divider class="my-2"/>
                    <div class="text-uppercase blue--text">{{ $t('landing.pricing-section.plan-1.plan-feature2')}}</div>
                    <v-divider class="my-2"/>
                    <div class="text-uppercase blue--text">{{ $t('landing.pricing-section.plan-1.plan-feature3')}}</div>
                    <v-divider class="my-2"/>
                    <div class="text-uppercase text-h4 mt-6 blue--text">{{ $n(20, 'currency') }}</div>
                    <v-btn
                    class="text-none my-6" color="blue-darken-4" rounded variant="outlined"
                    >
                    {{ $t('landing.pricing-section.action-button-text')}}
                    </v-btn>
                  </v-card-text>
                  <v-divider style="margin-right: -23px" vertical v-if="display.smAndUp"></v-divider>
                </div>
                <v-divider class="mx-4" v-if="!display.smAndUp"></v-divider>
              </v-col>
              <v-col cols="12" md="6" lg="4">
                <div class="flex-center">
                  <v-card-text>
                    <div class="flex-center">
                      <div class="circle1">
                        <div class="circle2">
                          <v-img src="@/assets/airplane.svg"/>
                        </div>
                      </div>
                    </div>
                    <div class="text--disabled text-uppercase text-h5 my-2">{{ $t('landing.pricing-section.plan-2.plan-title')}}</div>
                    <v-divider class="my-2"/>
                    <div class="text-uppercase blue--text">{{ $t('landing.pricing-section.plan-2.plan-feature1')}}</div>
                    <v-divider class="my-2"/>
                    <div class="text-uppercase blue--text">{{ $t('landing.pricing-section.plan-2.plan-feature2')}}</div>
                    <v-divider class="my-2"/>
                    <div class="text-uppercase blue--text">{{ $t('landing.pricing-section.plan-2.plan-feature3')}}</div>
                    <v-divider class="my-2"/>
                    <div class="text-uppercase text-h4 mt-6 blue--text">{{ $n(200, 'currency') }}</div>
                    <v-btn
                      class="text-none my-6" color="blue-darken-4" rounded variant="outlined"
                    >
                    {{ $t('landing.pricing-section.action-button-text')}}
                    </v-btn>
                  </v-card-text>
                  <v-divider style="margin-right: -23px" vertical v-if="display.mdAndUp"></v-divider>
                </div>
                <v-divider class="mx-4" v-if="display.smAndUp"></v-divider>
              </v-col>
              <v-col cols="12" md="6" lg="4">
                <div class="flex-center">
                  <v-card-text>
                    <div class="flex-center">
                      <div class="circle1">
                        <div class="circle2">
                          <v-img src="@/assets/aeroplane.svg"/>
                        </div>
                      </div>
                    </div>
                    <div class="text--disabled text-uppercase text-h5 my-2">{{ $t('landing.pricing-section.plan-3.plan-title')}}</div>
                    <v-divider class="my-2"/>
                    <div class="text-uppercase blue--text">{{ $t('landing.pricing-section.plan-3.plan-feature1')}}</div>
                    <v-divider class="my-2"/>
                    <div class="text-uppercase blue--text">{{ $t('landing.pricing-section.plan-3.plan-feature2')}}</div>
                    <v-divider class="my-2"/>
                    <div class="text-uppercase blue--text">{{ $t('landing.pricing-section.plan-3.plan-feature3')}}</div>
                    <v-divider class="my-2"/>
                    <div class="text-uppercase text-h4 mt-6 blue--text">{{ $n(2000, 'currency') }}</div>
                    <v-btn
                      class="text-none my-6" color="blue-darken-4" rounded variant="outlined"
                    >
                    {{ $t('landing.pricing-section.action-button-text')}}
                    </v-btn>
                  </v-card-text>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div class="svg-border-rounded text-light">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="currentColor"
      >
        <path
            d="M0,64L80,90.7C160,117,320,171,480,181.3C640,192,800,160,960,138.7C1120,117,1280,107,1360,101.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </div>
  </section>
</template>

<style lang="scss">
$main_color: #283e79;

ul {
  font-size: 13px;
  line-height: 1.5em;
  margin: 5px 0 15px;
  padding: 0;

  li {
    list-style: none;
    position: relative;
    padding: 0 0 0 20px;
  }

  li {
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 5px;
      width: 10px;
      height: 10px;
      background-color: $main_color;
      border-radius: 50%;
      -moz-border-radius: 50%;
      -webkit-eeborder-radius: 50%;
    }
  }
}
</style>

<style scoped lang="scss">
.header {
  background-color: #283e79;
  color: white;
}

.circle1 {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  background-color: #f0f8ff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle2 {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background-color: #e0effc;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.svg-border-rounded svg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  color: #f4f7f5;
  z-index: -1;
}

#pricing {
  z-index: 0;
  scroll-margin-top: 50px; // used by programatic scrolling
}

.content {
  z-index: 1;
}

svg {
  overflow: hidden;
}

section {
  position: relative;
}
</style>

<script setup lang="ts">
import { watch } from 'vue';
import { computed } from 'vue';
import { DisplayInstance, useDisplay } from 'vuetify';


  
// const size = computed( () => {
//   const currentSize = {md: "large", xl: "x-large"}[this.$vuetify.breakpoint.name];
//         return size ? {[size]: true} : {};

// });
 
const display: DisplayInstance = useDisplay();
console.log('display:', display)

watch(
  () => display.name.value,
  () => {
    console.log('display watch:', display.name.value)
  }
);


</script>