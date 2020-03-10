<template>
  <q-page padding>
    <template>
      <div class="q-pa-md">
        <q-table
          title="restaurantdagen"
          :data="restaurantdagen"
          :columns="columns"
          row-key="name"
        />
      </div>
    </template>
  </q-page>
</template>

<script>
export default {
  name: 'overzicht',
  data: function () {
    return {
      columns: [
        { name: 'naam', required: true, label: 'naam', align: 'center', field: row => row.naam, sortable: false },
        { name: 'datum', label: 'datum', required: true, align: 'center', field: row => row.datum, sortable: true },
        { name: 'inschrijvingen', label: '#inschrijvingen', required: true, align: 'center', field: row => row.inschrijvingen, sortable: true },
        { name: 'personen', label: '#personen', required: true, align: 'center', field: row => row.personen, sortable: true }
      ]
    }
  },
  computed: {
    restaurantdagen: function () {
      return this.$store.getters['restaurantdag/getAll']
    }
  },
  created () {
    this.$store.dispatch('restaurantdag/loadAllRestaurantdagen')
  }
}
</script>
