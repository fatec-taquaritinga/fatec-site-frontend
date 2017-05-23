<template>
  <el-row>  
    <app-topo></app-topo>
    <app-banner></app-banner>
    <app-cursos></app-cursos>

    <br><br><br>
    <img width="100%" src="../assets/bg1.jpg" />
  </el-row>
</template>

<script>
  import AppTopo from '../layouts/Topo.vue';
  import AppBanner from '../layouts/Banner.vue';
  import AppCursos from '../layouts/Cursos2.vue';

  export default {
    components: {
      AppTopo, AppBanner, AppCursos
    }
  }
</script>
