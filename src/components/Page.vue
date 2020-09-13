<template>
  <div>
    <EditPageTitleButton :page="data" />

    <v-card outlined>
      <ul>
        <li v-for="(element, index) in data.items" :key="element.uuid">
          <AddButtons :uuid="element.uuid" :items="data.items" />

          <!--Element is a question -->
          <Question v-if="element.type === 'question'" :data="element" />

          <!--Element is a section -->
          <Section v-else-if="element.type === 'section'" :data="element" />

          <!-- Uncontrolled type -->
          <v-alert v-else type="error">
            Type error
          </v-alert>

          <!-- For the last element -->
          <AddButtons
            :items="data.items"
            v-if="index === data.items.length - 1"
          />
        </li>
      </ul>
    </v-card>

    <!-- If there is no elements yet -->
    <v-card outlined v-if="data.items.length === 0">
      <AddButtons :items="data.items" />
    </v-card>
  </div>
</template>

<script>
import EditPageTitleButton from "@/components/EditPageTitleButton";
import AddButtons from "@/components/AddButtons";
import Question from "@/components/Question";
import Section from "@/components/Section";
import { mapActions } from "vuex";

export default {
  name: "Page",
  components: {
    EditPageTitleButton,
    AddButtons,
    Section,
    Question
  },
  props: {
    data: {
      required: true,
      type: Object
    }
  },
  methods: {
    ...mapActions({ addPage: "addPage" })
  }
};
</script>
