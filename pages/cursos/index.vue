<template>
    <el-row>
        <app-topo></app-topo>
        <el-row class="baner-curso">
            <el-col class="contener-titulo-curso">
                <div class="text-titulo">
                    <p id="titulo-um">Curso superior de Tecnologia em</p>
                    <p id="titulo-dois">Sistemas para Internet</p>
                </div>
            </el-col>
            <img class="img-baner" src="http://blog.portalpravaler.com.br/wp-content/uploads/2015/08/curso-de-sistemas-de-informacao.jpg">
        </el-row>

        <el-row>
            <el-col class="barra-content" :span="24">
                <p style="color:#fff">Curso Superior de Graduação, modalidade presencial | Duração: 6 meses | Período: Manhã</p>
            </el-col>
        </el-row>

        <el-row style="margin-top: 10vh;margin-bottom: 10vh">
            <el-col class="content" :xs="{span:20, offset:2}" :sm="{span:20, offset:2}" :md="{span:20, offset:2}">
                <img class="img-curso" src="http://www.fatectq.edu.br/img/cursos/sistemas-para-internet.jpg?v=20170201">
                                
                <div class="sobre-curso">
                    <h1>Sobre o Curso</h1>
                    <p>O curso de Sistemas para Internet forma um tecnólogo que ocupa- se do desenvolvimento de programas, de interfaces e aplicativos, do comércio e do marketing eletrônicos, além de sítios e portais para internet e intranet. Gerencia projetos de sistemas, inclusive com acesso a banco de dados, desenvolvendo projetos de aplicações para a rede mundial de computadores e integra mídias nos sítios da internet. Atua com tecnologias emergentes como computação móvel, redes sem fio e sistemas distribuídos. Cuidar da implantação, atualização, manutenção e segurança dos sistemas para internet também são suas atribuições.</p>
                    <p>Para mais informações, acessa a <a>Matriz Curricular</a> e os <a>Planos de Ensino</a> do curso.</p>
                </div>
            
            </el-col>
        </el-row>

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
    import AppApoio from '../../layouts/Apoio.vue';
    import AppFooter from '../../layouts/Footer.vue';

    export default {
        components: {
            AppTopo, AppApoio, AppFooter
        }
    }

</script>

<style>
    .baner-curso {
        height:94vh;
        overflow:hidden;
    }

    .img-baner {
        width: 100%;
        height: 100%;
        
    }

    .barra-content {
       height: 6vh;
       overflow:hidden;
       background-color: #00a0e6;
       line-height: 6vh;
       display: flex;
       flex-flow: row wrap;
       justify-content: center;
    }

    #titulo-carrocel {
        height: 10vh;
        line-height: 10vh;
        font-size: 1.5em;
        margin-top: -5px;
    }

    .contener-titulo-curso {
        background-color: #00a0e6;
        height: 30vh;
        width: 60vh;
        top: 37vh;
        right: 0;
        float: right;
        position: absolute;
    }

    .text-titulo {
        color: #fff;
        margin-left: 5vh;
        margin-top: 5vh;
        width: 45vh;
    }

    .text-titulo #titulo-dois {
        font-size: 2em;
        font-weight: bold
    }

    .content {
        display: flex;
        
    }

    .img-curso {
        width: 60vh;
        height: 45vh;
    }

    .sobre-curso {
        margin-left: 5vh;
    }

    .sobre-curso h1 {
        color: #00a0e6;
    }

    .sobre-curso p {
        margin-top: 3vh;
        text-align: justify;
    }

    .sobre-curso a {
        color: #00a0e6;
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