<template>
    <el-row>
        <menu-mobile></menu-mobile>
        <app-topo></app-topo>
        
        <curso-banner></curso-banner>
        <curso-content></curso-content>

        <app-apoio></app-apoio>

        <el-row class="galeria-curso">
            <el-col class="titulos" :lg="{span:20, offset:2}">
                <h1>Estrutura Física</h1>
                <p>Salas e Laboratórios na Fatec Taquaritinga.</p>
            </el-col>
            <el-col>
                <img id="img-carrocel" src="../../assets/cursos/carrocel.jpg">
                <el-row>
                    <el-col id="titulo-carrocel" class="barra-content" :span="24">
                        <p style="color:#fff">Laboratório de Informática 1</p>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>

        <corpo-docente></corpo-docente>
        <app-footer></app-footer>
    </el-row> 
</template>

<script>
    import AppTopo   from '../../layouts/Topo.vue';
    import CursoBanner from '../../layouts/cursos/Banner.vue'
    import CursoContent from '../../layouts/cursos/Content.vue'
    import AppApoio from '../../layouts/Apoio.vue';
    import CorpoDocente from '../../layouts/cursos/CorpoDocente.vue'
    import AppFooter from '../../layouts/Footer.vue';
    import menuMobile from   '../../layouts/Menu-mobile.vue';

    export default {
        components: {
            AppTopo, CursoBanner, CursoContent, AppApoio, CorpoDocente, AppFooter, menuMobile
        }
    }

</script>

<style>
    
    #titulo-carrocel {
        height: 10vh;
        line-height: 10vh;
        font-size: 1.5em;
        margin-top: -5px;
    }

    #img-carrocel {
        width: 100%;
        margin-top: 5vh;
    }

    .titulos {
        text-align: center;
    }

    .titulos h1 {
        color: #00a0e6;
        font-size: 2.5em;
    }

</style>