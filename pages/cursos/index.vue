<template>
    <el-row>
       <menu-mobile></menu-mobile>
       <app-topo></app-topo>
       <curso-banner></curso-banner>
       <curso-content></curso-content>       
       <app-apoio></app-apoio>
       <curso-carrocel></curso-carrocel>
       <corpo-docente></corpo-docente>
       
    </el-row> 
</template>

<script>
    import menuMobile from   '../../layouts/Menu-mobile.vue'
    import AppTopo   from '../../layouts/Topo.vue'
    import CursoBanner from '../../layouts/cursos/Banner.vue'
    import CursoContent from '../../layouts/cursos/Content.vue'
    import AppApoio from '../../layouts/Apoio.vue'
    import CorpoDocente from '../../layouts/cursos/CorpoDocente.vue'
    import CursoCarrocel from '../../layouts/cursos/Carrocel.vue'
    import AppFooter from '../../layouts/Footer.vue'
    

    export default {
        components: {
            AppTopo, CursoBanner, CursoContent, AppApoio, CursoCarrocel, CorpoDocente, AppFooter, menuMobile
        }
    }

</script>

<style>
   
</style>