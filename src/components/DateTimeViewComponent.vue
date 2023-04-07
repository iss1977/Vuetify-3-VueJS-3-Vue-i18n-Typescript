<template>
  <v-sheet class="pa-xs-0 pa-sm-12" color="grey-lighten-3">
    <v-sheet :elevation="6" class="mx-auto ma-6 pa-10 text-center">
      <p class="text-left">{{ $t('date_picker.select_date') }}</p>
      <Datepicker calendar-class-name="dp-date-intl-calendar" v-model="date" :format="format" :auto-apply="false"
        select-text="Alege" cancel-text="Renunt" show-now-button :day-names="dayNames" placeholder="Select Date"
        week-start="1" :preview-format="format" :enable-time-picker="false"
        ref="vueDatePickerRef"
      >
        <template #now-button="{ selectCurrentDate }">
          <v-btn variant="outlined" size="small" color="primary" @click="selectCurrentDate">
            Acum
          </v-btn>
        </template>

        <template #action-row="{ selectDate, closePicker }">
          <div class="ml-auto">
            <v-btn size="small" flat color="transparent" @click="closePicker">Cancel</v-btn>
            <v-btn size="small" v-btn flat color="primary" @click="selectDate">Select</v-btn>
          </div>
        </template>

      </Datepicker>
      <p class="mt-6">{{ $t('date_picker.sample_dates_long_short') }}:</p>
      <p>{{ $t('date_picker.short_date_time_text') }}: {{ $d(date,'short') }}</p>
      <p>{{ $t('date_picker.short_date_text') }}: {{ $d(date,'shortOnlyDate') }}</p>
      <p>{{ $t('date_picker.long_date_text') }}: {{ $d(date,'long') }}</p>
      <p class="mt-10"> {{ $t('date_picker.translation_using_i18n-d_tag')}}:</p>
      <i18n-d tag="span" :value="new Date()" locale="ro" :format="{ key: 'long' }">
        <template #month="props">
          
          <span class="font-weight-bold">
            {{ props.month }}
          </span>  
          
          <span style="color: green">{{ props.era }}</span>
        </template>
        <template #literal="props">
          <span style="color: red">{{ props.literal }}</span>
        </template>
      </i18n-d>

    </v-sheet>
  </v-sheet>
</template>

<script setup lang="ts">
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

import { ro } from 'date-fns/locale'; // used by Datepicker for localization

import { useI18n } from 'vue-i18n';
import { ref, watch } from 'vue';

const emit = defineEmits(['close-picker', 'select-date', 'invalid-select']);

const { d, t, locale } = useI18n();

const message = ref('')
const loading = ref(true)
const currentDate = ref(new Date());
const date = ref(new Date());

// generate localized names of weekdays for the vue datepicker component
const dayNames = ((lang: string, weekStart: number) => Array(7).fill(1).map((_e,index) => t(`date_picker.days[${index}]`)))

const format = (date: Date) => {
  const day = zeroPad(date.getDate(),2);
  const month = zeroPad(date.getMonth() + 1,2);
  const year = date.getFullYear();

  return `${ t('date_picker.selected_date_is')} ${day}/${month}/${year}`;
}

// used to fill leading zero's in date custom format
function zeroPad(num: number, places: number) {
  var zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join("0") + num;
}

// Update vue-datepicker selected date text on language change. Not working!
const vueDatePickerRef = ref<InstanceType<typeof Datepicker> | null>(null);
watch( locale,
() => {
  vueDatePickerRef.value?.$forceUpdate();
  console.log('Current instance:', vueDatePickerRef)
  console.log('Force update to repair in DateTimeViewComponent') // TODO: make this to work
})

</script>


<style >
.dp__now_button {
  display: block;
  width: 100%;
}

.dp-date-intl-calendar {
  font-size: 80%;
}
</style>