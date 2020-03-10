<template>
  <q-page padding>
    <!-- content -->
  </q-page>
</template>

<script>
export default {
  name: 'PageName',
  data: function () {
    return {
      inschrijvingen: []
    }
  },
  props: {
    id: {
      type: String,
      default: 'current'
    }
  },
  watch: {
    id: function () {
      const self = this
      this.$store.dispatch('restaurantdag/getInschrijvingen', this.id).then(result => { if (result.status === 200) { self.inschrijvingen = result.data() } })
    }
  },
  created () {
    const self = this
    this.$store.dispatch('restaurantdag/getInschrijvingen', this.id).then(result => { if (result.status === 200) { self.inschrijvingen = result.data() } })
  }
}
</script>
