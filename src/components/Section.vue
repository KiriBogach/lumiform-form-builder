<template>
  <div class="mt-4">
    <h3 class="section_title mb-4">{{ data.title }}</h3>
    <ul>
      <li
        class="section"
        v-for="(element, index) in data.items"
        :key="element.uuid"
      >
        <AddButtons :uuid="element.uuid" :items="data.items" />

        <!--Element is a question -->
        <Question v-if="element.type === 'question'" :data="element" />

        <!--Element is a section -->
        <!-- Recursive component -->
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

      <!-- If there is no elements yet -->
      <li v-if="data.items.length === 0">
        <AddButtons :items="data.items" />
      </li>
    </ul>
  </div>
</template>

<script>
import Question from "@/components/Question";
import AddButtons from "@/components/AddButtons";

export default {
  name: "Section",
  components: { AddButtons, Question },
  props: {
    data: {
      required: true,
      type: Object
    }
  }
};
</script>
