<template>
    <el-row>
        <el-col id="apoio" :xs="24">
            <h1>Empresas apoiadoras</h1>
            <p>Conheça empresas que apoiam Fatec Taquaritinga</p>

            <carrossel-parceiros></carrossel-parceiros>

            <div id="depoimentos">

                <app-depoimento 
                    texto='"A fatec Taquaritinga me ajudou a construir um futuro.Sou formado em sistemas para internet e consegui muitas oportunidades."' 
                    nome="Nome do camarada" 
                    info="Informações adicionais" 
                    img="http://www.ingaia.com.br/wp-content/uploads/2017/01/tecnologia-os-5-beneficios-da-computacao-em-nuvem-para-as-imobiliarias-1.jpeg" 
                ></app-depoimento>

                <app-depoimento 
                    texto='"A fatec Taquaritinga me ajudou a construir um futuro.Sou formado em sistemas para internet e consegui muitas oportunidades."' 
                    nome="Nome do camarada" 
                    info="Informações adicionais" 
                    img="http://www.ingaia.com.br/wp-content/uploads/2017/01/tecnologia-os-5-beneficios-da-computacao-em-nuvem-para-as-imobiliarias-1.jpeg" 
                ></app-depoimento>

                <app-depoimento 
                    texto='"A fatec Taquaritinga me ajudou a construir um futuro.Sou formado em sistemas para internet e consegui muitas oportunidades."' 
                    nome="Nome do camarada" 
                    info="Informações adicionais" 
                    img="http://www.ingaia.com.br/wp-content/uploads/2017/01/tecnologia-os-5-beneficios-da-computacao-em-nuvem-para-as-imobiliarias-1.jpeg" 
                ></app-depoimento>

            </div>

        </el-col>
    </el-row>
</template>

<script>
    import CarrosselParceiros from '../components/Carrossel-parceiros.vue'
    import AppDepoimento from '../components/Depoimento.vue'

    export default {
        components: { CarrosselParceiros, AppDepoimento }
    }
</script>


<style>
    #apoio{
        background-color:#eee;
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
    }
</style>
