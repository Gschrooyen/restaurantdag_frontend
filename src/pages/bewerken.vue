<template>
  <q-page padding>
    <Restaurantdag @submit="updateRestaurantdag" :restaurantdag="restaurantdag"></Restaurantdag>
  </q-page>
</template>

<script>
export default {
  name: 'edit',
  data: function () {
    return {
      restaurantdag: {}
    }
  },
  props: ['id'],
  created () {
    const self = this
    this.$store.dispatch('restaurantdag/getRestaurantdagById', this.id)
      .then((result) => {
        self.restaurantdag = result.data
        self.restaurantdag.datum =
          ((self.restaurantdag.epochDate[2] < 10) ? ('0' + self.restaurantdag.epochDate[2]) : (self.restaurantdag.epochDate[2])) + '/' +
          ((self.restaurantdag.epochDate[1] < 10) ? ('0' + self.restaurantdag.epochDate[1]) : (self.restaurantdag.epochDate[1])) + '/' +
          self.restaurantdag.epochDate[0]
      })
  },
  methods: {
    updateRestaurantdag: function () {
      this.$store.dispatch('restaurantdag/updateRestaurantdag', this.restaurantdag)
    }
  }
}
</script>
