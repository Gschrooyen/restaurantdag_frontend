<template>
  <q-page padding>
    <Restaurantdag @submit="updateRestaurantdag" @reset="resetForm" :restaurantdag="restaurantdag"></Restaurantdag>
  </q-page>
</template>

<script>
export default {
  name: 'edit',
  data: function () {
    return {
      restaurantdag: {},
      initial: {}
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
        self.initial = JSON.parse(JSON.stringify(result.data))
        self.initial.datum =
          ((self.initial.epochDate[2] < 10) ? ('0' + self.initial.epochDate[2]) : (self.initial.epochDate[2])) + '/' +
          ((self.initial.epochDate[1] < 10) ? ('0' + self.initial.epochDate[1]) : (self.initial.epochDate[1])) + '/' +
          self.initial.epochDate[0]
      })
  },
  methods: {
    updateRestaurantdag: function () {
      this.$store.dispatch('restaurantdag/updateRestaurantdag', this.restaurantdag).then(() => this.$router.push('/overzicht/' + this.id))
    },
    resetForm: function () {
      this.restaurantdag = JSON.parse(JSON.stringify(this.initial))
    }
  },
  watch: {
    id: function () {
      const self = this
      this.$store.dispatch('restaurantdag/getRestaurantdagById', this.id)
        .then((result) => {
          self.restaurantdag = result.data
          self.restaurantdag.datum =
            ((self.restaurantdag.epochDate[2] < 10) ? ('0' + self.restaurantdag.epochDate[2]) : (self.restaurantdag.epochDate[2])) + '/' +
            ((self.restaurantdag.epochDate[1] < 10) ? ('0' + self.restaurantdag.epochDate[1]) : (self.restaurantdag.epochDate[1])) + '/' +
            self.restaurantdag.epochDate[0]
          self.initial = JSON.parse(JSON.stringify(result.data))
          self.initial.datum =
            ((self.initial.epochDate[2] < 10) ? ('0' + self.initial.epochDate[2]) : (self.initial.epochDate[2])) + '/' +
            ((self.initial.epochDate[1] < 10) ? ('0' + self.initial.epochDate[1]) : (self.initial.epochDate[1])) + '/' +
            self.initial.epochDate[0]
        })
    }
  }
}
</script>
