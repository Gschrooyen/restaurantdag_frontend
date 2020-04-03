<template>
  <q-page padding>
    <Detail :restaurantdag="restaurantdag" @edit="goToEdit" @delete="verwijderen" @enrolments="goToInschr"></Detail>
  </q-page>
</template>

<script>
export default {
  name: 'current',
  props: ['id'],
  created () {
    if (this.id.toLowerCase() === 'current') {
      this.$store.dispatch('restaurantdag/loadNextRestaurantDag')
    } else {
      this.$store.dispatch('restaurantdag/loadRestaurantdagById', this.id)
    }
  },
  computed: {
    restaurantdag: function () {
      if (this.id === 'current') {
        return this.$store.getters['restaurantdag/getCurrent']
      } else {
        return this.$store.getters['restaurantdag/getRequested']
      }
    }
  },
  watch: {
    id: function () {
      if (this.id.toLowerCase() === 'current') {
        this.$store.dispatch('restaurantdag/loadNextRestaurantDag')
      } else {
        this.$store.dispatch('restaurantdag/loadRestaurantdagById', this.id)
      }
    }
  },
  methods: {
    goToEdit: function () {
      this.$router.push('/bewerken/' + this.restaurantdag.id)
    },
    verwijderen: function () {
      this.$store.dispatch('restaurantdag/del', this.restaurantdag.id).then(() => this.$router.push('/overzicht'))
    },
    goToInschr: function () {
      this.$router.push('/' + this.id + '/inschrijvingen')
    }
  }
}
</script>
