<template>
  <section id="about">
    <v-container fluid>
      <v-row class="justify-center align-center">
        <v-col cols="10">
          <v-row class="justify-center align-center">
            <v-col cols="12" md="7">
              <h1 class="font-weight-light text-h3 mb-2">{{ $t('landing.about-section.title') }}</h1>
              <h1 class="font-weight-light text-h4 mb-9">
                {{ $t('landing.about-section.sub-title') }}
              </h1>
              <v-row>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="@/assets/icon4.svg"
                    width="60"
                    height="60"
                    aspect-ratio="1"
                    class="mr-4"
                  />
                  <p class="text-justify">
                    {{ $t('landing.about-section.description-1') }}
                  </p>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="@/assets/icon5.svg"
                    width="60"
                    height="60"
                    aspect-ratio="1"
                    class="mr-4"
                  />
                  <p class="text-justify">
                    {{ $t('landing.about-section.description-2') }}
                  </p>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="@/assets/icon6.svg"
                    width="60"
                    height="60"
                    aspect-ratio="1"
                    class="mr-4"
                  />
                  <p class="text-justify">
                    {{ $t('landing.about-section.description-3') }}
                  </p>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" md="5" class="d-none d-md-flex">
              <v-img
                src="@/assets/ill1.svg"
                class="d-block ml-auto mr-auto"
                max-width="400px"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n({ useScope: 'global' });

</script>

<style scoped>
#about {
  background-color: #f4f7f5;
}
</style>
