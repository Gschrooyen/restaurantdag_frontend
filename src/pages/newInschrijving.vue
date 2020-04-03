<template>
  <q-page padding>
    <inschrijving :inschrijving="inschrijving" @submit="aanmaken" @reset="reset"></inschrijving>
  </q-page>
</template>

<script>
export default {
  name: 'InschrijvingBeheer',
  props: ['id'],
  data: function () {
    return {
      inschrijving: {
        naam: '',
        groep: '',
        tijdstip: '12:00',
        bestelling: []
      }
    }
  },
  methods: {
    aanmaken: function () {
      this.$store.dispatch('restaurantdag/inschrijven', { inschrijving: this.inschrijving, rid: this.id })
      this.$router.push('/' + this.id + '/inschrijvingen')
    },
    reset: function () {
      const bestelling = this.inschrijving.bestelling
      this.inschrijving = {
        naam: '',
        groep: '',
        tijdstip: '12:00',
        bestelling: bestelling
      }
      this.inschrijving.bestelling.forEach(function (element, index, array) {
        element.aantal = 0
      })
    }
  },
  created () {
    this.$store.dispatch('restaurantdag/setupBestelling', this.id).then(result => {
      this.inschrijving.bestelling = result.data
    })
  }
}
</script>
