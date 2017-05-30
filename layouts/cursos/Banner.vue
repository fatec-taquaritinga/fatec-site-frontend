<template>
    <el-row>
        <el-col class="banner" :span="24">
            <img class="img-banner" src="http://blog.portalpravaler.com.br/wp-content/uploads/2015/08/curso-de-sistemas-de-informacao.jpg">
            <div class="box-titulo">
                <p class="antes-titulo">Curso superior de Tecnologia em</p>
                <p class="titulo">Sistemas para Internet</p>
            </div>
            <div class="barra-banner">
                <p>Curso Superior de Graduação, modalidade presencial | Duração: 6 meses | Período: Manhã</p>
            </div>
        </el-col>
    </el-row>        
</template>

<script>

</script>

<style>

    .banner {
        height: 100%;
        overflow: hidden;
        font-size: 0.7em;
    }

    .img-banner {
        width: 100%;       
    }

    .barra-banner {
        margin-top: -4px;
        width: 100%;
        height: 8%;
        background-color: #00a0e6;
        color: #fff;
        text-align: center;
        display: block;
        padding: 1%;
    }

    .box-titulo {
        background-color: #00a0e6;
        top: 47%;
        right: 0;
        float: right;
        position: absolute;
        color: #fff;
        padding: 1%;
        font-size: 1em;
    }

    .titulo {
        font-size: 1.5em;
        font-weight: bold;
    }

    @media screen and (min-width:320px) { 
        .box-titulo {
            height: 30%;
            top: 39%;
            padding-top: 5%;
        }
        
    }

    @media screen and (min-width:480px) { 
        .banner { font-size: 0.9em; }
        .box-titulo { padding-top: 6.5%; }
    }

    @media screen and (min-width:600px) {
        .titulo { font-size: 2.6em; } 
        .box-titulo { 
            width: 50%;
            padding-top: 5vh;
            padding-left: 5vh;
            height: 35%;
            top: 35%;
        }
    }

    @media screen and (min-width:768px) {
        .banner { height: 100vh; }
        .img-banner { height: 94vh; }
        .box-titulo { width: 40%; }
        .antes-titulo { font-size: 1.3em; }
        .titulo { font-size: 2.8em; }
        .barra-banner {
            height: 6vh;
            font-size: 1.2em;
            padding: 5px;
        }         
    }

    @media screen and (min-width:992px) {
        .box-titulo { width: 35%; }
        .titulo { font-size: 3em; }
    }

    @media screen and (min-width:1266px) {
        .box-titulo { width: 40%; }
        .titulo { font-size: 3.7em; }
    }

    
    
</style>