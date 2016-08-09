<template>
  <div class="v-about">
    <h1>
      About {{ page }}
    </h1>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'v-about',
  computed: {
    ...mapGetters(['page'])
  }
}
</script>