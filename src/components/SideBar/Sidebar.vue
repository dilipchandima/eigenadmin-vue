<template>
  <div class="sidebar" id="nav">
    <ul>
      <SidebarTitle title="PROFILE" />

      <SidebarItem title="Home" route="/" icon="bi bi-house-fill" />
      <SidebarItem title="About" route="/about" icon="bi bi-person-fill" />

      <SidebarTitle title="CARDS" />

      <SidebarItem title="Test" route="/" icon="bi bi-person-fill" />
      <SidebarItem title="Sample" route="/about" icon="bi bi-person-fill" />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SidebarTitle from "@/components/SideBar/SideBarTitle.vue";
import SidebarItem from "@/components/SideBar/SidebarItem.vue";

export default defineComponent({
  name: "Sidebar",
  components: {
    SidebarTitle,
    SidebarItem,
  },
});
</script>
