<template>
  <section class="pb-12 position-relative" id="contact">
    <v-container fluid >
      <v-row class="align-center justify-center">
        <v-col cols="10">
          <v-row class="justify-center">
            <v-col cols="12" md="5">
              <h1 class="font-weight-light text-h4">{{ $t('landing.contact-section.title')}}</h1>
              <h3 class="font-weight-light mt-3">
                {{ $t('landing.contact-section.description-1')}}
              </h3>
              <h3 class="font-weight-light mt-3">
                {{ $t('landing.contact-section.description-2')}}  
              </h3>
              <h3 class="font-weight-light mt-3">
                {{ $t('landing.contact-section.phone')}}  
              </h3>
              <h3 class="font-weight-light">
                {{ $t('landing.contact-section.email')}}  
              </h3>
            </v-col>
            <v-col cols="12" md="7">
              <v-form ref="form" v-model="valid" :lazy-validation="lazy">
                <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    :label="$t('landing.contact-section.validation-rules-text.name-input-placeholder')"
                    required
                ></v-text-field>

                <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    :label="$t('landing.contact-section.validation-rules-text.email-input-placeholder')"
                    required
                ></v-text-field>

                <v-textarea
                    v-model="textArea"
                    :rules="textAreaRules"
                    :label="$t('landing.contact-section.validation-rules-text.message-input-placeholder')"
                    required
                />

                <v-btn
                    :disabled="!valid"
                    color="primary"
                    :dark="valid"
                    rounded
                    block
                    class="mt-3"
                    @click="submit"
                >
                  {{ $t('landing.contact-section.action-button-text') }}
                </v-btn>
              </v-form>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <div class="svg-border-waves text-white">
    </div>
    <v-snackbar
        v-model="snackbar.enabled"
        timeout="3000"
        right
        top
        :color="snackbar.color"
    >
      {{ snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn
            text
            v-bind="attrs"
            @click="snackbar.enabled = false"
        >
          Fechar
        </v-btn>
      </template>
    </v-snackbar>
  </section>
</template>

<style scoped lang="scss">
#contact {
  background-color: #f4f7f5;
  scroll-margin-top: 50px; // used by programatic scrolling
}

.svg-border-waves {
  background-image: url("@/assets/borderWavesBlue.svg");
  background-position: fill;
  background-repeat: no-repeat;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}

</style>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import{ ref, reactive } from 'vue';

const { t } = useI18n({ useScope: 'global' });

const icons= ["fa-facebook", "fa-twitter", "fa-linkedin", "fa-instagram"];
const valid = ref(true);
const name =  ref('');
const nameRules= [
      (v: string) => !!v || t('landing.contact-section.validation-rules-text.name-error-text-required'),
      (v: string) => (v && v.length >= 6) || t('landing.contact-section.validation-rules-text.name-error-text-min-6-chars'),
    ];
const email = ref('');
const emailRules=  [
      (v: string) => !!v || t('landing.contact-section.validation-rules-text.email-error-required'),
      (v: string) => /.+@.+\..+/.test(v) || t('landing.contact-section.validation-rules-text.email-error-invalid'),
    ];
const textArea = ref('');
const textAreaRules = [  
      (v: string) => !!v || t('landing.contact-section.validation-rules-text.message-error-required'),
      (v: string) => (v && v.length >= 10) || t('landing.contact-section.validation-rules-text.message-error-min-10-chars'),
    ]; 
const lazy = ref(false);

const snackbar= reactive({
      enabled: false,
      text: '',
      color: ''
    })

const submit = () =>  {
      snackbar.text = t('landing.contact-section.snackbar-message-sent-confirmation')
      snackbar.color = "success"
      snackbar.enabled = true
    };

</script>
