<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-page padding>
    <q-form class="q-gutter-md" @submit="onSubmit" @reset="onReset">
      <q-input filled v-model="restaurantdag.naam" type="text" label="naam" hint="een werknaam voor de restaurantdag"
               lazy-rules :rules="[ val => val.length > 0 || 'Vul Aub. een naam in ' ]"></q-input>
      <q-input filled v-model="restaurantdag.datum" mask="##/##/####">
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
              <q-date mask="DD/MM/YYYY" v-model="restaurantdag.datum" @input="() => $refs.qDateProxy.hide()"/>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
      <div class="flex">
        <GerechtInput v-for="(ger, index) in restaurantdag.gerechten" :key="index" :gerecht="ger"
                      :options="types" @remove="onRemove(index)"></GerechtInput>
      </div>
      <q-btn size="md" color="green" icon="add" @click="addGerecht"></q-btn>
      <div>
        <q-btn type="submit" color="blue">opslaan</q-btn>
        <q-btn type="reset" color="red">reset</q-btn>
      </div>
    </q-form>
  </q-page>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      types: ['hoofdgerecht', 'dessert']
    }
  },
  props: ['restaurantdag'],
  methods: {
    addGerecht: function () {
      this.restaurantdag.gerechten.push({
        naam: '',
        prijs: 0.0,
        kindergerecht: false,
        type: 'hoofdgerecht'
      })
    },
    onSubmit: function () {
      this.$emit('submit')
    },
    onReset: function () {
      this.$emit('reset')
    },
    onRemove: function (i) {
      this.restaurantdag.gerechten.splice(i, 1)
    }
  }
}
</script>

<style scoped>
  .q-btn {
    margin-right: 20px;
  }
</style>
