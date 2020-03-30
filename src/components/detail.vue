<template>
  <div>
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
    <q-btn label="bewerken" @click="$emit('edit')" icon="edit" color="primary"></q-btn>
    <q-btn label="inschrijvingen" @click="$emit('enrolments')" icon="add" color="primary"></q-btn>
  </div>
</template>

<script>
export default {
  name: 'RestaurantdagDetail',
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
  props: ['restaurantdag']
}
</script>

<style scoped>
  .q-btn {
    margin-right: 20px;
  }
</style>
