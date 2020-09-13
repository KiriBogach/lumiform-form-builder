<template>
  <div class="d-flex align-center my-2" style="place-content: center">
    <v-btn
      small
      @click="addPage(uuid || null)"
      color="secondary"
      title="Add Page"
    >
      <v-icon class="mr-2">mdi-plus</v-icon>
      <v-icon>mdi-book-open-page-variant</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddPageButton",
  props: {
    uuid: {
      type: String
    }
  },
  methods: {
    ...mapActions({ addPage: "addPage" })
  }
};
</script>
