<template>
  <section class="pb-8" id="contact">
    <v-container fluid>
      <v-row class="align-center justify-center">
        <v-col cols="10">
          <v-row class="justify-center">
            <v-col cols="12" md="5">
              <h1 class="font-weight-light text-h4">Contate-nos</h1>
              <h3 class="font-weight-light mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                explicabo commodi quisquam asperiores dolore ad enim provident
                veniam perferendis voluptate, perspiciatis.
              </h3>
              <h3 class="font-weight-light mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </h3>
              <h3 class="font-weight-light mt-3">
                Telefone: +xx (xx) xxxxx-xxxx
              </h3>
              <h3 class="font-weight-light">
                Email: email@email.com
              </h3>
            </v-col>
            <v-col cols="12" md="7">
              <v-form ref="form" v-model="valid" :lazy-validation="lazy">
                <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    label="Nome"
                    required
                ></v-text-field>

                <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                ></v-text-field>

                <v-textarea
                    v-model="textArea"
                    :rules="textAreaRules"
                    label="Mensagem"
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
                  Enviar
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

<style scoped>
#contact {
  background-color: #f4f7f5;
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
import{ ref, reactive } from 'vue';
const icons= ["fa-facebook", "fa-twitter", "fa-linkedin", "fa-instagram"];
const valid = ref(true);
const name =  ref('');
const nameRules= [
      (v: string) => !!v || "O campo nome é obrigatório",
      (v: string) => (v && v.length >= 6) || "O nome precisa ter mais de 6 caracteres",
    ];
const email = ref('');
const emailRules=  [
      (v: string) => !!v || "O campo email é obrigatório",
      (v: string) => /.+@.+\..+/.test(v) || "O E-mail precisa ser válido",
    ];
const textArea = ref('');
const textAreaRules = [  
      (v: string) => !!v || "O campo de texto é obrigatório",
      (v: string) => (v && v.length >= 10) || "Mínimo de 10 caracteres",
    ]; 
const lazy = ref(false);

const snackbar= reactive({
      enabled: false,
      text: '',
      color: ''
    })

const submit = () =>  {
      snackbar.text = "Mensagem enviada com sucesso"
      snackbar.color = "success"
      snackbar.enabled = true
    };

</script>
