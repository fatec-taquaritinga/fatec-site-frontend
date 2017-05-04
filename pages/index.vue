<template>
  <el-row>
    <app-topo></app-topo>
    <app-banner></app-banner>
    <app-curso></app-curso>


    <!--<p style="margin-top:300px"></p>-->
  </el-row>
</template>

<script>
  import AppTopo from '../layouts/Topo.vue';
  import AppBanner from '../layouts/Banner.vue';

  import AppCurso from '../layouts/Cursos.vue';

  export default {
    components: {
      AppTopo, AppBanner, AppCurso
    }
  }
</script>
