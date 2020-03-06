<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <Restaurantdag @submit="saveRestaurantdag" :restaurantdag="restaurantdag"></Restaurantdag>
</template>

<script>
export default {
  name: 'New',
  data: function () {
    return {
      restaurantdag: {
        naam: '',
        datum: currentdate(),
        gerechten: [{
          naam: '',
          prijs: 0.0,
          kindergerecht: false,
          type: 'hoofdgerecht'
        }]
      }
    }
  },
  methods: {
    saveRestaurantdag: function () {
      const self = this
      const resto = this.restaurantdag
      resto.epochDate = this.calcDate
      this.$store.dispatch('restaurantdag/saveRestaurantdag', resto)
        .then(result => {
          self.$router.push('/')
        })
    }
  },
  computed: {
    calcDate: function () {
      return new Date(this.restaurantdag.datum.substr(3, 2) + '/' + this.restaurantdag.datum.substr(0, 2) + '/' + this.restaurantdag.datum.substr(6, 4))
    }
  }
}

function currentdate () {
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
  return day + '/' + month + '/' + datum.getFullYear()
}
</script>
