<template>
  <section id="hero">
    <v-parallax dark src="@/assets/bgHero.jpg" height="750">
      <div class="h-100"> <!-- needed for correct display on v-parallax with multiple children -->
        <v-row justify="center" class="h-100">
          <v-col cols="10" class="d-flex align-center">
            <v-row justify="center">
              <v-col cols="12" md="6" xl="8" class="text-white">
                <h1 class="text-h3 font-weight-bold mb-14">Vuetify.js</h1>
                <h1 class="font-weight-light">
                  Lorem ipsum dolor sit amet consectetur <br />
                  adipisicing elit. Maiores porro voluptatibus <br />
                  delectus nam optio harum!
                </h1>
                <v-btn rounded="lg" color="transparent" size="large" elevation="16" variant="flat" @click="" class="mt-15"
                  id="btn-hero">
                  Saiba mais
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

    <v-container fluid id="features" class="mt-2">
      <v-row class="justify-center">
        <v-col cols="10">
          <v-row>
            <v-col v-for="(feature, index) in features" :key="index">
              <v-hover v-slot="{ isHovering, props }" open-delay="100">

                <v-card v-bind="props"  class="card mx-3 pa-3" :elevation="isHovering? 10: 5" :id="'card'.concat(index.toString())">

                  <div class="d-flex align-center justify-space-around">
                    <v-avatar size="100">
                      <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img>
                    </v-avatar>
                  </div>

                  <v-card-title class="text-h5 text-center">
                    {{ feature.title }}
                  </v-card-title>
                  <v-card-subtitle>
                    {{ feature.text }}
                  </v-card-subtitle>
                  <v-card-text>
                    I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time
                    for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!
                    Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find
                    a way to escape.
                  </v-card-text>
                </v-card>
              </v-hover>

            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const features = [
  {
    img: ("@/assets/img/icon2.png"),
    title: "Design Limpo",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    img: ("@/assets/img/icon1.png"),
    title: "Dados Seguros",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    img: ("@/assets/img/icon3.png"),
    title: "Código Aberto",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];


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

#hero {
  z-index: 0;
}

.svg-border-waves img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-bottom: -2px;
  z-index: 10;
}

#img-wave-1> {
  img {
    object-fit: fill;
  }
}

.card {
  min-height: 300px;
  padding: 10px;
  transition: 0.5s ease-out;
}

.card h1 {
  margin-bottom: 10px;
}

.card .v-img {
  margin-bottom: 15px;
  transition: 0.75s;
}


.up {
  transform: translateY(-20px);
  transition: 0.5s ease-out;
}
</style>