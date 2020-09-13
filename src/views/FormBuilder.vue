<template>
  <div>
    <v-container v-for="(page, index) in form.items" :key="page.uuid">
      <AddPageButton :uuid="page.uuid" />
      <Page :data="page" />

      <!-- For the last page -->
      <AddPageButton v-if="index === form.items.length - 1" />
    </v-container>

    <!-- If there is no pages yet -->
    <v-container v-if="form.items.length === 0">
      <AddPageButton />
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Page from "@/components/Page";
import { mapActions, mapState } from "vuex";

import AddPageButton from "@/components/AddPageButton";

export default Vue.extend({
  name: "FormBuilder",
  components: { AddPageButton, Page },
  computed: {
    ...mapState({ form: "form" })
  },
  methods: {
    ...mapActions({ setForm: "setForm" })
  }
});
</script>
