<template>
    <el-row>
        <el-col class="box-carousel">
        
            <h1>Estrutura Física</h1>
            <p>Salas e Laboratórios na Fatec Taquaritinga.</p>
        
            <el-carousel class="carousel" trigger="click" arrow="always" height="72vh">
                <el-carousel-item class="carousel-item" v-for="img in images" :key="img">
                    <img :src="img.src" :alt="img.alt" class="item-img"/>
                    <p class="info-img">{{img.alt}}</p>
                </el-carousel-item>
            </el-carousel>

            
        </el-col>
    </el-row>
</template>

<script>
    export default {
        data() {
            return {
                images: [
                    {src: 'https://www.uniceub.br/media/62100/09.jpg', alt: 'Laboratório de Informática 01'},
                    {src: 'https://www.fca.unicamp.br/portal/images/Galeria/Lab_Informatica.jpg', alt: 'Laboratório de Informática 02'},
                    {src: 'http://lasalle.edu.br/faculdade/public/media/11/images/20120413_Laboratorio_Informatica.JPG', alt: 'Laboratório de Informática 03'}
                ]
            }
        }
    }
    
</script>

<style>
    .box-carousel {
        background-color: #fff;
        text-align: center;
        font-size: 1em;
    }   

    h1 {
        color: #00a0e6;
        padding-top: 2vh;
    }

    .carousel {
        margin-top: 2vh;
    }   
    
    .item-img {
        width: 100%;
        height: auto;
    }

    .info-img {
        background-color: #00a0e6;
        color: #fff;
        width: 100%;
        height: 6vh;
        line-height: 6vh;
        bottom: 0;
        position: fixed
    }

    .el-carousel__button {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        margin-bottom: 5vh;
    }
</style>