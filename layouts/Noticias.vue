<template>
    <el-row>
        <el-col id="noticias" :xs="24" :md="24">
            <h1>Notícias Recentes</h1>
            <p>Fique por dentro do que acontece na Fatec</p>

            <div id="content-noticias">

                <div class="item-noticia">
                    <img src="http://www.ingaia.com.br/wp-content/uploads/2017/01/tecnologia-os-5-beneficios-da-computacao-em-nuvem-para-as-imobiliarias-1.jpeg" >
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div class="item-noticia">
                    <img src="http://www.ingaia.com.br/wp-content/uploads/2017/01/tecnologia-os-5-beneficios-da-computacao-em-nuvem-para-as-imobiliarias-1.jpeg" >
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div class="item-noticia">
                    <img src="http://www.ingaia.com.br/wp-content/uploads/2017/01/tecnologia-os-5-beneficios-da-computacao-em-nuvem-para-as-imobiliarias-1.jpeg" >
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div class="item-noticia">
                    <img src="http://www.ingaia.com.br/wp-content/uploads/2017/01/tecnologia-os-5-beneficios-da-computacao-em-nuvem-para-as-imobiliarias-1.jpeg" >
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div class="item-noticia">
                    <img src="http://www.ingaia.com.br/wp-content/uploads/2017/01/tecnologia-os-5-beneficios-da-computacao-em-nuvem-para-as-imobiliarias-1.jpeg" >
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>

        </el-col>
    </el-row>
</template>


<style>
#noticias{
    text-align:center;
    padding-top:30px;
}

#noticias h1{
    color:#b01116;
    font-size:2.5em;
}

#noticias p{
    color:#4A555C;
    font-size:1.4em;
    margin-bottom:10px;
}

#content-noticias{
    width:84%;
    min-height:300px;
    margin:auto;
}

.item-noticia{
    width:100%;
    margin-bottom:30px;
}

.item-noticia img{
    width:100%;
    max-width:500px;
    height:auto;
    border-radius:4px;
}

.item-noticia p{
    font-size:1em !important;
}


/* MD */
@media screen and (min-width: 768px)
{
    .item-noticia{
        width:48%;
        margin-bottom:0px;
    }

    #content-noticias{
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
    }

}

/* LG */
@media screen and (min-width: 992px)
{
    .item-noticia{
        width:24%;
    }
    #content-noticias{
        width:82%;
    }
}
</style>