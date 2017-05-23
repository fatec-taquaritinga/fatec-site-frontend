<template>
    <el-row style="margin:auto;padding-top:30px;">
        <h1 style="text-align:center;margin-bottom:70px;">CURSOS FATEC TAQUARITINGA</h1>
        
        
        <el-col :xs="22" :sm="22" :md="20" :lg="20" class="el-col-xs-offset-1 el-col-sm-offset-1 el-col-md-offset-2 el-col-lg-offset-2">
            <div class="box-row">

                <div class="box-father" v-for="curso of cursos">
                    <div class="box-child">
                        <img :src="curso.img" :alt="curso.alt">
                        <strong>{{ curso.nome }}</strong>
                        <p>{{ curso.text }}</p>
                    </div>
                </div>

            </div>
        </el-col>
        
    </el-row>
</template>

<script>
    export default {
        data() {
            return {
                cursos: [
                    {nome: 'Agronegócio', img: require('../assets/cursos/agronegocio.jpg'), alt: '', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellendus architecto aliquid, quas cumque aspernatur perspiciatis porro unde alias sit nulla.'},
                    {nome: 'Análise e desenvolvimento de sistemas', img: require('../assets/cursos/analise-e-desenvolvimento-de-sistemas.jpg'), alt: '', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellendus architecto aliquid, quas cumque aspernatur perspiciatis porro unde alias sit nulla.'},
                    {nome: 'Gestao da produção industrial', img: require('../assets/cursos/gestao-da-producao-industrial.jpg'), alt: '', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellendus architecto aliquid, quas cumque aspernatur perspiciatis porro unde alias sit nulla.'},
                    {nome: 'Gestão empresarial', img: require('../assets/cursos/gestao-empresarial.jpg'), alt: '', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellendus architecto aliquid, quas cumque aspernatur perspiciatis porro unde alias sit nulla.'},
                    {nome: 'Produção industrial', img: require('../assets/cursos/producao-industrial.jpg'), alt: '', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellendus architecto aliquid, quas cumque aspernatur perspiciatis porro unde alias sit nulla.'},
                    {nome: 'Sistemas para internet', img: require('../assets/cursos/sistemas-para-internet.jpg'), alt: '', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellendus architecto aliquid, quas cumque aspernatur perspiciatis porro unde alias sit nulla.'},
                    {nome: 'Sistemas para internet', img: require('../assets/cursos/sistemas-para-internet.jpg'), alt: '', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellendus architecto aliquid, quas cumque aspernatur perspiciatis porro unde alias sit nulla.'}
                    
                ]
            }
        },
        methods: {
            bgEstilizada() {
                const pais = document.querySelectorAll('.box-father')
                const filhos = document.querySelectorAll('.box-child')
                for (let i = 0; i < pais.length; i++) {
                    const elem = pais[i]
                    const irmaoElem = pais[i].nextElementSibling
                    const lastElem = filhos[pais.length - 1]

                    if (!(i === pais.length - 1)) {
                        if (elem.offsetTop === irmaoElem.offsetTop) 
                            irmaoElem.style.borderLeft = '1px solid #ccc'
                    }

                    if (lastElem.offsetTop != filhos[i].offsetTop) 
                        filhos[i].style.borderBottom = '1px solid #ccc'                
                }

                
            }
        },
        mounted() {
            this.bgEstilizada()
        },
        updated() {
            this.bgEstilizada()
            console.log('updated')
        }
    }
</script>

<style>
    strong{text-align:center;display:block;margin-bottom:20px;margin-top:20px;}
    strong + p {text-align:justify;}

    .box-row{
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
    }

    .box-father{
        width:330px;
        height:360px;
        margin-bottom: 20px        
    }

    .box-child{        
        margin:auto;
        width:90%;
        height:370px;
    }

    .box-child img{
        width:100px;
        height:90px;
        display:block;
        margin:auto;
        border-radius:50%;
    }
    
</style>