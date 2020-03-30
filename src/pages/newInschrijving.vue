<template>
  <q-page padding>
    <form></form>
  </q-page>
</template>

<script>
export default {
  name: 'PageName',
  data: function () {
    return {
      inschrijving: {
        naam: '',
        groep: '',
        tijdstip: ''
      },
      bestelling: []
    }
  }
}
</script>
