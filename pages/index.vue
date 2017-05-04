<template>
  <el-row>
    <app-topo></app-topo>
    <app-banner></app-banner>
    <p style="margin-top:300px"></p>
  </el-row>
</template>

<script>
  import AppTopo from '../layouts/Topo.vue';
  import AppBanner from '../layouts/Banner.vue';

  export default {
    components: {
      AppTopo, AppBanner
    }
  }
</script>
