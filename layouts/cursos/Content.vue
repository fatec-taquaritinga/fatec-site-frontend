<template>
    <el-row>
        <el-col :spa="24">
            <el-col class="content" :xs="{span:22, offset:1}" :sm="{span:22, offset:1}" :md="{span:20, offset:2}" :lg="{span:20, offset:2}">
                <img class="img-content-curso" src="../../assets/cursos/img-curso.jpg">
                                    
                <div class="sobre-curso">
                    <h1>Sobre o Curso</h1>
                    <p>O curso de Sistemas para Internet forma um tecnólogo que ocupa- se do desenvolvimento de programas, de interfaces e aplicativos, do comércio e do marketing eletrônicos, além de sítios e portais para internet e intranet. Gerencia projetos de sistemas, inclusive com acesso a banco de dados, desenvolvendo projetos de aplicações para a rede mundial de computadores e integra mídias nos sítios da internet. Atua com tecnologias emergentes como computação móvel, redes sem fio e sistemas distribuídos. Cuidar da implantação, atualização, manutenção e segurança dos sistemas para internet também são suas atribuições.</p>
                    
                    <el-button class="button" type="primary">Matriz Curricular</el-button>
                    <el-button class="button" type="primary">Planos de Ensino</el-button>
                    <el-button class="button" type="primary">Ementa</el-button>
                    
                </div>
            </el-col>
        </el-col>
    </el-row>
</template>

<script>

</script>

<style>
    .content {
        font-size: 0.9em;
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        margin-top: 10px;
    }

    .img-content-curso {
        width: 100%;
        height: 60%;
        border-radius: 4px;
        box-shadow: 2px 2px 10px #808080;
    }

    .sobre-curso {
        margin-top: 10px;
    }

    .sobre-curso h1, .sobre-curso a {
        color: #00a0e6;
    }

    .sobre-curso p {
        margin-top: 3vh;
        text-align: justify;
    }
    .sobre-curso > .button {
        margin-left: 3vh;
    }
    .button {
        margin-top: 3vh;
    }

    @media screen and (min-width:480px) { 
        .content { font-size: 1em;
            margin-top: 20px 
        }
    }

    @media screen and (min-width:768px) {
        .sobre-curso { margin-top: 0; }
        .content { display: block;
            margin-top: 30px 
        }

        .img-content-curso {
            width: 45%;
            height: 27%;
            float: left;
            margin-right: 2vh;
            margin-bottom: 2vh;
            border-radius: 8px;
        }        
     }

     @media screen and (min-width:992px) { 
        .content { font-size: 1.1em; }
        .img-content-curso { border-radius: 10px; }        
    }

</style>