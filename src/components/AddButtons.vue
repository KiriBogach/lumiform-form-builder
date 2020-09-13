<template>
  <div class="d-flex align-center my-2" style="place-content: center">
    <v-btn
      class="mr-2"
      small
      color="warning"
      title="Add Question"
      @click="addQuestionClick"
    >
      <v-icon>mdi-plus</v-icon>
      <v-icon>mdi-help-circle-outline</v-icon>
    </v-btn>
    <v-btn small color="accent" title="Add Section" @click="addSectionClick">
      <v-icon>mdi-plus</v-icon>
      <v-icon>mdi-vector-intersection</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Swal from "sweetalert2";

export default {
  name: "AddButtons",
  props: {
    uuid: {
      type: String
    },
    items: {
      type: Array
    }
  },
  methods: {
    ...mapActions({ addQuestion: "addQuestion", addSection: "addSection" }),

    addQuestionClick() {
      Swal.fire({
        title: "Question Title",
        input: "text",
        inputAttributes: {
          autocapitalize: "off"
        },
        inputValue: "",
        showCancelButton: true,
        confirmButtonText: "Add",
        showLoaderOnConfirm: true
      }).then(result => {
        if (result.isConfirmed) {
          this.addQuestion({
            uuid: this.uuid,
            items: this.items,
            title: result.value
          });
        }
      });
    },

    addSectionClick() {
      Swal.fire({
        title: "Section Title",
        input: "text",
        inputAttributes: {
          autocapitalize: "off"
        },
        inputValue: "",
        showCancelButton: true,
        confirmButtonText: "Add",
        showLoaderOnConfirm: true
      }).then(result => {
        if (result.isConfirmed) {
          this.addSection({
            uuid: this.uuid,
            items: this.items,
            title: result.value
          });
        }
      });
    }
  }
};
</script>

<style scoped></style>
