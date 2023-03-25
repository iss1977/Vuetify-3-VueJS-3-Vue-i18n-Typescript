<template>
  <div>
    <div>
      <p>Select date</p>
      <Datepicker v-model="date" :format-locale="ro"  select-text="Alege" cancel-text="Renunt" show-now-button now-button-label="Current" 
      :day-names="dayNames"
      />
      <VueDatePicker v-model="date" :format-locale="ro" format="E" />
    </div>

    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field v-model="message" clearable label="Message" type="datetime-local" variant="outlined">
              <template v-slot:prepend>
                <v-tooltip location="bottom">
                  <template v-slot:activator="{ props }">
                    <v-icon v-bind="props" icon="mdi-help-circle-outline"></v-icon>
                  </template>

                  I'm a tooltip
                </v-tooltip>
              </template>

              <template v-slot:append-inner>
                <v-fade-transition leave-absolute>
                  <v-progress-circular v-if="loading" color="info" indeterminate size="24"></v-progress-circular>

                  <img v-else height="24" width="24" src="https://cdn.vuetifyjs.com/images/logos/v-alt.svg" alt="">
                </v-fade-transition>
              </template>

              <template v-slot:append>
                <v-menu>
                  <template v-slot:activator="{ props }">
                    <v-btn v-bind="props" class="mt-n2">
                      <v-icon icon="mdi-menu" start></v-icon>


                      Menu
                    </v-btn>
                  </template>

                  <v-card>
                    <v-card-text class="pa-1">
                      <v-btn color="primary" size="large" variant="text" @click="loading = !loading">
                        <v-icon icon="mdi-target" start></v-icon>

                        Stop loading
                      </v-btn>
                    </v-card-text>
                  </v-card>
                </v-menu>
              </template>
            </v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>



    <h1>{{ $t("home.header") }}</h1>
    <p>{{ $t("home.created_by", { company: "Lokalise" }) }}</p>
    <p>{{ $t("home.num_visits", 1) }}</p>
    <p>{{ $d(new Date(), "long") }}</p>
  </div>
</template>

<script setup lang="ts">
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

import { ro } from 'date-fns/locale';
import { ja } from 'date-fns/locale';



import { ref } from 'vue';

const message = ref('')
const loading = ref(true)
const currentDate = ref(new Date());
const date = ref();
const doConsole = (data: any) => console.log(data)
const dayNames = ((lang: string, weekStart: number) => {
  console.log('Lang, Weekkstart',lang,weekStart)
  return ['1','2','3','4','5','6','7']
})
</script>