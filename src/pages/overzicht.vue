<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-page padding>
    <template>
      <div class="q-pa-md">
        <div class="q-pa-md">
          <q-btn  icon="send" color="blue" label="ga naar geselecteerde" :disabled="selected.length < 1" @click="goToSelected"></q-btn>
        </div>
        <q-table
          title="restaurantdagen"
          :data="restaurantdagen"
          :columns="columns"
          :row-key="row => row.naam"
          :pagination.sync="pagination"
          :filter="filter"
          no-data-label="I didn't find anything for you"
          no-results-label="The filter didn't uncover any results"
          :filter-method="filt"
        >
          <template v-slot:top-right>
            <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
              <q-icon slot="append" name="search" />
            </q-input>
          </template>

          <template v-slot:no-data="{ icon, message, filter }">
            <div class="full-width row flex-center text-accent q-gutter-sm">
              <q-icon size="2em" name="sentiment_dissatisfied" />
              <span>
            Well this is sad... {{ message }}
          </span>
              <q-icon size="2em" :name="filter ? 'filter_b_and_w' : icon" />
            </div>
          </template>

          <template v-slot:body-cell-naam="cellProperties">
            <q-td :props="cellProperties">
              <a :href="'#/overzicht/' + cellProperties.row.id">{{ cellProperties.value }}</a>
            </q-td>
          </template>
        </q-table>
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
      ],
      selected: [],
      pagination: { rowsPerPage: 15, sortBy: 'datum', descending: true },
      filter: ''
    }
  },
  computed: {
    restaurantdagen: function () {
      return this.$store.getters['restaurantdag/getAll']
    }
  },
  created () {
    this.$store.dispatch('restaurantdag/loadAllRestaurantdagen')
  },
  methods: {
    goToSelected: function () {
      this.$router.push('overzicht/' + this.selected[0].id)
    },
    filt: function (rows, term) {
      return rows.filter(r => r.datum.includes(term) || r.naam.includes(term))
    }
  }
}
</script>
