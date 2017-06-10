<template>
    <el-row>
        <el-col class="box-carousel">
        
            <h1>Estrutura Física</h1>
            <p>Salas e Laboratórios na Fatec Taquaritinga.</p>
        
            <el-carousel class="carousel" trigger="click" arrow="always" height="62vh">
                <el-carousel-item class="carousel-item" v-for="img in images" :key="img">
                    <img :src="img.src" :alt="img.alt"/>
                </el-carousel-item>
            </el-carousel>

            <div class="info-img">
                <p>{{}}</p>
            </div>
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

    .carousel-item img {
        width: 100%;
    }
    
    .info-img {
        height: 6vh;
        background-color: #00a0e6;
        color: #fff;
        line-height: 6vh;
    }

    .el-carousel__button {
        height: 30px;
        border-radius: 50%;
    }
</style>