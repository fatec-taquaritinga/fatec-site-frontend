<template>
    <el-row class="corpo-doc">
    
        <el-col class="header" :span="24">
            <h1>Corpo Docente</h1>
            <p>Conheça os professores desse curso.</p>
        </el-col>

        <el-col class="box-prof" :xs="{span:22, offset:1}" :sm="{span:20, offset:2}">
            
            <div class="content-prof">
                <img class="img-prof" src="http://arquivos.biblioceeteps.com.br/p/erick.petrucelli.jpg?v=20170302125042&h=90">

                <h4>Erick Eduardo Petrucelli</h4>
                <ul class="formacao">
                    <li><b>Coordenador do Curso</b></li>
                    <li>Mestre em Engenharia de Produçao</li>
                </ul>

                <p class="p">
                    <div class="icone-link"><i class="material-icons">email</i><a>erick.petrucelli@fatectq.edu.br</a></div>
                    <div class="icone-link"><i class="material-icons">info</i><a>Acessar currículo Lattes</a></div>
                </p>
                <div class="p">
                   <span>Disciplinas:</span>
                   <ul class="disciplinas">
                        <li>Programação para Sítios de Internet</li>
                        <li>Tópicos Especiais I</li>
                        <li>Tópicos Especiais II</li>
                   </ul>
                </div>
            </div>


            <div class="content-prof">
                <img class="img-prof" src="http://arquivos.biblioceeteps.com.br/p/fabio.takeda.jpg?v=20121213182944&h=90">

                <h4>Fábio Bento Takeda</h4>
                <ul class="formacao">
                    <li>Mestre em Ciência da Computação</li>
                    <li>Professor de Ensino Superior II - A</li>
                </ul>
                <p class="p">
                    <div class="icone-link"><i class="material-icons">email</i><a>jederson.zuchi@fatectq.edu.br</a></div>
                    <div class="icone-link"><i class="material-icons">info</i><a>Acessar currículo Lattes</a></div>
                </p>
                <div class="p">
                   <span>Disciplinas:</span>
                   <ul class="disciplinas">
                        <li>Algoritmos e Lógica de Programação</li>
                        <li>Banco de Dados e Internet I</li>
                        <li>Desenvolvimento para Servidores I</li>
                   </ul>
                </div>
            </div>

            <div class="content-prof">
                <img class="img-prof" src="http://arquivos.biblioceeteps.com.br/p/jederson.zuchi.jpg?v=20170302125042&h=90">

                <h4>Jederson Donizete Zuchi</h4>
                    <ul class="formacao">
                        <li>Mestre em Engenharia de Produção</li>
                        <li>Professor de Ensino Superior I - A </li>
                    </ul>

                <p class="p">
                    <div class="icone-link"><i class="material-icons">email</i><a>fabio.takeda@fatectq.edu.br</a></div>
                    <div class="icone-link"><i class="material-icons">info</i><a>Acessar currículo Lattes</a></div>
                </p>
                <div class="p">
                   <span>Disciplinas:</span>
                   <ul class="disciplinas">
                        <li>Estruturas de Dados</li>
                        <li>Trabalho de Graduação em Sistemas para Internet</li>
                   </ul>
                </div>
            </div>

        </el-col>

    </el-row>
</template>

<script>
</script>

<style>
   

    .corpo-doc {       
        background-color: #eee;         
        font-size: 1em;      
    }

    .header {
        text-align: center;
        margin-top: 3%;
    }

    .header h1 {
        color: #00a0e6;
    }

    .box-prof {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        margin-top: 60px;
    }
    
    .content-prof {
        width: 100%;
        background-color: #fff;
        text-align: center;
        border-radius:4px;        
        margin-bottom: 60px;
    }

    .img-prof{
        width:90px;
        height:90px;
        border-radius:50%;
        display:block;
        margin:auto;
        border:3px solid #eee;
        margin-top:-50px;
    }

    .p {
        margin-bottom: 10px;
        display: block;
    }

    .icone-link {
        height: 40px;
        display: block;
        color: #00a0e6;
    }
    
    .icone-link a {
        top: -5px;
        position: relative;
    }

    .material-icons {
        margin-top: 10px;
    }

    ul {
        list-style: none;
        width: 90%;
    }

    .disciplinas li {
        background-color: #3a5461;
        color: #fff;
        border-radius: 3px;
        margin-bottom: 2px;
    }

    @media screen and (min-width:320px) { 
        
    }

    @media screen and (min-width:480px) { 
        .corpo-doc {               
            font-size: 1.1em;           
        }

        .content-prof {
            width: 80%;
        }

        .box-prof {       
            justify-content: center;
       
        }
    }

    @media screen and (min-width:600px) { 
        
    }

    @media screen and (min-width:768px) {
        .box-prof {
            justify-content: space-around;
        }
        .content-prof {
            width: 49%;
        }
    }

    @media screen and (min-width:768px) {
        .content-prof {
            width: 32%;
        }
    }
</style>