<template>
  <q-page padding>
    <h2>{{ restaurantdag.naam }}<h4>{{ restaurantdag.inschrijvingen }} inschrijvingen</h4></h2>
    <template>
      <div class="q-pa-md">
        <q-table
          title="gerechten"
          :data="restaurantdag.gerechten"
          :columns="columns"
          :pagination.sync="pagination"
          row-key="name"
        />
      </div>
    </template>
    <q-btn label="bewerken" icon="edit" color="primary"></q-btn>
    <q-btn label="inschrijvingen" icon="add" color="primary"></q-btn>
  </q-page>
</template>

<script>
export default {
  name: 'current',
  data: function () {
    return {
      columns: [
        { name: 'naam', required: 'true', label: 'naam', align: 'center', field: row => row.naam, sortable: false },
        { name: 'prijs', required: 'false', label: 'prijs', align: 'center', field: row => row.prijs, sortable: true },
        { name: 'type', required: 'true', label: 'type', align: 'center', field: row => row.type, sortable: true },
        { name: 'kindergerecht', required: 'false', label: 'kindergerecht', align: 'center', field: row => row.kindergerecht, sortable: true, format: val => { if (val) { return 'ja' } else if (val === false) { return 'nee' } else { return '' } } }
      ],
      pagination: { rowsPerPage: 10 }
    }
  },
  created () {
    this.$store.dispatch('restaurantdag/loadNextRestaurantDag')
  },
  computed: {
    restaurantdag: function () {
      return this.$store.getters['restaurantdag/getCurrent']
    }
  }
}
</script>

<style scoped>
  .q-btn {
    margin-right: 20px;
  }
</style>
