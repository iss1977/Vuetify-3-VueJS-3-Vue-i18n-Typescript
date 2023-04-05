<template>
  <section id="download" class="d-flex align-center">
    <v-container fluid>
      <v-row class="align-center justify-center">
        <v-col cols="11">
          <v-row class="align-center justify-center">
            <v-col sm="4" class="d-none d-md-flex">
              <v-img src="@/assets/ill2.svg" class="d-block ml-auto mr-auto" max-width="350px" />
            </v-col>
            <v-col cols="12" sm="8" class="text-white text-left">
              <h1 class="font-weight-light text-h3 mb-5">{{ $t('landing.download-section.title') }}</h1>
              <h1 class="font-weight-light text-h5 mb-4">
                {{ $t('landing.download-section.text') }}
              </h1>
              <v-btn rounded outlined href="https://github.com/" target="_blank" large color="white" class="mt-4">
                <v-icon class="mr-2">
                  mdi-github
                </v-icon>
                Git Hub
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped lang="scss">
#download {
  background-image: url("@/assets/bgDownload.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 500px;
  scroll-margin-top: 100px; // used by programatic scrolling
}

#download .container,
#download .row {
  height: 100%;
}
</style>