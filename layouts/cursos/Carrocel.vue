<template>
    <el-row class="galeria-curso">
            <el-col class="titulos" :lg="{span:20, offset:2}">
                <h1>Estrutura Física</h1>
                <p>Salas e Laboratórios na Fatec Taquaritinga.</p>
            </el-col>
            <el-col>
                <img id="img-carrocel" src="../../assets/cursos/carrocel.jpg">
                <el-row>
                    <el-col id="titulo-carrocel" class="barra-content" :span="24">
                        <p style="color:#fff">Laboratório de Informática 1</p>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
</template>

<style>
    
    #titulo-carrocel {
        height: 10vh;
        line-height: 10vh;
        font-size: 1.5em;
        margin-top: -5px;
    }

    #img-carrocel {
        width: 100%;
        margin-top: 5vh;
    }

    .titulos {
        text-align: center;
    }

    .titulos h1 {
        color: #00a0e6;
        font-size: 2.5em;
    }

</style>