<template>
  <q-page class="flex flex-center">
    <q-card class="my-card" flat bordered>
      <q-item>
        <q-item-section>
          <q-item-label>Maak een nieuwe restaurantdag</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator />
        <q-card-section>
          <q-btn align="between" color="accent" @click="$router.push('/new')" label="Maak een nieuwe restaurantdag" icon="fiber_new" />
        </q-card-section>
    </q-card>
    <q-card class="my-card" flat bordered>
      <q-item>
        <q-item-section>
          <q-item-label>ga naar volgende restaurantdag</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator />
      <q-card-section>
        <q-btn align="between" color="green" @click="$router.push('/current')" label="ga naar de volgende restaurantdag" icon="next_week" />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
