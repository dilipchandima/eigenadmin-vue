<template>
  <div class="col-md-3 col-sm-6 col-xs-12">
    <div class="analyt-container analyt-primary">
      <div class="content">
        <span class="title">SESSIONS</span>
        <span class="label">25</span>
        <span class="description"
          ><i class="bi bi-graph-up"></i> 2 sessions today</span
        >
      </div>
      <div class="icon-container">
        <i class="bi bi-person-lines-fill"></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AnalytBox",
});
</script>
