<template>
  <q-card>
    <q-select filled v-model="gerecht.type" :options="options" label="gang" />
    <q-input filled v-model="gerecht.naam" type="text" lazy-rules :rules="[ val => val.length > 0 || 'Vul Aub. een naam in' ]"></q-input>
    <q-input filled v-model="gerecht.prijs" v-if="gerecht.type === 'hoofdgerecht'" type="text" @input="change($event)" lazy-rules :rules="[ val => (val.length > 0 && !isNaN(val) && val >= 0.0) || 'vul een getal in boven de 0' ]"></q-input>
    <q-checkbox v-if="gerecht.type === 'hoofdgerecht'" v-model="gerecht.kindergerecht" label="kindergerecht" color="green"/>
  </q-card>
</template>

<script>
export default {
  name: 'GerechtInput',
  data () {
    return {}
  },
  props: [
    'gerecht',
    'options'
  ],
  methods: {
    change: function (input) {
      this.gerecht.prijs = input.replace(',', '.')
    },
    typecheck: function (type) {
      if (type === 'hoofdgerecht') {
        return true
      }
    }
  }
}
</script>
<style scoped>
  .q-card {
    margin-bottom: 5px;
  }

  .q-select {
    margin-bottom: 20px;
  }
</style>
