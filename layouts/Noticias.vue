<template>
    <el-row>
        <el-col id="noticias" :xs="24" :md="24">
            <h1>Notícias Recentes</h1>
            <p>Fique por dentro do que acontece na Fatec</p>

            <div id="content-noticias">
                <link-noticia texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit!" img="http://www.ingaia.com.br/wp-content/uploads/2017/01/tecnologia-os-5-beneficios-da-computacao-em-nuvem-para-as-imobiliarias-1.jpeg" ></link-noticia>
                <link-noticia texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit!" img="http://www.ingaia.com.br/wp-content/uploads/2017/01/tecnologia-os-5-beneficios-da-computacao-em-nuvem-para-as-imobiliarias-1.jpeg" ></link-noticia>
                <link-noticia texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit!" img="http://www.ingaia.com.br/wp-content/uploads/2017/01/tecnologia-os-5-beneficios-da-computacao-em-nuvem-para-as-imobiliarias-1.jpeg" ></link-noticia>
                <link-noticia texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit!" img="http://www.ingaia.com.br/wp-content/uploads/2017/01/tecnologia-os-5-beneficios-da-computacao-em-nuvem-para-as-imobiliarias-1.jpeg" ></link-noticia>
                <link-noticia texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit!" img="http://www.ingaia.com.br/wp-content/uploads/2017/01/tecnologia-os-5-beneficios-da-computacao-em-nuvem-para-as-imobiliarias-1.jpeg" ></link-noticia>
                <link-noticia texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit!" img="http://www.ingaia.com.br/wp-content/uploads/2017/01/tecnologia-os-5-beneficios-da-computacao-em-nuvem-para-as-imobiliarias-1.jpeg" ></link-noticia>
                <link-noticia texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit!" img="http://www.ingaia.com.br/wp-content/uploads/2017/01/tecnologia-os-5-beneficios-da-computacao-em-nuvem-para-as-imobiliarias-1.jpeg" ></link-noticia>
                <link-noticia texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit!" img="http://www.ingaia.com.br/wp-content/uploads/2017/01/tecnologia-os-5-beneficios-da-computacao-em-nuvem-para-as-imobiliarias-1.jpeg" ></link-noticia>
            </div>

        </el-col>
    </el-row>
</template>

<script>
    import linkNoticia from '../components/Link-noticia.vue'

    export default {
        components:{linkNoticia}
    }
</script>

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
        width:82%;
        min-height:300px;
        margin:auto;
    }

    @media screen and (min-width: 768px)
    {
        #content-noticias{
            display:flex;
            flex-wrap:wrap;
            justify-content:space-between;
        }
    }

    @media screen and (min-width: 992px)
    {
        #content-noticias{
            width:82%;
            justify-content:flex-start;
        }
    }


</style>