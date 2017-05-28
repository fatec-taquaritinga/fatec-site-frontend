<template>
    <el-row >

        <el-col id="parentLogo" :xs="{span:7, offset:1}" :sm="{span:4, offset:1}" :md="{span:3, offset:2}">
            <img src="../assets/logos/logo.svg" />
        </el-col>
        
        <el-col id="menu-inf"  :sm="{span:11, offset:1}" >
           <div class="active" :style="{opacity:opacidade, width:largura,left:distancia}" ></div>

           <el-popover ref="popover1" placement="bottom" width="265" trigger="hover">
                <span class="link-popover sub-divisao-pop">Quem somos</span>
                <span class="link-popover">Sobre a Fatec</span>
                <span class="link-popover">Regimento e Regulamento</span>
                <span class="link-popover">Concursos</span>
                <span class="link-popover">WebSAI</span>
                <span class="link-popover  sub-divisao-pop">Departamentos</span>
                <span class="link-popover">Direção</span>
                <span class="link-popover">Coordenação de Cursos</span>
                <span class="link-popover">Diretoria de Serviços Acadêmicos</span>
                <span class="link-popover">Diretoria de Serviços Administrativos</span>
                <span class="link-popover">Coord. de Laboratórios de Informática</span>
                <span class="link-popover">Coord. de Laboratórios de Produção</span>
                <span class="link-popover">Biblioteca</span>
                <span class="link-popover">Horários de funcionamento</span>
                <span class="link-popover">Fale conosco</span>
           </el-popover>
           <span @mouseenter="animateActive" @mouseout="hideActive" v-popover:popover1>Institucional</span>


           <el-popover ref="popover2" placement="bottom" width="265" trigger="hover" content="Cursos">
                <span class="link-popover sub-divisao-pop">Graduação presencial</span>
                <span class="link-popover">Agronegócio</span>
                <span class="link-popover">Análise e Desenvolvimento de Sistemas</span>
                <span class="link-popover">Produção Industrial</span>
                <span class="link-popover">Sistemas para Internet</span>
                <span class="link-popover sub-divisao-pop">Graduação à distância (EAD)</span>
                <span class="link-popover">Gestão Empresarial</span>
                <span class="link-popover sub-divisao-pop">Pós-graduação</span>
                <span class="link-popover">Especialização em Gestão da Produção Industrial</span>
                <span class="link-popover sub-divisao-pop">Extensão Tecnológica</span>
                <span class="link-popover"> Extensão Tecnológica</span>
           </el-popover>
           <span @mouseenter="animateActive" @mouseout="hideActive" v-popover:popover2>Cursos</span>



           <el-popover ref="popover3" placement="bottom" width="265" trigger="hover">
                <span class="link-popover sub-divisao-pop">Publicações</span>
                <span class="link-popover">Revista interface Tecnológica</span>
                <span class="link-popover">Transparência</span>
                <span class="link-popover">Grupos de estudo e pesquisa</span>
                <span class="link-popover sub-divisao-pop">Empresa Junior</span>
                <span class="link-popover">Sobre a Empresa Júnior</span>
                <span class="link-popover sub-divisao-pop">Pós-graduação</span>
                <span class="link-popover">Gestão Empresarial</span>
                <span class="link-popover sub-divisao-pop">Informações Gerais</span>
                <span class="link-popover">Diretório acadêmico</span>
                <span class="link-popover">Extensão Tecnológica</span>
                <span class="link-popover">Calendário Letivo</span>
                <span class="link-popover">Horários de aulas</span>
                <span class="link-popover">Horários de monitoria</span>
                <span class="link-popover">Mapa das salas de aula</span>
                <span class="link-popover">Identidade visual</span>
           </el-popover>
           <span @mouseenter="animateActive" @mouseout="hideActive" v-popover:popover3>Área acadêmica</span>



           <el-popover ref="popover3" placement="bottom" width="265" trigger="hover">
                <span class="link-popover">Inscrições</span>
                <span class="link-popover">Provas e gabaritos</span>
                <span class="link-popover">Guia de profissões tecnológicas</span>
           </el-popover>
           <span @mouseenter="animateActive" @mouseout="hideActive" v-popover:popover3>Vestibular</span>

           <span @mouseenter="animateActive" @mouseout="hideActive" >Concursos</span>
        </el-col>

        <el-col id="logomarcas" :sm="5">
            <img src="../assets/logos/cps.svg" />
            <img src="../assets/logos/gov.svg" />
        </el-col>

        <el-col id="menu-mobile" :xs="{span:5, offset:10}" :sm="{span:5, offset:14}">
            <i class="material-icons">menu</i>
        </el-col>

    </el-row>
</template>

<script>
  export default {
    data(){
        return{
            menuAtivo:false,
            opacidade:'0',
            largura:'0px',
            distancia:'0'
        }
    },

    methods: {
        animateActive(e){
            let position = e.currentTarget.offsetLeft
            let largura  = e.currentTarget.offsetWidth
            if(!this.menuAtivo)this.opacidade='1'
            this.distancia=position+'px'
            this.largura=largura+'px'
            this.menuAtivo = !this.menuAtivo
        },

        hideActive(){
            this.opacidade='0'
            this.menuAtivo = !this.menuAtivo
        }
    }
  }
</script>


<style>
.link-popover{display:block;font-size:1.2em;cursor:pointer;line-height:20px;color:#4A555C;padding:1%;padding-left:5%;}
.link-popover:hover{background-color:#b01116;color:#fff;}
.sub-divisao-pop{color:#b01116;pointer-events:none;margin-top:15px;}

.el-popover{padding:0;border:none;}

.active{bottom:0;border-top:3px solid #b01116;width:110px;z-index:2;position:absolute;transition:150ms ease-in-out;opacity:0;}
#parentLogo{height:10vh;display:flex;align-items:center;}
#parentLogo img{width:95%;height:75%;max-height:80%;}

#menu-inf{display:none;height:10vh;margin-top:2vh;font-size:.9em;color:#4A555C;}
#menu-inf span{z-index:3;padding-left:2%;padding-right:2%;cursor:pointer;padding-top:2vh;text-align:center;}
#menu-inf span:hover{color:#b01116;transition:1s;}

#menu-mobile{height:10vh;display:flex;align-items:center;justify-content:space-around;}
#menu-mobile i{padding:3%;font-size:2.3em;color:#b01116;cursor:pointer;}

#logomarcas{display:none;height:10vh;margin-top:1vh;}
#logomarcas img:first-child{width:20%;margin-right:2%;}
#logomarcas img:last-child{width:45%;margin-left:2%;}


/* SM */
@media screen and (min-width: 768px){}

/* MD */
@media screen and (min-width: 992px)
{
    #parentLogo{height:12vh;}
    #menu-inf{display:flex;}
    #logomarcas{display:flex;justify-content:flex-end;}
    #menu-mobile{display:none;}
    #menu-inf span{font-size:1em;}
}


</style>