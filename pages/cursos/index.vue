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

        <el-row class="corpo-doc">
            <el-col class="titulos" :lg="{span:20, offset:2}">
                <h1>Corpo Docente</h1>
                <p>Conheça os professores desse curso.</p>
            </el-col>

            <el-col class="profs" :span="20" :offset="2">
                <div class="content-profs">
                    <img class="img-prof" src="http://arquivos.biblioceeteps.com.br/p/erick.petrucelli.jpg?v=20170302125042&h=90">
                    <el-col class="text-profs">
                        <h3>Erick Eduardo Petrucelli</h3>
                        <p><b style="color:#00a0e6">Coordenador do Curso</b> | Mestre em Engenharia de Produçao</p>
                        <p><a style="color:#00a0e6"><i class="el-icon-message"></i>erick.petrucelli@fatectq.edu.br</a>  <a style="color:#00a0e6"><i class="el-icon-information"></i>Acessar currículo Lattes</a></p>
                        <p>Disciplinas: <span>Programação para Sítios de Internet</span> <span>Tópicos Especiais I</span> <span>Tópicos Especiais II</span></p>
                    </el-col>
                </div>
            </el-col>

            <el-col class="profs" :span="20" :offset="2">
                <div class="content-profs">
                    <img class="img-prof" src="http://arquivos.biblioceeteps.com.br/p/fabio.takeda.jpg?v=20121213182944&h=90">
                    <el-col class="text-profs">
                        <h3>Fábio Bento Takeda</h3>
                        <p>Mestre em Ciência da Computação |  Professor de Ensino Superior II - A </p>
                        <p><a style="color:#00a0e6"><i class="el-icon-message"></i>fabio.takeda@fatectq.edu.br</a>  <a style="color:#00a0e6"><i class="el-icon-information"></i>Acessar currículo Lattes</a></p>
                        <p>Disciplinas: <span>Estruturas de Dados</span> <span>Trabalho de Graduação em Sistemas para Internet</span></p>
                    </el-col>
                </div>
            </el-col>
        </el-row>
         <el-row>
            <el-col style="height:3vh" class="barra-content" :span="24">
                
            </el-col>
        </el-row>
        <app-footer></app-footer>
    </el-row> 
</template>

<script>
    import AppTopo   from '../../layouts/Topo.vue';
    import CursoBanner from '../../layouts/cursos/Banner.vue'
    import CursoContent from '../../layouts/cursos/Content.vue'
    import AppApoio from '../../layouts/Apoio.vue';
    import AppFooter from '../../layouts/Footer.vue';
    import menuMobile from   '../../layouts/Menu-mobile.vue';

    export default {
        components: {
            AppTopo, CursoBanner, CursoContent, AppApoio, AppFooter, menuMobile
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

    .corpo-doc {
        padding-top:30px;
        padding-bottom:30px;
        background-color:#f5f5f5;        
        padding-bottom: 20vh;
    
    }

    .titulos {
        text-align: center;
    }

    .titulos h1 {
        color: #00a0e6;
        font-size: 2.5em;
    }

    #img-carrocel {
        width: 100%;
        margin-top: 5vh;
    }

    .profs {
        margin-top: 3vh;
    }

    .img-prof {
        margin-left: -45px;
        margin-top: -45px;
        width:90px;
        height:90px;
        border-radius:50%;
        border: 3px solid #00a0e6;
    }

    .content-profs {
        background: #fff;
        margin-top: 45px;
        margin-left: 45px;
        display: flex;
    }

    .text-profs {
        margin-left: 1vh;
        margin-top: 1vh;
        margin-bottom: 3vh;
    }

    .text-profs a {
        padding: 2px;
        margin: 2px;
    }

    .text-profs p span {
        background: gray;
        margin: 1vh;
        border-radius: 5%;
        color: #fff;
    }

</style>