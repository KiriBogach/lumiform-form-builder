<template>
  <button @click="editPageClick" class="d-flex align-center mb-2">
    <v-icon>mdi-pencil-outline</v-icon>
    <h2 class="page_title ml-2">{{ page.title }}</h2>
  </button>
</template>

<script>
import Swal from "sweetalert2";
import { mapActions } from "vuex";

export default {
  name: "EditPageTitleButton",
  props: {
    page: {
      required: true,
      type: Object
    }
  },
  methods: {
    ...mapActions({ updatePageTitle: "updatePageTitle" }),

    editPageClick() {
      Swal.fire({
        title: "Change page title",
        input: "text",
        inputAttributes: {
          autocapitalize: "off"
        },
        inputValue: this.page.title,
        showCancelButton: true,
        confirmButtonText: "Change",
        showLoaderOnConfirm: true
      }).then(result => {
        if (result.isConfirmed) {
          this.updatePageTitle({ uuid: this.page.uuid, value: result.value });
        }
      });
    }
  }
};
</script>
