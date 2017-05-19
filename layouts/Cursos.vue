<template>
    <div style="margin:auto;width:80%;padding-top:30px;">
        <h1 style="text-align:center;margin-bottom:70px;">CURSOS FATEC TAQUARITINGA</h1>

        <div class="box-row">
            <div class="box-father">
                <div class="box-child">
                    <img src="../assets/cursos/agronegocio.jpg" alt="">
                    <strong>Agronegócio</strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellendus architecto aliquid, quas cumque aspernatur perspiciatis porro unde alias sit nulla.</p>
                </div>
            </div>
            
            <div class="box-father">
                <div class="box-child">
                    <img src="../assets/cursos/analise-e-desenvolvimento-de-sistemas.jpg" alt="Análise e desenvolvimento de sistemas">
                    <strong>Análise e desenvolvimento de sistemas</strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellendus architecto aliquid, quas cumque aspernatur perspiciatis porro unde alias sit nulla.</p>
                </div>
            </div>
            
            <div class="box-father no-border">
                <div class="box-child">
                    <img src="../assets/cursos/gestao-da-producao-industrial.jpg" alt="">
                    <strong>Gestao da produção industrial</strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellendus architecto aliquid, quas cumque aspernatur perspiciatis porro unde alias sit nulla.</p>
                </div>
            </div>
        </div>

        <div class="box-row">
            <div class="box-father">
                <div class="box-child no-border">
                    <img src="../assets/cursos/gestao-empresarial.jpg" alt="Gestão empresarial">
                    <strong>Gestão empresarial</strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellendus architecto aliquid, quas cumque aspernatur perspiciatis porro unde alias sit nulla.</p>                </div>
            </div>
            
            <div class="box-father">
                <div class="box-child no-border">
                    <img src="../assets/cursos/producao-industrial.jpg" alt="Produção industrial">
                    <strong>Produção industrial</strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellendus architecto aliquid, quas cumque aspernatur perspiciatis porro unde alias sit nulla.</p>
                </div>
            </div>
            
            <div class="box-father no-border">
                <div class="box-child no-border">
                    <img src="../assets/cursos/sistemas-para-internet.jpg" alt="Sistemas para internet">
                    <strong>Sistemas para internet</strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellendus architecto aliquid, quas cumque aspernatur perspiciatis porro unde alias sit nulla.</p>
                </div>
            </div>
        </div>
    </div>
</template>


<style>
    strong{text-align:center;display:block;margin-bottom:20px;margin-top:20px;}
    strong + p {text-align:justify;}

    .box-row{
        margin-top:20px;
        width:100%;
        display:flex;
    }

    .box-father{
        width:33.3%;
        height:380px;
        border-right:1px solid #ccc;
    }

    .box-child{
        margin:auto;
        width:90%;
        height:390px;
        border-bottom:1px solid #ccc;
    }

    .box-child img{
        width:100px;
        height:90px;
        display:block;
        margin:auto;
        border-radius:50%;
    }

    .no-border{
        border:none;
    }

    /* MD */
    @media screen and (min-width: 992px)
    {
        .box-father{
            height:280px;
        }

        .box-child{
            height:290px;
        }
    }
</style>