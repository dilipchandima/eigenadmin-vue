<template>
  <div id="wrapper">
    <Sidebar />
    <div id="content-wrapper">
      <div id="top-navigation">
        <img id="brandlogo" alt="Vue logo" src="./assets/logo.png" /><br />
      </div>
      <div class="content">
        <router-view />
      </div>
      <div id="footer">
        <p>This admin application theme is podered by eigenLABS</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "@/components/SideBar/Sidebar.vue";

export default defineComponent({
  name: "App",
  components: {
    Sidebar,
  },
});
</script>
