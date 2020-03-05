<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-page padding>
    <q-form class="q-gutter-md">
      <q-input filled v-model="restaurantdag.naam" type="text" label="naam" hint="een werknaam voor de restaurantdag" lazy-rules :rules="[ val => val.length > 0 || 'Vul Aub. een naam in ' ]"></q-input>
      <q-input filled v-model="restaurantdag.datum" mask="##/##/####">
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
              <q-date mask="DD/MM/YYYY" v-model="restaurantdag.datum" @input="() => $refs.qDateProxy.hide()" />
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
      <div class="flex">
        <GerechtInput v-for="(ger, index) in restaurantdag.gerechten" :key="index" :gerecht="ger" :options="types"></GerechtInput>
      </div>
      <q-btn size="md" color="green" icon="add" @click="addGerecht"></q-btn>
    </q-form>
  </q-page>
</template>

<script>
export default {
  name: 'New',
  data: function () {
    return {
      restaurantdag: {
        naam: '',
        datum: '',
        gerechten: [{
          naam: '',
          prijs: 0.0,
          kindergerecht: false,
          type: 'hoofdgerecht'
        }]
      },
      types: ['hoofdgerecht', 'dessert']
    }
  },
  created () {
    const datum = new Date()
    let day = 0
    if ((datum.getDate() + 1) < 10) {
      day = '0' + (datum.getDate())
    } else {
      day = (datum.getDate())
    }
    let month = 0
    if ((datum.getMonth() + 1) < 10) {
      month = '0' + (datum.getMonth() + 1)
    } else {
      month = (datum.getMonth() + 1)
    }
    this.restaurantdag.datum = day + '/' + month + '/' + datum.getFullYear()
  },
  methods: {
    addGerecht: function () {
      this.restaurantdag.gerechten.push({ naam: '', prijs: 0.0, kindergerecht: false, type: 'hoofdgerecht' })
    }
  }
}
</script>
