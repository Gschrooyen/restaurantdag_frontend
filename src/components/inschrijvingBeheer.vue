<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-form class="q-gutter-md" @submit="$emit('submit')" @reset="$emit('reset')">
    <q-input type="text" v-model="inschrijving.naam" label="naam" filled required></q-input>
    <q-input type="text" v-model="inschrijving.groep" label="groepsnaam" filled required></q-input>
    <q-select :options="options" v-model="inschrijving.tijdstip" label="tijdstip" filled @filter="filterFn" use-input
              hide-selected
              fill-input
              input-debounce="0"></q-select>
    <q-separator></q-separator>
    <h5 class="q-mb-sm">bestelling</h5>
    <q-separator></q-separator>
    <q-input v-for="(bestelling) in inschrijving.bestelling" :key="bestelling.gerechtId" v-model="bestelling.aantal" type="number" filled>
      <template v-slot:prepend>
        <div>{{ bestelling.gerechtNaam }}</div>
      </template>
    </q-input>

    <q-btn type="submit" color="primary" icon="send">opslaan</q-btn>
    <q-btn type="reset" color="red" icon="autorenew">reset</q-btn>
  </q-form>
</template>

<script>
const uren = [
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
  '17:00',
  '17:30',
  '18:00',
  '18:30',
  '19:00',
  '19:30'
]
export default {
  // name: 'ComponentName',
  data () {
    return {
      options: uren
    }
  },
  props: ['inschrijving'],
  methods: {
    filterFn (val, update, abort) {
      update(() => {
        const needle = val.toLowerCase()
        this.options = uren.filter(v => v.toLowerCase().indexOf(needle) > -1)
      })
    }
  }
}
</script>
