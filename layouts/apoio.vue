<template>
    <el-col id="apoio" :xs="24">
        <h1>Empresas apoiadoras</h1>
        <p>Conheça empresas que apoiam Fatec Taquaritinga</p>

        <!--( carrossel de imagens de parceiros )-->
        <div style="margin-top:40px;width:80%;height:80px;margin:auto;background:#fff;"></div>

        <div id="depoimentos">
            <div class="depo">
                <p>"A fatec Taquaritinga me ajudou a construir um futuro.Sou formado em sistemas para internet e consegui muitas oportunidades."</p>
                <p><strong>Nome do camarada</strong></p>
                <p>Informações adicionais</p>
                <img src="http://www.fatectq.edu.br/img/cursos/sistemas-para-internet.jpg?v=20170201" >
            </div>

            <div class="depo">
                <p>"A fatec Taquaritinga me ajudou a construir um futuro.Sou formado em sistemas para internet e consegui muitas oportunidades."</p>
                <p><strong>Nome do camarada</strong></p>
                <p>Informações adicionais</p>
                <img src="http://www.fatectq.edu.br/img/cursos/gestao-empresarial.jpg" >
            </div>

            <div class="depo">
                <p>"A fatec Taquaritinga me ajudou a construir um futuro.Sou formado em sistemas para internet e consegui muitas oportunidades."</p>
                <p><strong>Nome do camarada</strong></p>
                <p>Informações adicionais</p>
                <img src="http://www.fatectq.edu.br/img/cursos/sistemas-para-internet.jpg?v=20170201" >
            </div>
        </div>

    </el-col>
</template>


<style>
    #apoio{
        background-color:#f5f5f5;
        min-height:300px;
        padding-top:50px;
    }

    #apoio h1{
        text-align:Center;
        color:#3a5461;
        font-size:2.5em;
    }

    #apoio p{
        text-align:Center;
        color:#3a5461;
        font-size:1.2em;
    }

    #depoimentos{
        padding-top:80px;
        width:80%;
        min-height:80px;
        margin:auto;
        margin-bottom:150px;
    }

    .depo{
        margin-bottom:60px;
        background-color:#fff;
        padding:2%;
        border-radius:5px;
        text-align:center;
    }

    .depo p{
        text-align:justify;
        color:#ccc;
        font-size:.4em;
    }

    .depo p:first-child{
        margin-bottom:20px;
    }

    .depo img{
        width:90px;
        height:90px;
        border-radius:50%;
        display:block;
        margin:auto;
        border:3px solid #eee;
        margin-top:20px;
        margin-bottom:-50px;
    }


    @media screen and (min-width: 992px)
    {
        #depoimentos{
            display:flex;
            justify-content:space-between;
        }
        .depo{
            width:31%;
        }
    }
</style>