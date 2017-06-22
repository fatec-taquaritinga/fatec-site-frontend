<template>
    <el-row>
        <el-col id="titulo-cursos" :xs="{span:20, offset:2}"  >
            <h1>Nossos Cursos</h1>
            <p>Estude em uma faculdade pública, que tem credibilidade de mercado.</p>
            <p>Na Fatec Taquaritinga você não paga mensalidade.</p>
            <p>Escolhe entre nossos 5 cursos superiores presenciais, 1 curso a distância e 1 pós-graduação.</p>
        </el-col>

        <el-col id="cursos" :xs="{span:20, offset:2}" :sm="{span:20, offset:2}" :md="{span:20, offset:2}"  >
            
            <div class="cards" :body-style="{padding:0}">
                <img src="../assets/cursos/cards.png" class="image" />
                <div class="info-curso" >
                    <h1 style="color:#2bb673;">Agronegócio</h1>
                    <h2><strong>Período:</strong> Tarde ou noite</h2>
                    <div class="btn-curso" style="background-color:#2bb673;">Saiba Mais...</div>
                </div>
            </div>

            <div class="cards" :body-style="{padding:0}">
                <img src="../assets/cursos/cards.png" class="image" />
                <div class="info-curso" >
                    <h1 style="color:#2e3192;">Análise e desenvolvimento de sistemas</h1>
                    <h2><strong>Período:</strong> Tarde ou noite</h2>
                    <div class="btn-curso" style="background-color:#2e3192;">Saiba Mais...</div>
                </div>
            </div>

            <div class="cards" :body-style="{padding:0}">
                <img src="../assets/cursos/cards.png" class="image" />
                <div class="info-curso" >
                    <h1 style="color:#ed1c24;">Produção Industrial</h1>
                    <h2><strong>Período:</strong> Tarde ou noite</h2>
                    <div class="btn-curso" style="background-color:#ed1c24;">Saiba Mais...</div>
                </div>
            </div>

            <div class="cards" :body-style="{padding:0}">
                <img src="../assets/cursos/cards.png" class="image" />
                <div class="info-curso" >
                    <h1 style="color:#00aeef;">Sistemas para internet</h1>
                    <h2><strong>Período:</strong> Tarde ou noite</h2>
                    <div class="btn-curso" style="background-color:#00aeef;">Saiba Mais...</div>
                </div>
            </div>

            <div class="cards" :body-style="{padding:0}">
                <img src="../assets/cursos/cards.png" class="image" />
                <div class="info-curso" >
                    <h1 style="color:#00a79d;">Gestão Empresarial (EaD)</h1>
                    <h2><strong>Período:</strong> Tarde ou noite</h2>
                    <div class="btn-curso" style="background-color:#00a79d;">Saiba Mais...</div>
                </div>
            </div>

            <div class="cards" :body-style="{padding:0}">
                <img src="../assets/cursos/cards.png" class="image" />
                <div class="info-curso" >
                    <h1 style="color:#a70000;">Gestão da Produção Industrial</h1>
                    <h2><strong>Período:</strong> Tarde ou noite</h2>
                    <div class="btn-curso" style="background-color:#a70000;" >Saiba Mais...</div>
                </div>
            </div>
            
        </el-col>
    </el-row>
</template>


<style>
    .cards{
        margin:auto;
        margin-bottom:20px;
        max-width:500px;
        border-radius:7px;
        border:1px solid #eee;
        box-shadow: 5px 5px 5px #eee;
        overflow:hidden;
    }

    .image{
        max-width:100%;
        max-height:400px;
        width: auto;
        height: auto;
    }

    .info-curso h1{
        text-align:center;
        font-size:1.2em;
        color:#2bb673;
        height:45px;
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
    .cards{
        width:48%;
        max-height:400px;
    }
    #cursos{
        display:flex;
        flex-wrap:wrap;
    }
}


@media screen and (min-width: 992px)
{
    .cards{
        width:32%;
        margin-bottom:16px;
    }

}
</style>