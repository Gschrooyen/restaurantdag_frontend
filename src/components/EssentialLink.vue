<template>
  <q-item
    clickable
    tag="a"
    target="_blank"
    @click="navigate"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    icon: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      required: true
    }
  },
  methods: {
    navigate: function () {
      if (this.$router.history.current.path !== this.link) {
        this.$router.push(this.link)
      }
    }
  }
}
</script>
