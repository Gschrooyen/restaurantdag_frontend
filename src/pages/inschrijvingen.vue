<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-page padding>
    <q-btn label="verwijder geselecteerde" :disabled="selected.length < 1" color="red" icon="delete"></q-btn>
    <q-btn icon="add" label="nieuwe toevoegen" color="green" @click="$router.push('/' + id + '/inschrijvingen/new')"></q-btn>
    <q-table
      title="restaurantdagen"
      :data="inschrijvingen"
      :columns="columns"
      :row-key="row => row.id"
      selection="multiple"
      :selected.sync="selected"
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
          <a :href="'#/inschrijving/' + cellProperties.row.id">{{ cellProperties.value }}</a>
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script>
export default {
  name: 'inschrijvingen',
  data: function () {
    return {
      inschrijvingen: [],
      columns: [
        { name: 'naam', required: true, label: 'naam', align: 'center', field: row => row.naam, sortable: false },
        { name: 'groep', label: 'groep', required: true, align: 'center', field: row => row.groep, sortable: true },
        { name: 'tijdstip', label: 'tijdstip', required: true, align: 'center', field: row => row.tijdstip, sortable: true },
        { name: 'personen', label: '#personen', required: true, align: 'center', field: row => row.personen, sortable: true }
      ],
      selected: [],
      pagination: { rowsPerPage: 15, sortBy: 'tijdstip', descending: false },
      filter: ''
    }
  },
  props: ['id'],
  watch: {
    id: function () {
      const self = this
      this.$store.dispatch('restaurantdag/getInschrijvingen', this.id).then(result => { if (result.status === 200) { self.inschrijvingen = result.data() } })
    }
  },
  created () {
    const self = this
    this.$store.dispatch('restaurantdag/getInschrijvingen', this.id).then(result => { self.inschrijvingen = result.data })
  },
  methods: {
    filt: function (rows, term) {
      return rows.filter(r => r.tijdstip.includes(term) || r.naam.includes(term) || r.groep.includes(term))
    }
  }
}
</script>
