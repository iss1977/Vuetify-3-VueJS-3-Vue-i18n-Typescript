<template>
  <section id="hero">
    <v-parallax dark src="@/assets/bgHero.jpg" height="750">
      <v-row  justify="center" class="h-100">
        <v-col cols="10" class="d-flex align-center">
          <v-row justify="center">
            <v-col cols="12" md="6" xl="8" class="text-white">
              <h1 class="text-h3 font-weight-bold mb-14">Vuetify.js</h1>
              <h1 class="font-weight-light">
                Lorem ipsum dolor sit amet consectetur <br />
                adipisicing elit. Maiores porro voluptatibus <br />
                delectus nam optio harum!
              </h1>
              <v-btn
                rounded="xl"
                outlined
                large
                dark
                @click=""
                class="mt-15"
              >
                Saiba mais
                <v-icon class="ml-2">mdi-arrow-down</v-icon>
              </v-btn>
              
            </v-col>
            <v-col cols="12" md="6" xl="4" class="hidden-sm-and-down"> </v-col>
          </v-row>
        </v-col>
      </v-row>
      <div class="svg-border-waves text-white">
        <v-img src="@/assets/img/borderWaves.svg" />
      </div>
    </v-parallax>
  </section>
</template>