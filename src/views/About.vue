<template>
  <div class="about">
    <input v-model="message" />
    <p>{{ message }}</p>
    <button class="btn btn-primary" v-on:click="reverseMessage">
      Reverse Message
    </button>
    <ol class="list-group">
      <li class="list-group-item" v-for="(todo, key) in todos" :key="key">
        {{ todo.text }}
      </li>
    </ol>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TopNavigation",
  data: function () {
    return {
      message: "You loaded this page on " + new Date().toLocaleString(),
      todos: [
        { text: "Learn JavaScript" },
        { text: "Learn Vue" },
        { text: "Build something awesome" },
      ],
    };
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split("").reverse().join("");
    },
  },
});
</script>
