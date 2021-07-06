<template>
  <li>
    <router-link :to="{ path: route }">
      <i :class="icon"></i>
      <span class="title">{{ title }}</span>
    </router-link>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SidebarItem",
  props: { title: String, route: String, icon: String },
});
</script>
