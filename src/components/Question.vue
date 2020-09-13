<template>
  <div>
    <v-list-item>
      <v-list-item-content class="align-center">
        <div
          class="d-flex justify-space-between align-content-center align-center"
        >
          <span>{{ data.title }}</span>
          <v-select
            class="response-type"
            v-model="data.response_type"
            :items="states"
            item-text="text"
            item-value="value"
            menu-props="auto"
            label="Select"
            hide-details
            :prepend-icon="
              `mdi-${data.response_type === 'text' ? 'format-text' : 'pound'}`
            "
            single-line
          ></v-select>
        </div>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
export default {
  name: "Question",
  props: {
    data: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      states: [
        {
          text: "Text",
          value: "text"
        },
        {
          text: "Number",
          value: "number"
        }
      ]
    };
  },

  mounted() {
    if (!this.data.response_type) {
      this.data["response_type"] = "text";
    }
  }
};
</script>
