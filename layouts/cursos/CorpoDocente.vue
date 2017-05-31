<template>
    <el-row class="corpo-doc">

        <el-col class="header" :span="24">
            <h1>Corpo Docente</h1>
            <p>Conheça os professores desse curso.</p>
        </el-col>

        <el-col class="box-prof" :span="20" :offset="2">
            <img class="img-prof" src="http://arquivos.biblioceeteps.com.br/p/erick.petrucelli.jpg?v=20170302125042&h=90">
            <div class="content-prof">
                <h4>Erick Eduardo Petrucelli</h4>
                <p><b>Coordenador do Curso</b> | Mestre em Engenharia de Produçao</p>
                <p><a><i></i>erick.petrucelli@fatectq.edu.br</a>  <a><i></i>Acessar currículo Lattes</a></p>
                <p>Disciplinas: <span>Programação para Sítios de Internet</span> <span>Tópicos Especiais I</span> <span>Tópicos Especiais II</span></p>
            </div>
        </el-col>

    </el-row>
</template>

<script>
</script>

<style>
    .corpo-doc {       
        background-color:#f5f5f5;         
        font-size: 0.9em;           
    }

    .header {
        text-align: center;
        margin-top: 3%;
        margin-bottom: 5%;
    }

    .header h1 {
        color: #00a0e6;
    }

    .box-prof {
        
    }

    .img-prof {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: block;
        margin: auto;
        margin-bottom: -20px;
        border: 1px solid #00a0e6;
    }

    .content-prof {
        background-color: #fff;
        text-align: center;
        font-size: 0.8em;
    }

    .content-prof h4 {
        padding-top: 25px;
        margin-bottom: 5px;
        
    }

    .content-prof b, .content-prof a {
        color: "#00a0e6";
    }
</style>