<template>
  <div class="container">
    <q-card>
      <q-select filled v-model="gerecht.type" :options="options" label="gang"/>
      <q-input filled v-model="gerecht.naam" type="text" lazy-rules label="naam"
               :rules="[ val => val.length > 0 || 'Vul Aub. een naam in' ]"></q-input>
      <q-input filled v-model="gerecht.prijs" v-if="gerecht.type === 'hoofdgerecht'" type="text" @input="change($event)"
               lazy-rules label="prijs"
               :rules="[ val => (!isNaN(val)) || 'vul een getal in', val => (val >= 0.0) || 'vul een getal in boven de 0', val => ((val + '').length > 0) || 'vul een waarde in' ]" suffix="€"></q-input>
      <q-checkbox v-if="gerecht.type === 'hoofdgerecht'" v-model="gerecht.kindergerecht" label="kindergerecht"
                  color="green"/>
      <div>
        <q-btn size="md" color="red" @click="$emit('remove')" icon="close"></q-btn>
      </div>
    </q-card>
  </div>
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
    margin: 10px;
    padding: 20px;
    width: 22vw;
    min-width: 300px;
  }

  .q-select {
    margin-bottom: 20px;
  }

  .container {
    display: flex;
    align-content: center;
  }
</style>
