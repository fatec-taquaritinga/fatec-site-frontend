<template>
    <el-row>
        <el-col id="titulo-cursos" :xs="{span:20, offset:2}"  >
            <h1>Nossos Cursos</h1>
            <p>Estude em uma faculdade pública, que tem credibilidade de mercado.</p>
            <p>Na Fatec Taquaritinga você não paga mensalidade.</p>
            <p>Escolhe entre nossos 5 cursos superiores presenciais, 1 curso a distância e 1 pós-graduação.</p>
        </el-col>

        <el-col id="cursos" :xs="{span:20, offset:2}" :sm="{span:20, offset:2}" :md="{span:20, offset:2}"  >
            
            <el-card class="cards" :body-style="{padding:0}">
                <img src="http://www.fatectq.edu.br/img/cursos/agronegocio.jpg?v=20170201" class="image" />
                <div class="info-curso" >
                    <h1 style="color:#2bb673;">Agronegócio</h1>
                    <h2><strong>Período:</strong> Tarde ou noite</h2>
                    <div class="btn-curso" style="background-color:#2bb673;">Saiba Mais...</div>
                </div>
            </el-card>

            <el-card class="cards" :body-style="{padding:0}">
                <img src="http://www.fatectq.edu.br/img/cursos/analise-e-desenvolvimento-de-sistemas.jpg?v=20170201" class="image" />
                <div class="info-curso" >
                    <h1 style="color:#2e3192;">Análise e desenvolvimento de sistemas</h1>
                    <h2><strong>Período:</strong> Tarde ou noite</h2>
                    <div class="btn-curso" style="background-color:#2e3192;">Saiba Mais...</div>
                </div>
            </el-card>

            <el-card class="cards" :body-style="{padding:0}">
                <img src="http://www.fatectq.edu.br/img/cursos/producao-industrial.jpg?v=20170201" class="image" />
                <div class="info-curso" >
                    <h1 style="color:#ed1c24;">Produção Industrial</h1>
                    <h2><strong>Período:</strong> Tarde ou noite</h2>
                    <div class="btn-curso" style="background-color:#ed1c24;">Saiba Mais...</div>
                </div>
            </el-card>

            <el-card class="cards" :body-style="{padding:0}">
                <img src="http://www.fatectq.edu.br/img/cursos/sistemas-para-internet.jpg?v=20170201" class="image" />
                <div class="info-curso" >
                    <h1 style="color:#00aeef;">Sistemas para internet</h1>
                    <h2><strong>Período:</strong> Tarde ou noite</h2>
                    <div class="btn-curso" style="background-color:#00aeef;">Saiba Mais...</div>
                </div>
            </el-card>

            <el-card class="cards" :body-style="{padding:0}">
                <img src="http://www.fatectq.edu.br/img/cursos/gestao-empresarial.jpg" class="image" />
                <div class="info-curso" >
                    <h1 style="color:#00a79d;">Gestão Empresarial (EaD)</h1>
                    <h2><strong>Período:</strong> Tarde ou noite</h2>
                    <div class="btn-curso" style="background-color:#00a79d;">Saiba Mais...</div>
                </div>
            </el-card>

            <el-card class="cards" :body-style="{padding:0}">
                <img src="http://www.fatectq.edu.br/img/cursos/gestao-da-producao-industrial.jpg?v=201408131000" class="image" />
                <div class="info-curso" >
                    <h1 style="color:#a70000;">Gestão da Produção Industrial</h1>
                    <h2><strong>Período:</strong> Tarde ou noite</h2>
                    <div class="btn-curso" style="background-color:#a70000;" >Saiba Mais...</div>
                </div>
            </el-card>

            
        </el-col>


    </el-row>
</template>


<style>
    .el-card{
        margin-bottom:20px;
        max-width:400px;
        height:290px;
        border-radius:10px;
    }

    .cards{
        width:100%;
        margin:auto;
        margin-bottom:30px;
    }
    .image{
        width:100%;
        height:170px;
    }

    .info-curso h1{
        text-align:center;
        font-size:1.2em;
        color:#2bb673;
        height:30px;
    }

    .info-curso h2{
        text-align:center;
        color:#58595b;
        font-size:.9em;
        font-weight:normal;
    }

    .btn-curso{
        width:110px;
        color:#fff;
        border-radius:5px;
        margin:auto;
        padding:7px;
        text-align:center;
        margin-bottom:30px;
        margin-top:8px;
        cursor:pointer;
        font-size:.8em;
    }

    .btn-curso:hover{
        opacity:.8;
    }


    #titulo-cursos{
        min-height:200px;
        text-align:center;
        padding-top:30px;
        padding-bottom:30px;
    }

    #titulo-cursos h1{
        color:#b01116;
        font-size:3em;
    }
    #titulo-cursos p{
        color:#4A555C;
        font-size:1.1em;
    }
    




@media screen and (min-width: 758px)
{
    .el-card{
        width:48%;
    }
    #cursos{
        display:flex;
        flex-wrap:wrap;
    }
}


@media screen and (min-width: 992px)
{
    .el-card{
        width:32%;
    }
    .cards{
        margin-bottom:16px;
    }
}
</style>