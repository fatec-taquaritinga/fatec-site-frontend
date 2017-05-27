<template>
    <el-row>
        <el-col id="noticias" :xs="24" :md="24">
            <h1>Notícias Recentes</h1>
            <p>Fique por dentro do que acontece na Fatec</p>

            <div id="content-noticias">

                <div class="item-noticia">
                    <img src="http://vestibular.mundoeducacao.bol.uol.com.br/upload/vestibular/resultado-enem-traz-muitas-duvidas-5682dca497576.jpg" >
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div class="item-noticia">
                    <img src="http://vestibular.mundoeducacao.bol.uol.com.br/upload/vestibular/resultado-enem-traz-muitas-duvidas-5682dca497576.jpg" >
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div class="item-noticia">
                    <img src="http://vestibular.mundoeducacao.bol.uol.com.br/upload/vestibular/resultado-enem-traz-muitas-duvidas-5682dca497576.jpg" >
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div class="item-noticia">
                    <img src="http://vestibular.mundoeducacao.bol.uol.com.br/upload/vestibular/resultado-enem-traz-muitas-duvidas-5682dca497576.jpg" >
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div class="item-noticia">
                    <img src="http://vestibular.mundoeducacao.bol.uol.com.br/upload/vestibular/resultado-enem-traz-muitas-duvidas-5682dca497576.jpg" >
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
}

#content-noticias{
    width:90%;
    min-height:300px;
    margin:auto;
}

.item-noticia{
    width:100%;
    float:left;
    margin-bottom:30px;
}

.item-noticia img{
    width:90%;
    border-radius:4px;
}

.item-noticia p{
    font-size:1em !important;
}


/* MD */
@media screen and (min-width: 768px)
{
    .item-noticia{
        width:50%;
    }
}

/* LG */
@media screen and (min-width: 992px)
{
    .item-noticia{
        width:25%;
    }
}
</style>