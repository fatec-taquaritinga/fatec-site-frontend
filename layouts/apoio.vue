<template>
    <el-col id="apoio" :xs="24">
        <h1>Empresas apoiadoras</h1>
        <p>Conheça empresas que apoiam Fatec Taquaritinga</p>

        <!--( carrossel de imagens de parceiros )-->
        <div style="margin-top:40px;width:80%;height:80px;margin:auto;background:#fff;"></div>

        <div id="depoimentos">

            <div class="depo">
                <div class="depo-txt">
                    <p>"A fatec Taquaritinga me ajudou a construir um futuro.Sou formado em sistemas para internet e consegui muitas oportunidades."</p>
                    <p><strong>Nome do camarada</strong></p>
                    <p>Informações adicionais</p>
                </div>
                <img src="http://www.fatectq.edu.br/img/cursos/sistemas-para-internet.jpg?v=20170201" >
            </div>

            <div class="depo">
                <div class="depo-txt">
                    <p>"A fatec Taquaritinga me ajudou a construir um futuro.Sou formado em sistemas para internet e consegui muitas oportunidades."</p>
                    <p><strong>Nome do camarada</strong></p>
                    <p>Informações adicionais</p>
                </div>
                <img src="http://www.fatectq.edu.br/img/cursos/sistemas-para-internet.jpg?v=20170201" >
            </div>

            <div class="depo">
                <div class="depo-txt">
                    <p>"A fatec Taquaritinga me ajudou a construir um futuro.Sou formado em sistemas para internet e consegui muitas oportunidades."</p>
                    <p><strong>Nome do camarada</strong></p>
                    <p>Informações adicionais</p>
                </div>
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
        margin-top:50px;
    }

    #apoio h1{
        text-align:Center;
        color:#3a5461;
        font-size:2.5em;
    }

    #apoio h1+p{
        text-align:Center;
        color:#3a5461;
        font-size:1.2em;
        margin-bottom:40px;
    }

    #depoimentos{
        padding-top:80px;
        width:80%;
        margin:auto;
        margin-bottom:100px;
    }

    .depo{
        margin-bottom:60px;
        background-color:#fff;
        border-radius:8px;
        height:200px;
        padding-top:3%;
        padding-left:3%;
        padding-right:3%;
    }

    .depo-txt{
        height:82%;
        color:gray;
        padding:2%;
    }

    .depo-txt p{
        text-align:justify; 
        font-size:1em;
    }
    .depo-txt p+p{
        margin-top:5px; 
        text-align:center; 
    }
    .depo-txt p:last-child{
        margin-bottom:5px; 
        text-align:center;  
    }

    .depo img{
        width:90px;
        height:90px;
        border-radius:50%;
        display:block;
        margin:auto;
        border:3px solid #eee;
        margin-bottom:-50px;
    }


    @media screen and (min-width: 480px){
        .depo-txt p{
            font-size:1.2em;
        }
    }

    @media screen and (min-width: 768px)
    {
        .depo-txt p{
            font-size:1.3em;
        }
        #depoimentos{
            width:82%;
        }
    }

    @media screen and (min-width: 992px)
    {
        #depoimentos{
            display:flex;
            justify-content:space-between;
        }
        .depo{
            width:32.5%;
            height:280px;
            margin-bottom:0;
            padding-top:2%;
            padding-left:2%;
            padding-right:2%;
        }
        .depo-txt p{
            font-size:1.2em;
        }
    }

    @media screen and (min-width: 1200px)
    {
        .depo-txt{
            height:75%;
        }
        .depo-txt p{
            font-size:1em;
        }
        .depo{
            height:190px;
        }
    }
</style>