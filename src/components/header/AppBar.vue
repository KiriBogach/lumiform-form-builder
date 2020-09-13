<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <h3>Form Builder</h3>
    </div>

    <v-spacer></v-spacer>

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn @click="resetForm" text v-bind="attrs" v-on="on">
          <v-icon>mdi-reload</v-icon>
        </v-btn>
      </template>
      <h3>Reset Form</h3>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          @click="inputClick"
          text
          v-bind="attrs"
          v-on="on"
          style="max-width: 64px;"
        >
          <v-file-input
            hide-details
            hide-input
            prepend-icon="mdi-cloud-upload"
            accept="application/json"
            @change="uploadForm"
            id="form-uploader-input"
          />
        </v-btn>
      </template>
      <h3>Import Form</h3>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn @click="exportCurrentForm" text v-bind="attrs" v-on="on">
          <v-icon>mdi-cloud-download</v-icon>
        </v-btn>
      </template>
      <h3>Export Form</h3>
    </v-tooltip>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapState } from "vuex";

export default Vue.extend({
  name: "AppBar",
  computed: {
    ...mapState({
      form: "form"
    })
  },

  methods: {
    ...mapActions({
      setForm: "setForm",
      resetForm: "resetForm"
    }),

    downloadJSONFile(text: BlobPart, name: string) {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(new Blob([text], { type: "text/json" }));
      a.download = name;
      a.click();
    },

    uploadForm(formFile) {
      const reader = new FileReader();
      reader.onload = event => {
        this.setForm(JSON.parse(event.target.result));
      };
      reader.readAsText(formFile);
    },

    inputClick() {
      document.getElementById("form-uploader-input").click();
    },

    exportCurrentForm() {
      const nowString = this.$dayjs().format("YYYY_MM_DD-hh_mm_ss");
      const formattedJSON = JSON.stringify(this.form, null, 1);

      this.downloadJSONFile(formattedJSON, `form-${nowString}.json`);
    }
  }
});
</script>

<style scoped></style>
