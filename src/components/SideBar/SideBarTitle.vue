<template>
  <li class="header">{{ title }}</li>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SidebarTitle",
  props: { title: String },
});
</script>
