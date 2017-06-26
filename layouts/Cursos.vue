<template>
    <el-row>
        <el-col id="titulo-cursos" :xs="{span:20, offset:2}"  >
            <h1>Nossos Cursos</h1>
            <p>Estude em uma faculdade pública, que tem credibilidade de mercado.</p>
            <p>Na Fatec Taquaritinga você não paga mensalidade.</p>
            <p>Escolhe entre nossos 5 cursos superiores presenciais, 1 curso a distância e 1 pós-graduação.</p>
        </el-col>

        <el-col id="cursos" :xs="{span:20, offset:2}" :sm="{span:20, offset:2}" :md="{span:20, offset:2}"  >
            
            <cursos-card img="http://www.fumec.br/blog/wp-content/uploads/2016/04/cursos-a-distancia-EAD.jpg" colorDefault="#2BB673" nome="Agronegócio" periodo="Tarde ou Noite" ></cursos-card>
            <cursos-card img="http://www.fumec.br/blog/wp-content/uploads/2016/04/cursos-a-distancia-EAD.jpg" colorDefault="#2E319F" nome="Análise e desenvolvimento de sistemas" periodo="Tarde ou Noite" ></cursos-card>
            <cursos-card img="http://www.fumec.br/blog/wp-content/uploads/2016/04/cursos-a-distancia-EAD.jpg" colorDefault="#ED1C24" nome="Produção Industrial" periodo="Tarde ou Noite" ></cursos-card>
            <cursos-card img="http://www.fumec.br/blog/wp-content/uploads/2016/04/cursos-a-distancia-EAD.jpg" colorDefault="#00BFF5" nome="Sistemas para internet" periodo="Tarde ou Noite" ></cursos-card>
            <cursos-card img="http://www.fumec.br/blog/wp-content/uploads/2016/04/cursos-a-distancia-EAD.jpg" colorDefault="#00A79D" nome="Gestão Empresarial (EaD)" periodo="Tarde ou Noite" ></cursos-card>
            <cursos-card img="http://www.fumec.br/blog/wp-content/uploads/2016/04/cursos-a-distancia-EAD.jpg" colorDefault="#A70000" nome="Gestão da Produção Industrial" periodo="Tarde ou Noite" ></cursos-card>
            
        </el-col>
    </el-row>
</template>

<script>
    import cursosCard from '../components/Card.vue'

    export default {
        components:{cursosCard}
    }
</script>

<style>
    #titulo-cursos{
        min-height:200px;
        text-align:center;
        padding-bottom:30px;
    }

    #titulo-cursos h1{
        color:#b01116;
        font-size:3em;
    }
    #titulo-cursos p{
        color:#4A555C;
        font-size:1.1em;
    }
    
    @media screen and (min-width: 758px)
    {
        #cursos{
            display:flex;
            flex-wrap:wrap;
        }
    }
</style>